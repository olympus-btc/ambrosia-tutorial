---
title: "Wallet"
sidebar_position: 3
---

# Wallet

The **Wallet** is where you see the balance of your Lightning node, receive and send payments, and review the transaction history. You need the **Access wallet** permission (see [Users and Roles](./users-and-roles.md)).

## Open the Wallet

1. From the Dashboard, go to **Wallet**.
2. In **Confirm Wallet Access**, enter your wallet password and click **Access**.

:::info
If secrets encryption is locked, unlock it first in **Settings** → **Secrets encryption**.
:::

## Node Information

**Node Information** shows the **Total Balance**, the **Network**, the number of **Channels**, the current **Block** and your **Lightning Address**.

Under **Lightning Channels**, each channel shows its balance, its **Total Capacity:** and its **Inbound Liquidity:**, which is how much you can still receive through it. This is also where you close a channel (see the Quick Start guide "Closing a channel").

## Receive a Payment

1. Open the **Receive** tab.
2. Choose **Sats** or your store's currency and enter the amount.
3. Add a **Description (optional)**.
4. Click **Create Lightning Invoice**.

The **Lightning Invoice Generated** window shows the QR and the invoice, which you can **Copy**. When the payer pays, the payment appears in the history.

## Send a Payment

Use **Send** to move funds out of the POS, for example to your personal wallet.

1. In the wallet that will receive the funds, create an invoice.
2. Open the **Send** tab and paste the invoice in **Invoice BOLT11**, or click **Scan QR** to scan it.
3. Click **Send Lightning Payment**.
4. Review the amount and description in **Confirm Payment**. If the invoice has no amount, enter it in sats or in your currency.
5. Click **Confirm Payment**.

When it's done, **Payment Done** shows the **Amount Sent:** and the **Routing Fee:**.

:::warning
Lightning payments can't be reversed. Check the invoice before you confirm.
:::

## Transaction History

The **History** tab lists your payments. Filter them with **All**, **Received** or **Sent**.

## Change the Wallet Password

At the bottom of the Wallet, **Wallet password** lets you change the password used to unlock wallet actions:

1. Enter the **Current password**.
2. Enter the **New password** and repeat it in **Confirm new password**.
3. Click **Change password**.
