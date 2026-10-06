---
title: "Configuration"
sidebar_position: 2
slug: /quick-configuration-desktop-app
---

import Onboarding from '../_partials/onboarding.mdx';
import SeedBackup from '../_partials/seed-backup.mdx';
import OpenChannel from '../_partials/open-channel.mdx';

# Configuration

## Initial Setup (Onboarding)

When you first open the Ambrosia Desktop App, you will be greeted by the onboarding wizard. This process will guide you through creating your first store and administrator account.

<Onboarding />

<SeedBackup />

## Open a Channel / Get Inbound Liquidity

Your node opens its first Lightning channel, with ACINQ, when it receives its first payment. The Desktop App comes with auto-liquidity turned off, so a payment of 5000 sats is enough to open it.

<OpenChannel />

:::tip
Need more inbound liquidity later? In **Settings** → **Bitcoin & Wallet** → **Lightning Network**, click **Manage Auto Liquidity**, confirm your wallet password and turn on **Auto Liquidity**. Your node will then open channels automatically when it needs inbound liquidity, and on-chain fees apply each time.
:::
