import Contacto from '../../components/contacto'
import Footer from '../../components/footer'
import Header from '../../components/header'
import HeaderSpace from '../../components/header-space'
import BlogPrincipal from './principal'
import './styles.css'

export default function BlogPage(){
    return(
        <main className="main__height min-vh-100 h-10">
            <Header></Header>
            <HeaderSpace></HeaderSpace>
            <BlogPrincipal></BlogPrincipal>
            <Footer></Footer>
        </main>
    )
}