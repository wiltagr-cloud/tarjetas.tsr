
function crearTarjetas() {

    // Obtener los valores de las cajas
    let desde = Number(document.getElementById("txtDesde").value);
    let hasta = Number(document.getElementById("txtHasta").value);
    let salto = Number(document.getElementById("txtSalto").value);

    // Obtener el contenedor
    let divTarjetas = document.getElementById("divTarjetas");

    // Validar que las cajas no estén vacías
    if (
        document.getElementById("txtDesde").value === "" ||
        document.getElementById("txtHasta").value === "" ||
        document.getElementById("txtSalto").value === ""
    ) {
        divTarjetas.innerHTML = "<p>Completa las tres cajas.</p>";
        return;
    }

    // Validar los números
    if (
        !Number.isInteger(desde) ||
        !Number.isInteger(hasta) ||
        !Number.isInteger(salto) ||
        salto <= 0 ||
        desde > hasta
    ) {
        divTarjetas.innerHTML = "<p>Ingresa valores válidos.</p>";
        return;
    }

    // Crear contenido
    let contenido = "";

    // Generar las tarjetas
    for (let i = desde; i <= hasta; i += salto) {

        contenido += "<div class='item'>" + i + "</div>";

    }

    // Mostrar las tarjetas
    divTarjetas.innerHTML = contenido;

}
