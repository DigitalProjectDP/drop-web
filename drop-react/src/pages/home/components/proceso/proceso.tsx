import './style.css'
import imgProceso from '../../../../media/img/home/proceso-fabricacion.jpg'
import { Imagen } from '../../../../interfaces/imagen';
import SectionTextImage from '../../../../components/sectionTextImage';
import ProcesoTimeline from './proceso-timeline';

export default function HomeProceso() {
    const seccionProceso: Imagen = {
        id: 1,
        titulo: `Proceso de fabricación`,
        subtitulo: '',
        descripcion: `El proceso productivo está enmarcado en un ambito industrializado con parámetros de control de materiales y calidad de terminaciones. Generando un proceso productivo eficiente, ahorrando materiales, plazos y por ende costos.\n\nUna vez que nuestros modelos están totalmente terminados en fábrica, a través del area de logística se embalan para el traslado y se cargan en los carretones de traslado para iniciar el camino a destino. Desde que nos encontramos en el terreno, si el proyecto puede ser transportado en un sólo módulo, se coloca sobre las fundaciones, se conectan los servicios y ya está listo para habitar. Si va en varios módulos, se realiza en ensamble y luego en no más de 7 días el proyecto ¡está listo para usar! `,
        imagenUrl: imgProceso,
        tipoSeccion: {
            id: 3,
            descripcion: 'Seccion'
        }
    }

    let imagenProceso = imgProceso;
    return (
        <section className="section__proceso mt-3">
            {/* <h1 className="proceso__title">Proceso de fabricación</h1>
            <p className="container text__paragraph">
                En <i>Drop</i>, construimos espacios adaptables según la necesidad. 
                Eso es posible con el método de construcción modular, modificando y presonalizando cada módulo según sea necesario. <br />
                Este sistema nos permite trasladar los módulos en más de una ocasión.
            </p>
            <div className="container proceso__container">
                <img src={imagenProceso} alt="ImagenProceso" className="proceso__imagen"/>
            </div> */}
            <SectionTextImage info={seccionProceso} inverse={true}></SectionTextImage>
            <ProcesoTimeline></ProcesoTimeline>
        </section>
    )
}
