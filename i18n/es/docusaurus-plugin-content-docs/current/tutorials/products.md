---
title: "Productos"
sidebar_position: 6
---

# Productos

El Inicio Rápido muestra cómo agregar, editar y eliminar un producto. Este tutorial cubre el resto del catálogo: categorías, stock, variantes, paquetes y el ajuste de precio.

## Categorías

Las categorías agrupan tus productos en la pantalla de **Venta**. Un producto puede tener más de una categoría.

- **Desde el formulario del producto:** en **Categoría del Producto**, escribe un nombre y elige **+ Crear** para crearla en el momento.
- **Desde la sección Categorías**, debajo de la lista de productos:
  - Haz clic en **Agregar Categoría**, ingresa el **Nombre de la Categoría** y haz clic en **Agregar**.
  - Haz clic en **Editar** para renombrar una categoría y en **Guardar**, o en **Eliminar** para quitarla.

## Stock

Con **Controlar almacén** activado, cada venta descuenta del stock del producto y la columna **Estado** de la lista de productos te dice cómo va:

| Estado | Significado |
| --- | --- |
| **Normal** | Hay stock suficiente |
| **Bajo (reponer pronto)** | Es momento de reponer |
| **Agotado** | No queda nada para vender |
| **Sin seguimiento** | **Controlar almacén** está desactivado para este producto |

Desactiva **Controlar almacén** para productos que no cuentas, como servicios. Los reembolsos devuelven el stock (consulta [Órdenes y Reembolsos](./orders-and-refunds.md)).

## Variantes

Usa variantes cuando vendes el mismo producto en varias versiones, como tallas o colores. Cada variante tiene su propio SKU, precio, stock e imagen.

1. Crea o edita el producto y activa **Tiene variantes**. A partir de ahí, el precio y el stock se gestionan por variante.
2. Guarda el producto y haz clic en **Variantes** en la lista de productos. Se abre **Gestionar Variantes**.
3. En **Tipos de opción**, haz clic en **Agregar tipo de opción**. Ingresa el **Nombre del tipo**, por ejemplo `Talla`, y sus valores: escribe cada uno y presiona Enter (`S`, `M`, `L`).
4. Haz clic en **Agregar variante**, elige un valor para cada tipo de opción y completa el **SKU de variante**, el **Precio de la variante** y el stock de la variante. Haz clic en **Guardar**.
5. Repite para cada variante que vendas.

Cuando agregas a una venta un producto con variantes, la ventana **Seleccionar variante** te pregunta cuál.

## Paquetes

Un paquete es un producto formado por otros productos, como una caja de regalo. Vender un paquete descuenta el stock de sus componentes.

1. Crea el producto y activa **Es un Paquete**.
2. En **Componentes del Paquete**, busca cada producto por nombre o SKU y agrégalo. Indica su **Cantidad**, y su **Variante** si el componente tiene variantes.
3. Define el precio del paquete. **Precio de componentes:** muestra lo que cuestan los componentes por separado, como referencia.
4. Guarda el producto.

Un producto que forma parte de un paquete no se puede eliminar mientras esté en el paquete.

## Ajuste de Precio

El ajuste de precio define cuántos centavos sube o baja un precio cuando lo ajustas; por ejemplo, `5` para que los precios terminen en 0 o 5 centavos. Cámbialo en **Configuración** → **Negocio** → **Moneda** → **Ajuste de precio** y haz clic en **Guardar**.

Si el precio de un producto no coincide con el ajuste, el formulario del producto muestra **Precio real:** con el precio que se va a usar.
