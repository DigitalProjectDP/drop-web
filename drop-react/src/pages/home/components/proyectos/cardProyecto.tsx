import './style.css'
import { useEffect, useState } from 'react';
import { Modelo } from '../../../../interfaces/modelo';
import { useNavigate } from 'react-router';
import { IoOpenOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { GrGallery } from "react-icons/gr";



interface ProyectosProps {
    data?: Modelo;
    openModal?: any;
    setProyectoId: any;
}

export default function CardProyecto({ data, openModal, setProyectoId }: ProyectosProps) {
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

    const callback = () => {
        openModal(data);
    }

    const renderListProyectos = () => proyecto?.caracteristicas.map((v, i) => <li key={i}>{v.descripcion}</li>)

    return (
        <div className="d-flex flex-column gap-2 align-items-center card__container__proyectos" onClick={callback}>
            <img className="card__imagen__proyecto" src={proyecto?.imagenes[0].url} alt="LogoProyecto" />

            <div className="card__overlay__proyecto flex-column gap-2 justify-content-start">
                <h5 className="card__titulo__proyecto mb-0 mb-md-0 mt-3 notranslate">
                    {proyecto?.nombre}
                </h5>
                <h6 className=" mt-0 mt-md-3">{proyecto?.categoria?.descripcion}</h6>
                <span className="proyecto__descripcion mt-0 mt-md-1 mb-3">{proyecto?.descripcion}</span>
                {/* <ul className="card__caracteristica__proyecto">
                    {proyecto?.caracteristicas? renderListProyectos(): ''}
                </ul> */}

                <div className="flex m-auto proyecto__icon">
                    <GrGallery size={32}></GrGallery>
                </div>
            </div>
            <div className="flex m-auto proyecto__icon__principal">
                    <GrGallery size={32}></GrGallery>
            </div>
            <button type="button" id="buttonModal" className="d-none" data-bs-toggle="modal" data-bs-target="#modal-proyecto"></button>
        </div>
    )
}