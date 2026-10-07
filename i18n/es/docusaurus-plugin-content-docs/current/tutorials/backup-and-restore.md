---
title: "Respaldo y Restauración"
sidebar_position: 10
---

# Respaldo y Restauración

Un respaldo de datos guarda los datos de tu tienda en un archivo: productos, órdenes, usuarios y configuración, además de las imágenes que subiste, como las fotos de los productos y tu logo. Úsalo para tener una copia de tu tienda o para moverla a otra instalación de Ambrosia.

Solo los administradores pueden exportar e importar datos, desde **Configuración** → **Backup y datos**.

## Respaldo de Datos vs. Frase de Recuperación

El respaldo de datos no incluye tu billetera Lightning. Tus fondos pertenecen a tu nodo Lightning, y lo que los protege es la frase de recuperación (**Configuración** → **Bitcoin y Wallet** → **SEED de Lightning**). Guarda las dos:

| | Respaldo de datos | Frase de recuperación |
| --- | --- | --- |
| Protege | Productos, órdenes, usuarios, configuración e imágenes | Tus fondos de Lightning |
| Dónde | **Configuración** → **Backup y datos** | **Configuración** → **Bitcoin y Wallet** |

## Exportar tus Datos

1. Ve a **Configuración** → **Backup y datos** y haz clic en **Exportar datos**.
2. Ingresa tu **Contraseña de wallet** y haz clic en **Confirmar**.
3. Ambrosia descarga el respaldo como un archivo `.zip`. Guárdalo en un lugar seguro, fuera de la computadora donde corre Ambrosia.

El respaldo queda cifrado con tu contraseña de wallet actual. La vas a necesitar para restaurarlo, aunque la cambies después.

## Importar Datos en una Instalación en Uso

Importar reemplaza todos los datos de esta instalación por los del respaldo. Exporta primero los datos actuales si podrías necesitarlos.

1. Ve a **Configuración** → **Backup y datos** y haz clic en **Importar datos**.
2. Ingresa tu **Contraseña de wallet** y haz clic en **Confirmar**.
3. En **Contraseña del respaldo**, ingresa la contraseña de wallet de la tienda que creó el respaldo.
4. En **Archivo de respaldo**, haz clic en **Elegir archivo** y selecciona el archivo `.zip`.
5. Haz clic en **Continuar** y luego en **Sobrescribir e importar**.
6. Reinicia el servidor de Ambrosia para terminar de cargar los datos (consulta [Reiniciar el Servidor](#reiniciar-el-servidor)).

## Restaurar Durante la Configuración

En una instalación nueva, puedes restaurar un respaldo en lugar de configurar la tienda desde cero:

1. En la primera pantalla de configuración, haz clic en **¿Estás restaurando un respaldo anterior?**.
2. Ingresa la **Contraseña del respaldo**, elige el **Archivo de respaldo** y haz clic en **Restaurar respaldo**.
3. Reinicia el servidor de Ambrosia para terminar de cargar los datos (consulta [Reiniciar el Servidor](#reiniciar-el-servidor)).

## Reiniciar el Servidor

Los datos importados se cargan la próxima vez que arranca el servidor de Ambrosia, siempre que sea dentro de las siguientes 24 horas. Cómo se reinicia depende del método de instalación:

- **Desktop App:** Ambrosia se reinicia solo después de una cuenta regresiva corta, o cuando haces clic en **Reiniciar ahora**.
- **Docker**, y **Native** con los servicios de systemd: el servidor se reinicia solo. Espera un momento y recarga la página.
- **Native** instalado con `--no-service`: detén el servidor y vuelve a iniciarlo tú.

Después del reinicio, inicia sesión con un usuario del respaldo. La contraseña de wallet también es la del respaldo.

## Mover Ambrosia a Otra Computadora

1. En la instalación anterior, exporta tus datos.
2. Instala Ambrosia en la computadora nueva y restaura el respaldo durante la configuración.
3. Tus fondos se quedan en el nodo Lightning anterior. Antes de dejar de usar la instalación anterior, envíalos desde su **Billetera** a la nueva (consulta [Enviar un Pago](./wallet.md#enviar-un-pago)).
