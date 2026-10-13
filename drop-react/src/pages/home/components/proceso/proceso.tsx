import './style.css'
import imgProceso from '../../../../media/img/home/proceso-fabricacion.JPG'
import { Imagen } from '../../../../interfaces/imagen';
import SectionTextImage from '../../../../components/sectionTextImage';
import ProcesoTimeline from './proceso-timeline';

export default function HomeProceso() {
    const seccionProceso: Imagen = {
        id: 1,
        titulo: `Proceso de fabricación`,
        subtitulo: '',
        descripcion: `Desarrollamos la producción dentro de un esquema propio industrializado, rigurosa supervisión de insumos y terminaciones. Esto garantiza una elaboración ultra eficiente, optimizando materiales, tiempos de entrega y presupuestos finales.\nCon las unidades totalmente finalizadas en planta, la división logística las protege y posiciona en carretones de traslado rumbo al sitio indicado. Al llegar al terreno, si el diseño comprende una unidad individual, se apoya sobre bases, conectamos suministros y queda totalmente apta para instalarte. Cuando consta de múltiples partes, se acoplan en el lugar y en menos de una semana la obra está finalizada.`,
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
