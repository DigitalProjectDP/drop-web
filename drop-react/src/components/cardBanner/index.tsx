import "./style.css";
import { useEffect, useState } from "react";
import { Imagen } from "../../interfaces/imagen";
import bannerGif from "../../media/img/home/banner.gif"

interface InfoProps{
    info?: Imagen;
}

export default function CardBanner({info}: InfoProps){
    const [infoBanner, setInfo] = useState(info);

    useEffect(() => {
        setInfo(info);
        const bannerVideo = document.getElementById("bannerVideo") as HTMLMediaElement;
        bannerVideo.src = infoBanner?.imagenUrl || "https://placehold.co/640x360?text=...";
        bannerVideo.muted = true;
        setTimeout(() => {
            //bannerVideo.pause();
            bannerVideo.play();
        }, 300);
    }, []);

    return(
        <div className='banner__container fill' style={{width: "100%"}}>  
            <div className="video-overlay no-click fill hide-for-medium"></div>
            <video id="bannerVideo" playsInline preload="auto" className='banner__video fill no-click w-100' muted loop controls={true}>
                <source src={infoBanner?.imagenUrl} type="video/mp4"/>
            </video>
            <div className="section-bg-overlay absolute fill item"></div>
        </div>
    )
}