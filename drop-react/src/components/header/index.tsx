import './style.css';
import imgLogo from "../../media/logo/logo_drop.png";
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactGA from 'react-ga';

interface HeaderProps{
  opacity?: boolean;
}

export default function Header({opacity}: HeaderProps) {
  const [logo, setLogo] = useState(imgLogo);
  const [bgColor, setBgColor] = useState(opacity? 'rgba(0,0,0,1)': 'rgba(0,0,0,0.0)'); 
   
  const { search } = useLocation();  

  useEffect(() => {   
    document.title = 'Drop'; 
    ReactGA.initialize('G-MVTJ9F4F2L');
    let parametros = localStorage.getItem("parametros") ? JSON.parse(localStorage.getItem("parametros")!) : {};
    let logoHeader = parametros?.logoHeader || imgLogo;    
    setLogo(logoHeader);

    onHeaderItemClick(document.querySelectorAll(".header__link"))
    
    window.addEventListener('scroll', onScroll);
    
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])  

  const onScroll = (e: Event) => {
    const window = e.currentTarget as Window
    const header = document.getElementById("navHeader");
    
    if (window.scrollY > 0) {
        setBgColor('var(--first-color)');
    }
    else {
        let colorBackground = opacity? 'rgba(0,0,0,1)': 'rgba(0,0,0,0.0)';
        setBgColor(colorBackground);
    }

    document.getElementById("navbarNav")?.classList.remove("show");
  }

  const changeBgColor = () => {
    setBgColor('var(--first-color)');
  }
          
  const navigate = useNavigate();

  const redirect = () => {
      navigate(`#/inicio/`);
      document.getElementById('btnToggleNavbar')?.click();    
  }

  const returnTop = () => {
    window.scrollTo(0, 0);
  }
  function onHeaderItemClick(elements: any){
    elements.forEach((element: any) => {
        element.addEventListener('click', () =>{
          sessionStorage.removeItem("homeVisited");
          document.title = 'Drop - ' + element?.id;
          ReactGA.pageview(window.location.pathname + "/" + element?.id);
        });
    });
}

  return (
    <nav className="navbar navbar-expand-xl navbar__bg" id="navHeader" style={{backgroundColor : bgColor}}>
      <a href="#/inicio" className="header__logo navbar-toggler" onClick={returnTop}><img src={imgLogo} alt="Logo" width={44} height={44} /></a>
      <button id="btnToggleNavbar" className="navbar-toggler bg-light mx-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={changeBgColor}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#/inicio" onClick={returnTop}>Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link header__link" id="Modelos" href="#/inicio/?id=section__modelos" >Modelos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link header__link" id="Inversiones" href="#/inicio/?id=section__inversiones">Inversiones</a>
          </li>

          <li className="d-none d-xl-flex w-25 justify-content-center align-items-center">
            <a href="#/inicio" className="navbar-brand"><img src={imgLogo} className="header__logo" alt="Logo" width={44} height={44} onClick={returnTop}/></a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#/nosotros">Nosotros</a>
          </li>    
          <li className="nav-item">
            <a className="nav-link" href="#/blogs">Blog</a>
          </li>  
          <li className="nav-item">
            <a className="nav-link" href="#/contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}