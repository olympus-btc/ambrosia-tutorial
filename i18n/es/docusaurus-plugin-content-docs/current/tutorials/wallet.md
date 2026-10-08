---
title: "Billetera"
sidebar_position: 3
---

# Billetera

La **Billetera** es donde ves el saldo de tu nodo Lightning, recibes y envías pagos y revisas el historial de transacciones. Necesitas el permiso **Acceder a billetera** (consulta [Usuarios y Roles](./users-and-roles.md)).

## Abrir la Billetera

1. Desde el Dashboard, ve a **Billetera**.
2. En **Confirmar acceso a Wallet**, ingresa tu contraseña de wallet y haz clic en **Entrar**.

:::info
Si el cifrado de secretos está bloqueado, desbloquéalo primero en **Configuración** → **Cifrado de secretos**.
:::

## Información del Nodo

**Información del Nodo** muestra el **Balance Total**, la **Red**, la cantidad de **Canales**, el bloque actual y tu **Dirección Lightning**.

En **Canales Lightning**, cada canal muestra su saldo, su **Capacidad Total:** y su **Liquidez Entrante:**, que es cuánto puedes recibir todavía por él. Ahí también se cierra un canal (consulta la guía "Cierre de canal" del Inicio Rápido).

## Recibir un Pago

1. Abre la pestaña **Recibir**.
2. Elige **Sats** o la moneda de tu tienda e ingresa el monto.
3. Agrega una **Descripción (opcional)**.
4. Haz clic en **Crear Factura Lightning**.

La ventana **Factura Lightning Generada** muestra el QR y la factura, que puedes copiar. Cuando quien paga lo hace, el pago aparece en el historial.

## Enviar un Pago

Usa **Enviar** para sacar fondos del POS, por ejemplo hacia tu wallet personal.

1. En la wallet que va a recibir los fondos, crea una factura.
2. Abre la pestaña **Enviar** y pega la factura en **Factura BOLT11**, o haz clic en **Escanear QR** para escanearla.
3. Haz clic en **Enviar Pago Lightning**.
4. Revisa el monto y la descripción en **Confirmar Pago**. Si la factura no trae monto, ingrésalo en sats o en tu moneda.
5. Haz clic en **Confirmar Pago**.

Al terminar, **Pago Realizado** muestra el **Monto enviado:** y la **Tarifa de enrutamiento:**.

:::warning
Los pagos Lightning no se pueden revertir. Revisa la factura antes de confirmar.
:::

## Historial de Transacciones

La pestaña **Historial** muestra tus pagos. Fíltralos con **Todos**, **Recibidos** o **Enviados**.

## Cambiar la Contraseña de Wallet

Al final de la Billetera, **Contraseña de Wallet** te permite cambiar la contraseña con la que se desbloquean las acciones de la wallet:

1. Ingresa la **Contraseña actual**.
2. Ingresa la **Nueva contraseña** y repítela en **Confirmar nueva contraseña**.
3. Haz clic en **Cambiar contraseña**.
