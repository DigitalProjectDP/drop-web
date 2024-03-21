import { useEffect } from 'react'
import Contacto from '../../components/contacto'
import Copyright from '../../components/copyright'
import Footer from '../../components/footer'
import Header from '../../components/header'
import HeaderSpace from '../../components/header-space'
import WhatsappButton from '../../components/whatsapp-button'
import NosotrosPrincipal from './principal'
import ReactGA from 'react-ga';
import './styles.css'

export default function NosotrosPage(){
    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
    }, []);
    
    return(
        <main className="main__height min-vh-100 h-10">
            <Header opacity={true}></Header>
            <HeaderSpace></HeaderSpace>
            <NosotrosPrincipal></NosotrosPrincipal>
            <Footer></Footer>
            <WhatsappButton></WhatsappButton>
        </main>
    )
}