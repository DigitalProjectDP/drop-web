import Contacto from '../../components/contacto'
import Copyright from '../../components/copyright'
import Footer from '../../components/footer'
import Header from '../../components/header'
import HeaderSpace from '../../components/header-space'
import WhatsappButton from '../../components/whatsapp-button'
import NosotrosPrincipal from './principal'
import './styles.css'

export default function NosotrosPage(){
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