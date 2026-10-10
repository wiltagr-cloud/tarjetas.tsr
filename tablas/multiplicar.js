
function generarTablas() {

    // Obtener el número ingresado
    let campoNumero = document.getElementById("numero");
    let numero = campoNumero.value;
    let resultado = document.getElementById("resultado");

    // Validar el dato
    if (numero.trim() === "") {
        resultado.innerHTML =
            '<p class="mensaje">Escribe un número para continuar.</p>';
        campoNumero.focus();
        return;
    }

    numero = Number(numero);

    if (!Number.isInteger(numero) ||
        numero < 0 ||
        numero > 1000) {

        resultado.innerHTML =
            '<p class="mensaje">Ingresa un número entero entre 0 y 1000.</p>';
        campoNumero.focus();
        return;
    }

    // Crear el título de la tabla
    let contenido = "<h2>Tabla del " + numero + "</h2>";

    // Construir la tabla dinámicamente
    for (let i = 1; i <= 10; i++) {

        contenido +=
            "<p>" + numero + " × " + i +
            " <strong>= " + (numero * i) +
            "</strong></p>";

    }

    // Mostrar el resultado
    resultado.innerHTML = contenido;
}
