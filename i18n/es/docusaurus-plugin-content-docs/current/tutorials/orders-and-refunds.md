---
title: "Órdenes y Reembolsos"
sidebar_position: 5
---

# Órdenes y Reembolsos

Cada venta se guarda como una orden. Desde la página de órdenes puedes encontrar una venta, ver qué se vendió y cómo se pagó, y reembolsarla.

## Encontrar una Orden

1. Desde el Dashboard, ve a Órdenes. La pestaña **Pagadas** muestra las ventas completadas.
2. Usa la búsqueda para encontrar una orden por ID o usuario.
3. Para más criterios, haz clic en **Más filtros**. En **Filtros avanzados** puedes filtrar por **Estado**, **Método de pago**, **Rango de fechas**, **Total mínimo** y **Total máximo**, y ordenar por fecha o total. Haz clic en **Aplicar**, o en **Limpiar** para quitar los filtros.

## Ver los Detalles de una Orden

Haz clic en **Detalles** en una orden. **Detalles de la orden** muestra el usuario, el estado, el método de pago, el total, el descuento, la propina y la fecha, además de cada producto con su cantidad, precio unitario y subtotal. Las órdenes con Bitcoin también muestran el hash del pago, y las transferencias el **N.º de referencia**.

## Reembolsar una Orden

Puedes reembolsar una orden pagada si tu rol tiene el permiso **Reembolsar órdenes** (consulta [Usuarios y Roles](./users-and-roles.md)). El reembolso restaura el stock de los productos y marca la orden como reembolsada.

1. Abre los **Detalles** de la orden y haz clic en **Reembolsar**.
2. Completa el reembolso según el método de pago de la orden, como se explica abajo.
3. Haz clic en **Procesar reembolso**.

### Bitcoin (Lightning)

La ventana muestra el **Monto a reembolsar** en sats. Pídele al cliente una factura Lightning por exactamente ese monto, pégala en **Invoice Lightning del cliente** y procesa el reembolso. Ambrosia paga la factura desde tu wallet.

### Efectivo

Ingresa el **Efectivo entregado al cliente**. **Procesar reembolso** se habilita solo cuando coincide con el **Monto a reembolsar**, es decir, cuando la **Diferencia** es cero.

### Tarjeta y Transferencia Bancaria

Ambrosia solo marca la orden como reembolsada: primero devuelve el dinero desde tu plataforma de pagos con tarjeta o desde tu banco. Después marca **Ya procesé este reembolso en mi plataforma de pagos de tarjeta** y procesa el reembolso.

:::info
Los reembolsos en efectivo cuentan en el efectivo del turno. Al cerrar el turno, se restan del total esperado (consulta [Turnos](./shifts.md)).
:::
