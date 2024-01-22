import './style.css'
import { Imagen } from '../../../interfaces/imagen'
import SectionTextImage from '../../../components/sectionTextImage'
import imgNosotros from '../../../media/img/nosotros/nosotros.jpg'
import imagen001 from '../../../media/img/nosotros/fernando-magno.jpg';
import imagen002 from '../../../media/img/nosotros/agustin-magno.jpeg';
import imagen003 from '../../../media/img/nosotros/juan-magno.jpg';

export default function NosotrosPrincipal() {   
    const seccionNosotros: Imagen = {
        id: 1,
        titulo: `Nuestra historia`,
        subtitulo: '',
        descripcion: ` Drops se fundó en Gold Coast en 2015. Originalmente formulado basándose en el uso de contenedores de envío, ModnPods ha evolucionado rápidamente hasta convertirse en la gama de módulos modulares prefabricados,conscientes del medio ambiente y con un diseño arquitectónico que está mejorando los parques de vacaciones y los retiros en toda Australia.
        <br/>
        Al utilizar fabricantes y proveedores australianos que se encuentran cerca denuestras instalaciones de producción, ModnPods trabaja para apoyar a las empresas locales y reducir la energía incorporada de cada una de nuestras cápsulas.
        Nuestro negocio está respaldado por nuestros valores, impulsados por un equipo enérgico apasionado por educar a los consumidores sobre una nueva forma de vivir, trabajar y jugar a través de la producción de viviendas modulares prefabricadas.
        Como innovadores dentro del sector, los diseños internos únicos de ModnPods, los materiales de origen local y los proveedores alineados con el valor combinados con un modelo de construcción y fabricación eficiente, nos han permitido convertirnos en un fabricante líder de soluciones de alojamiento y viviendas modulares para cápsulas en Australia.
        `,
        imagenUrl: imgNosotros,
        tipoSeccion: {
            id: 3,
            descripcion: 'Seccion'
        }
    }

    return (
        <section className="section__nosotros">
            <SectionTextImage info={seccionNosotros} idSeccion="seccion-nuestra-historia"></SectionTextImage>
            <h3 className="nosotros__title my-5">Nosotros</h3>
            <div className="row div__nosotros">
                <div className="col-12 col-xl-4 d-flex flex-column justify-content-center align-items-center gap-2">
                    <img className="img__nosotros" alt="Foto" src={imagen001}></img>
                    <strong>Fernando Magno</strong>
                    <p>Fundador Graupel | Ing. Civil</p>
                </div>
                <div className="col-12 col-xl-4 d-flex flex-column justify-content-center align-items-center gap-2">
                    <img className="img__nosotros" alt="Foto" src={imagen002}></img>
                    <strong>Agustín Magno</strong>
                    <p>CEO Drop | Ing. Civil e Hidráulico</p>
                </div>
                <div className="col-12 col-xl-4 d-flex flex-column justify-content-center align-items-center gap-2">
                    <img className="img__nosotros" alt="Foto" src={imagen003}></img>
                    <strong>Juan Magno</strong>
                    <p>Presidente Graupel | Ing. Civil</p>
                </div>
            </div>
        
        </section>
    )
}
