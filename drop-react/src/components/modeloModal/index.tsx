import './style.css'
import { useEffect, useState } from 'react'
import { Modelo } from '../../interfaces/modelo';
import { GetModeloById } from '../../services/modeloService';
import OwlCarousel from 'react-owl-carousel';
import { useNavigate } from 'react-router-dom';

interface ModalModeloProps{
    id?: Number;
}

export default function ModeloModal({id}: ModalModeloProps) {
    const [modelo, setModelo] = useState<Modelo>();

    useEffect(() => {
        fetchModelo();
    }, [id]);

    const fetchModelo = async () => {
        let modelo = id? await GetModeloById(Number(id)): undefined;
        setModelo(modelo);
    }

        
    const navigate = useNavigate();

    const redirect = () => {
        navigate(`/modelo/?id=${modelo?.id}`);        
    }

    const options = {
        margin: 0,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: true,
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

    const renderListModelos = () => modelo?.caracteristicas.map((v, i) => <li key={i}>{v.descripcion}</li>)
    const renderImagenes = () => modelo?.imagenes.map((v, i) => <img className="modelo__carousel__img" src={v.url} key={i}></img>)
    return (
        <div className="row p-0 modal__container"> 
            <div className="modelo__header p-3">
                <h1 className="text-center mb-3">{modelo?.nombre}</h1>
                <button className="button__primary mb-3" data-bs-dismiss="modal" onClick={redirect}>Ver más</button>     
                <button type="button" className="btn-close button__close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <p>{modelo?.descripcion}</p>      
            <div className="w-100 p-0">
                {modelo?.imagenes? <OwlCarousel className='modelos__container' loop {...options}>
                    {renderImagenes()} 
                </OwlCarousel> : ''}
            </div>            
        </div>
    )
}