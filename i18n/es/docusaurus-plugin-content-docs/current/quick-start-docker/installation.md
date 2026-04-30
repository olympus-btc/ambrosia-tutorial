---
title: "Instalación"
sidebar_position: 1
slug: /quick-installation-docker
---

# Instalación

## Requisitos Mínimos
- **SO**: Linux (Ubuntu 20.04+, Debian 10+), macOS 10.15+, o Windows 10/11
- **RAM**: 2GB mínimo, 4GB recomendado
- **Espacio en Disco**: 2GB de espacio libre
- **Red**: Conexión a internet

# Paso 1: Instala dependencias (Docker, git y curl)

## Para Linux (Ubuntu/Debian)

Abre tu terminal y ejecuta los siguientes comandos:

```bash
# Actualizar lista de paquetes
sudo apt update

# Instalar Docker y Git
sudo apt install -y curl docker.io git

# Instalar Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Agregar tu usuario al grupo docker (permite ejecutar Docker sin sudo)
sudo usermod -aG docker $USER

# Refrescar tu sesión de usuario para aplicar los cambios de grupo
su - $USER
```

## Para macOS

1. Descarga Docker Desktop para Mac desde [docker.com](https://www.docker.com/products/docker-desktop)
2. Abre el archivo `.dmg` descargado
3. Arrastra Docker a tu carpeta de Aplicaciones
4. Abre Docker desde Aplicaciones
5. Sigue el asistente de configuración
6. Docker se iniciará automáticamente

## Para Windows

1. Descarga Docker Desktop para Windows desde [docker.com](https://www.docker.com/products/docker-desktop)
2. Ejecuta el instalador
3. Sigue el asistente de instalación
4. Reinicia tu computadora cuando se te solicite
5. Abre Docker Desktop desde el menú de Inicio
6. Espera a que Docker inicie (verás un ícono verde en la bandeja del sistema)

## Verificar la Instalación de Docker

Después de instalar Docker, verifica que funciona correctamente:

```bash
docker --version
```

Deberías ver una salida como:
```
Docker version 28.2.2, build 28.2.2-0ubuntu1
```

## Verificar que Git está Instalado

```bash
git --version
```

Si ves el número de versión, ¡Docker y Git están instalados correctamente! Pasa al Paso 3.

# Paso 2: Instala Git (Si aún no está instalado)

Git es necesario para descargar el código fuente de Ambrosia desde GitHub.

## Instalar Git

**Para macOS:**
```bash
brew install git
```
(Requiere Homebrew. Si no tienes Homebrew, descarga Git desde [git-scm.com](https://git-scm.com))

**Para Windows:**
Descarga e instala desde [git-scm.com](https://git-scm.com/download/win)

# Paso 3: Clona el Repositorio de Ambrosia

Ahora descargaremos el código fuente de Ambrosia desde GitHub.

## Navega a tu Directorio Preferido

```bash
# Instala en tu directorio home
cd ~
```

## Clona el Repositorio

Ejecuta los siguientes comandos para descargar Ambrosia:

```bash
# Clonar el repositorio desde GitHub
git clone https://github.com/olympus-btc/ambrosia.git

# Navegar al directorio del proyecto
cd ambrosia
```

## Verifica los Archivos

Comprueba que estás en el directorio correcto con los archivos del proyecto:

```bash
ls
```

Deberías ver archivos que incluyen:
- `docker-compose.yml` (configuración de Docker)
- `README.md` (documentación del proyecto)
- Varias carpetas como `server`, `client`, etc.

# Paso 4: Construye e Inicia los Contenedores

:::info
Si tienes una versión anterior de Ambrosia en Docker, primero debes hacer esto:
:::

Desde el directorio `ambrosia`, ejecuta:
```bash
docker-compose up --build -d
```

:::info
Si es una instalación nueva, puedes saltarte el paso anterior.
:::

Desde el directorio `ambrosia`, ejecuta:

```bash
docker-compose up -d --wait && docker-compose restart
```

**Este proceso puede tardar 3-5 minutos en la primera ejecución**, especialmente con conexiones a internet lentas. Los inicios posteriores serán mucho más rápidos.

# Paso 5: Respalda tus palabras semilla

Anota tu semilla y guárdala en un lugar seguro/secreto (**MUY IMPORTANTE ANTES DE PONER DINERO EN EL NODO**):

```
docker exec -it phoenixd cat /phoenix/.phoenix/seed.dat
```

## Paso 6: Configura phoenixd para liquidez entrante
Por defecto, phoenixd solicitará 2Msat de liquidez entrante al LSP de ACINQ, cada vez que se quede sin liquidez entrante. Esto incluye cuando inicias el nodo por primera vez y recibes tu primer pago. ACINQ cobra el 1% del monto de liquidez entrante solicitada, que son 20ksat (más la comisión de minería). Como 20ksat equivalen aproximadamente a US$20 al momento de escribir esto, y como no necesitamos tanta liquidez entrante para un workshop, configuramos phoenixd para que no solicite liquidez entrante.

*(Nota: si realmente quieres 2M sats de liquidez entrante, omite esto. Si tomas esta ruta, deberías enviar ~25ksats como tu primer pago, la mayoría de los cuales serán tomados por ACINQ como comisión)*:

Ejecuta el siguiente comando:
```
docker exec phoenixd sh -c "\
  sed -i '/^auto-liquidity=/d' /phoenix/.phoenix/phoenix.conf && \
  echo 'auto-liquidity=off' >> /phoenix/.phoenix/phoenix.conf && \
  sed -i '/^max-mining-fee=/d' /phoenix/.phoenix/phoenix.conf && \
  echo 'max-mining-fee=5000' >> /phoenix/.phoenix/phoenix.conf \
" && docker restart phoenixd
```

# Paso 7: Verifica la configuración de auto-liquidity en phoenix.conf

```
docker exec phoenixd cat /phoenix/.phoenix/phoenix.conf
```

Deberías ver las siguientes dos líneas al final:
```
auto-liquidity=off
max-mining-fee=5000
```

Si no ves estos valores, significa que auto-liquidity todavía está ACTIVADO. En ese caso, Phoenixd requerirá que abras un canal con 25,000 sats, lo que te dará aproximadamente 2M sats de liquidez entrante.
Si quieres menos liquidez (y por lo tanto pagar menos para abrir el canal), regresa al Paso 6: Configura phoenixd para liquidez entrante y ajusta tu configuración.

:::info
Estos sats cubren la comisión de minería para abrir un canal con ACINQ.
No son reembolsables.
:::

# Paso 8: Accede a Ambrosia

1. Abre tu navegador web (Chrome, Firefox, Safari, Edge, etc.)
2. Navega a: **http://localhost:3000**
3. Deberías ver la pantalla de onboarding de Ambrosia

:::warning
Es posible que debas desactivar tu VPN si la página no carga
:::
