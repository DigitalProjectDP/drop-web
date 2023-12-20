import './style.css'
import Footer from "../../components/footer";
import Header from "../../components/header";
import TopBanner from "../../components/top-banner";
import HomeInversiones from './components/inversiones/inversiones';
import HomeProceso from './components/proceso/proceso';
import HomeBeneficios from './components/beneficios/beneficios';
import HomeModelos from './components/modelos/modelos';

export default function Home() {
  return (
    <div className="div__home min-vh-100 h-10">
      <Header></Header>
      <TopBanner></TopBanner>      
      <HomeInversiones></HomeInversiones>
      <HomeProceso></HomeProceso>
      <HomeBeneficios></HomeBeneficios>
      <HomeModelos></HomeModelos>
      <div className="spacer"></div>      
      <Footer></Footer>
    </div>
  )
}
