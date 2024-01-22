import './style.css'
import { MockInversiones } from '../../../../mocks/inversiones';
import CardInversiones from './cardInversiones'
import Contacto from '../../../../components/contacto';

export default function HomeInversiones() {
  const listInfo = MockInversiones;

  const showModal = (id: Number) => {
    const buttonModal = document.getElementById("buttonModalContacto");
    buttonModal?.click();
  } 


  const renderInversiones = () => listInfo?.map((v, i) => <CardInversiones data={v} key={i} openModal={showModal}></CardInversiones>)

  return (
    <section className="section__inversiones" id="section__inversiones">
      {/* <p className="container text__paragraph">
          Somos <strong className="text__secondary">Drop</strong>, pioneros y líderes en arquitectura modular en Argentina. <br />
          La construcción modular es la nueva forma de construir. Basándonos en 3 pilares fundamentales: <i>rapidez, adaptabilidad y economía</i>. <br />
          Por eso somos el socio estratégico para aquellas personas que estén buscando su primer vivienda, para inversores gastronómicos, hoteleros o emprendedores.
      </p>
      <h1 className="inversiones__title">Inversiones destacadas</h1> */}
      <div className="inversiones__container">
        {listInfo? renderInversiones(): ''}
      </div>
      <div className="modal fade" id="modal-contacto" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
                <div className="modal-content">  
                    <button type="button" className="btn-close button__close" data-bs-dismiss="modal" aria-label="Close"></button>          
                    <div className="modal-body p-0 text-align-start">
                      <Contacto data={''}></Contacto>                        
                    </div>
                </div>
            </div>
        </div>
        <button type="button" id="buttonModalContacto" className="d-none" data-bs-toggle="modal" data-bs-target="#modal-contacto"></button>            
    </section>
  )
}
