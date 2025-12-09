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

# Step 1: Install dependencies (Docker, git & curl)

## For Linux (Ubuntu/Debian)

Open your terminal and run the following commands:

```bash
# Update package list
sudo apt update

# Install Docker and Git
sudo apt install -y curl docker.io git

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Add your user to the docker group (allows running Docker without sudo)
sudo usermod -aG docker $USER

# Refresh your user session to apply group changes
su - $USER
```

## For macOS

1. Download Docker Desktop for Mac from [docker.com](https://www.docker.com/products/docker-desktop)
2. Open the downloaded `.dmg` file
3. Drag Docker to your Applications folder
4. Launch Docker from Applications
5. Follow the setup wizard
6. Docker will start automatically

## For Windows

1. Download Docker Desktop for Windows from [docker.com](https://www.docker.com/products/docker-desktop)
2. Run the installer
3. Follow the installation wizard
4. Restart your computer when prompted
5. Launch Docker Desktop from the Start menu
6. Wait for Docker to start (you'll see a green icon in the system tray)

## Verify Docker Installation

After installing Docker, verify it's working correctly:

```bash
docker --version
```

You should see output like:
```
Docker version 28.2.2, build 28.2.2-0ubuntu1
```

## Verify Git is Installed

```bash
git --version
```

If you see the version number, Docker and Git are installed correctly! Skip to Step 3.

# Step 2: Install Git (If Not Already Installed)

Git is needed to download the Ambrosia source code from GitHub.

## Install Git

**For macOS:**
```bash
brew install git
```
(Requires Homebrew. If you don't have Homebrew, download Git from [git-scm.com](https://git-scm.com))

**For Windows:**
Download and install from [git-scm.com](https://git-scm.com/download/win)

# Step 3: Clone the Ambrosia Repository

Now we'll download the Ambrosia source code from GitHub.

## Navigate to Your Preferred Directory

```bash
# Install in your home directory
cd ~
```

## Clone the Repository

Run the following commands to download Ambrosia:

```bash
# Clone the repository from GitHub
git clone https://github.com/olympus-btc/ambrosia.git

# Navigate into the project directory
cd ambrosia
```

## Verify the Files

Check that you're in the correct directory with the project files:

```bash
ls
```

You should see files including:
- `docker-compose.yml` (Docker configuration)
- `README.md` (Project documentation)
- Various folders like `server`, `client`, etc.

# Step 4: Build and Start the Containers

From the `ambrosia` directory, run:

```bash
docker-compose up -d --wait && docker-compose restart
```

**This process may take 3-5 minutes on first run**, especially on slower internet connections. Subsequent starts will be much faster.

# Step 5: Back up your seed words

Write down your seed and put it somewhere secret/safe (**VERY IMPORTANT BEFORE PUTTING MONEY ON THE NODE**):

```
docker exec -it phoenixd cat /phoenix/.phoenix/seed.dat
```

## Step 6: Configure phoenixd for inbound liquidity
By default, phoenixd will request 2Msat of inbound liquidity from the ACINQ LSP, whenever it runs out of inbound liquidity. This of course includes when you first start the node and receive your very first payment. ACINQ charges 1% of the amount of inbound liquidity requested, which is 20ksat (plus the mining fee). Since 20ksat is about US$20 at the time of writing, and since we don't need this much inbound liquidity for a workshop, we instead configure phoenixd not to request inbound liquidity.

*(Note: if you actually want 2M sats of inbound liquidity, just omit this. If you go this route, you should send ~25ksats as your first payment, most of which will be taken by ACINQ for the fee)*:

Run the following command:
```
docker exec phoenixd sh -c "\
  sed -i '/^auto-liquidity=/d' /phoenix/.phoenix/phoenix.conf && \
  echo 'auto-liquidity=off' >> /phoenix/.phoenix/phoenix.conf && \
  sed -i '/^max-mining-fee=/d' /phoenix/.phoenix/phoenix.conf && \
  echo 'max-mining-fee=5000' >> /phoenix/.phoenix/phoenix.conf \
" && docker restart phoenixd
```

# Step 7: Verify auto-liquidity settings in phoenix.conf

```
docker exec phoenixd cat /phoenix/.phoenix/phoenix.conf
```

You should see the following two lines at the bottom:
```
auto-liquidity=off
max-mining-fee=5000
```

If you don’t see these values, it means auto-liquidity is still ON. In that case, Phoenixd will require you to open a channel with 25,000 sats, which will give you about 2M sats of inbound liquidity.
If you want less liquidity (and therefore pay less to open the channel), return to Step 6: Configure phoenixd for inbound liquidity and adjust your settings.

:::info
These sats cover the mining fee to open a channel with ACINQ.
They are not refundable.
:::

# Step 8: Access Ambrosia

1. Open your web browser (Chrome, Firefox, Safari, Edge, etc.)
2. Navigate to: **http://localhost:3000**
3. You should see the Ambrosia onboarding screen

:::warning
You may need to turn off your VPS if page is not loading
:::