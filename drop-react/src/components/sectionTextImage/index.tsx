import "./style.css";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { Imagen } from "../../interfaces/imagen";

interface SectionProps{
    info?: Imagen;
    buttonLink?: string;
    buttonText?: string;
    idSeccion?: string;
}

export default function SectionTextImage({info, buttonLink, buttonText, idSeccion}: SectionProps){
    const [infoSection, setInfo] = useState(info);

    useEffect(() => {
        setInfo(info);
    }, []);

    const navigate = useNavigate();

    const redirect = () => {
        navigate(`/${buttonLink}`);
    }

    return (
        <section className="about" id={idSeccion}>
            <div className="container-fluid">
                <div className="row d-flex flex-wrap">
                    <div className="col-lg-6 order-lg-1 d-flex justify-content-start p-3">
                        <img src={infoSection?.imagenUrl} alt="Info" width="100%" className="imagen" />
                    </div>
                    <div className="col-lg-6 order-lg-1 d-flex justify-content-start gap-2 align-start p-3">
                        <div className="sectionTile">
                            <h3 className="title mb-2">
                                <strong>{infoSection?.titulo}</strong>
                            </h3>
                            <span className="subtitle">
                                {infoSection?.subtitulo}
                            </span>
                        </div>
                        <p className="section__descripcion">
                            {infoSection?.descripcion}
                        </p>
                        <div className="d-flex justify-content-center gap-2">
                            {buttonText? <button className="buttonVerMas" onClick={redirect}>
                                {buttonText}
                            </button>: ''}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}