---
title: "Cierre de canal"
sidebar_position: 5
slug: /channel-close-docker
---

# Cerrar un Canal Lightning

:::warning
Cerrar un canal es **definitivo** y **no se puede cancelar**.
Solo hazlo si estás cerrando tu tienda o estás haciendo un taller.
:::

:::info
Ambrosia debe estar en ejecución para poder cerrar el canal.
:::

## Paso 1: Ve a Billetera

Desde el Dashboard, ve a **Billetera** e ingresa tu contraseña de billetera.

En la sección **Lightning Channels**, encuentra tu canal y haz clic en **Close Channel**.

## Paso 2: Ingresa los datos

Aparecerá un diálogo **Cerrar Canal Lightning**:

- **Dirección Bitcoin** — ingresa la dirección Bitcoin on-chain donde se enviarán los fondos
- **Tarifa (sat/byte)** — establece la comisión de minería

:::info
Puedes consultar las tarifas actuales en https://mempool.space/
:::

Haz clic en **Revisar**.

## Paso 3: Confirma

Revisa el resumen:

- Saldo del canal
- Dirección de retiro
- Tarifa

:::warning
**Esta acción es irreversible.** Cerrar el canal enviará todos los fondos a la dirección on-chain que proporcionaste. Este proceso puede tomar tiempo en confirmarse en la red Bitcoin.
:::

Haz clic en **Confirmar Cierre**.

## Resultado

Un diálogo de éxito muestra **"Cierre de canal iniciado"** con un **ID de Transacción**. Puedes copiarlo con **Copiar TX ID** y rastrearlo en un explorador de bloques Bitcoin como https://mempool.space/

:::info
El estado del canal mostrará **"Cerrando — finalizando la transacción de cierre"**. El canal se cerrará completamente después de 6 confirmaciones y los fondos estarán disponibles en la dirección on-chain que proporcionaste.
:::
