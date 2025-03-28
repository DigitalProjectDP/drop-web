import "./style.css";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CardBanner from "../../components/cardBanner";
import { useEffect, useState } from "react";
import { GetAllImagesByType } from "../../services/imagenService";
import { Imagen } from "../../interfaces/imagen";
import banner from "../../media/img/home/banner.jpg"

export default function TopBanner(){
    const [banners, setBanners] = useState<Imagen[]>();
    const [width, setWidth] = useState<number>(0);

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
        <section id="topBanner" className='top-banner' style={{backgroundImage: `url(${banner})`, width: "100%"}}>
            {renderBanners()} 
            {/* {width>768? renderBanners(): ''}  */}
            {/* {banners? <OwlCarousel className='banner__carousel owl-theme' loop {...options}>
            </OwlCarousel> : ''}               */}
        </section >
        )
}