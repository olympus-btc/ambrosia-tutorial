---
title: "Otros Dispositivos"
sidebar_position: 9
---

# Otros Dispositivos

Ambrosia corre en una computadora, pero puedes vender desde una tablet o un teléfono en la misma red local. Cada dispositivo abre Ambrosia en su navegador e inicia sesión con su propio usuario.

## Qué Métodos de Instalación lo Permiten

| Método de instalación | Otros dispositivos |
| --- | --- |
| Desktop App | No. Ambrosia solo acepta conexiones de la computadora donde corre. |
| Docker | Sí, por el puerto 3000. |
| Native | Sí, por el puerto 3000. |

La computadora donde corre Ambrosia tiene que seguir encendida, y su firewall tiene que permitir conexiones al puerto 3000.

## Abrir Ambrosia en Otro Dispositivo

1. Busca la dirección IP en tu red local de la computadora donde corre Ambrosia, por ejemplo `192.168.1.20`.
2. En esa computadora, abre Ambrosia con esa dirección en vez de `localhost`: `http://192.168.1.20:3000`.
3. Ve a **Configuración**. En pantallas grandes, **Abrir en otro dispositivo** muestra un código QR con la dirección que estás usando.
4. Escanea el código QR con la tablet o el teléfono, que tiene que estar en la misma red. Ambrosia se abre en su navegador.
5. Inicia sesión con tu usuario.

El código QR muestra la dirección con la que abriste Ambrosia. Si lo abriste con `localhost`, el código QR apunta a `localhost` y no funciona en otros dispositivos. También puedes escribir la dirección en el navegador del otro dispositivo.

## Instalarlo como App

En el otro dispositivo, Ambrosia se puede instalar como app, con su propio ícono y su propia ventana. Ve a **Configuración** → **Dispositivos y conexión** → **Instalar App**:

- Si el navegador lo permite, haz clic en **Instalar**.
- En un teléfono o una tablet, la tarjeta muestra los pasos, como tocar el ícono de compartir o el menú y elegir agregar Ambrosia a la pantalla de inicio.

**Dispositivos y conexión** solo aparece cuando hay algo que configurar en el dispositivo que estás usando, así que no la verás una vez que Ambrosia esté instalado como app.

## Native: la Opción `--expose-lan`

La opción `--expose-lan` del instalador Native hace que el servidor de Ambrosia escuche en tu red local (consulta [Instalación](../quick-start-native/installation.md)). No la necesitas para usar Ambrosia desde otros dispositivos: estos se conectan al puerto 3000, y Ambrosia habla con su servidor desde la misma computadora.

## Seguridad

Cualquiera en tu red puede abrir la pantalla de inicio de sesión de Ambrosia. Usa estos dispositivos solo en una red de confianza, y dale a cada persona su propio usuario con solo los permisos que necesita (consulta [Usuarios y Roles](./users-and-roles.md)).
