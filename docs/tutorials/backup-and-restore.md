---
title: "Backup and Restore"
sidebar_position: 10
---

# Backup and Restore

A data backup saves your store's data in one file: products, orders, users and settings, plus uploaded images such as product photos and your logo. Use it to keep a copy of your store or to move it to another Ambrosia installation.

Only admins can export and import data, from **Settings** → **Backup & Data**.

## Data Backup vs. Recovery Phrase

The data backup doesn't include your Lightning wallet. Your funds belong to your Lightning node, and the recovery phrase (**Settings** → **Bitcoin & Wallet** → **Lightning SEED**) is what protects them. Keep both:

| | Data backup | Recovery phrase |
| --- | --- | --- |
| Protects | Products, orders, users, settings and images | Your Lightning funds |
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
6. Restart the Ambrosia server to finish loading the data (see [Restart the Server](#restart-the-server)).

## Restore During Setup

On a new installation, you can restore a backup instead of setting up the store from scratch:

1. On the first setup screen, click **Restoring from a previous backup?**.
2. Enter the **Backup password**, choose the **Backup file** and click **Restore backup**.
3. Restart the Ambrosia server to finish loading the data (see [Restart the Server](#restart-the-server)).

## Restart the Server

The imported data is loaded the next time the Ambrosia server starts, as long as that happens within 24 hours. How it restarts depends on the install method:

- **Desktop App:** Ambrosia restarts by itself after a short countdown, or when you click **Restart now**.
- **Docker**, and **Native** with the systemd services: the server restarts by itself. Wait a moment and reload the page.
- **Native** installed with `--no-service`: stop the server and start it again yourself.

After the restart, log in with a user from the backup. The wallet password is also the backup's.

## Move Ambrosia to Another Computer

1. On the old installation, export your data.
2. Install Ambrosia on the new computer and restore the backup during setup.
3. Your funds stay in the old Lightning node. Before you stop using the old installation, send them from its **Wallet** to the new one (see [Send a Payment](./wallet.md#send-a-payment)).
