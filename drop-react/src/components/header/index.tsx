import './style.css';
import imgLogo from "../../media/logo/logo.jpg";
import { useEffect, useState } from 'react';

interface HeaderProps{
  opacity?: boolean;
}

export default function Header({opacity}: HeaderProps) {
  const [logo, setLogo] = useState(imgLogo);
  const [bgColor, setBgColor] = useState(opacity? 'rgba(0,0,0,1)': 'rgba(0,0,0,0.0)'); 

  useEffect(() => {
    let parametros = localStorage.getItem("parametros") ? JSON.parse(localStorage.getItem("parametros")!) : {};
    let logoHeader = parametros?.logoHeader || imgLogo;    
    setLogo(logoHeader);
    
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
  }

  return (
    <nav className="navbar navbar-expand-xl navbar__bg" id="navHeader" style={{backgroundColor : bgColor}}>
      <a href="/inicio" className="navbar-toggler"><img src={imgLogo} alt="Logo" width={74} height={74} /></a>
      <button className="navbar-toggler bg-light mx-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/inicio">INICIO</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/inicio/#section__modelos">MODELOS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/inicio/#section__inversiones">INVERSIONES</a>
          </li>

          <li className="d-none d-xl-flex w-25 justify-content-center align-items-center">
            <a href="/inicio" className="navbar-brand"><img src={imgLogo} alt="Logo" width={74} height={74} /></a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/nosotros">NOSOTROS</a>
          </li>    
          <li className="nav-item">
            <a className="nav-link" href="/blogs">BLOG</a>
          </li>  
          <li className="nav-item">
            <a className="nav-link" href="/contacto">CONTACTO</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}