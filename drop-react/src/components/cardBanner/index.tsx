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
    }, []);

    return(
        <div className='item' style={{backgroundImage: `url(${infoBanner?.imagenUrl})`, width: "100%"}}>
            <div className='bannerCaption'>
                <video src={infoBanner?.imagenUrl}></video>
                <h2>{infoBanner?.titulo}</h2>                                   
                <h3>{infoBanner?.descripcion}</h3>
            </div>                  
        </div>
    )
}