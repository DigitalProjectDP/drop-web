import Contacto from '../../components/contacto'
import Footer from '../../components/footer'
import Header from '../../components/header'
import './styles.css'

export default function ContactoPage(){
    return(
        <div className="div__home min-vh-100 h-10">
            <Header></Header>
            <Contacto data={''}></Contacto>
            <Footer></Footer>
        </div>
    )
}