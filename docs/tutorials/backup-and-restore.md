---
title: "Backup and Restore"
sidebar_position: 10
---

# Backup and Restore

A data backup saves your store's data in one file: products, orders, users and settings, plus uploaded images such as product photos and your logo. If Ambrosia uses its local phoenixd node, the backup also includes the Lightning wallet: its seed, its configuration and its payment history. Use it to keep a copy of your store or to move it to another Ambrosia installation.

Only admins can export and import data, from **Settings** → **Backup & Data**.

## Data Backup and Recovery Phrase

With the local phoenixd node, the data backup carries your Lightning wallet too, so one file restores the store and its funds. With a remote phoenixd node or Nostr Wallet Connect, the wallet lives outside Ambrosia and isn't in the backup.

Keep the recovery phrase anyway (**Settings** → **Bitcoin & Wallet** → **Lightning SEED**): it's the only way to recover your funds without the backup file and its password. And since the backup can contain your seed, keep it as safe as the recovery phrase.

| | Data backup | Recovery phrase |
| --- | --- | --- |
| Protects | Products, orders, users, settings and images, plus the Lightning wallet with the local phoenixd node | Your Lightning funds |
| Where | **Settings** → **Backup & Data** | **Settings** → **Bitcoin & Wallet** |

## Export Your Data

1. Go to **Settings** → **Backup & Data** and click **Export data**.
2. Enter your **Wallet password** and click **Confirm**.
3. Ambrosia downloads the backup as a `.zip` file. Keep it somewhere safe, outside the computer that runs Ambrosia.

The backup is encrypted with your current wallet password. You'll need that password to restore it, even if you change it later.

## Import Data into an Installation in Use

Importing replaces all the data of this installation with the backup's. Export the current data first if you might need it.

1. Go to **Settings** → **Backup & Data** and click **Import data**.
2. Enter your **Wallet password** and click **Confirm**.
3. In **Backup password**, enter the wallet password of the store that created the backup.
4. In **Backup file**, click **Choose file** and select the `.zip` file.
5. Click **Continue**, then **Overwrite and import**.
6. If the backup includes a Lightning wallet, **Overwrite your Lightning wallet?** asks you to confirm. Click **Overwrite wallet**. If this installation had its own wallet with funds, write down its recovery phrase before you do: afterwards, only that phrase gives you access to those funds.
7. Restart the Ambrosia server to finish loading the data (see [Restart the Server](#restart-the-server)).

## Restore During Setup

On a new installation, you can restore a backup instead of setting up the store from scratch:

1. On the first setup screen, click **Restoring from a previous backup?**.
2. Enter the **Backup password**, choose the **Backup file** and click **Restore backup**.
3. Restart the Ambrosia server to finish loading the data (see [Restart the Server](#restart-the-server)).

If the backup includes a Lightning wallet, this installation uses it from then on.

## Restart the Server

The imported data is loaded the next time the Ambrosia server starts, as long as that happens within 24 hours. How it restarts depends on the install method:

- **Desktop App:** Ambrosia restarts its services by itself after a short countdown, or when you click **Restart now**.
- **Docker**, and **Native** with the systemd services: the server restarts by itself. Wait a moment and reload the page.
- **Native** installed with `--no-service`: stop the server and start it again yourself.

If the backup includes a Lightning wallet, phoenixd also has to restart once the server is back, so it loads the restored wallet. The Desktop App does it by itself. In Docker, run `docker restart phoenixd`. In Native, click **Restart phoenixd** in **Settings** → **System** (see [Lightning Settings](./lightning-settings.md#restart-the-server-and-phoenixd)), or restart it yourself if you installed with `--no-service`.

After the restart, log in with a user from the backup. The wallet password is also the backup's.

## Move Ambrosia to Another Computer

1. On the old installation, export your data.
2. Stop the old installation and don't use it again. With the local phoenixd node, the backup brings its Lightning wallet, and two nodes with the same seed must never run at the same time: you can lose funds.
3. Install Ambrosia on the new computer and restore the backup during setup.

With a remote phoenixd node or Nostr Wallet Connect, your funds stay in that node or wallet, outside Ambrosia.
