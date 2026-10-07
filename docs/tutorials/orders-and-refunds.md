---
title: "Orders and Refunds"
sidebar_position: 5
---

# Orders and Refunds

Every sale is saved as an order. From **Orders** you can find a sale, see what was sold and how it was paid, and refund it.

## Find an Order

1. From the Dashboard, go to **Orders**. The **Paid** tab lists the completed sales.
2. Use **Search** to find an order by ID or user.
3. For more criteria, click **More filters**. In **Advanced filters** you can filter by **Status**, **Payment method**, **Date range**, **Min total** and **Max total**, and sort by date or total. Click **Apply**, or **Clear** to remove the filters.

## See an Order's Details

Click **Details** on an order. **Order details** shows the user, status, payment method, total, discount, tip and date, plus each product with its quantity, unit price and subtotal. Bitcoin orders also show the payment hash, and bank transfers the **Reference #**.

## Refund an Order

You can refund a paid order if your role has the **Refund orders** permission (see [Users and Roles](./users-and-roles.md)). A refund restores the products' stock and marks the order as refunded.

1. Open the order's **Details** and click **Refund**.
2. Complete the refund for the payment method of the order, as explained below.
3. Click **Process refund**.

### Bitcoin (Lightning)

The window shows the **Amount to refund** in sats. Ask the customer for a Lightning invoice for exactly that amount, paste it in **Customer Lightning invoice** and process the refund. Ambrosia pays the invoice from your wallet.

### Cash

Enter the **Cash given to customer**. **Process refund** is enabled only when it matches the **Amount to refund**, so the **Difference** is zero.

### Card and Bank Transfer

Ambrosia only marks the order as refunded: return the money from your card payment platform or your bank first. Then check **I already processed this refund on my card payment platform** and process the refund.

:::info
Cash refunds count in the shift's cash. When you close the shift, they're subtracted from the expected total (see [Shifts](./shifts.md)).
:::
