import './style.css'
import { MockProyectos } from '../../../../mocks/proyectos';
import CardProyecto from './cardProyecto'
import OwlCarousel from 'react-owl-carousel';
import ProyectoModal from '../../../../components/proyectoModal';
import { useState } from 'react';

export default function HomeProyectos() {
  const [proyectoId, setProyectoId] = useState<Number>();

  const listInfo = MockProyectos;
  
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
    const buttonModal = document.getElementById("buttonModal");
    buttonModal?.click();
    setProyectoId(id);
} 

  const renderproyectos = () => listInfo?.map((v, i) => <CardProyecto setProyectoId={getProyecto} data={v} key={i}></CardProyecto>)
  return (
    <section className="section__proyectos" id="section__proyectos">
      {listInfo? <OwlCarousel className='proyectos__container container-fluid' loop {...options}>
          {renderproyectos()} 
      </OwlCarousel> : ''} 
      <div className="modal fade" id="modal-proyecto" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">            
                    <div className="modal-body p-0">
                      <ProyectoModal id={proyectoId}></ProyectoModal>                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
