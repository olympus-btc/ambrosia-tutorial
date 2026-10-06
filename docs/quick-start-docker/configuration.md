---
title: "Configuration"
sidebar_position: 2
slug: /quick-configuration-docker
---

import Onboarding from '../_partials/onboarding.mdx';
import SeedBackup from '../_partials/seed-backup.mdx';
import OpenChannel from '../_partials/open-channel.mdx';

# Configuration

## Initial Setup (Onboarding)

When you first open Ambrosia in your browser, you will be greeted by the onboarding wizard. This process will guide you through creating your first store and administrator account.

<Onboarding />

<SeedBackup />

## Open a Channel / Get Inbound Liquidity

Your node opens its first Lightning channel, with ACINQ, when it receives its first payment. You turned auto-liquidity off in steps 6 and 7 of the installation, so a payment of 5000 sats is enough to open it.

<OpenChannel />
