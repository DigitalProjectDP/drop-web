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
        <div className="d-flex flex-column justify-content-start gap-4 card__container__beneficios">
            <div className="d-flex flex-column gap-2 align-items-start">
                {/* <img className={"mb-2 " + ( beneficio!.color! !== '' ? '' : 'card__imagen__beneficio')} src={beneficio?.imagen} alt="LogoBeneficio" width={36} height={36}/> */}
                <img className={"mb-2 card__imagen__beneficio"} src={beneficio?.imagen} alt="LogoBeneficio" width={36} height={36}/>
                <h6 className="card__titulo__beneficio">
                    {beneficio?.titulo}
                </h6>   
            </div>
            <p className="card__descripcion__beneficios">
                {beneficio?.descripcion}
            </p>
        </div>
    )
}