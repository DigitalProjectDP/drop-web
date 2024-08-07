import './style.css'
import { useEffect, useState } from 'react';
import { InstagramPost } from '../../../../interfaces/instagramPost';
import { GetAllInstagramPosts } from '../../../../services/instagramService';
import instagramLogo from '../../../../media/logo/instagram_logo.jpg'
import dropLogo from "../../../../media/img/logo512.png"

export default function HomeInstagram() {
    const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>();
    const [width, setWidth] = useState<number>(0);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        fetchInstagramPosts();
        let windowDimension = getWindowDimensions()
        setWidth(windowDimension?.width);
        
        // window.addEventListener('load', videoScroll);
        // window.addEventListener('scroll', videoScroll);
    }, [width]);

    const fetchInstagramPosts = async () => {
        let vInstagramPosts = await GetAllInstagramPosts();
        setInstagramPosts(vInstagramPosts.slice(0,6));
    }
    
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }        

    const videoScroll = (e: Event) => {

        if ( document.querySelectorAll('video[autoplay]').length > 0) {
            var windowHeight = window.innerHeight,
                videoEl = document.querySelectorAll('video[autoplay]');

            for (var i = 0; i < videoEl.length; i++) {

            var thisVideoEl = videoEl[i],
                videoHeight = thisVideoEl.clientHeight,
                videoClientRect = thisVideoEl.getBoundingClientRect().top;

            if ( videoClientRect <= ( (windowHeight) - (videoHeight*.5) ) && videoClientRect >= ( 0 - ( videoHeight*.5 ) ) ) {
                (thisVideoEl as HTMLVideoElement).play();
            } else {
                (thisVideoEl as HTMLVideoElement).pause();
            }

            }
        }

    }
    

    const imageOnLoadHandler = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {        
        event.currentTarget.src = dropLogo;
    };

    const renderInstagramPosts = () => instagramPosts?.map((v, i) => <a id={"instagramPost_"+i.toString()} key={i} href={v?.permalink} target="_blank" className="">
        {v?.media_type! == "VIDEO"?
        <video playsInline className="instagram__card" src={v?.media_url} autoPlay muted loop></video>:
        <img className={`instagram__card instagram__${v?.media_type}`} src={v?.media_url}  onError={imageOnLoadHandler}/>}
    </a>)

    return (
    <section className="section__instagram d-flex justify-content-center align-items-center flex-column mb-5">
        <div className="instagram__header">
            <h3 className="instagram__title">Seguinos en Instagram</h3>
            <a className="d-flex flex-row instagram__link" href="https://www.instagram.com/drop.modular/" target="_blank">
                <img src={instagramLogo} className="instagram__logo" alt="LogoInstragram"/>
                <h3 className="d-flex justify-content-center align-items-center mx-3 text-dark"><strong>drop.modular</strong></h3>
            </a>
        </div>
        <div className="instagram__container">
            {instagramPosts? renderInstagramPosts(): ''}
        </div>
    </section>
    )
}
