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
        descripcion: `Construimos espacios adaptables según la necesidad. 
        Eso es posible con el método de construcción modular, modificando y presonalizando cada módulo según sea necesario. <br />
        Este sistema nos permite trasladar los módulos en más de una ocasión.
        `,
        imagenUrl: imgProceso,
        tipoSeccion: {
            id: 3,
            descripcion: 'Seccion'
        }
    }

    let imagenProceso = imgProceso;
    return (
        <section className="section__proceso my-5">
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
