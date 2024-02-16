import './style.css'
import { useEffect, useState } from 'react';
import { Modelo } from '../../../../interfaces/modelo';
import { useNavigate } from 'react-router';

interface ProyectosProps{
    data?: Modelo;
    setProyectoId: any;
}

export default function CardProyecto({data, setProyectoId}: ProyectosProps) {
    const [proyecto, setProyecto] = useState(data);

    useEffect(() => {
        setProyecto(data);
    }, [data]);
    
    const navigate = useNavigate();

    const redirect = () => {
        navigate(`/proyecto/?id=${proyecto?.id}`);        
    }

    const callbackProyectoId = () => {
        setProyectoId(proyecto?.id);
    }

    const renderListProyectos = () => proyecto?.caracteristicas.map((v, i) => <li key={i}>{v.descripcion}</li>)

    return(
        <div className="d-flex flex-column gap-2 align-items-center card__container__proyectos" onClick={callbackProyectoId}>
            <img className="card__imagen__proyecto" src={proyecto?.imagenes[0].url} alt="LogoProyecto"/>

            <div className="card__overlay__proyecto flex-column gap-2 justify-content-start">
                <h5 className="card__titulo__proyecto">
                    {proyecto?.nombre}
                </h5> 
                <h6>{proyecto?.categoria?.descripcion}</h6>  
                {/* <ul className="card__caracteristica__proyecto">
                    {proyecto?.caracteristicas? renderListProyectos(): ''}
                </ul> */}
            </div>
            <button type="button" id="buttonModal" className="d-none" data-bs-toggle="modal" data-bs-target="#modal-proyecto"></button>            
        </div> 
    )
}