import './style.css'
import { useEffect, useState } from 'react'
import { Modelo } from '../../interfaces/modelo';
import OwlCarousel from 'react-owl-carousel';
import { useNavigate } from 'react-router-dom';
import { GetProyectoById } from '../../services/proyectoService';

interface ModalProyectoProps{
    id?: Number;
}

export default function ProyectoModal({id}: ModalProyectoProps) {
    const [proyecto, setProyecto] = useState<Modelo>();

    useEffect(() => {
        fetchProyecto();
    }, [id]);

    const fetchProyecto = async () => {
        let proyecto = id? await GetProyectoById(Number(id)): undefined;
        setProyecto(proyecto);
    }

        
    const navigate = useNavigate();

    const redirect = () => {
        navigate(`/proyecto/?id=${proyecto?.id}`);        
    }

    const options = {
        margin: 0,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: false,
        navContainerClass: `owl-nav`,
        navClass: ['owl-prev','owl-next'],
        dotsClass: `owl-dots customDots`,
        dotClass: `owl-dot buttonDot`,
        controlsClass: "owl-controls",        
        smartSpeed: 2000,
        responsive:{
            0:{
                items:1
            },
        }
      };

    const renderListProyectos = () => proyecto?.caracteristicas.map((v, i) => <li key={i}>{v.descripcion}</li>)
    const renderImagenes = () => proyecto?.imagenes.map((v, i) => <img className="proyecto__carousel__img" src={v.url} key={i}></img>)
    return (<>
        {proyecto?.imagenes? <div className="row p-0 modal__container"> 
            <div className="proyecto__header p-3">
                <h3 className="text-center mb-1 notranslate">{proyecto?.nombre}</h3>
                <h6 className="text-center">{proyecto?.categoria?.descripcion}</h6>
                {/* <button type="button" className="btn-close button__close" data-bs-dismiss="modal" aria-label="Close"></button> */}
            </div>
            {/* <p>{proyecto?.descripcion}</p>       */}
            <div className="w-100 p-0">
                {proyecto?.imagenes? <OwlCarousel className='proyectos__container proyectos__carousel__modal' loop {...options}>
                    {renderImagenes()} 
                </OwlCarousel> : ''}
            </div>            
        </div>: ''}
        </>
    )
}