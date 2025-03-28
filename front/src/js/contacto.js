export function traerDatos() {
    let cajas = document.getElementsByTagName('input');
    console.log(cajas);
    var datos = {};

    // Recolectar los valores de los inputs
    for (let i = 0; i < cajas.length; i++) {
        let nombre = cajas[i].name;  // Cambié 'nombre' por 'name' ya que es el atributo correcto en HTML
        if (nombre) {
            datos[nombre] = cajas[i].value;
        }
    }
    console.log(datos);  // Imprimir los datos que se van a enviar

    let json = JSON.stringify(datos);

    fetch('http://localhost:3001/contacto', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: json
}).then(response => {
    if (!response.ok) {
        throw new Error(`Error en la respuesta: ${response.status}`);
    }
    return response.json();
}).then(data => {
    Swal.fire({
        title: "Éxito",
        text: "Los datos fueron enviados correctamente",
        icon: "success",
        confirmButtonText: "OK",
        customClass: {
            title: 't',
          }
    });
    for (let i = 0; i < cajas.length; i++) {
        cajas[i].value = ""
    }
}).catch(error => {
    Swal.fire({
        title: "Error",
        text: "Hubo un problema al enviar los datos: ",
        icon: "error",
        confirmButtonText: "Reintentar"
    });
    console.error('Error:', error);
});

}
