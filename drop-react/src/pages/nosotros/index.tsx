import Contacto from '../../components/contacto'
import Footer from '../../components/footer'
import Header from '../../components/header'
import HeaderSpace from '../../components/header-space'
import NosotrosPrincipal from './principal'
import './styles.css'

export default function NosotrosPage(){
    return(
        <main className="main__height min-vh-100 h-10">
            <Header></Header>
            <HeaderSpace></HeaderSpace>
            <NosotrosPrincipal></NosotrosPrincipal>
            <Footer></Footer>
        </main>
    )
}