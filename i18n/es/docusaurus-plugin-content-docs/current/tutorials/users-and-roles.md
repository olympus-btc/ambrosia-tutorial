---
title: "Usuarios y Roles"
sidebar_position: 1
---

# Usuarios y Roles

Cada persona que usa Ambrosia debería tener su propio usuario, con un PIN para iniciar sesión y un rol que decide qué puede ver y hacer. Los dos se administran desde **Usuarios** en el Dashboard.

:::info
Necesitas permisos para administrar usuarios y roles. La cuenta de administrador que creaste en la configuración inicial los tiene todos.
:::

## Agregar un Usuario

1. Ve a **Usuarios** y haz clic en **Agregar Usuario**.
2. Completa los campos:
   - **Nombre** (obligatorio): el nombre que aparece en la pantalla de inicio de sesión.
   - **PIN** (obligatorio): 4 dígitos para iniciar sesión.
   - **Email** y **Teléfono** (opcionales).
   - **Rol** (obligatorio): lo que el usuario puede hacer. Consulta [Roles](#roles) más abajo.
3. Haz clic en **Agregar**.

El nuevo usuario aparece en **Seleccionar Empleado** en la pantalla de inicio de sesión y entra con su PIN.

## Editar o Eliminar un Usuario

- Haz clic en **Editar** en el usuario, cambia lo que necesites y haz clic en **Guardar**. Ahí también cambias su rol.
- Haz clic en **Eliminar** y confirma con **Eliminar**. Esta acción no se puede deshacer.

Ambrosia no te deja eliminar al único usuario, ni quitar o eliminar al último administrador.

## Roles

Debajo de la lista de usuarios, **Roles y permisos** muestra los roles de la tienda. Un rol es un conjunto de permisos agrupados por área: **Personas y acceso**, **Catálogo**, **Ventas y pedidos**, **Pagos y caja**, **Configuración**, **Turnos**, **Tickets** y **Reportes**.

### Crear un Rol

1. Haz clic en **Agregar Rol**.
2. Ingresa el **Nombre del rol**, por ejemplo `Cajero`.
3. Parte de una plantilla, o usa el **Modo avanzado** para elegir cada permiso:
   - **Cajero**: procesa ventas y cobros.
   - **Vendedor**: consulta productos y crea órdenes.
   - **Gerente**: acceso operativo completo.
   - **Administrador**: acceso total al sistema.
4. Haz clic en **Crear rol**.

Activar **Con privilegios de administrador** le da al rol todos los permisos. Solo un administrador puede crear u otorgar un rol de administrador.

### Editar o Eliminar un Rol

- Haz clic en **Editar**, cambia el nombre o los permisos y haz clic en **Guardar cambios**.
- Haz clic en **Eliminar** para quitar un rol. Los usuarios con ese rol quedan sin rol hasta que les asignes otro.

## Permisos a Tener en Cuenta

Algunas pantallas y acciones solo aparecen con un permiso específico:

| Permiso | Qué permite |
| --- | --- |
| **Abrir turnos** | Abrir un turno, necesario para vender |
| **Registrar pagos** | Cobrar ventas |
| **Aplicar descuentos** | Agregar un descuento al cobrar |
| **Reembolsar órdenes** | Reembolsar una venta |
| **Acceder a billetera** | Abrir la Billetera |
| **Ver reportes** | Ver los reportes |
| **Editar configuración** | Cambiar la configuración de la tienda |

Si un usuario abre una pantalla sin el permiso necesario, ve un mensaje que le pide a un administrador que se lo otorgue.
