---
title: "Seguridad en Docker"
sidebar_position: 1
---

# Seguridad en Docker

Esta guía es solo para instalaciones con Docker. Desde 0.10.0-beta, los contenedores de Ambrosia corren con menos privilegios, y desde 0.11.0-beta `ambrosia` usa el mismo ID de usuario que `phoenixd`. Una instalación creada antes de 0.11.0-beta necesita una migración que se hace una sola vez, al actualizarla.

## Qué Cambió

Desde 0.10.0-beta:

- El contenedor `ambrosia` corre con el usuario `ambrosia` y `ambrosia-client` con `node`, en lugar de root.
- El sistema de archivos de los dos contenedores es de solo lectura, salvo los volúmenes de datos y `/tmp`.
- `phoenixd`, `ambrosia` y `ambrosia-client` corren sin capacidades de Linux y con `no-new-privileges`. `phoenixd` mantiene el usuario de su propia imagen.

Si alguien toma el control del proceso de un contenedor, no obtiene privilegios de root dentro de él.

Desde 0.11.0-beta, el usuario `ambrosia` tiene siempre el ID de usuario 1000, el mismo que usa `phoenixd`, porque los dos servicios escriben en el volumen de `phoenixd`.

Tus datos siguen en los mismos volúmenes de Docker. Dentro del contenedor `ambrosia`, ahora están en `/home/ambrosia/` en lugar de `/root/`. Si personalizas `docker-compose.yml`, por ejemplo para agregar un volumen o un archivo, ten en cuenta que el sistema de archivos de los contenedores es de solo lectura.

## Quién Necesita Migrar

Toda instalación con Docker creada antes de 0.11.0-beta, una sola vez, al actualizarla. Una instalación nueva no lo necesita.

Si ya actualizaste sin migrar, `ambrosia` se reinicia una y otra vez: `docker-compose ps` lo muestra como `Restarting`, y `docker logs ambrosia` muestra errores de permisos como `SQLITE_READONLY_DIRECTORY`. `phoenixd` puede hacer lo mismo, con errores `Permission denied` en `docker logs phoenixd`. Los pasos de abajo arreglan los dos casos.

## Migrar tus Volúmenes

Antes de empezar, respalda tu frase de recuperación y exporta los datos de tu tienda (consulta [Respaldo y Restauración](../tutorials/backup-and-restore.md)).

Ejecuta estos comandos desde tu carpeta `ambrosia`.

1. Trae la nueva versión:

   ```bash
   git pull
   ```

2. Construye las imágenes nuevas:

   ```bash
   docker-compose build
   ```

3. Detén Ambrosia:

   ```bash
   docker-compose down
   ```

   No agregues `-v`: borra los volúmenes, y con ellos los datos de tu tienda y tu billetera Lightning.

4. Busca los nombres reales de tus volúmenes:

   ```bash
   docker volume ls
   ```

   Docker Compose les antepone el nombre del proyecto: si clonaste Ambrosia en la carpeta `ambrosia`, son `ambrosia_ambrosia_datadir` y `ambrosia_phoenixd_datadir`. Usa los nombres que aparecen en la lista.

5. Dale la propiedad de los dos volúmenes al ID de usuario 1000, el usuario con el que corren `ambrosia` y `phoenixd`:

   ```bash
   docker run --rm -v ambrosia_ambrosia_datadir:/data --user root --entrypoint sh ambrosia -c "chown -R 1000:1000 /data"
   docker run --rm -v ambrosia_phoenixd_datadir:/data --user root --entrypoint sh ambrosia -c "chown -R 1000:1000 /data"
   ```

6. Inicia Ambrosia como en el [paso 4 de la guía de instalación](../quick-start-docker/installation.md#inicia-ambrosia):

   ```bash
   docker-compose up -d --wait && docker-compose restart
   ```

Revisa que `docker-compose ps` muestre todos los servicios como `Up`, luego abre Ambrosia como en el [paso 8 de la guía de instalación](../quick-start-docker/installation.md), inicia sesión y abre la **Billetera**.

:::warning[Dos errores fáciles de cometer]

- Mantén `--entrypoint sh` en el paso 5. Sin él, el comando le llega al servidor de Ambrosia como argumentos extra y el `chown` no se ejecuta.
- Usa los nombres completos de los volúmenes del paso 4. Con un nombre corto como `ambrosia_datadir`, Docker crea en silencio un volumen nuevo y vacío, y el `chown` no toca tus datos.

:::
