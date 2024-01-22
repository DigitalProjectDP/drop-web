import './style.css'
import { MockModelos } from '../../../../mocks/modelos';
import CardModelo from './cardModelo'
import OwlCarousel from 'react-owl-carousel';
import ModeloModal from '../../../../components/modeloModal';
import { useState } from 'react';

export default function HomeModelos() {
  const [modeloId, setModeloId] = useState<Number>();

  const listInfo = MockModelos;
  
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

  const getModelo = (id: Number) => {
    const buttonModal = document.getElementById("buttonModal");
    buttonModal?.click();
    setModeloId(id);
} 

  const rendermodelos = () => listInfo?.map((v, i) => <CardModelo setModeloId={getModelo} data={v} key={i}></CardModelo>)
  return (
    <section className="section__modelos" id="section__modelos">     
      <h3 className="modelos__title">Nuestros modelos</h3>
      {listInfo? <OwlCarousel className='modelos__container container-fluid' loop {...options}>
          {rendermodelos()} 
      </OwlCarousel> : ''} 
      <div className="modal fade" id="modal-modelo" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">            
                    <div className="modal-body p-0">
                      <ModeloModal id={modeloId}></ModeloModal>                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
