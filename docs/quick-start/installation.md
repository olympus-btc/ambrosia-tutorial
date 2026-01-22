---
title: "Installation"
sidebar_position: 1
slug: /quickinstallation
---

# Installation

## Minimum Requirements
- **OS**: Linux (Ubuntu 20.04+, Debian 10+), macOS 10.15+, or Windows 10/11
- **RAM**: 2GB minimum, 4GB recommended
- **Disk Space**: 2GB free space
- **Network**: Internet connection

# Step 1: Download Ambrosia Build for your Operating System

1. Go here: https://github.com/olympus-btc/ambrosia/releases/tag/v0.5.0-alpha
2. Scroll down and look for your OS and architecture version, click to download

# Step 2: Install Ambrosia on your Operating System

## For Linux (Ubuntu/Debian)

1. Open the terminal
2. Navigate to your Downloads folder
```
cd Downloads
```
3. Install Ambrosia
```
sudo dpkg -i <name of the file.deb>
```
4. Go to your apps and open AmbrosiaPoS


## For Linux (Fedora)

1. Open the terminal
2. Navigate to your Downloads folder
```
cd Downlodas
```
3. Install Ambrosia
```
sudo dnf install <name of the file.rpm>
```

:::info
Fedora needs to install the `libxcrypt-compat` dependency, it will ask you for confirmation. Type `y` and hit `Enter`.
:::

4. Go to your apps and open AmbrosiaPoS

## For Arch-Linux (tar.gz)

This tar.gz archive is provided for advanced users on Linux distributions that don't support `.deb` or `.rpm` packages (e.g., Arch Linux, Gentoo, etc.).

> **Security Note:** This is a Bitcoin Lightning payment application. Do **NOT** run with `--no-sandbox`. The tar.gz format maintains proper sandboxing without the AppImage limitations.

### 1. Extract the archive

```bash
tar -xzf ambrosia-app-*.tar.gz
```

### 2. Move to a permanent location (optional)

**System-wide install:**
```bash
sudo mv ambrosia-app-* /opt/AmbrosiaPoS
```

**User-only install:**
```bash
mv ambrosia-app-* ~/.local/share/AmbrosiaPoS
```

### 3. Run the application

```bash
cd /opt/AmbrosiaPoS  # or your chosen location
./ambrosia-app
```

## For macOS

1. Open the downloaded `.dmg` file
2. Drag Ambrosia to your Applications folder
3. Launch Ambrosia from Applications

## For Windows

1. Run the installer
2. Follow the installation wizard
3. Choose For All Users or Only for me
4. Choose Destination Folder and click Install
5. Wait until the loading bar is done
6. Make sure Run AmbrosiaPos is selected
7. Click Finish to run AmbrosiaPoS

:::warning
You may need to turn off your VPN if page is not loading
:::
