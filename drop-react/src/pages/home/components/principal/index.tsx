import './style.css'
import { Imagen } from '../../../../interfaces/imagen'
import SectionTextImage from '../../../../components/sectionTextImage'
import imgDrop from '../../../../media/img/home/drop-arquitecturamodular.jpg'

export default function HomePrincipal() {   
    const seccionNosotros: Imagen = {
        id: 1,
        titulo: `DROP`,
        subtitulo: 'Arquitectura modular',
        descripcion: `Somos una empresa constructora familiar, pioneros y líderes en arquitectura modular en Argentina.\n\nLa construcción modular es la nueva forma de construir. Basándonos en 3 pilares fundamentales: <i>rapidez, adaptabilidad y economía</i>\n\nPor eso, somos el socio estratégico para aquellas personas que estén buscando su primer vivienda, para inversores gastronómicos, hoteleros o emprendedores.
        `,
        imagenUrl: imgDrop,
        tipoSeccion: {
            id: 3,
            descripcion: 'Seccion'
        }
    }

    return (
        <section className="home__principal my-5">
            <SectionTextImage info={seccionNosotros} inverse={false} idSeccion="seccion-principal" buttonText={"Leer más"} buttonLink={"nosotros"}></SectionTextImage>        
        </section>
    )
}
