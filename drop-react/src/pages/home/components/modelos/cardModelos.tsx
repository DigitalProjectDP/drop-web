import './style.css'
import { useEffect, useState } from 'react';
import { Modelo } from '../../../../interfaces/modelo';
import { useNavigate } from 'react-router';

interface ModelosProps{
    data?: Modelo;
}

export default function CardModelo({data}: ModelosProps) {
    const [modelo, setModelo] = useState(data);

    useEffect(() => {
        setModelo(data);
    }, []);
    
    const navigate = useNavigate();

    const redirect = () => {
        navigate(`/modelo/?id=${modelo?.id}`);
    }

    const renderListModelos = () => modelo?.caracteristicas.map((v, i) => <li key={i}>{v.descripcion}</li>)

    return(
        <div className="col-12 col-xl-3 col-lg-6 card__container__modelos" onClick={redirect}>
            <div className="d-flex flex-column gap-2 align-items-center">
                <img className="card__imagen__modelo" src={modelo?.imagenes[0].url} alt="LogoModelo"/>

                <div className="card__overlay__modelo d-flex flex-column gap-2 justify-content-between">
                    <h5 className="card__titulo__modelo">
                        {modelo?.nombre}
                    </h5>   
                    <ul className="card__caracteristica__modelo">
                        {modelo?.caracteristicas? renderListModelos(): ''}
                    </ul>
                </div>
            </div>           
        </div>
    )
}