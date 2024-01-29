import { useEffect, useState } from 'react'
import './style.css'
import { useLocation } from 'react-router';
import { Modelo } from '../../interfaces/modelo';
import { GetModeloById } from '../../services/modeloService';
import Header from '../../components/header';
import OwlCarousel from 'react-owl-carousel';
import Contacto from '../../components/contacto'
import WhatsappButton from '../../components/whatsapp-button';


export default function ModeloPage() {
    const [modelo, setModelo] = useState<Modelo>();

    const { search } = useLocation();
    const id = new URLSearchParams(search).get("id");

    useEffect(() => {
        fetchModelo();
        window.scrollTo(0, 0)
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
        <div>
            <div className="row">
                <Header opacity={true}></Header>
                <section className="img__modelo__container col-12 col-lg-6">
                    <img src={modelo?.imagenes[0]?.url} alt={modelo?.imagenes[0]?.nombre} width="100%"/>
                </section>
                <section className="modelo__container col-12 col-lg-6">
                    <h4 className="text-center mb-3">{modelo?.nombre}</h4>
                    <ul className="list__caracteristicas__modelo p-0">
                        {modelo?.caracteristicas? renderListModelos(): ''}
                    </ul>
                    <p>{modelo?.descripcion}</p>
                    <p className="py-3">{modelo?.moneda} {modelo?.valor}</p>
                    <div className="d-flex justify-content-around py-2">
                        <button className="button__primary">Brochure</button>
                        <button className="button__primary" data-bs-toggle="modal" data-bs-target="#modal-contacto-modelo">Contacto</button>
                    </div>
                </section>
                <section className="container-fluid my-5">
                    {modelo?.imagenes? <OwlCarousel className='modelos__container' loop {...options}>
                        {renderImagenes()} 
                    </OwlCarousel> : ''}
                </section>

                {/* Modal */}
                <div className="modal fade" id="modal-contacto-modelo" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <button type="button" className="btn-close button__close" data-bs-dismiss="modal" aria-label="Close"></button>          
                            <div className="modal-body p-0 text-align-start">
                                {modelo?<Contacto data={`Hola. Quiero recibir más información sobre ${modelo?.nombre!}`} isModal={true}></Contacto>:''}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="modal-contacto-confirmacion" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content"> 
                            <div className="modal-header">
                                <h5 className="modal-title">Confirmación</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>           
                            <div className="modal-body p-3 my-3 text-center">
                                Email enviado con éxito
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="button__primary" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <WhatsappButton></WhatsappButton> 
        </div>
    )
}