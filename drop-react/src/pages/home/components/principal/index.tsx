import './style.css'
import { Imagen } from '../../../../interfaces/imagen'
import SectionTextImage from '../../../../components/sectionTextImage'
import imgDrop from '../../../../media/img/home/drop-arquitecturamodular.jpg'

export default function HomePrincipal() {   
    const seccionNosotros: Imagen = {
        id: 1,
        titulo: `DROP`,
        subtitulo: 'Arquitectura modular',
        descripcion: `Con nuestro estudio de ingeniería y empresa constructora de más de 25 años de experiencia en el rubro, decidimos desarrollar un sistema constructivo que cambie el paradigma de la construcción tradicional.\n\nDROP es una nueva forma de entender la arquitectura moderna. Por esta razón sabíamos que teníamos que basarnos en 3 conceptos fundamentales, los cuales no podían fallar a la hora de desarrollar un nuevo sistema constructivo: CALIDAD, VELOCIDAD Y ECONOMÍA.\n\nSomos el socio ideal tanto para quienes estén buscando una vivienda, desarrolladores inmobiliarios, gastronómicos y comerciales.`,
        imagenUrl: imgDrop,
        tipoSeccion: {
            id: 3,
            descripcion: 'Seccion'
        }
    }

    return (
        <section className="home__principal">
            <SectionTextImage info={seccionNosotros} inverse={false} idSeccion="seccion-principal" buttonText={"Leer más"} buttonLink={"nosotros"}></SectionTextImage>        
        </section>
    )
}
