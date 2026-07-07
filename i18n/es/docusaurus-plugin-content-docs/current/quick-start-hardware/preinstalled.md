---
title: "Llévate tu unidad Ambrosia a casa"
sidebar_position: 4
slug: /quick-start-hardware/preinstalled
---

Tu OrangePi se configuró en la kermés, así que está conectada al Wi-Fi de la kermés. Para usarla en casa (u otro lugar) necesitas decirle el nombre y contraseña de tu Wi-Fi. Elige **uno** de los tres métodos según el equipo que tengas a la mano. **El Método 1 es el más fácil** — solo necesitas tu teléfono.

El nombre de tu unidad está en la tarjeta impresa que recibiste (por ejemplo `ambrosia-opi-3`). Sustituye `TU-UNIDAD` en los ejemplos por el nombre que aparezca en tu tarjeta. Tu contraseña SSH también está en la tarjeta.

---

## Método 1: Teléfono + Wi-Fi de configuración (más fácil, sin equipo extra)

**Necesitas:** solo tu teléfono.

Cuando la OrangePi enciende y no encuentra una red Wi-Fi conocida, levanta su propia red de configuración. Te conectas a esa red desde el teléfono, eliges tu Wi-Fi de la lista, escribes la contraseña y listo.

1. Conecta la corriente a la OrangePi y espera unos 60 segundos.
2. En tu teléfono, abre los ajustes de Wi-Fi y conéctate a **`TU-UNIDAD-setup`** (red abierta, sin contraseña).
3. El teléfono debería abrir la página de configuración automáticamente. Si no aparece, abre Chrome o Safari y entra a `http://10.42.1.1`.
4. La página muestra las redes Wi-Fi que la OrangePi puede ver. Toca tu Wi-Fi de casa (o escribe el nombre si está oculta), luego escribe la contraseña — toca **Mostrar** para verificar lo que escribiste. Toca **Conectar**.
5. En la siguiente pantalla, lee los pasos y luego toca **Copiar dirección y terminar**. Esto:
   - copia la dirección del POS al portapapeles del teléfono,
   - apaga la red de configuración,
   - y tu teléfono se reconecta solo a tu Wi-Fi de casa.
6. Abre Chrome o Safari, pega la dirección en la barra y entrarás al POS.

La OrangePi ya recuerda tu Wi-Fi de casa y se conectará sola de ahora en adelante.

:::tip
Si la página de configuración no aparece sola al unirte a `TU-UNIDAD-setup`, espera 5-10 segundos y abre `http://10.42.1.1` manualmente en el navegador.
:::

---

## Método 2: HDMI + teclado USB (no requiere otra computadora)

**Necesitas:** una TV o monitor con HDMI, un cable mini-HDMI a HDMI y un teclado USB.

1. Apaga la OrangePi (desconecta el cable USB-C).
2. Conéctala a tu TV/monitor con el cable mini-HDMI y conecta un teclado USB.
3. Vuelve a conectar la corriente y espera unos 60 segundos hasta que aparezca la pantalla de inicio.
4. Cuando aparezca `TU-UNIDAD login:` en la pantalla, escribe el nombre de tu unidad (de la tarjeta) y presiona Enter, luego tu contraseña y Enter.
5. Conéctate a tu Wi-Fi de casa con:

   ```
   sudo nmcli --ask device wifi connect "NOMBRE-DE-TU-WIFI"
   ```

   Te pedirá tu contraseña de sudo (la misma de la tarjeta) y luego la contraseña de tu Wi-Fi de casa.

6. Verifica que funcionó:

   ```
   nmcli device status
   ```

   La línea de `wlan0` debe decir `connected` con el nombre de tu Wi-Fi a la derecha.

7. Apaga con `sudo poweroff`, desconecta el HDMI y el teclado, mueve la OrangePi al lugar donde la vayas a usar. Al conectar la corriente se conectará sola a tu Wi-Fi de casa.

---

## Método 3: Cable Ethernet USB (sin Wi-Fi)

**Necesitas:** un adaptador USB-C a Ethernet, un cable Ethernet y tu router con un puerto LAN libre.

