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
- Ambrosia must be running

:::warning
Closing a channel is **final** and **cannot be cancelled**.  
All funds will be sent to the on-chain Bitcoin address you provide.
:::

## Step 1: Open a terminal and navigate to the Phoenix CLI

```bash
# Navigate to that directory:
cd /usr/local/bin
# Verify the binary exists:
ls | grep phoenix
```

## Step 2: List your channels

Run the CLI from this directory to list all channels:
```bash
./phoenix-cli listchannels
```
Copy the `channelId` of the channel you want to close.

## Step 3: Close the channel

Run the following command:

```bash
./phoenix-cli closechannel \
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
