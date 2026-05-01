---
title: "Cierre de canal"
sidebar_position: 5
slug: /channel-close-desktop-app
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

## Paso 1: Abre una terminal y ejecuta esto:

### Para Linux (Ubuntu/Debian)
```bash
export PATH="/opt/AmbrosiaPoS/resources/phoenixd/linux-x64:$PATH"
```

### Para Linux (Arm64)
```bash
export PATH="/opt/AmbrosiaPoS/resources/phoenixd/linux-arm64:$PATH"
```

### Para MacOS (Arm64)
```bash
export PATH="/Applications/AmbrosiaPoS.app/Contents/Resources/phoenixd/macos-arm64:$PATH"
```

### Para MacOS (Amd64)
```bash
export PATH="/Applications/AmbrosiaPoS.app/Contents/Resources/phoenixd/macos-x64:$PATH"
```

### Para Windows

:::warning
Requiere JRE21 y PowerShell
:::

#### Instala JRE21:

1. Ve a https://adoptium.net/temurin/releases/?version=21 y descarga la versión para Windows
2. Ejecuta el archivo .exe
3. Sigue el asistente de instalación

### Para Windows (Arm64)

Abre la terminal y ejecuta:
```ps
$env:PATH = "C:\Users\My-User\AppData\Local\Programs\AmbrosiaPoS\resources\phoenixd\win-arm64\bin;$env:PATH"
```

### Para Windows (Amd64)
Abre la terminal y ejecuta:
```ps
$env:PATH = "C:\Users\My-User\AppData\Local\Programs\AmbrosiaPoS\resources\phoenixd\win-x64\bin;$env:PATH"
```

## Paso 2: Lista tus canales

### Para Linux/MacOS
Ejecuta el CLI para listar todos los canales:
```bash
phoenix-cli getinfo
```
Copia el `channelId` del canal que quieres cerrar.

### Para Windows
Ejecuta el CLI para listar todos los canales:
```ps
phoenix-cli getinfo
```
Copia el `channelId` del canal que quieres cerrar.

## Paso 3: Cierra el canal

### Para Linux/MacOS
Ejecuta el siguiente comando:

```bash
phoenix-cli closechannel \
  --channelId=<CHANNEL_ID> \
  --address=<BITCOIN_ADDRESS> \
  --feerateSatByte=<FEE_RATE>
```

### Para Windows
Ejecuta el siguiente comando:

```ps
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
