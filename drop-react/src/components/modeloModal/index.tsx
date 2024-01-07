import './style.css'
import { useEffect, useState } from 'react'
import { Modelo } from '../../interfaces/modelo';
import { GetModeloById } from '../../services/modeloService';
import OwlCarousel from 'react-owl-carousel';

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
        <div className="row p-0"> 
            <div className="modelo__header p-3">
                <h1 className="text-center mb-3">{modelo?.nombre}</h1>               
                <p>{modelo?.descripcion}</p>           
            </div>
            <div className="w-100 p-0">
                {modelo?.imagenes? <OwlCarousel className='modelos__container' loop {...options}>
                    {renderImagenes()} 
                </OwlCarousel> : ''}
            </div>            
        </div>
    )
}