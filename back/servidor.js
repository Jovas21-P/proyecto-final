const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors());
app.use(express.json());

var datosSolicitud = []
var datosPedido = []

// Ruta para recibir los datos del formulario de contacto
app.post('/contacto', (req, res) => {
  const datos = req.body;
  console.log('Datos recibidos:', datos);
  datosSolicitud.push(datos); 

  res.status(200).json({
    message: "Datos recibidos correctamente",
    datos: datos
  });

});

app.get('/contacto', (req, res) => {
  res.json(datosSolicitud)

});

//Ruta para pedido

app.post('/pedido', (req, res) => {
  const datos = req.body;
  console.log('Datos recibidos:', datos);
  datosPedido.push(datos);

  res.status(200).json({
    message: "Datos recibidos correctamente",
    datos: datos
  });
})


app.get('/pedido/:tel', (req, res) => {
  let tel = req.params.tel
  let datosEncontrados = {}
  let centi = false
  for (let i = 0; i < datosPedido.length; i++) {
     if (datosPedido[i].tel == tel) {
      datosEncontrados = datosPedido[i]
      centi = true
      break
     }
  }
  if (centi) {
    res.json(datosEncontrados)
  } else {
    res.send(`Datos no encontrados de ${tel}`)
  }
})

app.get('/pedido', (req, res) => {
  res.json(datosPedido)

});

app.listen(3001, () => {
  console.log('Servidor en puerto 3001');
});
