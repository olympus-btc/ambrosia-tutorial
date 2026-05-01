---
title: "Cierre de canal"
sidebar_position: 5
slug: /channel-close-native
---

# Cerrar un Canal Lightning

:::warning
Cerrar un canal es **definitivo** y **no se puede cancelar**.
Solo hazlo si estás cerrando tu tienda o estás haciendo un workshop.
:::

:::info
Ambrosia debe estar en ejecución para poder cerrar el canal.
:::

## Requisitos Previos

- El `channel ID` del canal que quieres cerrar
- Una `dirección Bitcoin on-chain` válida
- Una `tarifa adecuada (en sat/vbyte)`

:::info
Puedes ver las tarifas actuales usando un explorador de bloques Bitcoin como https://mempool.space/
:::

:::warning
La tarifa es para el feerate del hijo; establece un valor más alto para un feerate efectivo padre+hijo.
Todos los fondos serán enviados a la dirección Bitcoin on-chain que proporciones.
:::

## Paso 1: Verifica que phoenixd está en ejecución

Verifica que `phoenixd` está corriendo. Si lo instalaste como servicio systemd, puedes revisar su estado:

```bash
systemctl status phoenixd
```

## Paso 2: Lista tus canales

Lista todos los canales usando `phoenix-cli`:

```bash
phoenix-cli getinfo
```

Copia el `channelId` del canal que quieres cerrar.

## Paso 3: Cierra el canal

Ejecuta el siguiente comando:

```bash
phoenix-cli closechannel \
  --channelId=<CHANNEL_ID> \
  --address=<BITCOIN_ADDRESS> \
  --feerateSatByte=<FEE_RATE>
```

## Resultado

Si es exitoso, Phoenix devuelve el ID de la transacción de cierre:

```text
758b3df67c62c9cd9ebbde1ff6eaadc1c51f94d5b1a3efb2548236b9a6f1c659
```

Puedes rastrear esta transacción usando un explorador de bloques Bitcoin como https://mempool.space/

:::info
El estado del canal se mostrará como 'Negotiating' incluso después de un cierre exitoso; esto es un bug de phoenixd. El canal debería cerrarse después de 6 confirmaciones y los sats no estarán disponibles ya que fueron enviados a una dirección on-chain.
:::
