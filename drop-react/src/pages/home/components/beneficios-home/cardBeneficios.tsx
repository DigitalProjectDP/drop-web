import './style.css'
import { useEffect, useState } from 'react';
import { Beneficio } from '../../../../interfaces/beneficio';

interface BeneficiosProps{
    data?: Beneficio;
}

export default function CardBeneficioHome({data}: BeneficiosProps) {
    const [beneficio, setBeneficio] = useState(data);

    useEffect(() => {
        setBeneficio(data);
    }, []);


    const renderListBeneficios = () => beneficio?.caracteristicas.map((v, i) => <li key={i}>{v.descripcion}</li>)

    return(
        <div>
            <div className="container d-flex flex-column justify-content-start gap-4 card__container__beneficios">
                <div className="d-flex flex-column gap-2 align-items-start">
                    <img className="card__imagen__beneficio" src={beneficio?.imagen} alt="LogoBeneficio" width={64} height={64}/>
                    <h2 className="card__titulo__beneficio">
                        {beneficio?.titulo}
                    </h2>   
                </div>
                <p className="card__descripcion">
                    {beneficio?.descripcion}
                </p>
            </div>
        </div>
    )
}