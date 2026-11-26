---
title: "Turnos"
sidebar_position: 2
---

# Turnos

Un turno cubre el tiempo en que un cajero atiende la caja, desde el efectivo que hay al empezar hasta el que hay al terminar. Ambrosia usa los turnos para decirte cuánto efectivo debería haber en la caja al cerrar.

## Abrir un Turno

Necesitas un turno abierto para vender. Cuando entras a **Venta** y no hay un turno abierto, Ambrosia muestra **Abrir Turno Requerido**:

1. Ingresa la **Cantidad inicial en caja**: el efectivo que hay en la caja, o `0`.
2. Haz clic en **Abrir Turno**.

El turno queda abierto hasta que alguien lo cierra. Abrir uno requiere el permiso **Abrir turnos** (consulta [Usuarios y Roles](./users-and-roles.md)).

## Revisar el Turno Activo

Mientras hay un turno abierto, aparece el botón **Turno activo** en la esquina inferior derecha de la pantalla. Haz clic en él para ver cuándo se abrió el turno, el **Total de ventas**, el **Total de tickets** y el **Efectivo al abrir turno**.

Si una impresora tiene caja de dinero, **Abrir caja** la abre sin una venta, por ejemplo para dar cambio. Necesita el permiso **Abrir caja de dinero**. La caja también puede abrirse sola al abrir o cerrar un turno (consulta [Caja de Dinero](./store-settings.md#caja-de-dinero)).

## Cerrar un Turno

1. Haz clic en **Turno activo** y luego en **Cerrar turno**.
2. En **Confirmar Cierre de Turno**, ingresa el **Monto final en caja**: el efectivo que cuentas en la caja.
3. Revisa el resumen:
   - **Efectivo al abrir turno**, **Total de ventas**, **Total de propinas**, **Ventas en efectivo** y **Reembolsos en efectivo**.
   - **Total esperado**: el efectivo inicial más las ventas en efectivo, menos los reembolsos en efectivo.
   - **Diferencia**: el monto final menos el total esperado. Verde significa que cuadra, naranja que hay más efectivo del esperado y rojo que hay menos.
4. Haz clic en **Cerrar Turno**.

### Corte Z

La ventana de cierre también muestra el **Corte Z**: el período del turno, los totales y el desglose **Por método de pago**. Con una impresora de recibos configurada, **Imprimir Corte Z al cerrar** viene marcado, así que el Corte Z se imprime cuando cierras el turno. Usa la plantilla predeterminada de **Corte Z** (consulta [Plantillas de Ticket](./store-settings.md#plantillas-de-ticket)).

## Consultar Turnos Anteriores

Ve a [**Reportes**](./reports.md) y abre la pestaña **Turnos**. Para el período seleccionado ves cada turno con su usuario, **Apertura**, **Cierre**, **Monto Inicial**, **Monto Final** y **Diferencia**, además de los totales y una gráfica de **Diferencia por Día**.

- Haz clic en **Detalles** para ver un turno. Con una impresora de recibos configurada, **Reimprimir Corte Z** vuelve a imprimir el Corte Z de un turno cerrado; necesita el permiso **Abrir turnos**.
- Haz clic en **Exportar CSV** para descargar la lista.
