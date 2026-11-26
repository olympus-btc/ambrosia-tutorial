---
title: "Reports"
sidebar_position: 7
---

# Reports

**Reports** shows how your store is selling: totals, charts and every order and product sold in a period. To open it, your role needs the **View reports** permission (see [Users and Roles](./users-and-roles.md)).

## Choose the Period

Go to **Reports**. The page opens on **This Month**. Click the period button and, in **Select Period**, choose **Today**, **This Week**, **This Month** or **This Year**, or pick a start and end date in the date range field for a custom period.

Everything on the page follows the selected period.

## Orders Tab

**Orders** is the tab that opens first. It looks at your sales order by order.

- **Summary** shows **Total Revenue**, **Orders**, **Average Ticket** and **Average Items / Order**. If there were discounts, refunds or Lightning liquidity fees in the period, it also shows **Total Discounts**, **Total Refunded**, **Net Revenue** (revenue minus refunds) and **Total Lightning Liquidity Fees**.
- **Analytics** shows the **Revenue Over Time**, **Orders Over Time** and **Top Users by Orders** charts.
- The order list can be filtered with **Search**, by product, and with **Payment Method**. Click **Details** on an order to see its products, discount, total and, if there was one, the **Lightning network fee** in **Order Detail**.

## Products Tab

**Products** looks at your sales product by product.

- **Summary** shows **Total Revenue**, **Items Sold**, **Product Lines** and **Unique Products**. If there were bitcoin payments, refunds or Lightning liquidity fees, it also shows **Total Bitcoin**, **Total Refunded**, **Total Refunded (Bitcoin)**, **Net Revenue** and **Total Lightning Liquidity Fees**.
- **Analytics** shows the **Revenue Over Time**, **Top Products by Revenue** and **Payment Method Distribution** charts.
- **Sales Detail** lists every product sold, with the **Lightning network fee** of the sales that had one, and can be filtered with **Search** and **Payment Method** too.

## Shifts Tab

The **Shifts** tab only appears if your role has the **View shifts report** permission, which admin roles have by default. It shows the shifts of the period and their cash differences; see [Review Past Shifts](./shifts.md#review-past-shifts).

## Export to CSV

The order list, **Sales Detail** and the shift list each have an **Export CSV** button. It downloads the list as a CSV file you can open in a spreadsheet. The order list and **Sales Detail** exports include a column with the Lightning network fee.
