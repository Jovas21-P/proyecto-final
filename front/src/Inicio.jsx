import './css/inicio.css'
import { Rutas, Rutas2 } from './componentes/Rutas'


function Inicio() {
    return(
        <>

        <div className="container titulo">
        
        <div className="row">
            <h1>Plastic Recycler</h1>
            
        </div>
        <div className="logo">
            <img src="/img/logo.jpg" alt="" width="25" height="800"/>
        </div>
            <div className="row cuerpo">
                
                <h2>¡Bienvenidos!</h2>
                <p>
                    La microempresa de reciclado de plástico llamda plastic recycler se ha dedicado al reciclaje de bolsa durante casi veinte años, te contaremos un poco acerca sobre nuestro trabajo:
                </p>
                <div className="">
                    <p>1.	Recolección y Clasificación: Las bolsas plásticas se recolectan a partir de diversos puntos de recolección, como centros de reciclaje, supermercados y otros establecimientos. Luego, se clasifican según su tipo y color para asegurar que el proceso de reciclaje sea más eficiente.</p>
                </div>
        
                
                <div className="">
                    <p>2.	Trituración: Las bolsas plásticas se trituran en pequeños trozos o chips utilizando trituradoras. Este proceso reduce el tamaño del material y facilita su manejo en las etapas siguientes.</p>
                </div>
        
                
                <div className="">
                    <p>3.	Peletización: La bolsa triturada se introducen en una peletizadora, donde se funden y se transforman en pequeños pellets o esferas de plástico. Estos pellets son más fáciles de manejar y pueden ser utilizados en la fabricación de nuevos productos plásticos.</p>
                </div>
        
                
                <div className="">
                    <p>
                        4.	Encostalamiento: Se llenan costales de aproximadamente 50kg y se pesan en una báscula, este peso es anotado y se cargan los bultos al vehículo de entrega y se manda directo al cliente
                        </p>
                </div>
        
        
                
                <div className="">
                    <h2>Beneficios</h2>
                    <ol type="1">
                        <li><strong>Calidad Garantizada:</strong> Nuestros productos y servicios cumplen con altos estándares de calidad, asegurando la satisfacción de nuestros clientes.</li>
                        <li><strong>Precios Competitivos:</strong> Ofrecemos tarifas accesibles en venta y maquila, lo que te permite maximizar tus márgenes de ganancia.</li>
                        <li><strong>Flexibilidad:</strong> Adaptamos nuestros servicios a tus necesidades específicas, ya sea en la compra al por mayor o en la maquila de productos.</li>
                        <li><strong>Servicio Personalizado:</strong> Nuestro equipo está disponible para brindarte atención personalizada y resolver cualquier inquietud que tengas.</li>
                        <li><strong>Eficiencia en Entregas:</strong> Nuestro servicio a domicilio asegura que recibas tus productos de manera rápida y segura, minimizando tiempos de espera.</li>
                        <li><strong>Transparencia en Costos:</strong> Sin costos ocultos, sabemos que la transparencia es clave para construir relaciones de confianza.</li>
                        <li><strong>Variedad de Productos:</strong> Contamos con una amplia gama de productos que se adaptan a diferentes industrias y necesidades.</li>
                    </ol>
        
        
        
        
                    <p>Ademas El reciclaje de bolsas de plástico ayuda al medio ambiente porque: </p>
                <ol type="1">
                    <li>Evita que los materiales se conviertan en residuos. </li>
                    <li>Alarga la vida útil de los productos y materiales. </li>
                    <li>Contribuye a la preservación de los recursos naturales. </li>
                    <li>Libera al medio ambiente de la contaminación que producen las bolsas de plástico. </li>
                </ol>
                </div>
            
    </div>

    </div>

    <footer className='container-fluid'>
        <div className='contenido-pie'>
        <p>&copy; 2025 Pastic Recycler. Todos los derechos reservados.</p>
        </div>
    </footer>

    </>
    )
}

export default Inicio