import './style.css'
import { useEffect, useState } from 'react';
import { Beneficio } from '../../../../interfaces/beneficio';

interface BeneficiosProps{
    data?: Beneficio;
}

export default function CardBeneficio({data}: BeneficiosProps) {
    const [beneficio, setBeneficio] = useState(data);

    useEffect(() => {
        setBeneficio(data);
    }, []);


    const renderListBeneficios = () => beneficio?.caracteristicas.map((v, i) => <li key={i}>{v.descripcion}</li>)

    return(
        <div>
            <div className="container d-flex flex-column justify-content-start gap-4 card__container__beneficios">
                <div className="container d-flex flex-column gap-2 align-items-center">
                    <img className="card__imagen" src={beneficio?.imagen} alt="LogoBeneficio" width={64} height={64}/>
                    <h2 className="card__titulo">
                        {beneficio?.titulo}
                    </h2>   
                </div>
                <ul className="card__caracteristica">
                    {beneficio?.caracteristicas? renderListBeneficios(): ''}
                </ul>
            </div>
        </div>
    )
}