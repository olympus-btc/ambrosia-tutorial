---
title: "Processing Sales (Cart)"
sidebar_position: 5
slug: /cart
---

# Processing Sales (Cart)

Learn how to use the Cart system to process sales and accept payments, including Bitcoin Lightning Network payments.

## Overview

The Cart is where all sales transactions happen. It's your main Point of Sale interface where you can browse products, add items to a customer's order, adjust quantities, select payment methods, and complete transactions. The Cart supports multiple payment methods including Cash, Credit Card, Debit Card, and Bitcoin via Lightning Network.

## Accessing the Cart

1. From the Dashboard, click on **Cart** in the left sidebar menu
2. You'll see the main POS interface with:
   - **Left side**: Product catalog with search and category filters
   - **Right side**: Order summary with cart items and payment controls

## Understanding the Cart Interface

### Product Catalog (Left Side)

The product catalog shows all available products for sale:

**Search Bar**
- Located at the top
- Type product names to quickly find items
- Real-time search filters products as you type
- Example: Type "Jade" to find all Jade wallet products

**Category Filters**
- Buttons below the search bar
- **All**: Shows all products
- Category buttons (e.g., "Electronics", "Hardware Wallets"): Filter by specific category
- Click any category to show only products in that category

**Product Cards**
Each product is displayed in a card showing:
- Product name
- Category badge
- Price (in MXN by default)
- SKU (Stock Keeping Unit)
- Stock level (e.g., "20 in stock")
- **Add** button to add to cart

### Order Summary (Right Side)

The summary panel shows your current transaction:

**Cart Items**
- Lists all products added to the order
- Each item shows:
  - Product name
  - Price per unit
  - Quantity controls (+ and - buttons)
  - Total for that item
  - Red delete button (trash icon) to remove from cart

**Totals Section**
- **Subtotal**: Sum of all items before discounts
- **Discount**: Any discounts applied (default $0.00)
- **Total**: Final amount to charge

**Payment Controls**
- **Payment Method** dropdown: Select Cash, Credit Card, Debit Card, or BTC
- **Pay** button: Completes the transaction

## Processing a Sale: Step-by-Step

### Step 1: Add Products to Cart

**Method 1: Browse and Add**
1. Look through the product cards on the left
2. Find the product you want to sell
3. Click the green **Add** button on the product card
4. The product appears in the Order Summary on the right

**Method 2: Search and Add**
1. Click in the search bar
2. Type the product name (e.g., "Jade")
3. The product list filters to show matching items
4. Click **Add** on the desired product

**Method 3: Filter by Category**
1. Click a category button (e.g., "Hardware Wallets", "Electronics")
2. Browse products in that category
3. Click **Add** on the desired products

### Step 2: Adjust Quantities

After adding items to the cart, you can adjust quantities:

1. Find the item in the Order Summary (right side)
2. Use the **+** button to increase quantity
3. Use the **-** button to decrease quantity
4. The line total and order total update automatically

:::note
You can add the same item multiple times, or adjust quantities directly. Both methods work the same way.
:::

### Step 3: Remove Items (If Needed)

To remove an item from the cart:

1. Find the item in the Order Summary
2. Click the red **trash icon** button on the right side of the item
3. The item is immediately removed from the cart
4. Totals update automatically

### Step 4: Review the Order

Before processing payment:

1. Check all items in the cart are correct
2. Verify quantities are accurate
3. Confirm the total amount matches customer expectations
4. Review the **Subtotal** and **Total** amounts

### Step 5: Select Payment Method

Click on the **Payment Method** dropdown to see available options:

**Available Payment Methods:**

- **Cash**: For cash transactions
- **Credit Card**: For credit card payments
- **Debit Card**: For debit card payments  
- **BTC**: For Bitcoin Lightning Network payments

Select the method your customer wants to use.

### Step 6: Process the Payment

#### For Cash, Credit Card, or Debit Card:

1. Select the appropriate payment method
2. Click the **Pay** button
3. The transaction is processed
4. A success notification appears
5. The cart clears automatically, ready for the next customer

#### For Bitcoin Lightning Network (BTC):

Bitcoin payments via Lightning Network are instant and have minimal fees. Here's how they work:

1. Select **BTC** from the payment method dropdown
2. Click the **Pay** button
3. A modal dialog appears titled "Pay with Bitcoin"
4. The dialog shows:
   - A QR code containing the Lightning invoice
   - The total amount in both MXN and satoshis (sats)
   - Text: "Ask the customer to scan the QR to complete the payment"
5. Have the customer:
   - Open their Lightning wallet (e.g., Phoenix, Muun, Wallet of Satoshi, Zeus)
   - Scan the QR code with their wallet
   - Confirm the payment in their wallet app
6. The payment happens instantly (usually within 1-2 seconds)
7. When payment is received, click **Payment Received** button
8. A green success notification appears: "Bitcoin payment marked as completed"
9. The cart clears automatically, ready for the next customer


### Step 7: Start Next Sale

After completing a payment:
- The cart automatically clears
- The Summary shows $0.00
- You're ready to process the next customer
- All product inventory is automatically updated
