import './style.css'
import { MockModelos } from '../../../../mocks/modelos';
import CardModelo from './cardModelo'
import OwlCarousel from 'react-owl-carousel';

export default function HomeModelos() {

  const listInfo = MockModelos;


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

  const rendermodelos = () => listInfo?.map((v, i) => <CardModelo data={v} key={i}></CardModelo>)
  return (
    <section className="section__modelos" id="section__modelos">     
      <h1 className="modelos__title">Nuestros modelos</h1>
      {listInfo? <OwlCarousel className='modelos__container' loop {...options}>
          {rendermodelos()} 
      </OwlCarousel> : ''} 
      {/* <div className="row modelos__container">
        {listInfo? rendermodelos(): ''}
      </div> */}
    </section>
  )
}
