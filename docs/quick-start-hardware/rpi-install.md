---
title: "Install Ambrosia on Raspberry Pi"
sidebar_position: 2
slug: /quick-start-hardware/rpi-install
---

This guide assumes you have a Raspberry Pi Zero 2W set up and accessible via SSH. If not, see [Raspberry Pi setup](./rpi-setup.md) first.

The notes here are tuned for the Pi Zero 2W (512MB RAM). For Ambrosia install on a regular Linux machine, see [Quick Start - Native](/quick-installation-native).

---

## Option A: Native Install (recommended for Pi Zero 2W)

The Pi Zero 2W only has 512MB of RAM, so running natively (without Docker overhead) is the better option.

### A1: Install dependencies

You'll need JDK 21 (for the server), Node.js 22 (for the client), and a few system packages.

#### System packages (~2 min)

```bash
sudo apt update
sudo apt install -y curl unzip zip tar gpg
```

#### Install JDK 21 with SDKMAN (~5 min)

```bash
curl -s "https://get.sdkman.io" | bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
sdk install java 21.0.8-tem
```

Verify:

```bash
java -version
```

#### Install Node.js 22 with nvm (~3 min)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
source "$HOME/.nvm/nvm.sh"
nvm install 22
```

Verify:

```bash
node -v
npm -v
```

### A2: Run the Ambrosia installer (~8 min)

The install script downloads and sets up all three components (phoenixd, ambrosia server, ambrosia client). On a Pi Zero 2W it takes about 8 minutes end-to-end — most of that is `npm install` for the client:

```bash
curl -fsSL https://raw.githubusercontent.com/olympus-btc/ambrosia/refs/heads/main/scripts/install.sh | bash -s -- --yes
```

This will:
- Download and verify **phoenixd** (Lightning node) for ARM64
- Download the **Ambrosia server** JAR
- Download and install the **Ambrosia client** (Next.js)
- Set up systemd services for all three components

### A3: Verify everything is running

```bash
sudo systemctl status phoenixd
sudo systemctl status ambrosia
sudo systemctl status ambrosia-client
```

All three should show `active (running)`.

### A4: Access Ambrosia

Open a web browser on any device on the same network and go to:

```
http://ambrosia-<name>.local:3000
```

You should see the Ambrosia POS interface.

---

## Upgrading an existing install

To upgrade to a newer Ambrosia release, stop the services first (the installer overwrites files but does not stop them), then re-run the installer. The installer re-enables and starts all three services when it finishes. Expect ~8 minutes on a Pi Zero 2W.

```bash
sudo systemctl stop ambrosia-client ambrosia phoenixd
curl -fsSL https://raw.githubusercontent.com/olympus-btc/ambrosia/refs/heads/main/scripts/install.sh | bash -s -- --yes
sudo systemctl status phoenixd ambrosia ambrosia-client --no-pager
```

---

## Option B: Docker Install

If you prefer Docker (or are running on a Pi with more RAM):

### B1: Install Docker

```bash
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker $USER
```

Log out and back in:

```bash
exit
```

SSH back in, then verify:

```bash
docker --version
docker compose version
```

### B2: Get the Docker Compose file

```bash
mkdir ~/ambrosia && cd ~/ambrosia
curl -fsSL https://raw.githubusercontent.com/olympus-btc/ambrosia/main/docker-compose.yml -o docker-compose.yml
```

### B3: Start Ambrosia

```bash
docker compose up -d --wait
docker compose restart
```

### B4: Check that everything is running

```bash
docker compose ps
```

All three services should be running.

### B5: Access Ambrosia

```
http://ambrosia-<name>.local:3000
```

---

## Troubleshooting

### Out of memory (both methods)

The Pi Zero 2W has only 512MB of RAM. If things are getting killed, add swap (or increase the swap from [Raspberry Pi setup, Step 5.1](./rpi-setup.md)):

```bash
sudo dphys-swapfile swapoff
sudo sed -i 's/CONF_SWAPSIZE=.*/CONF_SWAPSIZE=1024/' /etc/dphys-swapfile
sudo dphys-swapfile setup
sudo dphys-swapfile swapon
```

### Services won't start (native)

Check logs:

```bash
sudo journalctl -u phoenixd -n 50
sudo journalctl -u ambrosia -n 50
sudo journalctl -u ambrosia-client -n 50
```

### Containers won't start (Docker)

```bash
docker compose logs
free -h
```

### JVM is very slow to start

Normal on the Pi Zero 2W. The first startup can take a few minutes. Subsequent starts are faster.

### Can't access the web interface

- Verify services are running (systemctl status or docker compose ps)
- Try using the IP address instead of `.local`
- Check that port 3000 isn't blocked by a firewall: `sudo ufw status`
