---
title: "Closing a channel"
sidebar_position: 5
slug: /channel-close-docker
---

# Close a Lightning Channel

:::warning
Closing a channel is **final** and **cannot be cancelled**.
Only do this if you're closing your shop or you're doing a workshop.
:::

:::info
Ambrosia must be running in order to close the channel.
:::

## Step 1: Go to Wallet

From the Dashboard, go to **Wallet** and enter your wallet password.

Under **Lightning Channels**, find your channel and click **Close Channel**.

## Step 2: Enter the details

A **Close Lightning Channel** dialog will appear:

- **Bitcoin Address** — enter the on-chain Bitcoin address where funds will be sent
- **Fee Rate (sat/byte)** — set the fee rate

:::info
You can check current fee rates at https://mempool.space/
:::

Click **Review**.

## Step 3: Confirm

Review the summary:

- Channel balance
- Withdrawal address
- Fee rate

:::warning
**This action is irreversible.** Closing the channel will send all funds to the on-chain address you provided. This process may take time to confirm on the Bitcoin network.
:::

Click **Confirm Close**.

## Result

A success dialog shows **"Channel close initiated"** with a Transaction ID. You can copy it with **Copy TX ID** and track it on a Bitcoin block explorer like https://mempool.space/

:::info
The channel status will show as **"Closing — finalizing closing transaction"**. The channel will be fully closed after 6 confirmations and the funds will be available at the on-chain address you provided.
:::
