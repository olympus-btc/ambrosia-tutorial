---
title: "Configuration"
sidebar_position: 2
slug: /quick-configuration-docker
---

import Onboarding from '../_partials/onboarding.mdx';

# Configuration

## Initial Setup (Onboarding)

When you first open Ambrosia in your browser, you will be greeted by the onboarding wizard. This process will guide you through creating your first store and administrator account.

<Onboarding />

## Open a Channel / Get Inbound Liquidity

Next, we deposit 5k sats into our node:

- On the Dashboard, go to Wallet

:::warning
If your wallet keeps asking for a password even after you have correctly entered it, it's a bug (Will be fixed soon), just refresh the web page or hit Ctrl + R on your keyboard
:::

- Enter your password

- Enter amount e.g.

```
5000
```

- Add a description (Optional) e.g. 

```
Channel open
```

:::warning
Make sure you create the invoice for 5000 sats to open the channel, otherwise payment could fail
:::

- Scan it with your lightning wallet and pay, you should see a confirmation on the screen.

:::info
These sats cover the mining fee to open a channel with ACINQ.
They are not refundable.
:::
