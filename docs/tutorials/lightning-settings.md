---
title: "Lightning Settings"
sidebar_position: 11
---

# Lightning Settings

Ambrosia receives bitcoin payments through a Lightning backend. The Quick Starts use the phoenixd node that comes with your installation; this tutorial covers the other options and how to protect and restart them.

These settings are in **Settings** → **Bitcoin & Wallet** and **Settings** → **System**, which only admins see. Each card in **Bitcoin & Wallet** asks for your **Wallet password** before showing its options.

## Lightning Backends

You choose the backend in step 4 of the initial setup:

| Backend | What it is |
| --- | --- |
| **phoenixd** (local) | The phoenixd node installed with Ambrosia, on the same computer. |
| **Remote phoenixd node** | A phoenixd node running on another computer, for example one you reach through Tailscale. |
| **Nostr Wallet Connect** | Any NWC-compatible wallet, such as Alby Hub. Ambrosia doesn't run a node. |

If the connection to a remote phoenixd node or an NWC wallet fails during setup, you need to redo the initial setup to try again.

### Connect a Remote phoenixd Node

You need the node's URL, for example `http://100.64.0.5:9740`, and its `http-password`, which is in the node's `phoenix.conf`.

- **During setup:** in step 4, keep **phoenixd** selected and turn on **Remote phoenixd node**.
- **Later:** go to **Settings** → **Bitcoin & Wallet** → **Remote phoenixd node**, click **Manage connection** and turn on **Remote phoenixd node**.

Then enter the **Remote node URL** and the **Remote node http-password**, click **Test connection** to check them, and save.

To go back to the local node, turn **Remote phoenixd node** off in the same card and click **Save**. The Desktop App restarts by itself to apply it; in Docker and Native, restart the Ambrosia server (see [Restart the Server and phoenixd](#restart-the-server-and-phoenixd)).

### Use Nostr Wallet Connect

1. In your NWC wallet, create a connection for Ambrosia and copy its connection URI. It starts with `nostr+walletconnect://`.
2. In step 4 of the setup, choose **Nostr Wallet Connect** and paste it in **NWC URI**.

If your NWC wallet stops working with Ambrosia, go to **Settings** → **Bitcoin & Wallet** → **NWC Connection**, click **Manage connection**, paste a new **NWC connection URI** and click **Save**. This card only works when NWC is already your backend: you can't switch to NWC from phoenixd after setup.

## Secrets Encryption

Ambrosia stores the phoenixd password, the NWC connection and the push notification key. **Secrets encryption** protects them with an **Unlock password** that only you know.

To turn it on, check the encryption option in step 5 of the setup, or later:

1. Go to **Settings** → **Bitcoin & Wallet** → **Secrets encryption** and click **Manage encryption**.
2. Enter an **Unlock password** and click **Activate encryption**.

Write the unlock password down somewhere safe: it can't be recovered, and neither can the secrets it protects.

When the Ambrosia server restarts, the secrets are locked again until someone enters the unlock password. While they're locked, choosing BTC at checkout turns the pay button into **Unlock**, which asks for the unlock password. You can also unlock them ahead of time: go to **Settings** → **Bitcoin & Wallet** → **Secrets encryption**, click **Manage encryption**, enter the **Unlock password** and click **Unlock**.

In the Desktop App, check **Remember on this device** to save the unlock password in your system's keyring, so Ambrosia unlocks the secrets by itself when it starts.

## Auto Liquidity (Desktop App)

In the Desktop App, Ambrosia can open channels for you when you need more inbound liquidity. Go to **Settings** → **Bitcoin & Wallet** → **Lightning Network**, click **Manage Auto Liquidity** and turn on **Auto Liquidity**. On-chain fees apply each time a channel is opened automatically.

Auto Liquidity isn't available with Nostr Wallet Connect.

## Restart the Server and phoenixd

Some changes, such as going back to the local phoenixd node, need a restart. In Docker, and in Native with the systemd services, go to **Settings** → **System**:

- **Restart server** restarts the Ambrosia server. Open sessions are briefly interrupted.
- **Restart phoenixd** restarts the local Lightning node. It only appears when Ambrosia uses its local phoenixd.

Click the button, then **Restart** to confirm. If the card says **Restart is not available for this installation**, restart Ambrosia yourself: close and reopen the Desktop App, or stop and start the server in a Native install without services.
