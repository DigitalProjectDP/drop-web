import Contacto from '../../components/contacto'
import Footer from '../../components/footer'
import Header from '../../components/header'
import HeaderSpace from '../../components/header-space'
import WhatsappButton from '../../components/whatsapp-button'
import BlogPrincipal from './principal'
import './styles.css'

export default function BlogPage(){
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