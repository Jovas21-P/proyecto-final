import { Button, Input } from "./componentes/componentes";
import './css/pedido.css'
import { enviarDatos, rellenarCampos } from "./js/pedido";

function Pedido() {
  return (
    <>
      <div className="container">
        <div className="row">
          <h2>Pedido</h2>
        </div>

        <form action="php/insertar.php" method="post">
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <Input texto="Teléfono" tipo="text" holder="Ingresa tu teléfono" id="tel" name="tel" />
            </div>

            <div className="col-12 col-md-6 mb-3">
              <Input texto="Nombres" tipo="text" holder="Ingresa tus nombres" id="nombres" name="nombres" />
            </div>

            <div className="col-12 col-md-6 mb-3">
              <Input texto="Apellidos" tipo="text" holder="Ingresa tus apellidos" id="apellidos" name="apellidos" />
            </div>

            <div className="col-12 col-md-6 mb-3">
              <Input texto="Dirección" tipo="text" holder="Ingresa tu dirección" id="direccion" name="direccion" />
            </div>

            <div className="col-12 mb-3">
              <Input texto="Correo" tipo="email" holder="Ingresa tu correo" id="correo" name="correo" />
            </div>

            <h3>Productos</h3>

            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePeletizado">
                    Bulto de peletizado
                  </button>
                </h2>
                <div id="collapsePeletizado" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    <img src="img/bulto (Peletizado).jpeg" alt="Bulto de peletizado" width="150px" height="150px" />
                    <p>Bulto de peletizado (50kg) - 20$ MXN por kilo</p>
                    <div className="d-flex align-items-center mb-3 productos">
                      <Input texto="Cantidad" tipo="number" id="cantidadPeleti" name="peletizado" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCompactado">
                    Bulto de compactado
                  </button>
                </h2>
                <div id="collapseCompactado" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    <img src="img/bulto (compactado).jpeg" alt="Bulto de compactado" width="150px" height="150px" />
                    <p>Bulto de compactado (40kg) - 17$ MXN por kilo</p>
                    <div className="d-flex align-items-center mb-3 productos">
                      <Input texto="Cantidad" tipo="number" id="cantidadCompa" name="compactado" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </form>

          <Button texto="Enviar" id="btnEnviar" tipo="submit" onClick={enviarDatos}><i className="bi bi-send"></i></Button>
           

        <div className="col-12 mb-3 boton">
          <p>Si ya ha realizado un pedido anteriormente, ingrese su número y haga clic en rellenar</p>
          <Input texto="Teléfono" tipo="text" holder="Ingresa tu teléfono" id="tel2" name="tel2" />
          <Button texto="Rellenar" id="btnRellenar" tipo="button" onClick={rellenarCampos}><i className="bi bi-search"></i></Button>
        </div>
      </div>
    </>
  );
}

export default Pedido;
