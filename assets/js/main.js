$(document).ready(function () {
    $("#formulario_de_registro_ppto").submit(function (evento) {
        evento.preventDefault()
        let presupuesto = $("#nameExpense").val()
        alert(presupuesto)
    })

})

