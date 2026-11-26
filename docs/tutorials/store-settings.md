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
4. In **Default custom tip type**, choose whether **Custom** opens at checkout as a percentage (**%**) or as a fixed amount (**$**).
5. Click **Save**.

At checkout, the **Tip** section shows these percentages, plus **No tip** and **Custom** for any other percentage or amount.

## Preferences

These two options are saved on the device and browser you're using, not for the whole store. Set them on each device.

- **Language:** choose English or Spanish.
- **Display:** turn on **Disable animations** to make Ambrosia faster on low-resource devices.

## Printing

Ambrosia prints the customer receipt automatically after each paid sale, and the Z report when you close a shift, on a thermal receipt printer (ESC/POS). For that it needs a printer and, for each kind of ticket, a default template.

### Ticket Templates

A ticket has no content until you give it a template. Each template is for one **Ticket type**: **Sales receipt** or **Z report**.

1. In **Ticket templates**, click **Add**.
2. Enter the **Template name** and choose the **Ticket type**.
3. Click **Add element** for each part of the ticket, and choose its **Type**:

   | Type | What it prints |
   | --- | --- |
   | **Header**, **Text**, **Footer** | The **Value** you enter |
   | **Line break** | An empty line |
   | **Separator** | The **Value** repeated across the ticket, for example `-` |
   | **Table header** | The **Value**, for example `Qty  Product  Price` |
   | **Table row** | One line per product sold, with its quantity and price |
   | **Total row** | The discount and tip, if any, and the total |
   | **Payment method row** | How the sale was paid |
   | **QR code** | A QR code of the **Value** |
   | **Logo** | Your **Business logo** or a **Custom image** in PNG or JPEG, chosen in **Logo source**. A WebP business logo can't be printed. |
   | **Shift summary** | The shift's totals, for a Z report |

4. To print data such as your store's name, the date or the shift's totals, click the button next to **Value** and choose a field in **Variables**.
5. Adjust the **Alignment**, the **Size** and **Bold** of each element. The template's **Date format** and **Time format** set how dates print. **Preview** shows how the ticket looks.
6. Click **Create**.

Each kind of ticket prints with its default template, and a kind without one doesn't print. To choose it, select the template in **Templates** and click **Set as default**: it then shows **Default**.

To change a template, choose it in **Templates**, edit it and click **Save**. With a printer set up, **Print test** prints the template with sample data.

### Printers

The printer list shows the printers installed on the computer that runs Ambrosia. Install your receipt printer there first.

1. In **Add printer**, choose the **Type** and the **Printer**. The receipt printer is the **Customer** type.
2. Click **Add**. The printer appears in **Configured printers**.

On each configured printer you can turn **Default printer** and **Enabled** on or off, or click **Remove**. Receipts and Z reports print on the default **Customer** printer, which must be enabled. The template of each ticket is chosen in [Ticket Templates](#ticket-templates), not on the printer.

### Cash Drawer

If your cash drawer is connected to the receipt printer, Ambrosia can open it. On the printer in **Configured printers**:

1. Turn on **Cash drawer connected**.
2. Choose the **Drawer pin**. Most drawers use **Pin 2**; if yours doesn't open, try **Pin 5**.
3. In **Open when charging with**, check the payment methods that open the drawer when a sale is paid, such as cash.
4. **Open on refunds** opens it when you refund an order paid with one of those methods. **Open when opening a shift** and **Open when closing a shift** open it with the shift (see [Shifts](./shifts.md)). Turn off the ones you don't want.
5. Click **Test drawer** to check it.

Changes are saved as you make them. To open the drawer without a sale, for example to give change, use **Open cash drawer** in the active shift (see [Check the Active Shift](./shifts.md#check-the-active-shift)).

## Notifications

Admins get notifications about wallet activity, such as payments received or sent and channels closed. They appear in **Notifications** in the menu.

To choose how you get them, go to **Settings** → **System** → **Notifications**:

- **In-app:** notifications inside Ambrosia.
- **Web Push:** browser notifications on this device. The browser asks for permission the first time. Click **Test push** to try it.

## Tutorials

Ambrosia's in-app tours, such as the one that shows how to open your Lightning channel, can be replayed. Go to **Settings** → **Help** → **Tutorials** and click **Replay**.
