---
title: "Configuration"
sidebar_position: 2
slug: /quick-configuration-native
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

Your node opens its first Lightning channel, with ACINQ, when it receives its first payment. By default phoenixd requests 2M sats of inbound liquidity, which needs a first payment of about 25,000 sats. To open the channel with 5000 sats instead, turn auto-liquidity off before your first deposit:

```bash
sed -i '/^auto-liquidity=/d;/^max-mining-fee=/d' ~/.phoenix/phoenix.conf && printf 'auto-liquidity=off\nmax-mining-fee=5000\n' >> ~/.phoenix/phoenix.conf
```

Then restart phoenixd so it picks up the change. If you installed the systemd services, run:

```bash
sudo systemctl restart phoenixd
```

Otherwise, click **Restart phoenixd** in **Settings** → **System**, or stop `run-phoenixd.sh` with Ctrl + C and start it again.

Check the result with `cat ~/.phoenix/phoenix.conf`. The file should end with these two lines:

```
auto-liquidity=off
max-mining-fee=5000
```

If you prefer 2M sats of inbound liquidity, skip this step and make your first payment of about 25,000 sats instead.

<OpenChannel />
