---
title: "Store Settings"
sidebar_position: 8
---

# Store Settings

**Settings** groups your store's options in tabs. This tutorial covers **Business**, **Preferences** and **Printing**, plus the admin notifications and the in-app tutorials.

Everyone sees **Business**, **Preferences** and **Printing**, but changing them needs a permission: **Edit settings** for **Business** and **Configure printer** for **Printing** (see [Users and Roles](./users-and-roles.md)). The wallet, backup, system and help tabs are only for admins.

## Business

### Store Information

**Store information** shows your store's **Name**, **Tax ID**, **Address**, **Timezone**, **Email**, **Phone** and **Logo**. Click **Edit**, change what you need and click **Save**.

The **Timezone** decides which day each sale, refund and shift belongs to, and so what the [Reports](./reports.md) periods include. Set it to where your store is.

The **Name**, **Address**, **Phone** and **Email** can also be printed on your tickets (see [Ticket Templates](#ticket-templates)).

### Currency

In **Currency**, **Change currency** sets the currency of your prices. Changing it doesn't convert the prices you already entered, so review your products after the change.

**Price step** sets how many cents a price goes up or down when you adjust it; see [Price Step](./products.md#price-step).

### Tips

1. In **Tips**, turn on **Enable tips**.
2. Under **Suggested percentages**, click the percentages you want to offer at checkout. They start at 10%, 15% and 20%.
3. To offer another one, click **Custom**, enter the percentage and click **Add**.
4. Click **Save**.

At checkout, the **Tip** section shows these percentages, plus **No tip** and **Custom** for any other percentage or amount.

## Preferences

These two options are saved on the device and browser you're using, not for the whole store. Set them on each device.

- **Language:** choose English or Spanish.
- **Display:** turn on **Disable animations** to make Ambrosia faster on low-resource devices.

## Printing

Ambrosia prints the customer receipt automatically after each paid sale, on a thermal receipt printer (ESC/POS). For that it needs a ticket template and a printer that uses it.

### Ticket Templates

A ticket has no content until you give it a template.

1. In **Ticket templates**, click **Add**.
2. Enter the **Template name**.
3. Click **Add element** for each part of the ticket, and choose its **Type**:

   | Type | What it prints |
   | --- | --- |
   | **Header**, **Text**, **Footer** | The **Value** you enter |
   | **Line break** | An empty line |
   | **Separator** | The **Value** repeated across the ticket, for example `-` |
   | **Table header** | The **Value**, for example `Qty  Product  Price` |
   | **Table row** | One line per product sold, with its quantity and price |
   | **Total row** | The discount and tip, if any, and the total |
   | **QR code** | A QR code of the **Value** |

4. To print your store's data, click the braces button next to **Value** and choose a field in **Business Info**: **Name**, **Address**, **Phone** or **Email**.
5. Adjust the **Alignment**, the **Size** and **Bold** of each element. **Preview** shows how the ticket looks.
6. Click **Create**.

To change a template, choose it in **Templates**, edit it and click **Save**. With a printer set up, **Print test** prints the template with sample data.

### Printers

The printer list shows the printers installed on the computer that runs Ambrosia. Install your receipt printer there first.

1. In **Add printer**, choose the **Printer** and the **Template**. The **Type** is **Customer**, the receipt printer.
2. Click **Add**. The printer appears in **Configured printers**.

On each configured printer you can change its **Template**, turn **Default printer** and **Enabled** on or off, or click **Remove**. The receipt prints on the default printer, which must be enabled.

The same printer prints the **Z Report** when you close a shift (see [Shifts](./shifts.md)).

## Notifications

Admins get notifications about wallet activity, such as payments received or sent and channels closed. They appear in **Notifications** in the menu.

To choose how you get them, go to **Settings** → **System** → **Notifications**:

- **In-app:** notifications inside Ambrosia.
- **Web Push:** browser notifications on this device. The browser asks for permission the first time. Click **Test push** to try it.

## Tutorials

Ambrosia's in-app tours, such as the one that shows how to open your Lightning channel, can be replayed. Go to **Settings** → **Help** → **Tutorials** and click **Replay**.
