import { useEffect } from 'react'
import Contacto from '../../components/contacto'
import Copyright from '../../components/copyright'
import Footer from '../../components/footer'
import Header from '../../components/header'
import HeaderSpace from '../../components/header-space'
import WhatsappButton from '../../components/whatsapp-button'
import ReactGA from 'react-ga'

import './styles.css'

export default function ContactoPage(){
    useEffect(() => {
        document.title = 'Drop - Contacto';
        ReactGA.pageview(window.location.pathname);
    }, []);
    
    return(
        <main className="main__height min-vh-100 h-10">
            <Header opacity={true}></Header>
            <HeaderSpace></HeaderSpace>
            <Contacto data={''}></Contacto>
            <Footer></Footer>
            <WhatsappButton></WhatsappButton>
        </main>
    )
}