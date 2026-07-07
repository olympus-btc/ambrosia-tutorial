---
title: "Take your Ambrosia unit home"
sidebar_position: 4
slug: /quick-start-hardware/preinstalled
---

Your OrangePi was set up at the kermés, so it's configured to connect to the kermés Wi-Fi. To use it at home (or at another location), you need to tell it about your home Wi-Fi network. Pick **one** of the three methods below — whichever matches the hardware you have handy. **Method 1 is the easiest** — it only needs your phone.

Your unit name is on the printed card that came with the OrangePi (e.g. `ambrosia-opi-3`). Replace `YOUR-UNIT` in the examples below with the actual name on your card. Your SSH password is also on the card.

---

## Method 1: Phone + setup Wi-Fi (easiest, no extra hardware)

**You'll need:** just your phone.

When the OrangePi boots and can't find a Wi-Fi it knows, it broadcasts its own setup network. You join that network from your phone, pick your home Wi-Fi from a list, type the password, and you're done.

1. Plug power into the OrangePi and wait about 60 seconds.
2. On your phone, open Wi-Fi settings and connect to **`YOUR-UNIT-setup`** (open network, no password).
3. Your phone should automatically open the setup page. If nothing pops up, open Chrome or Safari and go to `http://10.42.1.1`.
4. The page lists Wi-Fi networks the OrangePi can see. Tap your home Wi-Fi (or type the name if it's hidden), then enter the password — tap **Mostrar / Show** to verify what you typed. Tap **Conectar / Connect**.
5. On the next page, read the steps, then tap **Copy address and finish**. This:
   - copies the POS address to your phone's clipboard,
   - shuts down the setup network,
   - and your phone reconnects to your home Wi-Fi.
6. Open Chrome or Safari, paste the address into the URL bar, and you're at the POS.

The OrangePi now remembers your home Wi-Fi and will auto-connect from now on.

:::tip
If the captive page doesn't open after you join `YOUR-UNIT-setup`, give it 5-10 seconds, then open `http://10.42.1.1` in a browser manually.
:::

---

## Method 2: HDMI + USB keyboard (no other computer required)

**You'll need:** a TV or monitor with HDMI, a mini-HDMI to HDMI cable, and a USB keyboard.

1. Power off the OrangePi (unplug the USB-C cable).
2. Connect the OrangePi to your TV/monitor with the mini-HDMI cable, and plug in a USB keyboard.
3. Plug the power back in and wait about 60 seconds for the boot screen.
4. When you see `YOUR-UNIT login:` on the screen, type your unit name (from the card) and press Enter, then your password and Enter.
5. Connect to your home Wi-Fi by typing:

   ```
   sudo nmcli --ask device wifi connect "YOUR-HOME-WIFI-NAME"
   ```

   It will ask for your sudo password (the one on the card) and then your home Wi-Fi password.

6. Confirm it worked:

   ```
   nmcli device status
   ```

   The `wlan0` line should say `connected` with your home Wi-Fi name on the right.

7. Power off (`sudo poweroff`), unplug the HDMI cable and keyboard, and move the OrangePi to wherever you want to use it. Plug power back in — it'll auto-connect to your home Wi-Fi from now on.

---

## Method 3: USB Ethernet cable (skip Wi-Fi entirely)

**You'll need:** a USB-C to Ethernet adapter, an Ethernet cable, and your home router with a free LAN port.

If you'd rather just plug the OrangePi into your router and skip Wi-Fi setup altogether, this is the fastest option. Once it's on the wired network, every device on your home Wi-Fi can reach it.

1. Plug the USB-C Ethernet adapter into the OrangePi, then an Ethernet cable from the adapter to your router.
2. Plug in power and wait about 60 seconds.
3. From any device on your home network (phone, laptop), open `https://YOUR-UNIT.local/` in a browser. Click through the certificate warning (it's the unit's self-signed cert — same as at the kermés). You're at the POS.

:::tip
If `YOUR-UNIT.local` doesn't resolve, find the OrangePi's IP in your router's "connected devices" admin page and use `https://192.168.x.y/` instead.
:::

You can leave the unit on Ethernet permanently. If you'd later prefer Wi-Fi, unplug the Ethernet cable and the unit will boot into Method 1's setup AP next time you power-cycle it.

---

## Finding your Wi-Fi name and password

If you don't know your home Wi-Fi name (SSID) or password, here are the common places to look:

1. **Sticker on the router.** Most home routers have the default network name and password printed on a sticker on the bottom or back. Look for labels like "WiFi Name", "SSID", or "Network Name", and "Password", "WPA Key", or "Wi-Fi Password".
2. **A phone that's already connected.**
   - **Android (10+):** Settings → Network & Internet → Internet → tap your Wi-Fi → Share → scan the QR or reveal the password.
   - **iOS (16+):** Settings → Wi-Fi → tap the (i) next to your network → tap Password to reveal.
3. **Your ISP's app or account portal.** Providers like Totalplay, Telmex, Izzi, and Megacable let you view (and change) your Wi-Fi credentials in their mobile app or online account.
4. **Router admin page.** From a device already on your Wi-Fi, open `http://192.168.1.1` or `http://192.168.100.1` in a browser. Log in with admin credentials (often also on the router sticker) and look under Wireless / Wi-Fi settings.

Still stuck? Ask in the Telegram support chat — we can walk you through it.

---

## Troubleshooting

- **`YOUR-UNIT-setup` doesn't appear in your phone's Wi-Fi list.** Wait a full 60 seconds after powering on, then re-scan. If still nothing, the unit may have auto-connected to a known network — power-cycle it somewhere out of range of any Wi-Fi it knows.
- **Setup page doesn't pop up after joining `YOUR-UNIT-setup`.** Open Chrome/Safari and go to `http://10.42.1.1` manually.
- **Wrong Wi-Fi password typed.** The setup AP comes back up after a failed attempt — just rejoin `YOUR-UNIT-setup` and try again. (If you used Method 2 or 3: `sudo nmcli connection delete "YOUR-HOME-WIFI-NAME"` then repeat the connect command.)
- **Still on the kermés Wi-Fi when you don't want to be.** At home, the kermés Wi-Fi isn't in range so it won't auto-connect — just add your home one and the unit will prefer whichever is available.
- **Forgot your password / locked yourself out.** Reach out in the Telegram support chat (QR on your card). We can help reset it via a Wi-Fi-free method.
- **Nothing resolves and nothing works.** Power off, bring the unit to the kermés organizer or ping support on Telegram; we can reimage it for you.

After you're connected, access the POS UI at `https://YOUR-UNIT.local/` from any device on your home Wi-Fi — same as at the kermés, same cert warning to click through.
