import './style.css'
import { useEffect, useState } from 'react';
import { Reseña } from '../../../../interfaces/reseña';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6';

interface ReseñasProps {
    data?: Reseña;
}

export default function CardReseña({ data }: ReseñasProps) {
    const [reseña, setReseña] = useState(data);

    useEffect(() => {
        setReseña(data);
    }, [data]);

    return (
        <div className="d-flex flex-column gap-2 align-items-center reseña__container" style={{ backgroundColor: reseña?.color || "#FFF" }}>

            <div className="d-flex flex-column gap-2 justify-content-center align-center p-3 border border-1 h-100">
                <div className="d-flex flex-row justify-content-center gap-2">
                    <div>
                        <h5 className="fw-bold notranslate">
                            {reseña?.nombreUsuario}
                        </h5>
                        <p className="reseña__fecha fw-light">{reseña?.fecha}</p>
                        <p className="fw-light mt-2 reseña__descripcion"><FaQuoteLeft /> {reseña?.descripcion} <FaQuoteRight /></p>  
                    </div>
                </div>

        
                {reseña!.imagenes.length > 0 ?
                <div className="reseña__imagen mb-2">
                    <img src={reseña?.imagenes[0]} alt="LogoReseña" height={200} />
                </div>: ''}
            </div>
            <button type="button" id="buttonModal" className="d-none" data-bs-toggle="modal" data-bs-target="#modal-reseña"></button>
        </div>
    )
}