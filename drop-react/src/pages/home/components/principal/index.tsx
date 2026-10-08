import './style.css'
import { Imagen } from '../../../../interfaces/imagen'
import SectionTextImage from '../../../../components/sectionTextImage'
import imgDrop from '../../../../media/img/home/showroom.webp'

export default function HomePrincipal() {
    const seccionNosotros: Imagen = {
        id: 1,
        titulo: `DROP`,
        subtitulo: 'Arquitectura modular',
        descripcion: `Traemos el respaldo de más de 25 años de experiencia haciendo ingeniería y construyendo, pero quisimos ir por más y cambiamos las reglas del juego.\n\nEn DROP entendemos la arquitectura moderna de otra manera. Por eso, diseñamos un sistema constructivo basado en una tríada que no falla: calidad PREMIUM, tiempos súper ágiles y economía real.\n\nSi estás buscando tu vivienda propia, o tenés en mente un proyecto inmobiliario, turístico, comercial o gastronómico, tenemos el Drop perfecto para cada necesidad.`,
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
