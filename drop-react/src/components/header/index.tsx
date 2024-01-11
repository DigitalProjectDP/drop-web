import './style.css';
import imgLogo from "../../media/logo/logo.jpg";
import { FaMagnifyingGlass, FaCartShopping, FaPhone, FaLocationDot } from "react-icons/fa6";
import { useEffect, useState } from 'react';

export default function Header() {
  const [logo, setLogo] = useState(imgLogo);

  useEffect(() => {
    let parametros = localStorage.getItem("parametros") ? JSON.parse(localStorage.getItem("parametros")!) : {};
    let logoHeader = parametros?.logoHeader || imgLogo;    
    setLogo(logoHeader);
  }, [])  

  return (
    <nav className="navbar navbar-expand-xl navbar__bg">
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