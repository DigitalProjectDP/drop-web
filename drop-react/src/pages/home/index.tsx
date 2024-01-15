import './style.css'
import Footer from "../../components/footer";
import Header from "../../components/header";
import TopBanner from "../../components/top-banner";
import HomeInversiones from './components/inversiones/inversiones';
import HomeProceso from './components/proceso/proceso';
import HomeBeneficios from './components/beneficios/beneficios';
import HomeModelos from './components/modelos/modelos';
import Contacto from '../../components/contacto';
import HomeInstagram from './components/instagram/instagram';
import HomeBeneficiosNew from './components/beneficios-home/beneficios';
import HomePrincipal from './components/principal';

export default function Home() {
  return (
    <div className="div__home min-vh-100 h-10">
      <Header></Header>
      <TopBanner></TopBanner>
      <HomePrincipal></HomePrincipal>
      <HomeInversiones></HomeInversiones>
      <HomeProceso></HomeProceso>
      {/* <HomeBeneficios></HomeBeneficios> */}
      <HomeBeneficiosNew></HomeBeneficiosNew>
      <HomeModelos></HomeModelos>
      <Contacto data={''}></Contacto>
      <HomeInstagram></HomeInstagram>
      <div className="spacer"></div>     
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
      <Footer></Footer>
    </div>
  )
}
