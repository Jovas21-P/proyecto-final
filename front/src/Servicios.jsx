import './css/servicios.css'

function Servicios() {
    return(
        <>
            <div className="container">
        <div className="row">
            <h2>Servicios</h2>
        </div>


        <div className="row">
            <h3>Maquila</h3>
            <p>Contamos con un servicio de maquila eficiente y profesional, con un costo de $3 MXN por kilo. Nos encargamos de transformar tus insumos en productos terminados, manteniendo los estándares de calidad que nos caracterizan. Este servicio es perfecto para emprendedores que desean expandir su oferta sin invertir en infraestructura.</p>
        </div>
        
        <div className="row fotos">
            <div className="col">
                <img src="img/compactado (Mano).jpeg" alt="" title="Compactado"/> <img src="../img/peletizado (mano).jpeg" alt="" title="Peletizado"/>
            </div>
            <div className="col">
                <img src="img/peletizado (mano).jpeg" alt="" title="Peletizado"/> <img src="../img/compactado (Mano).jpeg" alt="" title="Compactado"/>
            </div>
        </div>

        <div className="row">
            <h3>Venta</h3>
            <p>Ofrecemos productos de alta calidad a un precio competitivo de $20 MXN por kilo. Ideal para quienes buscan adquirir grandes cantidades sin sacrificar la calidad. Nuestra variedad garantiza que encuentres lo que necesitas para tu negocio o uso personal.</p>
        </div>

        <div className="row fotos">
            <div className="col">
                <img src="img/compactado (Mano).jpeg" alt="" title="Compactado"/> <img src="../img/peletizado (mano).jpeg" alt="" title="Peletizado"/>
            </div>
            <div className="col">
                <img src="img/peletizado (mano).jpeg" alt="" title="Peletizado"/> <img src="../img/compactado (Mano).jpeg" alt="" title="Compactado"/>
            </div>
        </div>

        <div className="row">
            <h2>Servicio a domicilio</h2>
            <p> Ofrecemos un servicio a domicilio conveniente y accesible por $25 MXN dentro del estado de mexico, dependiendo el lugar de entrega, si es fuera del pais se cobran estos 25$ MXN más el costo de envío si el destino es fuera del estado. Aseguramos una entrega rápida y segura, llevándote nuestros productos directamente.</p>

            <h2>Muestra gratis</h2>
            <p>Proporcionamos muestras gratuitas del producto para que nuestros clientes puedan probar antes de realizar un pedido mayor.</p>

            <h2>Soporte Postventa</h2>
            <p>Brindamos atención y asistencia después de la venta para resolver dudas o problemas relacionados con nuestros productos.</p>
        </div>


    </div>

        <footer>
            <div className='pie-servicios'>
        <p>&copy; 2025 Pastic Recycler. Todos los derechos reservados.</p>
            </div>
        </footer>
        </>
    )
}

export default Servicios