Si prefieres simplemente conectar la OrangePi al router y olvidarte del Wi-Fi, este es el camino más rápido. Una vez en la red cableada, cualquier dispositivo en tu Wi-Fi de casa puede acceder a ella.

1. Conecta el adaptador USB-C a Ethernet a la OrangePi, y un cable Ethernet del adaptador al router.
2. Conecta la corriente y espera unos 60 segundos.
3. Desde cualquier dispositivo en tu red de casa (teléfono, laptop), abre `https://TU-UNIDAD.local/` en el navegador. Acepta la advertencia del certificado (es el certificado autofirmado de la unidad — igual que en la kermés). Listo, ya estás en el POS.

:::tip
Si `TU-UNIDAD.local` no resuelve, busca la IP de la OrangePi en la página de "dispositivos conectados" de tu router y usa `https://192.168.x.y/`.
:::

Puedes dejar la unidad en Ethernet de forma permanente. Si después prefieres Wi-Fi, desconecta el cable Ethernet y la unidad arrancará con el AP de configuración del Método 1 al volver a encenderla.

---

## Cómo encontrar el nombre y contraseña de tu Wi-Fi

Si no sabes el nombre (SSID) o contraseña de tu Wi-Fi de casa, estos son los lugares más comunes donde encontrarlos:

1. **Calcomanía del router.** La mayoría de los routers traen el nombre de la red y la contraseña de fábrica impresos en una calcomanía en la parte de abajo o atrás. Busca etiquetas como "WiFi Name", "SSID" o "Nombre de red", y "Password", "WPA Key" o "Contraseña".
2. **Un teléfono que ya está conectado a esa red.**
   - **Android (10+):** Ajustes → Red e internet → Internet → toca tu Wi-Fi → Compartir → muestra el código QR o revela la contraseña.
   - **iOS (16+):** Ajustes → Wi-Fi → toca la (i) junto a tu red → toca Contraseña para verla.
3. **App o portal de tu proveedor de internet.** Totalplay, Telmex, Izzi y Megacable te permiten ver (y cambiar) las credenciales del Wi-Fi desde su app o portal en línea.
4. **Página de administración del router.** Desde un dispositivo ya conectado a tu Wi-Fi, abre `http://192.168.1.1` o `http://192.168.100.1` en un navegador. Inicia sesión con las credenciales de admin (a veces también están en la calcomanía) y busca la sección de Wireless o Wi-Fi.

¿Sigues atorado? Pregunta en el chat de soporte de Telegram — te ayudamos a encontrarlos.

---

## Solución de problemas

- **`TU-UNIDAD-setup` no aparece en el listado de Wi-Fi del teléfono.** Espera 60 segundos completos después de encender la unidad y vuelve a buscar. Si aún no aparece, puede que se haya conectado a una red conocida — apágala y enciéndela en un lugar fuera del alcance de cualquier Wi-Fi que conozca.
- **La página de configuración no aparece al unirte a `TU-UNIDAD-setup`.** Abre Chrome o Safari y entra a `http://10.42.1.1` manualmente.
- **Escribiste mal la contraseña del Wi-Fi.** El AP de configuración vuelve a aparecer si falla el intento — solo vuelve a unirte a `TU-UNIDAD-setup` y prueba otra vez. (Si usaste el Método 2 o 3: `sudo nmcli connection delete "NOMBRE-DE-TU-WIFI"` y luego repite el comando connect.)
- **Sigue conectado al Wi-Fi de la kermés cuando no quieres.** En casa el Wi-Fi de la kermés no está al alcance, así que no se conectará solo — basta con agregar tu Wi-Fi de casa y la unidad usará la que esté disponible.
- **Olvidaste la contraseña o te bloqueaste.** Escríbenos al chat de soporte de Telegram (QR en tu tarjeta). Te ayudamos con un reset sin Wi-Fi.
- **Nada resuelve ni funciona.** Apaga la unidad, tráela al organizador de la kermés o pide ayuda en Telegram — podemos reimaginar la tarjeta por ti.

Cuando estés conectado, abre la app del POS en `https://TU-UNIDAD.local/` desde cualquier dispositivo en tu Wi-Fi de casa — igual que en la kermés, con la misma advertencia del navegador que hay que aceptar.
