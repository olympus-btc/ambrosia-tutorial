---
title: "Closing a channel"
sidebar_position: 5
slug: /channel-close-docker
---

# Close a Lightning Channel

## Prerequisites

- The `channel ID` you want to close
- A valid `Bitcoin on-chain address`
- A suitable `fee rate (in sat/vbyte)`
- Ambrosia containers must be running

:::warning
Closing a channel is **final** and **cannot be cancelled**.  
All funds will be sent to the on-chain Bitcoin address you provide.
:::

## Step 1:  Open a terminal and ensure phoenixd is running

### For Linux/MacOS
Verify that the Phoenix container is up:
```bash
docker ps
```
You should see a container named `phoenixd`.

### For Windows
Verify that the Phoenix container is up:
```bash

```
You should see a container named `phoenixd`.

## Step 2: List your channels

### For Linux/MacOS
Run the Phoenix CLI inside the phoenixd container to list all channels:
```bash
docker exec phoenixd phoenix-cli listchannels
```
Copy the `channelId` of the channel you want to close.

### For Windows
Run the Phoenix CLI inside the phoenixd container to list all channels:
```bash

```
Copy the `channelId` of the channel you want to close.

## Step 3: Close the channel

### For Linux/MacOS
Run the following command:
```bash
docker exec phoenixd phoenix-cli closechannel \
  --channelId=<CHANNEL_ID> \
  --address=<BITCOIN_ADDRESS> \
  --feerateSatByte=7
```

### For Windows
Run the following command:
```bash

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
