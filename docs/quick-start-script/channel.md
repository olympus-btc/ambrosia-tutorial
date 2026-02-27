---
title: "Closing a channel"
sidebar_position: 5
slug: /channel-close-script
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

## Step 1: Ensure phoenixd is running

Verify that `phoenixd` is running. If you installed it as a systemd service, you can check its status:

```bash
systemctl status phoenixd
```

## Step 2: List your channels

List all channels using `phoenix-cli`:

```bash
phoenix-cli getinfo
```

Copy the `channelId` of the channel you want to close.

## Step 3: Close the channel

Run the following command:

```bash
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

:::info
The channel status will display as 'Negotiating' even after a successful closure, this is a phoenixd bug, the channel should be closed after 6 confirmations and sats won't be available since they were sent to an on chain address.
:::
