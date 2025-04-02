import './style.css'
import { MockProyectos } from '../../../../mocks/proyectos';
import CardProyecto from './cardProyecto'
import OwlCarousel from 'react-owl-carousel';
import ProyectoModal from '../../../../components/proyectoModal';
import { useEffect, useState } from 'react';
import SpinnerLoading from '../../../../components/spinner';
import { Modal } from 'react-bootstrap';
import { Modelo } from '../../../../interfaces/modelo';

export default function HomeProyectos() {
  const [proyecto, setProyecto] = useState<Modelo>();
  const [proyectoId, setProyectoId] = useState<Number>();
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState<boolean>();

  const listInfo = MockProyectos;

  useEffect(() => {

  }, [proyectoId])
  
  const options = {
    margin: 0,
    responsiveClass: true,
    nav: true,
    dots: true,
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
        600:{
            items:2
        },
        900:{
            items:3
        },
    }
  };

  const getProyecto = (id: Number) => {
    setLoading(true);
    const buttonModal = document.getElementById("buttonModal");
    buttonModal?.click();
    setProyectoId(id);
    setTimeout(() => {      
      setLoading(false);
    }, 300);

    const myModalEl = document.getElementById("modal-proyecto");
    myModalEl?.addEventListener('hidden.bs.modal', function (event) {
        window.location.reload();
    });
  }
  
  const openModal = (data: any) => {
    setProyectoId(data?.id);
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }
  

  const renderproyectos = () => listInfo?.map((v, i) => <CardProyecto setProyectoId={getProyecto} openModal={openModal} data={v} key={i}></CardProyecto>)
  return (
    <section className="section__proyectos" id="section__proyectos">
      <h3 className="modelos__title">Últimos Proyectos</h3>
      {listInfo? <OwlCarousel className='proyectos__container container-fluid' loop {...options}>
          {renderproyectos()} 
      </OwlCarousel> : ''}
      <Modal show={showModal} onHide={closeModal} className="modal__proyecto d-flex flex-column justify-content-center align-content-center">
          <Modal.Header closeButton className="border-0 z-3"></Modal.Header>   
          <Modal.Body className="modal__body__proyecto">
            {/* {inversionNombre?<Contacto data={`Hola. Quiero recibir más información sobre ${inversionNombre}`} isModal={true}></Contacto>:''} */}
            <ProyectoModal id={proyectoId}></ProyectoModal>
          </Modal.Body>        
        </Modal>   
      <div className="modal fade" id="modal-proyecto" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">            
                    <div className="modal-body p-0">
                      <ProyectoModal id={proyectoId}></ProyectoModal>                        
                    </div>
                </div>
            </div>
        </div>        
        {loading? <SpinnerLoading></SpinnerLoading>: ''}
    </section>
  )
}
