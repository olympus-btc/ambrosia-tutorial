---
title: "Instalación"
sidebar_position: 1
slug: /quick-installation-desktop-app
---

# Instalación

## Requisitos Mínimos
- **SO**: Linux (Ubuntu 20.04+, Debian 10+), macOS 10.15+, o Windows 10/11
- **RAM**: 2GB mínimo, 4GB recomendado
- **Espacio en Disco**: 2GB de espacio libre
- **Red**: Conexión a internet

# Paso 1: Descarga Ambrosia para tu Sistema Operativo

1. Ve aquí: https://github.com/olympus-btc/ambrosia/releases/tag/v0.5.1-alpha
2. Desplázate hacia abajo y busca tu SO y arquitectura, haz clic para descargar

# Paso 2: Instala Ambrosia en tu Sistema Operativo

## Para Linux (Ubuntu/Debian)

1. Abre la terminal
2. Navega a tu carpeta de Descargas
```
cd Downloads
```
3. Instala Ambrosia
```
sudo dpkg -i <nombre del archivo.deb>
```
4. Ve a tus aplicaciones y abre AmbrosiaPoS


## Para Linux (Fedora)

1. Abre la terminal
2. Navega a tu carpeta de Descargas
```
cd Downloads
```
3. Instala Ambrosia
```
sudo dnf install <nombre del archivo.rpm>
```

:::info
Fedora necesita instalar la dependencia `libxcrypt-compat`, te pedirá confirmación. Escribe `y` y presiona `Enter`.
:::

4. Ve a tus aplicaciones y abre AmbrosiaPoS

## Para Arch-Linux (tar.gz)

Este archivo tar.gz está disponible para usuarios avanzados en distribuciones Linux que no soportan paquetes `.deb` o `.rpm` (p.ej., Arch Linux, Gentoo, etc.).

> **Nota de Seguridad:** Esta es una aplicación de pagos Bitcoin Lightning. **NO** la ejecutes con `--no-sandbox`. El formato tar.gz mantiene el aislamiento adecuado sin las limitaciones de AppImage.

### 1. Extrae el archivo

```bash
tar -xzf ambrosia-app-*.tar.gz
```

### 2. Mueve a una ubicación permanente (opcional)

**Instalación para todo el sistema:**
```bash
sudo mv ambrosia-app-* /opt/AmbrosiaPoS
```

**Instalación solo para el usuario:**
```bash
mv ambrosia-app-* ~/.local/share/AmbrosiaPoS
```

### 3. Ejecuta la aplicación

```bash
cd /opt/AmbrosiaPoS  # o la ubicación que elegiste
./ambrosia-app
```

## Para MacOS

1. Abre el archivo `.dmg` descargado
2. Arrastra Ambrosia a la carpeta `Aplicaciones`
3. Abre Ambrosia desde `Aplicaciones`
:::warning
La primera vez que lo abras, MacOS mostrará una advertencia de seguridad porque no proviene de la App Store
:::
4. Ve a `Ajustes del Sistema` → `Privacidad y Seguridad` y haz clic en `Abrir de todas formas`
5. Abre la app de nuevo, haz clic en `Abrir de todas formas` cuando se te solicite, e ingresa tu `nombre de usuario` y `contraseña` de MacOS
6. La app debería abrirse normalmente ahora

## Para Windows

1. Ejecuta el instalador
2. Sigue el asistente de instalación
3. Elige Para Todos los Usuarios o Solo para mí
4. Elige la Carpeta de Destino y haz clic en Instalar
5. Espera a que la barra de progreso termine
6. Asegúrate de que Ejecutar AmbrosiaPoS esté seleccionado
7. Haz clic en Finalizar para ejecutar AmbrosiaPoS

:::warning
Es posible que debas desactivar tu VPN si la página no carga
:::
