---
title: "Installation"
sidebar_position: 2
slug: /installation
---

## Project Dependencies
### NodeJS

It is recommended to use nvm (Node Version Manager) to install Node.js and npm. This allows you to easily manage multiple versions of Node.js.

:::note
You can use the version manager of your preference as [ASDF](https://asdf-vm.com/) or [MISE](https://mise.jdx.dev/)
:::

```bash
# Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# instead of restarting the shell
. "$HOME/.nvm/nvm.sh"

# Download and install Node.js:
nvm install 22

# Verify the Node.js version:
node -v # Should print "v22.18.0".
nvm current # Should print "v22.18.0".

# Verify npm version:
npm -v # Should print "10.9.3".
```

### Java Development Kit
To install the Java Development Kit (JDK), we recommend using SDKMAN!, a tool for managing multiple versions of Software Development Kits.

```bash
# Download and install SDKMAN!
curl -s "https://get.sdkman.io" | bash

# Load SDKMAN! in the current session and add it to your shell
source "$HOME/.sdkman/bin/sdkman-init.sh"

# Install Java 21
sdk install java 21.0.8-tem
```

:::note
Remember to add source `"$HOME/.sdkman/bin/sdkman-init.sh"` to your `~/.bashrc` or `~/.zshrc` file so that sdk is available in all future terminal sessions.
:::


## Full Installation (Ambrosia + phoenixd)

```bash
wget -q https://raw.githubusercontent.com/olympus-btc/Ambrosia-POS/master/scripts/install.sh
chmod +x install.sh
./install.sh
```

The phoenixd installation script installs phoenixd automatically. The script downloads phoenixd v0.7.1, verifies the package integrity using GPG and checksums, installs it in `/usr/local/bin`, and optionally configures a systemd service for automatic startup.


## Project Instalation (without systemd)
```bash
curl -fsSL https://raw.githubusercontent.com/olympus-btc/Ambrosia-POS/master/scripts/install.sh | bash
```

## Uninstallation 

To uninstall Ambrosia POS and phoenixd, run the following script:

```bash
curl -fsSL https://raw.githubusercontent.com/olympus-btc/Ambrosia-POS/master/scripts/uninstall.sh | bash
```
