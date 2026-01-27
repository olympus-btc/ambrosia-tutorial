---
title: "Closing a channel"
sidebar_position: 5
slug: /channel-close-electron
---

# Close a Lightning Channel

## Prerequisites

- The `channel ID` you want to close
- A valid `Bitcoin on-chain address`
- A suitable `fee rate (in sat/vbyte)`

:::info
Ambrosia must be running in order to close the channel
:::

:::warning
Closing a channel is **final** and **cannot be cancelled**.
All funds will be sent to the on-chain Bitcoin address you provide.
:::

## Step 1: Open a terminal and navigate to the Phoenix CLI

### For Linux (Ubuntu/Debian)
```bash
# Navigate to Ambrosia directory:
cd /opt/AmbrosiaPoS/resources/phoenixd/linux-x64
# Verify the binary exists:
ls | grep phoenix
```
You should see `phoenix-cli`.

### For Linux (Arm64)
```bash
# Navigate to Ambrosia directory:
cd /opt/AmbrosiaPoS/resources/phoenixd/linux-arm64
# Verify the binary exists:
ls | grep phoenix
```
You should see `phoenix-cli`.

### For MacOS (Arm64)
```bash
# Navigate to Ambrosia directory:
cd /Applications/AmbrosiaPoS.app/Contents/Resources/phoenixd/macos-arm64
# Verify the binary exists:
ls | grep phoenix
```
You should see `phoenix-cli`.

### For MacOS (Amd64)
```bash
# Navigate to Ambrosia directory:
cd /Applications/AmbrosiaPoS.app/Contents/Resources/phoenixd/macos-x64
# Verify the binary exists:
ls | grep phoenix
```
You should see `phoenix-cli`.

### For Windows

:::warning
Requires JRE21 and PowerShell
:::

Navigate to the Ambrosia directory:
```ps
cd C:\Users\[My-User]\AppData\Local\Programs\AmbrosiaPoS\resources\phoenixd\win-arm64\bin\
```

## Step 2: List your channels

### For Linux/MacOS
Run the CLI to list all channels:
```bash
./phoenix-cli listchannels
```
Copy the `channelId` of the channel you want to close.

### For Windows
Run the CLI to list all channels:
```ps
.\phoenix-cli.bat listchannels
```
Copy the `channelId` of the channel you want to close.

## Step 3: Close the channel

### For Linux/MacOS
Run the following command:

```bash
./phoenix-cli closechannel \
  --channelId=<CHANNEL_ID> \
  --address=<BITCOIN_ADDRESS> \
  --feerateSatByte=7
```

### For Windows
Run the following command:

```ps
.\phoenix-cli.bat closechannel \
  --channelId=<CHANNEL_ID> \
  --address=<BITCOIN_ADDRESS> \
  --feerateSatByte=7
```

## Result

If successful, Phoenix returns the transaction ID of the closing transaction:

```text
758b3df67c62c9cd9ebbde1ff6eaadc1c51f94d5b1a3efb2548236b9a6f1c659
```

You can track this transaction using a Bitcoin block explorer.
