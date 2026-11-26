---
title: "Respaldo y Restauración"
sidebar_position: 10
---

# Respaldo y Restauración

Un respaldo de datos guarda los datos de tu tienda en un archivo: productos, órdenes, usuarios y configuración, además de las imágenes que subiste, como las fotos de los productos y tu logo. Si Ambrosia usa su nodo phoenixd local, el respaldo también incluye la billetera Lightning: su frase semilla, su configuración y su historial de pagos. Úsalo para tener una copia de tu tienda o para moverla a otra instalación de Ambrosia.

Solo los administradores pueden exportar e importar datos, desde **Configuración** → **Respaldo y datos**.

## Respaldo de Datos y Frase de Recuperación

Con el nodo phoenixd local, el respaldo de datos también lleva tu billetera Lightning, así que un solo archivo restaura la tienda y sus fondos. Con un nodo phoenixd remoto o con Nostr Wallet Connect, la billetera está fuera de Ambrosia y no va en el respaldo.

Guarda la frase de recuperación de todos modos (**Configuración** → **Bitcoin y billetera** → **Frase semilla (SEED) de Lightning**): es la única forma de recuperar tus fondos sin el archivo de respaldo y su contraseña. Y como el respaldo puede contener tu frase semilla, guárdalo con el mismo cuidado que la frase de recuperación.

| | Respaldo de datos | Frase de recuperación |
| --- | --- | --- |
| Protege | Productos, órdenes, usuarios, configuración e imágenes, más la billetera Lightning con el nodo phoenixd local | Tus fondos de Lightning |
| Dónde | **Configuración** → **Respaldo y datos** | **Configuración** → **Bitcoin y billetera** |

## Exportar tus Datos

1. Ve a **Configuración** → **Respaldo y datos** y haz clic en **Exportar datos**.
2. Ingresa la **Contraseña de la billetera** y haz clic en **Confirmar**.
3. Ambrosia descarga el respaldo como un archivo `.zip`. Guárdalo en un lugar seguro, fuera de la computadora donde corre Ambrosia.

El respaldo queda cifrado con la contraseña actual de la billetera. La vas a necesitar para restaurarlo, aunque la cambies después.

## Importar Datos en una Instalación en Uso

Importar reemplaza todos los datos de esta instalación por los del respaldo. Exporta primero los datos actuales si podrías necesitarlos.

1. Ve a **Configuración** → **Respaldo y datos** y haz clic en **Importar datos**.
2. Ingresa la **Contraseña de la billetera** y haz clic en **Confirmar**.
3. En **Contraseña del respaldo**, ingresa la contraseña de la billetera de la tienda que creó el respaldo.
4. En **Archivo de respaldo**, haz clic en **Elegir archivo** y selecciona el archivo `.zip`.
5. Haz clic en **Continuar** y luego en **Sobrescribir e importar**.
6. Si el respaldo incluye una billetera Lightning, **¿Sobrescribir tu billetera Lightning?** te pide confirmar. Haz clic en **Sobrescribir billetera**. Si esta instalación tenía su propia billetera con fondos, anota antes su frase de recuperación: después, solo esa frase te da acceso a esos fondos.
7. Reinicia el servidor de Ambrosia para terminar de cargar los datos (consulta [Reiniciar el Servidor](#reiniciar-el-servidor)).

## Restaurar Durante la Configuración

En una instalación nueva, puedes restaurar un respaldo en lugar de configurar la tienda desde cero:

1. En la primera pantalla de configuración, haz clic en **¿Estás restaurando un respaldo anterior?**.
2. Ingresa la **Contraseña del respaldo**, elige el **Archivo de respaldo** y haz clic en **Restaurar respaldo**.
3. Reinicia el servidor de Ambrosia para terminar de cargar los datos (consulta [Reiniciar el Servidor](#reiniciar-el-servidor)).

Si el respaldo incluye una billetera Lightning, esta instalación la usa desde ese momento.

## Reiniciar el Servidor

Los datos importados se cargan la próxima vez que arranca el servidor de Ambrosia, siempre que sea dentro de las siguientes 24 horas. Cómo se reinicia depende del método de instalación:

- **Desktop App:** Ambrosia reinicia sus servicios solo después de una cuenta regresiva corta, o cuando haces clic en **Reiniciar ahora**.
- **Docker**, y **Native** con los servicios de systemd: el servidor se reinicia solo. Espera un momento y recarga la página.
- **Native** instalado con `--no-service`: detén el servidor y vuelve a iniciarlo tú.

Si el respaldo incluye una billetera Lightning, phoenixd también tiene que reiniciarse cuando el servidor vuelva, para que cargue la billetera restaurada. La Desktop App lo hace sola. En Docker, ejecuta `docker restart phoenixd`. En Native, haz clic en **Reiniciar phoenixd** en **Configuración** → **Sistema** (consulta [Configuración de Lightning](./lightning-settings.md#reiniciar-el-servidor-y-phoenixd)), o reinícialo tú si instalaste con `--no-service`.

Después del reinicio, inicia sesión con un usuario del respaldo. La contraseña de la billetera también es la del respaldo.

## Mover Ambrosia a Otra Computadora

1. En la instalación anterior, exporta tus datos.
2. Detén la instalación anterior y no la vuelvas a usar. Con el nodo phoenixd local, el respaldo lleva su billetera Lightning, y dos nodos con la misma frase semilla nunca deben correr al mismo tiempo: puedes perder fondos.
3. Instala Ambrosia en la computadora nueva y restaura el respaldo durante la configuración.

Con un nodo phoenixd remoto o con Nostr Wallet Connect, tus fondos se quedan en ese nodo o billetera, fuera de Ambrosia.
