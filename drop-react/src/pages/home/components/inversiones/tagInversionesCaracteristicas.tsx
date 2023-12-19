import './style.css'
import { useEffect, useState } from 'react';
import { Caracteristica } from '../../../../interfaces/caracteristica';

interface TagInversionesProps{
    data?: Caracteristica;
}

export default function TagInversiones({data}: TagInversionesProps) {
    const [inversion, setInversion] = useState(data);

    useEffect(() => {
        setInversion(data);
    }, []);
    
    return(
        <div className="border-1 rounded-1 tag__container">
            <p className="tag__text">{data?.descripcion}</p>
        </div>
    )
}