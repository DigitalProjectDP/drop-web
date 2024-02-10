import './style.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Imagen } from '../../../interfaces/imagen';

interface BlogProps{
    data?: Imagen;
}

// id?: number,
// titulo?: string,
// subtitulo?: string,
// descripcion?: string,
// imagenUrl?: string,
// tipoSeccion: TipoImagen

export default function CardBlog({data}: BlogProps) {
    const [blog, setBlog] = useState(data);

    useEffect(() => {
        setBlog(data);
    }, []);
    
    const navigate = useNavigate();

    const redirect = () => {
        navigate(`#/blog/?id=${blog?.id}`);
    }

    return(
        <div className="col-12 col-lg-6 p-3 card__container__blogs">
            <div className="d-flex flex-column gap-2 align-items-center text-start">
                <img className="card__imagen__blog" src={blog?.imagenUrl} alt="LogoModelo"/>

                <div className="d-flex flex-column gap-2 justify-content-between">
                    <h5 className="card__titulo__blog">
                        {blog?.titulo}
                    </h5>
                    <a href={`#/blog/?id=${blog?.id}`} onClick={redirect} className="link__blog" >Leer el artículo completo</a>
                </div>
            </div>           
        </div>
    )
}