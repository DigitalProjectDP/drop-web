import './style.css'
import React, { useEffect, useState } from 'react'
import imgLogo from '../../media/logo/logo_drop.png'
import { GrMail } from "react-icons/gr";
import { FaFacebook, FaInstagram, FaPhone  } from 'react-icons/fa6'

export default function Footer() {
const [logo, setLogo] = useState(imgLogo);
const [instagram, setInstagram] = useState('');
const [whatsapp, setWhatsapp] = useState('');
const [telefono, setTelefono] = useState('');

  useEffect(() => {
    let parametros = localStorage.getItem("parametros") ? JSON.parse(localStorage.getItem("parametros")!) : {};

    let logoHeader = parametros?.logoFooter || imgLogo;
    let instagramParametro = parametros?.instagram || '';
    let whatsappParametro = parametros?.whatsapp || '';
    let telefonoParametro = parametros?.telefono || '';

    setLogo(logoHeader);
    setInstagram(instagramParametro);
    setWhatsapp(whatsappParametro);
    setTelefono(telefonoParametro);
  }, [])  

  return (
    <footer className="row d-flex section__footer mt-1 bottom-0 footer">
        <div className="col-lg-4 col-sm-12 d-flex flex-column px-5 pt-5 gap-1">
            <h5>Encontranos en:</h5>
            <div className="d-flex flex-row gap-1 justify-content-center pt-2">
              <a href={instagram} target="_blank"><FaInstagram className="footer__icon mx-2" size={32}></FaInstagram></a>
              <a href={instagram} target="_blank"><FaFacebook className="footer__icon mx-2" size={32}></FaFacebook></a>
            </div>
        </div>

        <div className="col-lg-4 col-sm-12 d-flex flex-column justify-content-start align-items-center pt-5">
            <a href=""><img src={imgLogo} alt="" width={100} height={100}/></a>            
        </div>

        <div className="col-lg-4 col-sm-12 d-flex flex-column justify-content-start align-items-center py-5">
          <div className="d-flex flex-column align-items-start gap-3 pt-3">
            <a href={instagram} target="_blank"><GrMail className="footer__icon mx-3" size={32}></GrMail>drop.modulos@gmail.com</a>
            <a href={instagram} target="_blank"><FaPhone  className="footer__icon mx-3" size={32}></FaPhone >221-2200007</a>
          </div>
        </div>
    </footer>
  )
}