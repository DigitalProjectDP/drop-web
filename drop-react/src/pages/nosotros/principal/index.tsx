import './style.css'
import { Imagen } from '../../../interfaces/imagen'
import SectionTextImage from '../../../components/sectionTextImage'
import imgNosotros from '../../../media/img/nosotros/Socios.webp'
import imagen001 from '../../../media/img/nosotros/fernando_magno.jpg';
import imagen002 from '../../../media/img/nosotros/agustin_magno.jpg';
import imagen003 from '../../../media/img/nosotros/juan_magno.jpg';
import imagen004 from '../../../media/img/nosotros/dario-bardi.jpg';
import { useEffect } from 'react';

export default function NosotrosPrincipal() {
    const seccionNosotros: Imagen = {
        id: 1,
        titulo: `Nuestra historia`,
        subtitulo: '',
        descripcion: `DROP nace dentro de GRAUPEL SUR S.A., una empresa familiar con más de 25 años de trayectoria en la construcción privada, que reúne un estudio de ingeniería y una empresa constructora bajo un mismo lema: **SABEMOS CONSTRUIR**. DROP es una de nuestras unidades de negocio. Surgió de la decisión de desarrollar un proceso de fabricación de módulos que cambiara el paradigma de la construcción tradicional.

En su momento fue un desafío de vanguardia. Hoy es una realidad: nuestro sistema está probado y es sólido, y ya está consolidada la idea de que lo modular es el futuro de la construcción. Nosotros **sabemos cómo hacerlo**.

Trabajamos con fabricantes y proveedores locales, cercanos a nuestra planta de producción. Así reducimos la energía incorporada de cada proyecto y apoyamos a la industria de nuestra región.

Gracias a nuestros diseños propios, los materiales de origen local y un modelo de fabricación eficiente, hoy somos líderes en viviendas modulares premium. Y vamos más allá: también desarrollamos proyectos comerciales, hoteleros, gastronómicos, educativos y de salud.`,
        imagenUrl: imgNosotros,
        tipoSeccion: {
            id: 3,
            descripcion: 'Seccion'
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className="section__nosotros">
            <SectionTextImage info={seccionNosotros} idSeccion="seccion-nuestra-historia"></SectionTextImage>
            <h3 className="nosotros__title my-5">Nosotros</h3>
            <div className="row div__nosotros">
                <div className="col-6 col-xl-3 d-flex flex-column justify-content-center align-items-center gap-2 container mb-4">
                    <img className="img__nosotros" alt="Foto" src={imagen001}></img>
                    <strong>Fernando Magno</strong>
                    <p>Socio Fundador Graupel Sur SA</p>
                    <p>Ing. en Construcciones</p>
                </div>
                <div className="col-6 col-xl-3 d-flex flex-column justify-content-center align-items-center gap-2 container mb-4">
                    <img className="img__nosotros" alt="Foto" src={imagen002}></img>
                    <strong>Agustín Magno</strong>
                    <p>CEO Drop</p>
                    <p>Ing. Civil</p>
                </div>
                <div className="col-6 col-xl-3 d-flex flex-column justify-content-center align-items-center gap-2 container mb-4">
                    <img className="img__nosotros" alt="Foto" src={imagen003}></img>
                    <strong>Juan Belgrande Magno</strong>
                    <p>Socio Graupel</p>
                    <p>Ing. Civil</p>
                </div>
                <div className="col-6 col-xl-3 d-flex flex-column justify-content-center align-items-center gap-2 container mb-4">
                    <img className="img__nosotros" alt="Foto" src={imagen004}></img>
                    <strong>Darío Leandro Bardi</strong>
                    <p>Socio Graupel</p>
                    <p>M.M.O.</p>
                </div>
            </div>

        </section>
    )
}
