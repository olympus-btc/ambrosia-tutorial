---
title: "Other Devices"
sidebar_position: 9
---

# Other Devices

Ambrosia runs on one computer, but you can sell from a tablet or phone on the same local network. Each device opens Ambrosia in its browser and logs in with its own user.

## Which Install Methods Allow It

| Install method | Other devices |
| --- | --- |
| Desktop App | No. Ambrosia only accepts connections from the computer where it runs. |
| Docker | Yes, through port 3000. |
| Native | Yes, through port 3000. |

The computer that runs Ambrosia must stay on, and its firewall must allow connections to port 3000.

## Open Ambrosia on Another Device

1. Find the IP address of the computer that runs Ambrosia on your local network, for example `192.168.1.20`.
2. On that computer, open Ambrosia with that address instead of `localhost`: `http://192.168.1.20:3000`.
3. Go to **Settings**. On large screens, **Open on another device** shows a QR code with the address you're using.
4. Scan the QR code with the tablet or phone, which must be on the same network. Ambrosia opens in its browser.
5. Log in with your user.

The QR code shows the address you used to open Ambrosia. If you opened it with `localhost`, the QR code points to `localhost` and doesn't work on other devices. You can also type the address in the other device's browser.

## Install It as an App

On the other device, Ambrosia can be installed as an app, with its own icon and window. Go to **Settings** → **Devices & Connection** → **Install App**:

- If the browser supports it, click **Install**.
- On a phone or tablet, the card shows the steps, such as tapping the share icon or the menu and choosing to add Ambrosia to the home screen.

**Devices & Connection** only appears when there's something to set up on the device you're using, so you won't see it once Ambrosia is installed as an app.

## Native: the `--expose-lan` Option

The Native installer's `--expose-lan` option makes the Ambrosia server listen on your local network (see [Installation](../quick-start-native/installation.md)). You don't need it to use Ambrosia from other devices: they connect to port 3000, and Ambrosia talks to its server from the computer itself.

## Security

Anyone on your network can open Ambrosia's login screen. Use these devices only on a network you trust, and give each person their own user with only the permissions they need (see [Users and Roles](./users-and-roles.md)).
