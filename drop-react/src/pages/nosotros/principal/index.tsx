import './style.css'
import { Imagen } from '../../../interfaces/imagen'
import SectionTextImage from '../../../components/sectionTextImage'
import imgNosotros from '../../../media/img/nosotros/zPortada nosotros.jpg'
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
        descripcion: `Con GRAUPEL SUR S.A., nuestro estudio de ingeniería y empresa constructora con más de 25 años de experiencia en la actividad de la construcción privada, decidimos desarrollar un proceso de ejecución de módulos habitacionales que cambie el paradigma de la construcción tradicional.\n\nDROP es un nuevo concepto dentro de los bienes raíces. Una nueva manera de entender la vida moderna, inteligente, segura y práctica. Utilizamos fabricantes y proveedores locales que se encuentran cerca denuestras instalaciones de producción, trabajamos apoyándonos en empresas locales para reducir la energía incorporada de cada una de nuestros proyectos.\n\nComo innovadores dentro del sector, los diseños internos únicos de DROP, los materiales de origen local y los proveedores alineados con el valor combinados con un modelo de construcción y fabricación eficiente, nos han permitido convertirnos en un fabricante líder de soluciones de construcciones modulares.`,
        imagenUrl: imgNosotros,
        tipoSeccion: {
            id: 3,
            descripcion: 'Seccion'
        }
    }

    useEffect(() => {        
        window.scrollTo(0, 0)
    },[])

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
