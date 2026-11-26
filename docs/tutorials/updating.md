---
title: "Updating Ambrosia"
sidebar_position: 4
---

# Updating Ambrosia

New Ambrosia releases bring features and security fixes, so keep your installation up to date. How you update depends on how you installed it.

:::warning[Before you update]
Back up your recovery phrase (**Settings** → **Bitcoin & Wallet** → **Lightning SEED**) and export your store data (**Settings** → **Backup & Data**, see [Backup and Restore](./backup-and-restore.md)), in case something goes wrong.
:::

## Desktop App

The app checks for updates when it starts and every 6 hours. You can also check by hand from **Check for Updates...** in the app menu.

- **Windows:** the update downloads by itself. When it's ready, the menu shows **Restart to Update to** and the new version: click it to restart and install. If you leave a downloaded update pending for days, the app reminds you with **Update Ready to Install**; choose **Restart Now** or **Later**.
- **macOS and Linux:** the app tells you a new version exists with **Update Available**. Click **Download** to open the release page, then download and install the new version the same way you installed the first one (see the Desktop App installation guide).

## Docker

:::warning[Updating from a version before 0.11.0-beta?]
Your volumes need a one-time migration, because the `ambrosia` container now runs with a different user. Follow [Docker Hardening](../advanced/docker-hardening.md#migrate-your-volumes) instead of these commands.
:::

:::info
Starting with 0.11.0-beta, Ambrosia opens at **https://localhost** instead of `http://localhost:3000`, and Docker needs ports 80 and 443 free on this computer (see step 8 of the [Docker installation guide](../quick-start-docker/installation.md)).
:::

From your `ambrosia` folder, get the latest code and rebuild the images:

```bash
git pull
docker-compose up --build -d
```

Then start Ambrosia as in step 4 of the Docker installation guide:

```bash
docker-compose up -d --wait && docker-compose restart
```

## Native

The update script replaces phoenixd, the Ambrosia server and the client with their latest releases, and restarts the systemd services if you use them:

```bash
curl -fsSL https://raw.githubusercontent.com/olympus-btc/ambrosia/refs/tags/v0.11.1-beta/scripts/update.sh | bash -s -- --yes
```

- Without `--yes`, the script asks before each step.
- Add `--force` to reinstall even if you already have the latest version.
- The script updates phoenixd to its latest release. To keep a specific version, set `PHOENIXD_TAG`:

  ```bash
  curl -fsSL https://raw.githubusercontent.com/olympus-btc/ambrosia/refs/tags/v0.11.1-beta/scripts/update.sh | PHOENIXD_TAG=0.9.1 bash -s -- --yes
  ```

If you don't use the systemd services, stop phoenixd, the server and the client before updating, and start them again afterwards.
