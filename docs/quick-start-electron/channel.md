---
title: "Closing a channel"
sidebar_position: 5
slug: /channel-close-electron
---

# Close a Lightning Channel

:::warning
Closing a channel is **final** and **cannot be cancelled**.  
Only do this if you're closing your shop or you're doing a workshop.
:::

:::info
Ambrosia must be running in order to close the channel.
:::

## Prerequisites

- The `channel ID` you want to close
- A valid `Bitcoin on-chain address`
- A suitable `fee rate (in sat/vbyte)`

:::info
You can see current fee rates using a Bitcoin block explorer like https://mempool.space/
:::

:::warning
Fee rate is for the child's feerate, set a higher value for an effective parent+child fee rate.  
All funds will be sent to the on-chain Bitcoin address you provide.
:::

## Step 1: Open a terminal and run this:

### For Linux (Ubuntu/Debian)
```bash
export PATH="/opt/AmbrosiaPoS/resources/phoenixd/linux-x64:$PATH"
```

### For Linux (Arm64)
```bash
export PATH="/opt/AmbrosiaPoS/resources/phoenixd/linux-arm64:$PATH"
```

### For MacOS (Arm64)
```bash
export PATH="/Applications/AmbrosiaPoS.app/Contents/Resources/phoenixd/macos-arm64:$PATH"
```

### For MacOS (Amd64)
```bash
export PATH="/Applications/AmbrosiaPoS.app/Contents/Resources/phoenixd/macos-x64:$PATH"
```

### For Windows

:::warning
Requires JRE21 and PowerShell
:::

#### Install JRE21:

1. Go to https://adoptium.net/temurin/releases/?version=21 and download the Windows version
2. Run the .exe file
3. Follow the Installation wizard

### For Windows (Arm64)

Open the terminal and run:
```ps
$env:PATH = "C:\Users\My-User\AppData\Local\Programs\AmbrosiaPoS\resources\phoenixd\win-arm64\bin;$env:PATH"
```

### For Windows (Amd64)
Open the terminal and run:
```ps
$env:PATH = "C:\Users\My-User\AppData\Local\Programs\AmbrosiaPoS\resources\phoenixd\win-x64\bin;$env:PATH"
```

## Step 2: List your channels

### For Linux/MacOS
Run the CLI to list all channels:
```bash
phoenix-cli getinfo
```
Copy the `channelId` of the channel you want to close.

### For Windows
Run the CLI to list all channels:
```ps
phoenix-cli getinfo
```
Copy the `channelId` of the channel you want to close.

## Step 3: Close the channel

### For Linux/MacOS
Run the following command:

```bash
phoenix-cli closechannel \
  --channelId=<CHANNEL_ID> \
  --address=<BITCOIN_ADDRESS> \
  --feerateSatByte=<FEE_RATE>
```

### For Windows
Run the following command:

```ps
phoenix-cli closechannel \
  --channelId=<CHANNEL_ID> \
  --address=<BITCOIN_ADDRESS> \
  --feerateSatByte=<FEE_RATE>
```

## Result

If successful, Phoenix returns the transaction ID of the closing transaction:

```text
758b3df67c62c9cd9ebbde1ff6eaadc1c51f94d5b1a3efb2548236b9a6f1c659
```

You can track this transaction using a Bitcoin block explorer like https://mempool.space/
