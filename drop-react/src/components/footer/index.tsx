import './style.css'
import React, { useEffect, useState } from 'react'
import imgLogo from '../../media/logo/logo_drop.png'
import imgLogoCacmi from '../../media/logo/logo_cacmi_new.png'
import { GrMail } from "react-icons/gr";
import { FaFacebook, FaInstagram, FaPhone, FaTiktok  } from 'react-icons/fa6'
import Copyright from '../copyright';

export default function Footer() {
const [instagram, setInstagram] = useState('');

  useEffect(() => {
    let parametros = localStorage.getItem("parametros") ? JSON.parse(localStorage.getItem("parametros")!) : {};
    let instagramParametro = parametros?.instagram || '';

    setInstagram(instagramParametro);
  }, [])  

  return (
    <section>
      <footer className="row d-flex section__footer mt-1 bottom-0 footer">
          <div className="col-lg-4 col-sm-12 d-flex flex-column px-5 pt-5 gap-1">
              <h6>Encontranos en:</h6>
              <div className="d-flex flex-row gap-1 justify-content-center pt-2">
                <a href={instagram} target="_blank" rel="noreferrer"><FaInstagram className="footer__icon mx-2" size={24}></FaInstagram></a>
                <a href="https://www.facebook.com/profile.php?id=100084131770712&mibextid=LQQJ4d" target="_blank" rel="noreferrer"><FaFacebook className="footer__icon mx-2" size={24}></FaFacebook></a>
                <a href="https://www.tiktok.com/@drop.modular" target="_blank" rel="noreferrer"><FaTiktok className="footer__icon mx-2" size={24}></FaTiktok></a>
              </div>
              <a href="https://cacmi.com.ar/" target="_blank" rel="noreferrer" className="mt-2"><img src={imgLogoCacmi} alt="" width={120} height={50}/></a>
          </div>

          <div className="col-lg-4 col-sm-12 d-flex flex-column justify-content-start align-items-center pt-5">
              <a href="/#inicio"><img src={imgLogo} alt="" width={100} height={100}/></a>
          </div>

          <div className="col-lg-4 col-sm-12 d-flex flex-column justify-content-start align-items-center pt-5">
            <div className="d-flex flex-column align-items-start gap-3">
              <a href="mailto:ventas@dropmodular.com" target="_blank" rel="noreferrer"><GrMail className="footer__icon mx-3" size={24}></GrMail>ventas@dropmodular.com</a>
              <a href="tel:+2212200007" target="_blank" rel="noreferrer"><FaPhone  className="footer__icon mx-3" size={24}></FaPhone >221-2200007</a>
            </div>
          </div>
      </footer>
      <Copyright></Copyright>
    </section>
  )
}