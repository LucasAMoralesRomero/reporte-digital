//http://sucursal184/cotoacasa/tvsets/monitores/reseCabeceraCD.asp?fReservaDesde=19%2F12%2F2000&fReservaHasta=19%2F12%2F2023&fCompraDesde=&fCompraHasta=&idEstadoReserva=&idReserva=304951&idPedido=&idPlu=&idCampoOrden=0&orden=

//version 1:abre reporte con ingresar el numero de reserva
//se modifica para leer el pedido
//se modifica la fecha para tomar hasta 2050
//agregamos event listener al boton
window.addEventListener('DOMContentLoaded', function(){
    //obtenemos los elementos del formulario (nro reserva)
        var nroReserva= document.getElementById("nroReserva");
        var nroPedido= document.getElementById("nroPedido");
        var link = this.document.getElementById('consultar');
        link.addEventListener('click', function(){
            event.preventDefault();
            //pasamos a la funcion la direccion 
            var newURL = "http://sucursal184/cotoacasa/tvsets/monitores/reseCabeceraCD.asp?fReservaDesde=19%2F12%2F2000&fReservaHasta=19%2F12%2F2050&fCompraDesde=&fCompraHasta=&idEstadoReserva=&idReserva="+nroReserva.value+"&idPedido="+nroPedido.value+"&idPlu=&idCampoOrden=0&orden=";
            chrome.tabs.create({url: newURL})
        })
    })
    console.log("extension corriendo...");