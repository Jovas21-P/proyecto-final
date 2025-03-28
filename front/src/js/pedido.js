export function enviarDatos() {
    let cajas = document.getElementsByTagName('input')
    let datosPedido = {}

    for (let i = 0; i < cajas.length; i++) {
        let nombre = cajas[i].name
        if (nombre !== 'tel2') {
            datosPedido[nombre] = cajas[i].value
         }
    }

    console.log(datosPedido)
    let json = JSON.stringify(datosPedido)

    fetch('http://localhost:3001/pedido', {
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
        text: "Hubo un problema al enviar los datos: " + error.message,
        icon: "error",
        confirmButtonText: "Reintentar",
        customClass: {
            title: 't',
          }
    });
    console.error('Error:', error);
});
}

export function rellenarCampos() {
    // Obtener el valor del campo con id 'tel2'
    let telefono = document.getElementById('tel2').value;
    
    // Verificar si el teléfono está vacío
    if (!telefono) {
        Swal.fire({
            title: "Error",
            text: "Por favor ingresa un número de teléfono válido.",
            icon: "error",
            confirmButtonText: "OK",
            customClass: {
                title: 't',
              }
        });
        return; // Salir de la función si no se proporciona teléfono
    }

    // Realizar la solicitud GET para obtener los datos del servidor según el teléfono
    fetch(`http://localhost:3001/pedido/${telefono}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error en la respuesta: ${response.status}`);
            }
            return response.json();  // Parsear la respuesta a JSON
        })
        .then(data => {
            // Seleccionar todos los inputs
            const inputs = document.getElementsByTagName('input');

            // Rellenar los campos con los datos obtenidos del servidor
            for (let i = 0; i < inputs.length; i++) {
                const input = inputs[i];
                const nombre = input.name;  // Obtener el nombre del input
                
                // Ignorar el campo con id 'tel2' y asignar el valor de los demás campos
                if (nombre !== 'tel2' && data[nombre]) {
                    input.value = data[nombre];
                }
            }

            // Mostrar un mensaje de éxito con SweetAlert
            Swal.fire({
                title: "Datos Rellenados",
                text: "Los campos fueron rellenados.",
                icon: "success",
                confirmButtonText: "OK",
                customClass: {
                    title: 't',
                  }
            });
        })
        .catch(error => {
            // Mostrar un mensaje de error con SweetAlert
            Swal.fire({
                title: "Error",
                text: "Hubo un problema al obtener los datos: ",
                icon: "error",
                confirmButtonText: "Reintentar",
                customClass: {
                    title: 't',
                  }
            });
            console.error('Error:', error);
        });
}

