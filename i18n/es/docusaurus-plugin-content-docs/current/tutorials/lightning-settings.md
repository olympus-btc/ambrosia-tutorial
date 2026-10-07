---
title: "Configuración de Lightning"
sidebar_position: 11
---

# Configuración de Lightning

Ambrosia recibe pagos en bitcoin a través de un backend Lightning. Los Inicios Rápidos usan el nodo phoenixd que viene con tu instalación; este tutorial cubre las demás opciones y cómo protegerlas y reiniciarlas.

Estas opciones están en **Configuración** → **Bitcoin y Wallet** y **Configuración** → **Sistema**, que solo ven los administradores. Cada tarjeta de **Bitcoin y Wallet** pide tu **Contraseña de wallet** antes de mostrar sus opciones.

## Backends Lightning

El backend se elige en el paso 4 de la configuración inicial:

| Backend | Qué es |
| --- | --- |
| **phoenixd** (local) | El nodo phoenixd instalado con Ambrosia, en la misma computadora. |
| **Nodo phoenixd remoto** | Un nodo phoenixd que corre en otra computadora, por ejemplo uno al que llegas por Tailscale. |
| **Nostr Wallet Connect** | Cualquier wallet compatible con NWC, como Alby Hub. Ambrosia no corre un nodo. |

Si la conexión con un nodo phoenixd remoto o con una wallet NWC falla durante la configuración, tienes que repetir la configuración inicial para volver a intentarlo.

### Conectar un Nodo phoenixd Remoto

Necesitas la URL del nodo, por ejemplo `http://100.64.0.5:9740`, y su `http-password`, que está en el `phoenix.conf` del nodo.

- **Durante la configuración:** en el paso 4, deja seleccionado **phoenixd** y activa **Nodo phoenixd remoto**.
- **Después:** ve a **Configuración** → **Bitcoin y Wallet** → **Nodo phoenixd remoto**, haz clic en **Administrar conexión** y activa **Nodo phoenixd remoto**.

Luego ingresa la **URL del nodo remoto** y el **http-password del nodo remoto**, haz clic en **Probar conexión** para revisarlos y guarda.

Para volver al nodo local, desactiva **Nodo phoenixd remoto** en la misma tarjeta y haz clic en **Guardar**. La Desktop App se reinicia sola para aplicarlo; en Docker y Native, reinicia el servidor de Ambrosia (consulta [Reiniciar el Servidor y phoenixd](#reiniciar-el-servidor-y-phoenixd)).

### Usar Nostr Wallet Connect

1. En tu wallet NWC, crea una conexión para Ambrosia y copia su URI de conexión. Empieza con `nostr+walletconnect://`.
2. En el paso 4 de la configuración, elige **Nostr Wallet Connect** y pégala en **URI de NWC**.

Si tu wallet NWC deja de funcionar con Ambrosia, ve a **Configuración** → **Bitcoin y Wallet** → **Conexión NWC**, haz clic en **Administrar conexión**, pega una nueva **URI de conexión NWC** y haz clic en **Guardar**. Esta tarjeta solo funciona cuando NWC ya es tu backend: después de la configuración no puedes cambiar de phoenixd a NWC.

## Cifrado de Secretos

Ambrosia guarda la contraseña de phoenixd, la conexión NWC y la clave de las notificaciones push. El **Cifrado de secretos** los protege con una **Contraseña de desbloqueo** que solo tú conoces.

Para activarlo, marca la opción de cifrado en el paso 5 de la configuración, o después:

1. Ve a **Configuración** → **Bitcoin y Wallet** → **Cifrado de secretos** y haz clic en **Administrar cifrado**.
2. Ingresa una **Contraseña de desbloqueo** y haz clic en **Activar cifrado**.

Anota la contraseña de desbloqueo en un lugar seguro: no se puede recuperar, y tampoco los secretos que protege.

Cuando el servidor de Ambrosia se reinicia, los secretos se vuelven a bloquear hasta que alguien ingresa la contraseña de desbloqueo. Mientras están bloqueados, al elegir BTC en el cobro el botón de pago cambia a **Desbloquear**, que pide la contraseña de desbloqueo. También puedes desbloquearlos antes: ve a **Configuración** → **Bitcoin y Wallet** → **Cifrado de secretos**, haz clic en **Administrar cifrado**, ingresa la **Contraseña de desbloqueo** y haz clic en **Desbloquear**.

En la Desktop App, marca **Recordar en este dispositivo** para guardar la contraseña de desbloqueo en el keyring de tu sistema, así Ambrosia desbloquea los secretos solo al iniciar.

## Auto Liquidez (Desktop App)

En la Desktop App, Ambrosia puede abrir canales por ti cuando necesitas más liquidez entrante. Ve a **Configuración** → **Bitcoin y Wallet** → **Lightning Network**, haz clic en **Gestionar Auto Liquidez** y activa **Auto Liquidez**. Se aplican comisiones on-chain cada vez que se abre un canal automáticamente.

Auto Liquidez no está disponible con Nostr Wallet Connect.

## Reiniciar el Servidor y phoenixd

Algunos cambios, como volver al nodo phoenixd local, necesitan un reinicio. En Docker, y en Native con los servicios de systemd, ve a **Configuración** → **Sistema**:

- **Reiniciar servidor** reinicia el servidor de Ambrosia. Las sesiones abiertas se interrumpen brevemente.
- **Reiniciar phoenixd** reinicia el nodo Lightning local. Solo aparece cuando Ambrosia usa su phoenixd local.

Haz clic en el botón y luego en **Reiniciar** para confirmar. Si la tarjeta dice **El reinicio no está disponible para esta instalación**, reinicia Ambrosia tú: cierra y vuelve a abrir la Desktop App, o detén e inicia el servidor en una instalación Native sin servicios.
