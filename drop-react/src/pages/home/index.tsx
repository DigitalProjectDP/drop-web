import './style.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from "../../components/footer";
import Header from "../../components/header";
import TopBanner from "../../components/top-banner";
import HomeInversiones from './components/inversiones/inversiones';
import HomeProceso from './components/proceso/proceso';
import HomeModelos from './components/modelos/modelos';
import Contacto from '../../components/contacto';
import HomeInstagram from './components/instagram/instagram';
import HomeBeneficiosNew from './components/beneficios-home/beneficios';
import HomePrincipal from './components/principal';
import HomeProyectos from './components/proyectos/proyectos';
import WhatsappButton from '../../components/whatsapp-button';
import ReactGA from 'react-ga';
import HomeReseñas from './components/reseñas/reseñas';

export default function Home() {
  const { search } = useLocation();
  const [isVisited, setIsVisited] = useState(false);
  
  let id = new URLSearchParams(search).get("id");
  //sessionStorage.removeItem("homeVisited");

  const navigate = useNavigate();

  useEffect(() => {
    const homeVisited = sessionStorage.getItem('homeVisited');

    document.title = 'Drop';
    ReactGA.pageview(window.location.pathname);

    if (homeVisited) {
      setIsVisited(true);
    }

    if (id === undefined || id === "" || id === null || homeVisited === "true") {
      navigate(`#`);
      setTimeout(() => {
        window.scrollTo(0, 0);        
      }, 50);
    }
    else {  
        setTimeout(() => {
          if (id === "section__hipotecario") {
            document.querySelector(`#${id}`)?.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            });
          }
          else {
            sessionStorage.setItem("homeVisited", "true");  
            document.querySelector(`#${id}`)?.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }

        }, 0);
    } 

  }, [id])


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
      <HomeReseñas></HomeReseñas>
      <HomeInstagram></HomeInstagram>
      <Contacto data={''}></Contacto>
      <div className="spacer"></div>
      <Footer></Footer>
      <WhatsappButton></WhatsappButton>
    </div>
  )
}
