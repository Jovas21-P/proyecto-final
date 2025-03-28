import "bootstrap/dist/css/bootstrap.min.css"; // Importa los estilos de Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min"; // Importa los scripts de Bootstrap

export function Button({texto, id, tipo, children, onClick}) {
    return (
        <div className="container-fluid col-12 mb-3 div-btn">
            <button className="mi-btn btn btn-primary" id={id} type={tipo} onClick={onClick} >{children} {texto}</button>
        </div>
    )
}

export function Input ({texto, holder, tipo, name, valor, cambiar, ...otroE}){
    return(
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">{texto}</span>
                <input type={tipo} className="form-control" placeholder={holder} name={name} onChange={cambiar} {...otroE} aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
    )
}

