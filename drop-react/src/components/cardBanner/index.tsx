import "./style.css";
import { useEffect, useState } from "react";
import { Imagen } from "../../interfaces/imagen";
import banner from "../../media/img/home/banner.jpg"

interface InfoProps{
    info?: Imagen;
}

export default function CardBanner({info}: InfoProps){
    const [infoBanner, setInfo] = useState(info);

    useEffect(() => {
        setInfo(info);
        const topBanner = document.getElementById("topBanner") as HTMLMediaElement;
        const bannerVideo = document.getElementById("bannerVideo") as HTMLMediaElement;

        bannerVideo.src = infoBanner?.imagenUrl || "https://placehold.co/640x360?text=...";
        bannerVideo.muted = true;
        
        setTimeout(() => {
            bannerVideo.play();
            bannerVideo?.addEventListener('playing', function(){
                console.log("video is playing")
                topBanner.style.background = `transparent`;
                bannerVideo.style.display = "block"
            })

            // bannerVideo.play()
            // .then(() => {console.log("video ok")})
            // .catch((error) => {                
            //     console.log(error)
            // });
          
        }, 300);
    }, []);
    
    const videoOnLoadHandler = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {        
        const topBanner = document.getElementById("topBanner") as HTMLMediaElement;
        topBanner.style.background = `url(${banner})`
        //event.currentTarget.src = dropLogo;
    };

    return(
        <div className='banner__container fill' style={{width: "100%"}}>  
            <div className="video-overlay no-click fill hide-for-medium"></div>
            <video id="bannerVideo" playsInline muted loop className='banner__video fill no-click w-100' controls={false} onError={() => videoOnLoadHandler}>
                <source src={infoBanner?.imagenUrl} type="video/mp4"/>
            </video>
            <div className="section-bg-overlay absolute fill item"></div>
        </div>
    )
}