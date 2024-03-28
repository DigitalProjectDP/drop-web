import Contacto from '../../components/contacto'
import Copyright from '../../components/copyright'
import Footer from '../../components/footer'
import Header from '../../components/header'
import HeaderSpace from '../../components/header-space'
import WhatsappButton from '../../components/whatsapp-button'
import BlogPrincipal from './principal'
import ReactGA from 'react-ga';
import './styles.css'
import { useEffect } from 'react'

export default function BlogPage(){
    useEffect(() => {
        document.title = 'Drop - Blogs';
        ReactGA.pageview(window.location.pathname);
    }, []);

    return(
        <main className="main__height min-vh-100 h-10">
            <Header opacity={true}></Header>
            <HeaderSpace></HeaderSpace>
            <BlogPrincipal></BlogPrincipal>
            <Footer></Footer>
            <WhatsappButton></WhatsappButton>
        </main>
    )
}