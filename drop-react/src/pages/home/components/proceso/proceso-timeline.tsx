import './style.css'

export default function ProcesoTimeline() {
    return (
        <div className="row timeline__container my-5">
            <div className="timeline__arrow"></div>
            <div className="col-12 col-md-3">
                <span className="text-secondary">Día 1</span>
                <h5>Contacto</h5>
                <p>Nos contactás, y nuestro equipo especialista te ayudará en encontrar el proyecto adecuado para lo que buscás.</p>
            </div>
            <div className="col-12 col-md-3">
                <span className="text-transparent">Día 2</span>
                <h5>Diseño y contrato</h5>
                <p>Ingenieros y arquitectos, diseñarán los planos y documentos, para incluirlos en el contrato. En donde especifica los detalles del proyecto, a entregar entre 60 y 90 días, según el proyecto.</p>
            </div>
            <div className="col-12 col-md-3">
                <span className="text-transparent">Día 3</span>
                <h5>Fabricación off site</h5>
                <p>Durante el lapso acordado, construimos los módulos de tu proyecto en nuestra fábrica, sin ningún tipo de intervención en tu terreno.</p>
            </div>
            <div className="col-12 col-md-3">
                <span className="text-secondary">Día 90</span>
                <h5>Entrega e instalación</h5>
                <p>Cumplido el tiempo, trasladamos los módulos hacia tu terreno y ensamblamos en menos de 48 horas</p>
            </div>
        </div>
    )
}