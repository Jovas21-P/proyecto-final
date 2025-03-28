import { Button, Input } from './componentes/componentes.jsx';
import './css/contacto.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { traerDatos } from './js/contacto.js';

function Contacto() {
  return (
    <>
      <div className="container-fluid">
        <form>
          <div className="carta-form card text-center">
            <div className="card-header">
              <strong>Pide trabajo hoy mismo</strong>
            </div>

            <div className="card-body">
              <Input 
                texto="Nombre" 
                tipo="text" 
                holder="Ingresa tus Nombres" 
                name="nombre" 
              />
              <Input 
                texto="Apellidos" 
                tipo="text" 
                holder="Ingresa tus Apellidos" 
                name="apellidos" 
              />
              <Input 
                texto="Dirección" 
                tipo="text" 
                holder="Ingresa tu Dirección" 
                name="direccion" 
              />
              <Input 
                texto="Teléfono" 
                tipo="text" 
                holder="Ingresa tu Teléfono" 
                name="telefono" 
              />
              <Input 
                texto="Correo" 
                tipo="email" 
                holder="Ingresa tu Correo" 
                name="correo" 
              />
            </div>

            <div className="card-footer text-body-secondary">
              <Button tipo="button" texto="Enviar" id="btnEC" onClick={traerDatos}>
                <i className="bi bi-send"></i>
              </Button>
            </div>
          </div>
        </form>
      </div>

      <footer>
        <div className="pie-pagina-c">
          <p>&copy; 2025 Pastic Recycler. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
}

export default Contacto;
