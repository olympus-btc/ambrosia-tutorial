---
title: "Instalación"
sidebar_position: 1
slug: /quick-installation-script
---

# Guía de Instalación - Ambrosia (Nativo/Script)

## 1. Verificación de Requisitos Previos

Antes de continuar, asegúrate de tener las siguientes dependencias instaladas. Puedes verificarlas con estos comandos:

- **Node.js (v22+):** `node -v`
- **npm (v10+):** `npm -v`
- **JDK/JRE (v21):** `java -version`
- **Gradle (v8.1+):** `gradle -v`

:::warning
Si te falta alguna de estas, consulta la [Guía Detallada de Dependencias](https://github.com/olympus-btc/ambrosia/blob/main/doc/dependencies.md).
:::

## 2. Instalación

El script de instalación requiere privilegios **sudo** para instalar binarios en `/usr/local/bin` y configurar servicios systemd.

**Comando único (recomendado):**

*Instalación automática (incluye servicios systemd):*
```bash
curl -fsSL https://raw.githubusercontent.com/olympus-btc/ambrosia/refs/heads/main/scripts/install.sh | bash -s -- --yes
```

*Instalación automática (sin servicios systemd):*
```bash
curl -fsSL https://raw.githubusercontent.com/olympus-btc/ambrosia/refs/heads/main/scripts/install.sh | bash -s -- --yes --no-service
```

**Métodos alternativos:**

Si prefieres revisar el script antes de ejecutarlo, o si quieres una **instalación interactiva** que te pregunte si instalar servicios systemd para cada componente, puedes descargarlo e inspeccionarlo primero.

*Descarga el script y hazlo ejecutable:*

```bash
wget -q https://raw.githubusercontent.com/olympus-btc/ambrosia/refs/heads/main/scripts/install.sh
chmod +x install.sh
```

*Ejecuta el script:*

```bash
./install.sh
```

Este script de instalación unificado automatiza el despliegue del ecosistema completo de Ambrosia, incluyendo el nodo Lightning Phoenixd, el servidor backend y el cliente frontend. Maneja la verificación de dependencias, descargas seguras de binarios con validación GPG, configuración del entorno (actualizaciones de PATH), y la creación opcional de servicios systemd para cada componente, asegurando una operación en segundo plano sin interrupciones.

:::note
Si no usas los servicios systemd, deberás iniciar manualmente el backend y el frontend ejecutando los siguientes comandos en tu terminal como procesos separados:

```bash
ambrosia
```

y

```bash
ambrosia-client
```
:::

Una vez que ambos servicios estén en ejecución (ya sea vía systemd o manualmente), puedes acceder al **Dashboard de Ambrosia** en:

👉 [http://localhost:3000](http://localhost:3000)

El script de instalación de Phoenixd lo instala automáticamente. El script descarga Phoenixd v0.7.1, verifica la integridad del paquete usando GPG y checksums, lo instala en `/usr/local/bin`, y opcionalmente configura un servicio systemd para inicio automático.

Consulta [Mastering Phoenixd](https://btcgdl.github.io/Mastering-phoenixd/) para más detalles.

## Desinstalación

Para desinstalar Ambrosia POS y Phoenixd, ejecuta el siguiente script:

```bash
curl -fsSL https://raw.githubusercontent.com/olympus-btc/ambrosia/refs/heads/main/scripts/uninstall.sh | bash
```
