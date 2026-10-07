---
title: "Actualizar Ambrosia"
sidebar_position: 4
---

# Actualizar Ambrosia

Los nuevos releases de Ambrosia traen funciones y arreglos de seguridad, así que mantén tu instalación al día. Cómo actualizar depende de cómo la instalaste.

:::warning[Antes de actualizar]
Respalda tu frase de recuperación (**Configuración** → **Bitcoin y Wallet** → **SEED de Lightning**) y exporta los datos de tu tienda (**Configuración** → **Backup y datos**), por si algo sale mal.
:::

## App de Escritorio

La app busca actualizaciones al abrirse y cada 6 horas. También puedes buscarlas a mano desde **Check for Updates...** en el menú de la app.

- **Windows:** la actualización se descarga sola. Cuando está lista, el menú muestra **Restart to Update to** y la nueva versión: haz clic para reiniciar e instalarla. Si dejas una actualización descargada pendiente varios días, la app te lo recuerda con **Update Ready to Install**; elige **Restart Now** o **Later**.
- **macOS y Linux:** la app te avisa que hay una versión nueva con **Update Available**. Haz clic en **Download** para abrir la página del release, y descarga e instala la nueva versión igual que instalaste la primera (consulta la guía de instalación de la App de Escritorio).

Los menús y avisos de actualización de la app de escritorio solo están en inglés.

## Docker

Desde tu carpeta `ambrosia`, trae el código más reciente y reconstruye las imágenes:

```bash
git pull
docker-compose up --build -d
```

Después inicia Ambrosia como en el paso 4 de la guía de instalación con Docker:

```bash
docker-compose up -d --wait && docker-compose restart
```

## Nativo

El script de actualización reemplaza phoenixd, el servidor de Ambrosia y el cliente por sus últimos releases, y reinicia los servicios systemd si los usas:

```bash
curl -fsSL https://raw.githubusercontent.com/olympus-btc/ambrosia/refs/tags/v0.9.0-beta/scripts/update.sh | bash -s -- --yes
```

- Sin `--yes`, el script pregunta antes de cada paso.
- Agrega `--force` para reinstalar aunque ya tengas la última versión.
- El script actualiza phoenixd a su último release. Para mantener una versión específica, define `PHOENIXD_TAG`:

  ```bash
  curl -fsSL https://raw.githubusercontent.com/olympus-btc/ambrosia/refs/tags/v0.9.0-beta/scripts/update.sh | PHOENIXD_TAG=0.9.0 bash -s -- --yes
  ```

Si no usas los servicios systemd, detén phoenixd, el servidor y el cliente antes de actualizar, y vuelve a iniciarlos después.
