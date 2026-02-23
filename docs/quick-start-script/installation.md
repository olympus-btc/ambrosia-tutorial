---
title: "Installation"
sidebar_position: 1
slug: /quick-installation-script
---

# Installation Guide - Ambrosia (Native/Script)

## 1. Prerequisites Check

Before proceeding, ensure you have the following dependencies installed. You can verify them with these commands:

- **Node.js (v22+):** `node -v`
- **npm (v10+):** `npm -v`
- **JDK/JRE (v21):** `java -version`
- **Gradle (v8.1+):** `gradle -v`

:::warning
If you are missing any of these, please refer to the [Detailed Dependencies Guide](https://github.com/olympus-btc/ambrosia/blob/main/doc/dependencies.md).
:::

## 2. Installation

The installation script requires **sudo** privileges to install binaries to `/usr/local/bin` and set up systemd services.

**Single command (recommended):**

*Automatic installation (includes systemd services):*
```bash
curl -fsSL https://raw.githubusercontent.com/olympus-btc/ambrosia/refs/heads/main/scripts/install.sh | bash -s -- --yes
```

*Automatic installation (without systemd services):*
```bash
curl -fsSL https://raw.githubusercontent.com/olympus-btc/ambrosia/refs/heads/main/scripts/install.sh | bash -s -- --yes --no-service
```

**Alternative methods:**

If you prefer to review the script before running it, or if you want an **interactive installation** that asks you whether to install systemd services for each component, you can manually download and inspect it first.

*Download the script and make it executable:*

```bash
wget -q https://raw.githubusercontent.com/olympus-btc/ambrosia/refs/heads/main/scripts/install.sh
chmod +x install.sh
```

*Run the script:*

```bash
./install.sh
```

This unified installation script automates the deployment of the complete Ambrosia ecosystem, including the Phoenixd Lightning node, the backend Server, and the frontend Client. It handles dependency verification, secure binary downloads with GPG validation, environment configuration (PATH updates), and the optional creation of systemd services for each component to ensure a seamless background operation.

:::note
If you do not use the systemd services, you will need to manually start the backend and frontend by running the following commands in your terminal as separate processes:

```bash
ambrosia
```

and 

```bash
ambrosia-client
```
:::

Once both services are running (either via systemd or manually), you can access the **Ambrosia Dashboard** at:

👉 [http://localhost:3000](http://localhost:3000)

The Phoenixd installation script installs Phoenixd automatically. The script downloads Phoenixd v0.7.1, verifies the package integrity using GPG and checksums, installs it in `/usr/local/bin`, and optionally configures a systemd service for automatic startup.

Check [Mastering Phoenixd](https://btcgdl.github.io/Mastering-phoenixd/) for more details.

## Uninstallation 

To uninstall Ambrosia POS and Phoenixd, run the following script:

```bash
curl -fsSL https://raw.githubusercontent.com/olympus-btc/ambrosia/refs/heads/main/scripts/uninstall.sh | bash
```