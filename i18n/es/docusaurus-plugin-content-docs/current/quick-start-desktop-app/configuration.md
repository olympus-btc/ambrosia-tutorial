---
title: "Configuración"
sidebar_position: 2
slug: /quick-configuration-desktop-app
---

import Onboarding from '../_partials/onboarding.mdx';
import SeedBackup from '../_partials/seed-backup.mdx';
import OpenChannel from '../_partials/open-channel.mdx';

# Configuración

## Configuración Inicial (Onboarding)

Cuando abres la App de Escritorio de Ambrosia por primera vez, serás recibido por el asistente de onboarding. Este proceso te guiará para crear tu primera tienda y cuenta de administrador.

<Onboarding />

<SeedBackup />

## Abrir un Canal / Obtener Liquidez Entrante

Tu nodo abre su primer canal Lightning, con ACINQ, cuando recibe su primer pago. La App de Escritorio viene con la auto-liquidez apagada, así que un pago de 5000 sats basta para abrirlo.

<OpenChannel />

:::tip
¿Necesitas más liquidez entrante después? En **Configuración** → **Bitcoin y Wallet** → **Lightning Network**, haz clic en **Gestionar Auto Liquidez**, confirma tu contraseña de wallet y activa **Auto Liquidez**. Tu nodo abrirá canales automáticamente cuando necesite liquidez entrante, y se aplican comisiones on-chain cada vez.
:::
