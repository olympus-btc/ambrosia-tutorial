---
title: "Installation"
sidebar_position: 1
slug: /quick-installation-desktop-app
---

# Installation

## Minimum Requirements
- **OS**: Linux (Ubuntu 20.04+, Debian 10+, Fedora 32+), macOS 13.5+ (Ventura), or Windows 10/11
- **RAM**: 2GB minimum, 4GB recommended
- **Disk Space**: 2GB free space
- **Network**: Internet connection

# Step 1: Download Ambrosia Build for your Operating System

1. Go here: https://github.com/olympus-btc/ambrosia/releases/tag/v0.9.0-beta
2. Scroll down to **Assets** and download the file for your operating system:

| Operating system | File |
| --- | --- |
| Ubuntu/Debian | `ambrosia-pos_0.9.0-beta_amd64.deb` (ARM: `ambrosia-pos_0.9.0-beta_arm64.deb`) |
| Fedora | `ambrosia-pos-0.9.0-beta.x86_64.rpm` (ARM: `ambrosia-pos-0.9.0-beta.aarch64.rpm`) |
| Arch Linux and other distributions (tar.gz) | `ambrosia-pos-0.9.0-beta-x64.tar.gz` (ARM: `ambrosia-pos-0.9.0-beta-arm64.tar.gz`) |
| macOS (Apple Silicon) | `ambrosia-pos-0.9.0-beta-arm64.dmg` |
| macOS (Intel) | `ambrosia-pos-0.9.0-beta-x64.dmg` |
| Windows | `ambrosia-pos-0.9.0-beta-x64-setup.exe` (ARM: `ambrosia-pos-0.9.0-beta-arm64-setup.exe`) |

# Step 2: Install Ambrosia on your Operating System

## For Linux (Ubuntu/Debian)

1. Open the terminal
2. Navigate to your Downloads folder
```
cd Downloads
```
3. Install Ambrosia (on ARM computers, use the `arm64` file)
```
sudo apt install ./ambrosia-pos_0.9.0-beta_amd64.deb
```
4. Go to your apps and open AmbrosiaPoS


## For Linux (Fedora)

1. Open the terminal
2. Navigate to your Downloads folder
```
cd Downloads
```
3. Install Ambrosia (on ARM computers, use the `aarch64` file)
```
sudo dnf install ./ambrosia-pos-0.9.0-beta.x86_64.rpm
```

:::info
Fedora needs to install the `libxcrypt-compat` dependency, it will ask you for confirmation. Type `y` and hit `Enter`.
:::

4. Go to your apps and open AmbrosiaPoS

## For Arch-Linux (tar.gz)

This tar.gz archive is provided for advanced users on Linux distributions that don't support `.deb` or `.rpm` packages (e.g., Arch Linux, Gentoo, etc.).

> **Security Note:** This is a Bitcoin Lightning payment application. Do **NOT** run with `--no-sandbox`. The tar.gz format maintains proper sandboxing.

### 1. Extract the archive

This creates the `ambrosia-pos-0.9.0-beta-x64` folder (`ambrosia-pos-0.9.0-beta-arm64` on ARM computers):

```bash
tar -xzf ambrosia-pos-0.9.0-beta-x64.tar.gz
```

### 2. Move to a permanent location (optional)

**System-wide install:**
```bash
sudo mv ambrosia-pos-0.9.0-beta-x64 /opt/AmbrosiaPoS
```

**User-only install:**
```bash
mv ambrosia-pos-0.9.0-beta-x64 ~/.local/share/AmbrosiaPoS
```

### 3. Run the application

```bash
cd /opt/AmbrosiaPoS  # or your chosen location
./ambrosia-pos
```

## For MacOS

1. Open the downloaded `.dmg` file
2. Drag AmbrosiaPoS into the `Applications` folder
3. Launch AmbrosiaPoS from `Applications`
:::warning
The first time you open it, MacOS will show a security warning because it’s not from the App Store
:::
4. Go to `System Settings` → `Privacy & Security` and click `Open Anyway`
5. Launch the app again, click `Open Anyway` when prompted, and enter your MacOS `username` and `password`
6. The app should now open normally

## For Windows

1. Run the installer
2. Follow the installation wizard
3. Choose For All Users or Only for me
4. Choose Destination Folder and click Install
5. Wait until the loading bar is done
6. Make sure Run AmbrosiaPoS is selected
7. Click Finish to run AmbrosiaPoS

:::tip
To update Ambrosia later, see [Updating Ambrosia](../tutorials/updating.md).
:::
