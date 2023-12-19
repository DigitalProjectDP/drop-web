import './style.css'
import Footer from "../../components/footer";
import Header from "../../components/header";
import TopBanner from "../../components/top-banner";

export default function Home() {
  return (
    <div className="div__home min-vh-100 h-10">
      <Header></Header>
      <TopBanner></TopBanner>      
      <div className="spacer"></div>
      <Footer></Footer>
    </div>
  )
}
