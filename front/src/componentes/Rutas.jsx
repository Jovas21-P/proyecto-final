import { Link, Route, Routes } from "react-router-dom";
import './../css/barra-nav.css'
import Inicio from "../Inicio";
import QuienesSomos from "../QuienesSomos";
import Servicios from "../Servicios";
import Ubicacion from "../Ubicacion";
import Contacto from "../contacto";
import Pedido from "../Pedido";

export const Rutas = () => {
    return (
      <div className="menu">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            {/* Botón que se muestra en pantallas pequeñas */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
  
            {/* Menú que se colapsa en pantallas pequeñas */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav w-100 d-flex justify-content-center align-items-center">
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/">
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/quienes-somos">
                    Quienes Somos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/servicios">
                    Servicios
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/ubicacion">
                    Ubicación
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/contacto">
                    Contacto
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/Pedido">
                    Pedido
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  };

  export const Rutas2 = () => {
    return(
        <Routes>
        <Route path='/' element={<Inicio></Inicio>}></Route>
        <Route path='/quienes-somos' element={<QuienesSomos></QuienesSomos>}></Route>
        <Route path="/servicios" element={<Servicios></Servicios>}></Route>
        <Route path="/ubicacion" element={<Ubicacion></Ubicacion>}></Route>
        <Route path="/contacto" element={<Contacto></Contacto>}></Route>
        <Route path="/Pedido" element={<Pedido></Pedido>}></Route>
      </Routes>
    )
}
  