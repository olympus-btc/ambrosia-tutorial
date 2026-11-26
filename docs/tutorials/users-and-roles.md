---
title: "Users and Roles"
sidebar_position: 1
---

# Users and Roles

Each person who uses Ambrosia should have their own user, with a PIN to log in and a role that decides what they can see and do. You manage both from **Users** in the Dashboard.

:::info
You need permissions to manage users and roles. The admin account you created during setup has all of them.
:::

## Add a User

1. Go to **Users** and click **Add User**.
2. Fill in the fields:
   - **Name** (required): the name shown on the login screen.
   - **PIN** (required): 6 digits to log in.
   - **Email** and **Phone** (optional).
   - **Role** (required): what the user can do. See [Roles](#roles) below.
   - **Your PIN** (required): your own PIN, to confirm the change.
3. Click **Add**.

The new user appears in **Select Employee** on the login screen and logs in with their PIN.

## Edit or Delete a User

- Click **Edit** on the user, change what you need, enter **Your PIN** and click **Save**. This is also where you change the user's role or PIN: type 6 new digits in **PIN**, or leave it empty to keep the current one.
- Click **Delete**, enter **Your PIN** and confirm with **Delete**. This action cannot be undone.

Ambrosia doesn't let you delete the only user, or remove or delete the last admin.

## Users with a 4-Digit PIN

Before 0.11.0-beta, PINs had 4 digits. A user who still has one can log in, and then sees **Update your PIN**. An administrator can click **Go to Users** and change the PIN as shown above; any other user clicks **Later** and asks an administrator to change it.

## Roles

Below the user list, **Roles & permissions** shows the store's roles. A role is a set of permissions grouped by area: **People & access**, **Catalog**, **Sales & orders**, **Payments & cash**, **Settings**, **Shifts**, **Tickets** and **Reports**.

### Create a Role

1. Click **Add Role**.
2. Enter the **Role name**, for example `Cashier`.
3. Start from a template, or use **Advanced mode** to choose each permission yourself:
   - **Cashier**: process sales and payments.
   - **Seller**: browse products and create orders.
   - **Manager**: full operational access.
   - **Administrator**: full system access.
4. Enter **Your PIN** and click **Create role**.

Turning on **With admin privileges** gives the role every permission. Only an administrator can create or assign an admin role.

### Edit or Delete a Role

- Click **Edit**, change the name or the permissions, enter **Your PIN** and click **Save changes**.
- Click **Delete** and confirm with **Your PIN** to remove a role. Users with that role are left without one until you assign another.

## Permissions to Keep in Mind

Some screens and actions only appear with a specific permission:

| Permission | What it allows |
| --- | --- |
| **Open shifts** | Open a shift, which is required to sell |
| **Register payments** | Charge sales |
| **Apply discounts** | Add a discount at checkout |
| **Refund orders** | Refund a sale |
| **Access wallet** | Open the Wallet |
| **View reports** | See the reports |
| **Edit settings** | Change the store settings |

A user who opens a screen without the right permission sees a message asking an administrator to grant it.
