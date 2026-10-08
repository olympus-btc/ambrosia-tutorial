---
title: "Docker Hardening"
sidebar_position: 1
---

# Docker Hardening

This guide is only for Docker installations. Starting with 0.9.1, the Ambrosia containers run with fewer privileges, and an installation created before 0.9.1 needs a one-time migration when you update it.

## What Changed in 0.9.1

- The `ambrosia` container runs as the `ambrosia` user and `ambrosia-client` as `node`, instead of root.
- The filesystem of both containers is read-only, except for the data volumes and `/tmp`.
- The three services (`phoenixd`, `ambrosia` and `ambrosia-client`) run without Linux capabilities and with `no-new-privileges`. `phoenixd` keeps the user of its own image.

If someone takes over the process of a container, they don't get root privileges inside it.

Your data stays in the same Docker volumes. Inside the `ambrosia` container, it's now under `/home/ambrosia/` instead of `/root/`. If you customize `docker-compose.yml`, for example to add a volume or a file, keep in mind that the containers' filesystem is read-only.

## Who Needs to Migrate

Every Docker installation created before 0.9.1, once, when you update it. A new installation doesn't need it.

If you already updated without migrating, `ambrosia` restarts over and over: `docker-compose ps` shows it as `Restarting`, and `docker logs ambrosia` shows permission errors such as `SQLITE_READONLY_DIRECTORY`. The steps below fix it.

## Migrate Your Volumes

Before you start, back up your recovery phrase and export your store data (see [Backup and Restore](../tutorials/backup-and-restore.md)).

Run these commands from your `ambrosia` folder.

1. Get the new version:

   ```bash
   git pull
   ```

2. Build the new images. The next steps need the new `ambrosia` image, the one that has the `ambrosia` user:

   ```bash
   docker-compose build
   ```

3. Stop Ambrosia:

   ```bash
   docker-compose down
   ```

   Don't add `-v`: it deletes the volumes, and with them your store data and your Lightning wallet.

4. Find the real names of your volumes:

   ```bash
   docker volume ls
   ```

   Docker Compose adds the project name in front: if you cloned Ambrosia into the `ambrosia` folder, they're `ambrosia_ambrosia_datadir` and `ambrosia_phoenixd_datadir`. Use the names you see in the list.

5. Give the `ambrosia` user ownership of both volumes:

   ```bash
   docker run --rm -v ambrosia_ambrosia_datadir:/data --user root --entrypoint sh ambrosia -c "chown -R ambrosia:ambrosia /data"
   docker run --rm -v ambrosia_phoenixd_datadir:/data --user root --entrypoint sh ambrosia -c "chown -R ambrosia:ambrosia /data"
   ```

6. Start Ambrosia as in [step 4 of the installation guide](../quick-start-docker/installation.md#start-ambrosia):

   ```bash
   docker-compose up -d --wait && docker-compose restart
   ```

Check that `docker-compose ps` shows the three services as `Up`, then log in and open the **Wallet**.

:::warning[Two easy mistakes]
- Keep `--entrypoint sh` in step 5. Without it, the command reaches the Ambrosia server as extra arguments and the `chown` doesn't run.
- Use the full volume names from step 4. With a short name such as `ambrosia_datadir`, Docker silently creates a new, empty volume and the `chown` doesn't touch your data.
:::

## If the Problem Comes Back

The image doesn't fix the user ID of `ambrosia`. If a later update changes it, the same errors come back and `ambrosia` restarts over and over. Repeat steps 3 to 6.
