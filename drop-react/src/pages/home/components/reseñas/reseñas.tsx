import './style.css';
import OwlCarousel from 'react-owl-carousel';
import ProyectoModal from '../../../../components/proyectoModal';
import { useEffect, useState } from 'react';
import SpinnerLoading from '../../../../components/spinner';
import { Modal } from 'react-bootstrap';
import { MockReseñas } from '../../../../mocks/reseñas';
import CardReseña from './cardReseña';

export default function HomeReseñas() {
  const [showModal, setShowModal] = useState<boolean>();

  const listInfo = MockReseñas;

  useEffect(() => {

  }, [])
  
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
  
  const openModal = (data: any) => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }
  

  const renderReseñas = () => listInfo?.map((v, i) => <CardReseña data={v} key={i}></CardReseña>)
  return (
    <section className="section__proyectos" id="section__proyectos"> 
      <h3 className="mb-3">Reseñas</h3>
      {listInfo? <OwlCarousel className='reseñas__container container-fluid' loop {...options}>
          {renderReseñas()} 
      </OwlCarousel> : ''}
      <Modal show={showModal} onHide={closeModal} className="modal__proyecto d-flex flex-column justify-content-center align-content-center">
          <Modal.Header closeButton className="border-0 z-3"></Modal.Header>   
          <Modal.Body className="modal__body__proyecto">
            {/* {inversionNombre?<Contacto data={`Hola. Quiero recibir más información sobre ${inversionNombre}`} isModal={true}></Contacto>:''} */}
            {/* <ProyectoModal id={proyectoId}></ProyectoModal> */}
          </Modal.Body>        
        </Modal>   
      <div className="modal fade" id="modal-proyecto" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">            
                    <div className="modal-body p-0">
                      {/* <ProyectoModal id={proyectoId}></ProyectoModal>                         */}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
