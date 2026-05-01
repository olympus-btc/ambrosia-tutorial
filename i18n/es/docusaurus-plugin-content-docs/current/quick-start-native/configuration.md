---
title: "Configuración"
sidebar_position: 2
slug: /quick-configuration-native
---

# Configuración

## Configuración Inicial (Onboarding)

Cuando abres Ambrosia en tu navegador por primera vez, serás recibido por el asistente de onboarding. Este proceso te guiará para crear tu primera tienda y cuenta de administrador.

## Paso 1: Seleccionar Tienda

En la primera pantalla, deberás inicializar tu espacio de trabajo. Si es tu primera vez, crearás un nuevo perfil de tienda que contendrá todos tus productos, datos de ventas y configuraciones.

## Paso 2: Crear tu Cuenta de Administrador

Este paso crea la cuenta de administrador principal para tu sistema PoS. Esta cuenta tendrá acceso completo a todas las funciones y configuraciones.

### Campos Requeridos

Por favor proporciona las siguientes credenciales. **Guárdalas en un lugar seguro**, ya que son necesarias para gestionar tu tienda.

### Nombre de Usuario

El nombre de pantalla para tu cuenta de administrador.

**Ejemplo de Nombre de Usuario**:
```
Admin
```

### PIN (4 dígitos)

**Ejemplo de PIN**:
```
0000
```

### Contraseña de Billetera

**Ejemplo de Contraseña**:
```
Ambrosia2026!
```

## Paso 3: Ingresar los Datos de tu Negocio

Este paso recopila información importante sobre tu negocio que aparecerá en recibos, reportes y en todo el sistema.

**Nota**: El único campo requerido es `Nombre de la Tienda`.

### Nombre de la Tienda

**Ejemplo de Nombre de Tienda**:
```
Lightning Electronics
```
### Campos Opcionales
- Dirección
- Teléfono
- Correo Electrónico
- RFC (ID Fiscal)
- Moneda
- Logo de la Tienda

### Haz clic en Siguiente, verifica la información de la tienda, luego haz clic en Finalizar para completar la configuración

¡Felicidades! Has configurado exitosamente tu sistema Ambrosia de Punto de Venta.

### Qué Sucede Después

Después de completar el asistente de configuración:
1. El sistema guarda tu configuración
2. Tu base de datos se inicializa con la información de tu negocio
3. Tu cuenta de administrador es creada
4. Eres redirigido a la pantalla de inicio de sesión

## Primer Inicio de Sesión

**Pasos para Iniciar Sesión:**

1. **Selecciona tu Usuario**

2. **Ingresa tu PIN**

3. **Inicia Sesión**

## Paso 4: Abrir un canal / Obtener liquidez entrante

A continuación, depositamos 5k sats en nuestro nodo:

- En el Dashboard, ve a Billetera

:::warning
Si tu billetera sigue pidiendo una contraseña incluso después de haberla ingresado correctamente, es un bug (se corregirá pronto); simplemente recarga la página web o presiona Ctrl + R en tu teclado
:::

- Ingresa tu contraseña

- Ingresa el monto, p.ej.

```
5000
```

- Agrega una descripción (Opcional), p.ej.

```
Channel open
```

:::warning
Asegúrate de crear la factura por 5000 sats para abrir el canal, de lo contrario el pago podría fallar
:::

- Escanéalo con tu billetera Lightning y paga; deberías ver una confirmación en la pantalla.

:::info
Estos sats cubren la comisión de minería para abrir un canal con ACINQ.
No son reembolsables.
:::
