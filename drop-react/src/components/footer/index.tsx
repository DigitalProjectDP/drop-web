import './style.css'
import React, { useEffect, useState } from 'react'
import imgLogo from '../../media/logo/logo_drop.png'
import { GrMail } from "react-icons/gr";
import { FaFacebook, FaInstagram, FaPhone, FaTiktok, FaYoutube  } from 'react-icons/fa6'

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
            <h6>Encontranos en:</h6>
            <div className="d-flex flex-row gap-1 justify-content-center pt-2">
              <a href={instagram} target="_blank"><FaInstagram className="footer__icon mx-2" size={24}></FaInstagram></a>
              <a href={instagram} target="_blank"><FaFacebook className="footer__icon mx-2" size={24}></FaFacebook></a>
              <a href={instagram} target="_blank"><FaTiktok className="footer__icon mx-2" size={24}></FaTiktok></a>
            </div>
        </div>

        <div className="col-lg-4 col-sm-12 d-flex flex-column justify-content-start align-items-center pt-5">
            <a href=""><img src={imgLogo} alt="" width={100} height={100}/></a>            
        </div>

        <div className="col-lg-4 col-sm-12 d-flex flex-column justify-content-start align-items-center py-5">
          <div className="d-flex flex-column align-items-start gap-3">
            <a href="mailto:drop.modulos@gmail.com" target="_blank"><GrMail className="footer__icon mx-3" size={24}></GrMail>drop.modulos@gmail.com</a>
            <a href="tel:+2212200007" target="_blank"><FaPhone  className="footer__icon mx-3" size={24}></FaPhone >221-2200007</a>
          </div>
        </div>
    </footer>
  )
}