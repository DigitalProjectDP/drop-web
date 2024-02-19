import "./style.css";
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CardBanner from "../../components/cardBanner";
import { useEffect, useState } from "react";
import { GetAllImagesByType } from "../../services/imagenService";
import { Imagen } from "../../interfaces/imagen";
import { MockBanners } from "../../mocks/banners";
import bannerGif from "../../media/img/home/bannerNew.gif"

export default function TopBanner(){
    const [banners, setBanners] = useState<Imagen[]>();
    const [width, setWidth] = useState<number>(0);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(()=>{
        fetchBanners();
        let windowDimension = getWindowDimensions()
        setWidth(windowDimension?.width);
    }, [width])

    const fetchBanners = async () => {
        let bannersResponse = await GetAllImagesByType(1);
        //let bannersResponse = await MockBanners;
        setBanners(bannersResponse);
    }

    const options = {
        margin: 0,
        responsiveClass: true,
        nav: true,
        dots: false,
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

    function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
    }

    const renderBanners = () => banners?.map((v, i) => <CardBanner info={v} key={i}></CardBanner>)

    return (
        // <section id="topBanner" className='top-banner w-100' style={{width: "100%"}}>
        <section id="topBanner" className='top-banner' style={{backgroundImage: `url(${bannerGif})`, width: "100%"}}>
            {renderBanners()} 
            {/* {width>768? renderBanners(): ''}  */}
            {/* {banners? <OwlCarousel className='banner__carousel owl-theme' loop {...options}>
            </OwlCarousel> : ''}               */}
        </section >
        )
}