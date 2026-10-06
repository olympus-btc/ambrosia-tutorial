---
title: "Configuración"
sidebar_position: 2
slug: /quick-configuration-desktop-app
---

import Onboarding from '../_partials/onboarding.mdx';

# Configuración

## Configuración Inicial (Onboarding)

Cuando abres la App de Escritorio de Ambrosia por primera vez, serás recibido por el asistente de onboarding. Este proceso te guiará para crear tu primera tienda y cuenta de administrador.

<Onboarding />

## Abrir un Canal / Obtener Liquidez Entrante

:::warning[Respalda tu frase de recuperación primero]
Antes de depositar fondos, asegúrate de haber respaldado de forma segura la frase de recuperación (seed) de tu billetera. Tu seed es la única forma de recuperar tus fondos si pierdes, reinicias o dañas tu dispositivo. Anótala, guárdala offline en un lugar seguro y nunca la compartas con nadie.
:::

A continuación, depositamos 5k sats en nuestro nodo:

- En el Dashboard, ve a Billetera

:::warning
Si tu billetera sigue pidiendo una contraseña incluso después de haberla ingresado correctamente, es un bug (se corregirá pronto); simplemente actualiza la App de Escritorio, haz clic en Ver y luego en Recargar, o presiona Ctrl + R en tu teclado
:::

- Ingresa tu contraseña

- Ingresa el monto, p.ej.

```
5000
```

- Agrega una descripción (Opcional), p.ej.

```
Channel open
```

:::warning
Asegúrate de crear la factura por 5000 sats para abrir el canal, de lo contrario el pago podría fallar
:::

- Escanéalo con tu billetera Lightning y paga; deberías ver una confirmación en la pantalla.

:::info
Estos sats cubren la comisión de minería para abrir un canal con ACINQ.
No son reembolsables.
:::
