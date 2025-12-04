---
title: "Wallet"
sidebar_position: 7
slug: /wallet
---

# Managing Your Lightning Wallet

Learn how to monitor your Lightning Network node, receive Bitcoin payments, send payments, and track transaction history.

## Overview

The Wallet section is the control center for your Bitcoin Lightning Network operations. Here you can view your node's status, monitor channel liquidity, create Lightning invoices to receive payments, send Bitcoin to other Lightning addresses or invoices, and review your complete transaction history. This is essential for businesses accepting Bitcoin via Lightning Network.

## Security Notice

When you first access the Wallet section, you'll be prompted to enter your password to confirm access. This security measure protects your Bitcoin funds and node information.

**Password Dialog:**
1. A modal appears with "Confirm Wallet Access"
2. Enter your password in the "Password" field
3. Click the eye icon to show/hide your password
4. Click **Log In** to access the wallet
5. Click **Cancel** to cancel and return to the previous page

## Understanding the Wallet Interface

### Node Information (Top Section)

The top panel displays critical information about your Lightning node:

**Total Balance**
- Shows your total available balance in satoshis (sats)
- Example: `2,485 sats`
- This is the sum of all funds in your Lightning channels

**Network**
- Shows which Bitcoin network you're connected to
- `mainnet`: Real Bitcoin (production)
- `testnet`: Test Bitcoin (for development)
- `regtest`: Local testing network

**Channels**
- Number of active Lightning channels
- Example: `1` means you have one open channel
- More channels = more routing capacity and reliability

**Block**
- Current Bitcoin block height
- Example: `926319`
- Shows your node is synchronized with the blockchain

### Lightning Channels Section

This section shows details about your Lightning Network channels:

**Channel #1** (or multiple if you have more channels)

For each channel, you'll see:
- **Status indicator**: Red dot for "Normal" (operational)
- **Balance Sat**: Current balance available in this channel (e.g., `2,485 sats`)
- **Total Capacity**: Maximum amount this channel can hold (e.g., `18,817 sats`)
- **Inbound Liquidity**: Amount you can receive through this channel (e.g., `14,929 sats`)

**Understanding Channel Liquidity:**

Think of a Lightning channel like a water pipe with your Bitcoin on one side and your partner's Bitcoin on the other:

- **Balance**: Bitcoin on your side (you can send this amount)
- **Inbound Liquidity**: Space on your side (you can receive this amount)
- **Total Capacity**: Total size of the pipe (balance + inbound liquidity)

For example, if you have:
- Balance: 2,485 sats (you can send up to this)
- Inbound: 14,929 sats (you can receive up to this)
- Total: 18,817 sats (combined capacity)

## Transaction Management Tabs

Below the node information, there are three tabs:

### 1. Receive Tab

Use this tab to create Lightning invoices and receive Bitcoin payments.

**Creating a Lightning Invoice:**

1. Click the **Receive** tab (it's selected by default)
2. Enter the amount in satoshis in the "Amount in satoshis" field
   - Default: `1000` sats
   - You can change this to any amount
3. (Optional) Add a description in the "Description (optional)" field
   - Example: "Payment concept", "Coffee purchase", "Service fee"
   - This helps you identify the payment later
4. Click the **Create Lightning Invoice** button
5. A Lightning invoice (BOLT11) is generated
6. Share this invoice with the payer:
   - Display the QR code for them to scan
   - Copy and send the invoice string (starts with "lnbc1...")
   - They pay using any Lightning wallet

**Invoice Details:**
- Lightning invoices are time-limited (typically expire after 1 hour)
- The payer scans your QR code or pastes your invoice
- Payment arrives in 1-2 seconds
- Your balance updates immediately

### 2. Send Tab

Use this tab to send Bitcoin via Lightning Network.

**Sending a Lightning Payment:**

1. Click the **Send** tab
2. You'll see a field labeled "Invoice BOLT11"
3. Paste a Lightning invoice you received from someone
   - Lightning invoices start with "lnbc1..." for mainnet
   - Or "lntb1..." for testnet
4. The invoice contains:
   - Payment amount
   - Destination
   - Payment description
5. Click the **Send Lightning Payment** button
6. The payment is sent instantly
7. Your balance decreases by the amount sent plus a small fee

:::tip
- Always verify the invoice before sending
- Double-check the amount
- Lightning payments are irreversible
- Fees are typically negligible
- Payment fails if you don't have enough balance or if there's no route
:::


### 3. History Tab

Use this tab to view all your Lightning transactions.

**Viewing Transaction History:**

1. Click the **History** tab
2. You'll see a list of all transactions
3. Filter transactions by type using the buttons:
   - **All**: Shows all transactions
   - **Received**: Shows only incoming payments
   - **Sent**: Shows only outgoing payments

**Transaction List:**

Each transaction shows:
- **Icon**: Arrow indicating direction (received ← or sent →)
- **Status**: "Received" or "Sent"
- **Amount**: In satoshis with a colored badge (e.g., "10 sats" in green)
- **Fee**: Transaction fee paid (usually 0 sats for received)
- **Date and Time**: When the transaction occurred (e.g., "28/11/2025 7:39:40 p.m.")

**Example Transaction:**
```
← Received     10 sats
   Fee: 0 sats
   28/11/2025 7:39:40 p.m.
```

**Empty History:**

If you haven't made any transactions yet, you'll see:
- Clock icon
- Message: "There is no transactions yet"
- Subtext: "Transactions will appear here once you'll starting to use the wallet"
