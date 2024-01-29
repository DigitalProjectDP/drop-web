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
import HomeProyectos from './components/proyectos/proyectos';
import WhatsappButton from '../../components/whatsapp-button';

export default function Home() {
  return (
    <div className="div__home min-vh-100 h-10">
      <Header></Header>
      <TopBanner></TopBanner>
      <HomePrincipal></HomePrincipal>
      <HomeProyectos></HomeProyectos>
      <HomeModelos></HomeModelos>
      <HomeBeneficiosNew></HomeBeneficiosNew>
      <HomeInversiones></HomeInversiones>
      <HomeProceso></HomeProceso>      
      <HomeInstagram></HomeInstagram>
      <Contacto data={''}></Contacto>
      <div className="spacer"></div>    
      <Footer></Footer>
      <WhatsappButton></WhatsappButton>
    </div>
  )
}
