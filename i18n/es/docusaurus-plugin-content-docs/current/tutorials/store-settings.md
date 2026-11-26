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
4. En **Tipo predeterminado de propina personalizada**, elige si **Otra**, al cobrar, se abre en porcentaje (**%**) o en monto fijo (**$**).
5. Haz clic en **Guardar**.

Al cobrar, la sección **Propina** muestra estos porcentajes, además de **Sin propina** y **Otra** para cualquier otro porcentaje o monto.

## Preferencias

Estas dos opciones se guardan en el dispositivo y el navegador que estás usando, no para toda la tienda. Configúralas en cada dispositivo.

- **Idioma:** elige inglés o español.
- **Pantalla:** activa **Desactivar animaciones** para que Ambrosia funcione más rápido en dispositivos de bajos recursos.

## Impresión

Ambrosia imprime el recibo del cliente automáticamente después de cada venta pagada, y el Corte Z cuando cierras un turno, en una impresora térmica de recibos (ESC/POS). Para eso necesita una impresora y, para cada tipo de ticket, una plantilla predeterminada.

### Plantillas de Ticket

Un ticket no tiene contenido hasta que le das una plantilla. Cada plantilla es para un **Tipo de ticket**: **Recibo de venta** o **Corte Z**.

1. En **Plantillas de ticket**, haz clic en **Agregar**.
2. Ingresa el **Nombre de la plantilla** y elige el **Tipo de ticket**.
3. Haz clic en **Agregar elemento** por cada parte del ticket y elige su **Tipo**:

   | Tipo | Qué imprime |
   | --- | --- |
   | **Encabezado**, **Texto**, **Pie** | El **Valor** que ingresas |
   | **Salto de línea** | Una línea vacía |
   | **Separador** | El **Valor** repetido a lo ancho del ticket, por ejemplo `-` |
   | **Encabezado tabla** | El **Valor**, por ejemplo `Cant  Producto  Precio` |
   | **Fila tabla** | Una línea por producto vendido, con su cantidad y su precio |
   | **Fila de total** | El descuento y la propina, si los hay, y el total |
   | **Fila de método de pago** | Cómo se pagó la venta |
   | **Código QR** | Un código QR del **Valor** |
   | **Logo** | El **Logo del negocio** o una **Imagen propia** en PNG o JPEG, que eliges en **Origen del logo**. Un logo del negocio en WebP no se puede imprimir. |
   | **Resumen del turno** | Los totales del turno, para un Corte Z |

4. Para imprimir datos como el nombre de tu tienda, la fecha o los totales del turno, haz clic en el botón junto a **Valor** y elige un campo en **Variables**.
5. Ajusta la **Alineación**, el **Tamaño** y la **Negrita** de cada elemento. El **Formato de fecha** y el **Formato de hora** de la plantilla definen cómo se imprimen las fechas. **Vista previa** muestra cómo se ve el ticket.
6. Haz clic en **Crear**.

Cada tipo de ticket se imprime con su plantilla predeterminada, y un tipo sin plantilla no se imprime. Para elegirla, selecciona la plantilla en **Plantillas** y haz clic en **Usar como predeterminada**: desde ahí muestra **Predeterminada**.

Para cambiar una plantilla, elígela en **Plantillas**, edítala y haz clic en **Guardar**. Con una impresora configurada, **Imprimir prueba** imprime la plantilla con datos de ejemplo.

### Impresoras

La lista de impresoras muestra las impresoras instaladas en la computadora donde corre Ambrosia. Instala ahí tu impresora de recibos primero.

1. En **Agregar impresora**, elige el **Tipo** y la **Impresora**. La impresora de recibos es del tipo **Cliente**.
2. Haz clic en **Agregar**. La impresora aparece en **Impresoras configuradas**.

En cada impresora configurada puedes activar o desactivar **Impresora por defecto** y **Habilitada**, o hacer clic en **Eliminar**. Los recibos y los Cortes Z se imprimen en la impresora **Cliente** por defecto, que debe estar habilitada. La plantilla de cada ticket se elige en [Plantillas de Ticket](#plantillas-de-ticket), no en la impresora.

### Caja de Dinero

Si tu caja de dinero está conectada a la impresora de recibos, Ambrosia puede abrirla. En la impresora, dentro de **Impresoras configuradas**:

1. Activa **Caja de dinero conectada**.
2. Elige el **Pin de la caja**. La mayoría de las cajas usan el **Pin 2**; si la tuya no abre, prueba el **Pin 5**.
3. En **Abrir al cobrar con**, marca los métodos de pago que abren la caja cuando se paga una venta, como el efectivo.
4. **Abrir en reembolsos** la abre cuando reembolsas una orden pagada con uno de esos métodos. **Abrir al abrir turno** y **Abrir al cerrar turno** la abren con el turno (consulta [Turnos](./shifts.md)). Desactiva los que no quieras.
5. Haz clic en **Probar caja** para comprobarla.

Los cambios se guardan en cuanto los haces. Para abrir la caja sin una venta, por ejemplo para dar cambio, usa **Abrir caja** en el turno activo (consulta [Revisar el Turno Activo](./shifts.md#revisar-el-turno-activo)).

## Notificaciones

Los administradores reciben notificaciones sobre la actividad de la billetera, como pagos recibidos o enviados y canales cerrados. Aparecen en **Notificaciones**, en el menú.

Para elegir cómo recibirlas, ve a **Configuración** → **Sistema** → **Notificaciones**:

- **En app:** notificaciones dentro de Ambrosia.
- **Web Push:** notificaciones del navegador en este dispositivo. El navegador pide permiso la primera vez. Haz clic en **Probar push** para probarlo.

## Tutoriales

Los recorridos guiados de Ambrosia, como el que muestra cómo abrir tu canal Lightning, se pueden repetir. Ve a **Configuración** → **Ayuda** → **Tutoriales** y haz clic en **Repetir**.
