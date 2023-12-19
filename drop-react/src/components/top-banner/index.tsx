import "./style.css";
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CardBanner from "../../components/cardBanner";
import { useEffect, useState } from "react";
import { GetAllImagesByType } from "../../services/imagenService";
import { Imagen } from "../../interfaces/imagen";
import { MockBanners } from "../../mocks/banners";

export default function TopBanner(){
    const [banners, setBanners] = useState<Imagen[]>();

    useEffect(()=>{
        fetchBanners();
    }, [])

    const fetchBanners = async () => {
        let bannersResponse = await GetAllImagesByType(1);
        //let bannersResponse = await MockBanners;
        setBanners(bannersResponse);
    }

    const options = {
        margin: 0,
        responsiveClass: true,
        nav: true,
        dots: true,
        autoplay: true,
        navContainerClass: `owl-nav d-none`,
        dotsClass: `owl-dots customDots`,
        dotClass: `owl-dot buttonDot`,
        controlsClass: "owl-controls",        
        smartSpeed: 1000,
        responsive:{
            0:{
                items:1
            }
        }
    };

    const renderBanners = () => banners?.map((v, i) => <CardBanner info={v} key={i}></CardBanner>)

    return (
        <section className='top-banner'>
            {banners? <OwlCarousel className='owl-theme' loop {...options}>
                {renderBanners()} 
            </OwlCarousel> : ''}              
        </section >
        )
}