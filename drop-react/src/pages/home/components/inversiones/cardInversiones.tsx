import './style.css'
import { useEffect, useState } from 'react';
import { Inversion } from '../../../../interfaces/inversion';
import { useNavigate } from 'react-router-dom';
import TagInversiones from './tagInversionesCaracteristicas';

interface InversionesProps{
    data?: Inversion;
}

export default function CardInversiones({data}: InversionesProps) {
    const [inversion, setInversion] = useState(data);

    useEffect(() => {
        setInversion(data);
    }, []);
    
    const navigate = useNavigate();

    const redirect = () => {
        //navigate(`/inversiones/?id=inversiones0${infoInversion?.id}`);
    }

    const renderTagInversiones = () => inversion?.caracteristicas.map((v, i) => <TagInversiones data={v} key={i}></TagInversiones>)

    return(
        <div className="d-flex flex-column justify-content-between card__container">
            <div className="card__header w-100 mb-2">
                <h2 className="card__titulo__inversion">
                    {inversion?.titulo}
                </h2>
                <img src={inversion?.imagen} alt="Imagen" className="card__imagen__inversion"/>
            </div>
            <p className="card__descripcion">
                {inversion?.descripcion} 
            </p>
            <div className="card__caracteristicas d-flex  justify-content-center flex-row">
                {inversion?.caracteristicas? renderTagInversiones(): ''}
            </div>
            <div className="container d-flex justify-content-center align-items-end my-4">
                <button className="button__primary" onClick={redirect}>
                    Contacto
                </button>
            </div>
        </div>
    )
}