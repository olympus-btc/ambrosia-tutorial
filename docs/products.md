---
title: "Products Management"
sidebar_position: 5
slug: /products
---

# Managing Products

Learn how to add, edit, and manage your inventory in Ambrosia's Point of Sale system.

## Overview

The Products section is where you manage your entire inventory. You can add new products, organize them by categories, set prices, track stock levels, and upload product images. This is the foundation of your POS system - everything you sell starts here.

## Accessing the Products Section

1. From the Dashboard, click on **Products** in the left sidebar menu
2. You'll see a table displaying all your products with the following columns:
   - **Image**: Product photo thumbnail
   - **Name**: Product name
   - **Description**: Brief product description
   - **Category**: Product category
   - **SKU**: Stock Keeping Unit (unique identifier)
   - **Price**: Product price in your local currency (MXN by default)
   - **Stock**: Current inventory quantity
   - **Actions**: Edit and Delete buttons

## Adding a New Product

### Step 1: Open the Add Product Dialog

Click the **Add Product** button in the top-right corner of the Products page.

### Step 2: Fill in Product Information

A modal dialog will appear with several fields to complete:

#### Product Name (Required)
- Enter the name of your product
- This is what customers and staff will see
- Keep it clear and descriptive
- Example: `Jade Hardware Wallet`, `Coffee Beans - Medium Roast`

#### Product Description (Required)
- Add a brief description of the product
- Include key features or details
- This helps staff identify the correct product during sales
- Example: `Blockstream Jade Wallet`, `Organic coffee beans from Colombia`

#### Product Category (Required)
You have two options for categories:

**Option 1: Select an Existing Category**
- Click the **Product Category** dropdown
- Choose from your existing categories
- Example: `Hardware Wallets`, `Electronics`, `Food & Beverage`

**Option 2: Create a New Category**
- Type a new category name in the "Create a new category" field
- Click the **Add category** button
- The new category will be immediately available for selection
- Example: Creating `Hardware Wallets` as a new category

#### SKU (Required)
- Enter a unique Stock Keeping Unit identifier
- This is your internal tracking code
- Can be alphanumeric
- Must be unique for each product
- Example: `jade-green-0001`, `PROD-001`, `HW-JADE-01`

:::tip
Use a systematic SKU naming convention. For example:
- `[category]-[product]-[variant]`
- `HW-JADE-01` (Hardware Wallet - Jade - 01)
- `COFFEE-MED-001` (Coffee - Medium Roast - 001)
:::

#### Product Price (Required)
- Enter the selling price
- The currency is set to MXN by default (Mexican Pesos)
- Use the up/down arrows or type directly
- Example: `1500` (for 1,500 MXN)

:::note
Price is entered in whole currency units. For example, 1500 = 1,500 MXN.
:::

#### Stock Quantity (Required)
- Enter the current inventory quantity
- This number will decrease automatically when you make sales
- Use the up/down arrows or type directly
- Example: `20` (twenty units in stock)

:::warning
Keep your stock counts accurate. When stock reaches zero, you'll know it's time to reorder.
:::


#### Product Image (Optional)
You can add a product image to help with visual identification:

1. Click on the **Upload an Image** area (the dashed box)
2. A file picker will open
3. Select an image file from your computer
4. Supported formats: PNG, JPG, GIF, or TIFF
5. Maximum file size: 5MB
6. The image will be displayed in the products table and during sales

**Best Practices for Product Images**:
- Use clear, well-lit photos
- Square images work best (1:1 aspect ratio)
- Show the actual product
- Keep file sizes reasonable for faster loading

### Step 3: Save the Product

Once all required fields are filled:

1. Review all the information for accuracy
2. Click the **Add** button to create the product
3. Click **Cancel** if you want to discard the changes

The new product will immediately appear in your products table.

## Editing a Product

To modify an existing product:

1. Locate the product in the products table
2. Click the blue **Edit** button (pencil icon) in the Actions column
3. The Edit Product dialog will appear with all current information pre-filled
4. Make your changes to any field
5. Click **Save** to update the product
6. All changes take effect immediately

**Common Edits**:
- Updating stock quantities after receiving new inventory
- Adjusting prices for sales or promotions
- Changing descriptions for clarity
- Updating categories for better organization

## Deleting a Product

To remove a product from the system:

1. Locate the product in the products table
2. Click the red **Delete** button (trash icon) in the Actions column
3. Confirm the deletion when prompted
4. The product will be removed from your inventory

:::danger
Deleting a product is permanent. Make sure you really want to remove it before confirming. Consider marking products as out of stock (stock = 0) instead of deleting if you might carry them again.
:::
