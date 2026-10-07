---
title: "Shifts"
sidebar_position: 2
---

# Shifts

A shift covers the time a cashier works the register, from the cash in the drawer at the start to the cash at the end. Ambrosia uses shifts to tell you how much cash should be in the drawer when you close.

## Open a Shift

You need an open shift to sell. When you go to **Sale** and no shift is open, Ambrosia shows **Open Shift Required**:

1. Enter the **Starting amount in cash register**: the cash in the drawer, or `0`.
2. Click **Open Shift**.

The shift stays open until someone closes it. Opening one requires the **Open shifts** permission (see [Users and Roles](./users-and-roles.md)).

## Check the Active Shift

While a shift is open, an **Active shift** button appears in the bottom-right corner of the screen. Click it to see when the shift was opened, the **Total sales**, the **Total tickets** and the **Opening cash**.

## Close a Shift

1. Click **Active shift** and then **Close shift**.
2. In **Confirm Shift Close**, enter the **Final amount in cash register**: the cash you count in the drawer.
3. Review the summary:
   - **Opening cash**, **Total sales**, **Total tips**, **Cash sales** and **Cash refunds**.
   - **Expected total**: the opening cash plus cash sales, minus cash refunds.
   - **Difference**: the final amount minus the expected total. Green means it matches, orange means there's more cash than expected and red means there's less.
4. Click **Close Shift**.

### Z Report

The close window also shows the **Z Report**: the shift period, the totals and the breakdown **By payment method**. If you set up a customer receipt printer, click **Print Z Report** to print it before closing the shift.

## Review Past Shifts

Go to **Reports** and open the **Shifts** tab. For the selected period you see each shift with its user, **Opened** and **Closed** times, **Initial Amount**, **Final Amount** and **Difference**, plus the totals and a **Difference by Day** chart.

- Click **Details** to see a single shift.
- Click **Export CSV** to download the list.
