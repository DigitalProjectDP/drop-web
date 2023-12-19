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
        <div>
            <div className="d-flex flex-column justify-content-between card__container">
                <div className="container d-flex flex-column justify-content-center align-items-center mb-4">  
                    <h2 className="card__titulo">
                        {inversion?.titulo}
                    </h2>               
                </div>
                <p className="card__descripcion">
                    {inversion?.descripcion} 
                </p>
                <div className="card__caracteristicas d-flex  justify-content-center flex-row">
                    {inversion?.caracteristicas? renderTagInversiones(): ''}
                </div>
                <div className="container d-flex justify-content-center align-items-end mt-4">
                    <button className="button__primary" onClick={redirect}>
                    Contacto
                    </button>
                </div>
            </div>
        </div>
    )
}