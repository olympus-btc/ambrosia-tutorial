---
title: "Configuración"
sidebar_position: 2
slug: /quick-configuration-docker
---

# Configuración

## Configuración Inicial (Onboarding)

## Paso 1: Seleccionar Tienda

## Paso 2: Crear tu Cuenta de Administrador

Este paso crea la cuenta de administrador principal para tu sistema PoS. Esta cuenta tendrá acceso completo a todas las funciones y configuraciones.

### Campos Requeridos

### Nombre de Usuario

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
