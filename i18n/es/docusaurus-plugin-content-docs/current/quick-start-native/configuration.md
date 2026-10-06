---
title: "Configuración"
sidebar_position: 2
slug: /quick-configuration-native
---

import Onboarding from '../_partials/onboarding.mdx';
import SeedBackup from '../_partials/seed-backup.mdx';
import OpenChannel from '../_partials/open-channel.mdx';

# Configuración

## Configuración Inicial (Onboarding)

Cuando abres Ambrosia en tu navegador por primera vez, serás recibido por el asistente de onboarding. Este proceso te guiará para crear tu primera tienda y cuenta de administrador.

<Onboarding />

<SeedBackup />

## Abrir un Canal / Obtener Liquidez Entrante

Tu nodo abre su primer canal Lightning, con ACINQ, cuando recibe su primer pago. Por defecto, phoenixd pide 2M sats de liquidez entrante, lo que requiere un primer pago de unos 25,000 sats. Para abrir el canal con 5000 sats, apaga la auto-liquidez antes de tu primer depósito:

```bash
sed -i '/^auto-liquidity=/d;/^max-mining-fee=/d' ~/.phoenix/phoenix.conf && printf 'auto-liquidity=off\nmax-mining-fee=5000\n' >> ~/.phoenix/phoenix.conf
```

Después reinicia phoenixd para que tome el cambio. Si instalaste los servicios systemd, ejecuta:

```bash
sudo systemctl restart phoenixd
```

Si no, haz clic en **Reiniciar phoenixd** en **Configuración** → **Sistema**, o detén `run-phoenixd.sh` con Ctrl + C y vuelve a iniciarlo.

Revisa el resultado con `cat ~/.phoenix/phoenix.conf`. El archivo debe terminar con estas dos líneas:

```
auto-liquidity=off
max-mining-fee=5000
```

Si prefieres 2M sats de liquidez entrante, omite este paso y haz tu primer pago de unos 25,000 sats.

<OpenChannel />
