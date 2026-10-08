---
title: "Configuración de la Tienda"
sidebar_position: 8
---

# Configuración de la Tienda

**Configuración** agrupa las opciones de tu tienda en pestañas. Este tutorial cubre **Negocio**, **Preferencias** e **Impresión**, además de las notificaciones para administradores y los tutoriales dentro de la app.

Todos ven **Negocio**, **Preferencias** e **Impresión**, pero para cambiarlas hace falta un permiso: **Editar configuración** para **Negocio** y **Configurar impresora** para **Impresión** (consulta [Usuarios y Roles](./users-and-roles.md)). Las pestañas de la billetera, el respaldo, el sistema y la ayuda son solo para administradores.

## Negocio

### Información de la Tienda

**Información de la tienda** muestra el **Nombre**, el **Tax ID (RFC)**, la **Dirección**, la **Zona horaria**, el **Correo Electrónico**, el **Teléfono** y el **Logo** de tu tienda. Haz clic en **Editar Información**, cambia lo que necesites y haz clic en **Guardar**.

La **Zona horaria** define a qué día pertenece cada venta, reembolso y turno, y por lo tanto qué incluyen los períodos de [Reportes](./reports.md). Ponla donde está tu tienda.

El **Nombre**, la **Dirección**, el **Teléfono** y el correo también se pueden imprimir en tus tickets (consulta [Plantillas de Ticket](#plantillas-de-ticket)).

### Moneda

En **Moneda**, **Cambiar moneda** define la moneda de tus precios. Cambiarla no convierte los precios que ya ingresaste, así que revisa tus productos después del cambio.

**Ajuste de precio** define cuántos centavos sube o baja un precio cuando lo ajustas; consulta [Ajuste de Precio](./products.md#ajuste-de-precio).

### Propinas

1. En **Propinas**, activa **Habilitar propinas**.
2. En **Porcentajes sugeridos**, haz clic en los porcentajes que quieres ofrecer al cobrar. Al inicio son 10 %, 15 % y 20 %.
3. Para ofrecer otro, haz clic en **Personalizado**, ingresa el porcentaje y haz clic en **Agregar**.
4. Haz clic en **Guardar**.

Al cobrar, la sección **Propina** muestra estos porcentajes, además de **Sin propina** y **Otra** para cualquier otro porcentaje o monto.

## Preferencias

Estas dos opciones se guardan en el dispositivo y el navegador que estás usando, no para toda la tienda. Configúralas en cada dispositivo.

- **Idioma:** elige inglés o español.
- **Pantalla:** activa **Desactivar animaciones** para que Ambrosia funcione más rápido en dispositivos de bajos recursos.

## Impresión

Ambrosia imprime el recibo del cliente automáticamente después de cada venta pagada, en una impresora térmica de recibos (ESC/POS). Para eso necesita una plantilla de ticket y una impresora que la use.

### Plantillas de Ticket

Un ticket no tiene contenido hasta que le das una plantilla.

1. En **Plantillas de ticket**, haz clic en **Agregar**.
2. Ingresa el **Nombre de la plantilla**.
3. Haz clic en **Agregar elemento** por cada parte del ticket y elige su **Tipo**:

   | Tipo | Qué imprime |
   | --- | --- |
   | **Encabezado**, **Texto**, **Pie** | El **Valor** que ingresas |
   | Salto de línea | Una línea vacía |
   | **Separador** | El **Valor** repetido a lo ancho del ticket, por ejemplo `-` |
   | **Encabezado tabla** | El **Valor**, por ejemplo `Cant  Producto  Precio` |
   | **Fila tabla** | Una línea por producto vendido, con su cantidad y su precio |
   | **Fila de total** | El descuento y la propina, si los hay, y el total |
   | Código QR | Un código QR del **Valor** |

4. Para imprimir los datos de tu tienda, haz clic en el botón de llaves junto a **Valor** y elige un campo en **Información del negocio**: **Nombre**, **Dirección**, **Teléfono** o **Email**.
5. Ajusta la alineación, el tamaño y la **Negrita** de cada elemento. **Vista previa** muestra cómo se ve el ticket.
6. Haz clic en **Crear**.

Para cambiar una plantilla, elígela en **Plantillas**, edítala y haz clic en **Guardar**. Con una impresora configurada, **Imprimir prueba** imprime la plantilla con datos de ejemplo.

### Impresoras

La lista de impresoras muestra las impresoras instaladas en la computadora donde corre Ambrosia. Instala ahí tu impresora de recibos primero.

1. En **Agregar impresora**, elige la **Impresora** y la **Plantilla**. El **Tipo** es **Cliente**, la impresora de recibos.
2. Haz clic en **Agregar**. La impresora aparece en **Impresoras configuradas**.

En cada impresora configurada puedes cambiar su **Plantilla**, activar o desactivar **Impresora por defecto** y **Habilitada**, o hacer clic en **Eliminar**. El recibo se imprime en la impresora por defecto, que debe estar habilitada.

La misma impresora imprime el **Corte Z** cuando cierras un turno (consulta [Turnos](./shifts.md)).

## Notificaciones

Los administradores reciben notificaciones sobre la actividad de la billetera, como pagos recibidos o enviados y canales cerrados. Aparecen en **Notificaciones**, en el menú.

Para elegir cómo recibirlas, ve a **Configuración** → **Sistema** → **Notificaciones**:

- **En app:** notificaciones dentro de Ambrosia.
- **Web Push:** notificaciones del navegador en este dispositivo. El navegador pide permiso la primera vez. Haz clic en **Probar push** para probarlo.

## Tutoriales

Los recorridos guiados de Ambrosia, como el que muestra cómo abrir tu canal Lightning, se pueden repetir. Ve a **Configuración** → **Ayuda** → **Tutoriales** y haz clic en **Repetir**.
