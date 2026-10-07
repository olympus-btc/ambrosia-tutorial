---
title: "Products"
sidebar_position: 6
---

# Products

The Quick Start shows how to add, edit and delete a product. This tutorial covers the rest of the catalog: categories, stock, variants, bundles and the price step.

## Categories

Categories group your products in the **Sale** screen. A product can have more than one category.

- **From the product form:** in **Product Category**, type a name and choose **+ Create** to create it on the spot.
- **From the Categories section**, below the product list:
  - Click **Add Category**, enter the **Category Name** and click **Add**.
  - Click **Edit** to rename a category and **Save**, or **Delete** to remove it.

## Stock

With **Track stock** on, each sale subtracts from the product's stock and the **Status** column in the product list tells you how it's doing:

| Status | Meaning |
| --- | --- |
| **Normal** | Enough stock |
| **Low (restock soon)** | Time to restock |
| **Out of stock** | Nothing left to sell |
| **Not tracked** | **Track stock** is off for this product |

Turn **Track stock** off for products you don't count, such as services. Refunds add the stock back (see [Orders and Refunds](./orders-and-refunds.md)).

## Variants

Use variants when you sell the same product in several versions, such as sizes or colors. Each variant has its own SKU, price, stock and image.

1. Create or edit the product and turn on **Has variants**. Price and stock are then managed per variant.
2. Save the product, then click **Variants** on it in the product list. **Manage Variants** opens.
3. Under **Option types**, click **Add option type**. Enter the **Type name**, for example `Size`, and its values: type each one and press Enter (`S`, `M`, `L`).
4. Click **Add variant**, choose a value for each option type and fill in the **Variant SKU**, **Variant Price** and **Variant Stock**. Click **Save**.
5. Repeat for each variant you sell.

When you add a product with variants to a sale, the **Select variant** window asks which one.

## Bundles

A bundle is a product made of other products, such as a gift box. Selling a bundle subtracts stock from its components.

1. Create the product and turn on **Is a Bundle**.
2. In **Bundle Components**, search each product by name or SKU and add it. Set its **Quantity**, and its **Variant** if the component has variants.
3. Set the bundle's price. **Components price:** shows what the components cost separately, as a reference.
4. Save the product.

A product that is part of a bundle can't be deleted while it's in the bundle.

## Price Step

The price step sets how many cents a price goes up or down when you adjust it, for example `5` so prices end in 0 or 5 cents. Change it in **Settings** → **Business** → **Currency** → **Price step**, then click **Save**.

If a product's price doesn't match the step, the product form shows **Actual price:** with the price that will really be used.
