---
title: "OrangePi Zero 2W setup"
sidebar_position: 3
slug: /quick-start-hardware/opi-setup
---

Setting up an OrangePi Zero 2W from scratch, ready to run Ambrosia.

## What You'll Need

**Board & kit:**
- OrangePi Zero 2W (1GB model or higher)
- Case with HDMI/USB breakout (e.g. Argon POD Kit) — optional but convenient
- USB-C power supply (5V/3A recommended)

**Sold separately:**
- microSD card — 32GB or larger (SanDisk Ultra works well)
- A computer with a microSD card reader (to flash the OS)

**Network (pick one):**
- **Ethernet (recommended):** USB-C to Ethernet adapter + Ethernet cable, plugged into your router
- **Wi-Fi:** works too, but requires HDMI monitor + USB keyboard for the initial Wi-Fi config since the OrangePi Debian image has no pre-boot config wizard

**Software (on your computer):**
- `p7zip-full` to extract the image archive
- `dd` (built in on Linux/macOS) or [balenaEtcher](https://etcher.balena.io/) for flashing

---

## Step 1: Download the Debian image

Grab the official Debian 12 Bookworm **server** image (CLI only — no desktop, smallest footprint for the 1GB board) from the [OrangePi Zero 2W download page](http://www.orangepi.org/html/hardWare/computerAndMicrocontrollers/service-and-support/Orange-Pi-Zero-2W.html).

Scroll to the Debian section and download from the Google Drive mirror. The file is named something like:

```
Orangepizero2w_1.0.2_debian_bookworm_server_linux6.1.31.7z
```

---

## Step 2: Extract and verify

```bash
cd ~/Downloads
sudo apt install -y p7zip-full   # if 7z is not installed
7z x Orangepizero2w_1.0.2_debian_bookworm_server_linux6.1.31.7z
```

You should get two files:
- `*.img` — the disk image (~2.4GB)
- `*.img.sha` — sha256 checksum

Verify the image matches the checksum:

```bash
sha256sum -c Orangepizero2w_1.0.2_debian_bookworm_server_linux6.1.31.img.sha
```

Expected output: `...img: OK`

---

## Step 3: Flash the SD card

Insert the microSD card into your computer, then find its device name:

```bash
lsblk -d -o NAME,SIZE,MODEL,TRAN
```

Look for the card by size (e.g. `29.7G` for a 32GB card). The `TRAN` column will usually show `usb` for an external reader. **Double-check** — flashing the wrong device will destroy your system disk.

Unmount any auto-mounted partitions, then flash:

```bash
sudo umount /dev/sdX*   # replace sdX with your card's device
sudo dd if=~/Downloads/Orangepizero2w_1.0.2_debian_bookworm_server_linux6.1.31.img of=/dev/sdX bs=4M conv=fsync status=progress
sync
sudo eject /dev/sdX
```

Flashing takes ~1-2 minutes on a decent card.

---

## Step 4: Boot the OrangePi

The Zero 2W has two USB-C ports labeled **USB0** and **USB1**:

- **USB0** = OTG (device/host) — defaults to device mode in the OrangePi Linux image
- **USB1** = host-only

Recommended layout:

1. Insert the microSD card into the OrangePi.
2. Plug your **USB-C to Ethernet adapter into USB1** and connect the Ethernet cable to your router.
3. Plug the **power supply into USB0**.

The board boots headlessly — no HDMI or keyboard needed if you're going over Ethernet. First boot takes ~30-60 seconds.

---

## Step 5: Find the OrangePi's IP address

:::caution
The official OrangePi Debian image does **not** ship with `avahi-daemon`, so `orangepizero2w.local` won't resolve out of the box. You need the IP.
:::

### If you plugged into your router

Check your router's DHCP lease page for a host named `orangepizero2w`.

### If you went direct laptop → OrangePi (connection sharing)

On GNOME, set your Ethernet connection's IPv4 method to **"Shared to other computers"** (Settings → Network → click the ⚙ next to the wired connection → IPv4). The laptop then hands out DHCP on `10.42.0.0/24`.

Find the OrangePi's IP by scanning for the Realtek MAC (the USB Ethernet adapter reports as Realtek):

```bash
sudo nmap -sn 10.42.0.0/24
```

Look for a host with a Realtek MAC — that's the board. Note the IP (e.g. `10.42.0.76`).

---

## Step 6: SSH into the OrangePi

```bash
ssh root@<ip-address>
```

Default password: `orangepi`

The image does **not** run a first-login wizard — you'll drop straight into a root shell. You need to lock it down manually.

---

## Step 7: Change the root password and create your user

As root on the OrangePi:

```bash
passwd
```

Pick a strong password — you won't use root often after this, but don't leave it on the default.

Create a regular user for yourself, add them to `sudo`:

```bash
adduser <your-name>
usermod -aG sudo <your-name>
```

`adduser` will prompt for a password and some optional info (full name, phone, etc. — just press Enter through these).

---

## Step 8: Remove the default `orangepi` user

The image ships with a default `orangepi` user whose password is publicly documented — remove it now that you have your own account.

Kill any lingering sessions (the image auto-logs-in `orangepi` on the serial and HDMI consoles) and delete the user:

```bash
pkill -KILL -u orangepi
deluser --remove-home orangepi
```

---

## Step 9: Log out and SSH back in as your new user

```bash
exit
ssh <your-name>@<ip-address>
```

---

## Step 10: Set a unique hostname

Everyone on the same network needs a unique hostname. Pick something like `ambrosia-<name>`:

```bash
sudo hostnamectl set-hostname ambrosia-<name>
sudo sed -i "s/127.0.1.1.*/127.0.1.1\tambrosia-<name>/" /etc/hosts
```

---

## Step 11: Connect to Wi-Fi

Do this **before** any `apt` commands — the shared-Ethernet tether from your laptop often has flaky outbound routing, and the image's default apt mirrors (Huawei Cloud, Aliyun) are unreachable from outside China over an unstable uplink. A direct Wi-Fi connection sidesteps both problems.

List nearby networks:

```bash
nmcli device wifi list
```

Connect with `--ask` so your password is prompted for (and kept out of shell history):

```bash
sudo nmcli --ask device wifi connect "<SSID>"
```

If you'd rather pick from a menu, `sudo nmtui` → **Activate a connection** works too.

Verify the connection:

```bash
nmcli device status
ip -4 addr show wlan0
```

You should see an IP on `wlan0`. Now unplug the USB-Ethernet adapter — all further steps go over Wi-Fi. Reconnect from your laptop using the Wi-Fi IP:

```bash
exit
ssh <your-name>@<wifi-ip>
```

:::caution Known caveat
The `unisoc_wifi` driver on this board can wedge silently — the link associates and DHCP succeeds, but no L3 traffic flows. If that happens, bouncing the NetworkManager connection (`sudo nmcli connection down "<SSID>" && sudo nmcli connection up "<SSID>"`) usually clears it. Try that before chasing AP/firewall issues.
:::

---

## Step 12: Install avahi-daemon for `.local` hostname resolution

So you can reach the board as `ambrosia-<name>.local` from other devices:

```bash
sudo apt update
sudo apt install -y avahi-daemon
```

Reboot to pick up the hostname + avahi changes together:

```bash
sudo reboot
```

Wait ~30 seconds, then SSH back in at the new hostname:

```bash
ssh <your-name>@ambrosia-<name>.local
```

---

## Step 13: Disable root SSH (optional but recommended)

With your sudo user working and avahi up, lock down root SSH:

```bash
sudo sed -i 's/^#*PermitRootLogin.*/PermitRootLogin no/' /etc/ssh/sshd_config
sudo systemctl restart ssh
```

---

## Step 14: Add swap and update

### 14.1 Add swap space

The OrangePi image already ships with ~490M of **zram** (RAM-compressed swap) enabled — you can check with `cat /proc/swaps`. That's helpful but for Ambrosia's JVM it's worth adding a real disk swapfile as a backstop:

```bash
sudo fallocate -l 1G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

Verify with `free -h` — you should see ~1.5Gi of total swap (zram + disk).

### 14.2 Update packages

```bash
sudo apt upgrade -y
```

---

## Next Steps

Your OrangePi is ready. Head over to [Install Ambrosia on Raspberry Pi](./rpi-install.md) — the install steps are written for the Pi Zero 2W but apply to the OrangePi too (same aarch64 install script, similar RAM/swap concerns).
