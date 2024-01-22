import './style.css'
import { useEffect, useState } from 'react';
import { Modelo } from '../../../../interfaces/modelo';
import { useNavigate } from 'react-router';
import ModeloModal from '../../../../components/modeloModal';

interface ModelosProps{
    data?: Modelo;
    setModeloId: any;
}

export default function CardModelo({data, setModeloId}: ModelosProps) {
    const [modelo, setModelo] = useState(data);

    useEffect(() => {
        setModelo(data);
    }, []);
    
    const navigate = useNavigate();

    const redirect = () => {
        navigate(`/modelo/?id=${modelo?.id}`);        
    }

    const callbackModeloId = () => {
        setModeloId(modelo?.id);
    }

    const renderListModelos = () => modelo?.caracteristicas.map((v, i) => <li key={i}>{v.descripcion}</li>)

    return(
        <div className="d-flex flex-column gap-2 align-items-center card__container__modelos" onClick={callbackModeloId}>
            <img className="card__imagen__modelo" src={modelo?.imagenes[0].url} alt="LogoModelo"/>

            <div className="card__overlay__modelo flex-column gap-2 justify-content-start">
                <h5 className="card__titulo__modelo">
                    {modelo?.nombre}
                </h5> 
                <h6>{modelo?.categoria?.descripcion}</h6>  
                {/* <ul className="card__caracteristica__modelo">
                    {modelo?.caracteristicas? renderListModelos(): ''}
                </ul> */}
            </div>
            <button type="button" id="buttonModal" className="d-none" data-bs-toggle="modal" data-bs-target="#modal-modelo"></button>            
        </div> 
    )
}