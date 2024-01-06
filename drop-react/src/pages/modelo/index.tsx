import { useEffect, useState } from 'react'
import './style.css'
import { useLocation } from 'react-router';
import { Modelo } from '../../interfaces/modelo';
import { GetModeloById } from '../../services/modeloService';
import Header from '../../components/header';
import OwlCarousel from 'react-owl-carousel';



export default function ModeloPage() {
    const [modelo, setModelo] = useState<Modelo>();

    const { search } = useLocation();
    const id = new URLSearchParams(search).get("id");

    useEffect(() => {
        fetchModelo();
    }, []);

    const fetchModelo = async () => {
        let modelo = id? await GetModeloById(Number(id)): undefined;
        setModelo(modelo);
        //setMessage(`Hola, quiero recibir más información por el emprendimiento ${propiedad?.nombre}. ¡Muchas gracias!`);
    }

    const options = {
        margin: 0,
        responsiveClass: true,
        nav: true,
        dots: true,
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
            600:{
                items:2
            },
            900:{
                items:3
            },
        }
      };

    const renderListModelos = () => modelo?.caracteristicas.map((v, i) => <li key={i}>{v.descripcion}</li>)
    const renderImagenes = () => modelo?.imagenes.map((v, i) => <img src={v.url} key={i}></img>)
    return (
        <div className="row">
            <Header></Header>
            <div className="img__modelo__container col-12 col-lg-6">
                <img src={modelo?.imagenes[0]?.url} alt={modelo?.imagenes[0]?.nombre} width="100%"/>
            </div>
            <div className="modelo__container col-12 col-lg-6">
                <h1 className="text-center mb-3">{modelo?.nombre}</h1>
                <ul className="list__caracteristicas__modelo p-0">
                    {modelo?.caracteristicas? renderListModelos(): ''}
                </ul>
                <p>{modelo?.descripcion}</p>
                <p className="py-3">{modelo?.moneda} {modelo?.valor}</p>
                <div className="d-flex justify-content-around py-2">
                    <button className="button__primary">Brochure</button>
                    <button className="button__primary">Contacto</button>
                </div>
            </div>
            <div className="container-fluid">
                {modelo?.imagenes? <OwlCarousel className='modelos__container' loop {...options}>
                    {renderImagenes()} 
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}