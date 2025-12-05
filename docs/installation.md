---
title: "Installation"
sidebar_position: 2
slug: /installation
---

# Installation

Learn how to install Ambrosia Point of Sale on your system using Docker.

## Overview

Ambrosia uses Docker to simplify the installation process and ensure all dependencies are properly configured. With Docker, you don't need to manually install Node.js, databases, or other dependencies - everything is packaged in containers that work consistently across different systems.

## Prerequisites

Before installing Ambrosia, you need:
- Docker installed on your system
- Git installed to clone the repository
- Terminal access (Command Prompt, Terminal, or PowerShell)

## System Requirements

### Minimum Requirements
- **OS**: Linux (Ubuntu 20.04+, Debian 10+), macOS 10.15+, or Windows 10/11
- **RAM**: 2GB minimum, 4GB recommended
- **Disk Space**: 2GB free space
- **Network**: Internet connection

### Recommended for Production
- **OS**: Linux server (Ubuntu 22.04 LTS recommended)
- **RAM**: 4GB or more
- **Disk Space**: 10GB+ for growth
- **Network**: Stable internet connection, static IP recommended

## Step 1: Install Docker

Docker is the containerization platform that runs Ambrosia and all its dependencies.

### For Linux (Ubuntu/Debian)

Open your terminal and run the following commands:

```bash
# Update package list
sudo apt update

# Install Docker
sudo apt install curl docker.io

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Add your user to the docker group (allows running Docker without sudo)
sudo usermod -aG docker $USER

# Refresh your user session to apply group changes
su - $USER
```

### For macOS

1. Download Docker Desktop for Mac from [docker.com](https://www.docker.com/products/docker-desktop)
2. Open the downloaded `.dmg` file
3. Drag Docker to your Applications folder
4. Launch Docker from Applications
5. Follow the setup wizard
6. Docker will start automatically

### For Windows

1. Download Docker Desktop for Windows from [docker.com](https://www.docker.com/products/docker-desktop)
2. Run the installer
3. Follow the installation wizard
4. Restart your computer when prompted
5. Launch Docker Desktop from the Start menu
6. Wait for Docker to start (you'll see a green icon in the system tray)

### Verify Docker Installation

After installing Docker, verify it's working correctly:

```bash
docker --version
```

You should see output like:
```
Docker version 28.2.2, build 28.2.2-0ubuntu1
```

If you see the version number, Docker is installed correctly!

## Step 2: Install Git (If Not Already Installed)

Git is needed to download the Ambrosia source code from GitHub.

### Check if Git is Installed

```bash
git --version
```

If you see a version number, Git is already installed. Skip to Step 3.

### Install Git

**For Linux (Ubuntu/Debian):**
```bash
sudo apt install git
```

**For macOS:**
```bash
brew install git
```
(Requires Homebrew. If you don't have Homebrew, download Git from [git-scm.com](https://git-scm.com))

**For Windows:**
Download and install from [git-scm.com](https://git-scm.com/download/win)

## Step 3: Clone the Ambrosia Repository

Now we'll download the Ambrosia source code from GitHub.

### Navigate to Your Preferred Directory

First, decide where you want to install Ambrosia. For example:

```bash
# Option 1: Install in your home directory
cd ~

# Option 2: Install in a specific projects folder
cd ~/projects
```

### Clone the Repository

Run the following commands to download Ambrosia:

```bash
# Clone the repository from GitHub
git clone https://github.com/olympus-btc/ambrosia.git

# Navigate into the project directory
cd ambrosia
```

### Verify the Files

Check that you're in the correct directory with the project files:

```bash
ls
```

You should see files including:
- `docker-compose.yml` (Docker configuration)
- `README.md` (Project documentation)
- Various folders like `server`, `client`, etc.

## Step 4: Build the Project with Docker

Now we'll use Docker Compose to build and start all the necessary services.

### Understanding Docker Compose

Docker Compose is a tool that manages multi-container Docker applications. Ambrosia uses several containers:
- **Web application**: The main Ambrosia POS interface
- **Bussiness Logic**: API connected to a database for storing your data
- **Lightning node**: Phoenix daemon for Bitcoin payments

The `docker-compose.yml` file defines all these services and how they work together.

### Build and Start the Containers

From the `ambrosia` directory, run:

```bash
docker-compose up -d
```

**What this command does:**
- `docker-compose up`: Starts all services defined in docker-compose.yml
- `-d`: Runs in "detached" mode (in the background)

**This process may take 3-5 minutes on first run**, especially on slower internet connections. Subsequent starts will be much faster.

## Step 5: Access Ambrosia

Congratulations! Ambrosia is now running on your system.

### Open the Application

1. Open your web browser (Chrome, Firefox, Safari, Edge, etc.)
2. Navigate to: **http://localhost:3000**
3. You should see the Ambrosia onboarding screen

### Stopping Ambrosia

When you're done using Ambrosia, you can stop the containers:

```bash
# Stop all containers
docker-compose stop
```
