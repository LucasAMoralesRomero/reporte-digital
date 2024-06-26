# Reporte DIGITAL

![Icono](https://raw.githubusercontent.com/LucasAMoralesRomero/reporte-digital/main/report.png)

## Descripción
**Reporte DIGITAL** es una extensión de Chrome que facilita la obtención de órdenes digitales a partir del número de pedido o de reserva.

## Versión
**Versión:** 0.0.1

## Instalación
1. Descarga los archivos de esta extensión o clona el repositorio.
2. Abre la página de extensiones de Chrome: `chrome://extensions/`.
3. Activa el "modo desarrollador" en la esquina superior derecha.
4. Haz clic en "Cargar descomprimida" y selecciona la carpeta donde tienes la extensión.

## Uso
1. Haz clic en el ícono de la extensión en la barra de herramientas de Chrome.
2. Ingresa el número de reserva o el número de pedido en los campos correspondientes.
3. Presiona el botón "CONSULTAR" para abrir una nueva pestaña con el informe de la orden.

## Permisos
Esta extensión requiere el permiso de "tabs" para poder abrir nuevas pestañas en Chrome.

## Advertencia
| :warning: **Alerta:** Este proyecto está en desarrollo          |
|:---------------------------|
| **Esta extensión está actualmente en construcción y puede contener errores. Si tienes alguna sugerencia o encuentras problemas, te invito a hacer un fork del proyecto y contribuir a su desarrollo.**

## Desarrollo
Esta extensión utiliza JavaScript para abrir una nueva pestaña con el informe de la orden digital cuando se presiona el botón. Por el momento, no tiene funcionalidad fuera de la sucursal 184.

```javascript
// popup.js
window.addEventListener('DOMContentLoaded', function () {
  var nroReserva = document.getElementById("nroReserva");
  var nroPedido = document.getElementById("nroPedido");

  var link = document.getElementById('consultar');
  link.addEventListener('click', function () {
    event.preventDefault();
    var newURL = "http://direccion-de-reporte" + nroReserva.value + "&idPedido=" + nroPedido.value + "&idPlu=&idCampoOrden=0&orden=";
    chrome.tabs.create({ url: newURL });
  })
})
