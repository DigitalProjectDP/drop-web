import './style.css'
import { useEffect, useState } from 'react';
import { Reseña } from '../../../../interfaces/reseña';

interface ReseñasProps{
    data?: Reseña;
}

export default function CardReseña({data}: ReseñasProps) {
    const [reseña, setReseña] = useState(data);

    useEffect(() => {
        setReseña(data);
    }, [data]);    

    return(
        <div className="d-flex flex-column gap-2 align-items-center h-100">

            <div className="bg-light flex-column gap-2 justify-content-start align-center h-100 p-5 border border-1">
                <h5 className="fw-bold notranslate">
                    {reseña?.nombreUsuario}
                </h5>
                <p className="reseña__fecha fw-light">{reseña?.fecha}</p> 
                <p className="text-secondary fw-light mt-3">{reseña?.descripcion}</p>  
                
                <div className="h-25">
                    <img src={reseña?.imagenes[0]} alt="LogoReseña"/>
                </div>
                {/* <ul className="card__caracteristica__reseña">
                    {reseña?.caracteristicas? renderListReseñas(): ''}
                </ul> */}
            </div>
            <button type="button" id="buttonModal" className="d-none" data-bs-toggle="modal" data-bs-target="#modal-reseña"></button>            
        </div> 
    )
}