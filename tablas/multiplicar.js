
function generarTablas() {

    let contenedor = document.getElementById("contenedor");

    let contenido = "";

    contenido += "<h1>Tabla del 3</h1>";

    contenido += '<section class="tabla">';

    for (let i = 1; i <= 10; i++) {

        contenido += "<p>3 × " + i +
                     " <strong>= " + (3 * i) +
                     "</strong></p>";

    }

    contenido += "</section>";

    contenido += '<button class="boton" onclick="generarTablas()">PROBAR</button>';

    contenido += "<footer><p>Creado por: Tu Nickname</p></footer>";

    contenedor.innerHTML = contenido;

}
