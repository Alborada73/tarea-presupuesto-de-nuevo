$(document).ready(function () {
    let listaGastos = []

    $("#formularioRegistro").submit(function (evento) {
        evento.preventDefault()
        let presupuesto = $("#ingresoMontoPresupuesto").val()

        $("#mostrarPresupuesto").attr("data-value", presupuesto)

        $("#mostrarPresupuesto").html("$" + presupuesto)

        $("#ingresoMontoPresupuesto").val("")
    })

    $("#botonGasto").click(() => {


        let nombreGasto = $("#ingresoNombreGasto").val().trim()
        let montoGasto = parseInt($("#ingresoMontoGasto").val())
        listaGastos.push({nombre:nombreGasto, monto:montoGasto})

        dibujarLista()


    })

    function dibujarLista(){


$("#mostrarListaGastos").html("");

    listaGastos.forEach((gasto, index) => {

      $("#mostrarListaGastos").append(

        `<tr>

          <td>${gasto.nombre}</td>

          <td>$${gasto.monto.toLocaleString("es-CL")}</td>

          <td>

            <i class="fa-solid fa-trash-can btn btn-primary" data-index="${index}"></i>

          </td>

        </tr>`

      );

    });
    }
//TODO falta implementar validaciones y calcular saldo y limpiar formularios

})

