import "./style.css";
import { useEffect, useState } from "react";
import { Imagen } from "../../interfaces/imagen";

interface InfoProps{
    info?: Imagen;
}

export default function CardBanner({info}: InfoProps){
    const [infoBanner, setInfo] = useState(info);

    useEffect(() => {
        setInfo(info);
        const bannerVideo = document.getElementById("bannerVideo") as HTMLMediaElement;
        bannerVideo.muted = true;
        bannerVideo.play();
    }, []);

    return(
        <div className='banner__container' style={{width: "100%"}}>     
            <video id="bannerVideo" className='banner__video' autoPlay muted loop src={infoBanner?.imagenUrl} controls={false} ></video>
            <div className='banner__caption'>
                <h2>{infoBanner?.titulo}</h2>                                   
                <h3>{infoBanner?.descripcion}</h3>
            </div>                  
        </div>
    )
}