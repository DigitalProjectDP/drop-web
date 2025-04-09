import "./style.css";
import imgLogoHipotecario from "../../media/logo/logo_hipotecario.png"
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import ReactGA from 'react-ga';
import { useNavigate } from "react-router-dom";

export default function BancoHipotecarioPopUp() {
    const [visible, setVisible] = useState(true);
    const [hiddenPopup, setHiddenPopup] = useState(false);

    useEffect(() => {
        let hiddenPopupStorage = sessionStorage.getItem("hiddenPopup");
        if (hiddenPopupStorage) {
            setVisible(false);
        }
    }, [])


    onButtonClick(document.querySelectorAll("#ver-modelos"))

    function onButtonClick(elements: any) {
        elements.forEach((element: any) => {
            element.addEventListener('click', () => {
                ReactGA.pageview(window.location.pathname + "/" + element?.id);
            });
        });
    }

    function closePopup() {
        console.log("close");
        sessionStorage.setItem("hiddenPopup", "true");
        setVisible(false);
    }

    const navigate = useNavigate();

    const redirect = () => {
        sessionStorage.setItem("hiddenPopup", "true");
        navigate(`#/inicio/?id=section__hipotecario`);
        //sessionStorage.setItem("homeVisited", "true");
        setVisible(false);
        setTimeout(() => {
            sessionStorage.setItem("homeVisited", "true");
        }, 1000);
    }

    return (
        <>
            {visible ? <article className="popup__container p-3" >
                <Modal.Header closeButton className="border-0" onClick={closePopup}></Modal.Header>
                <h3 className="text-center p-2">¿Sabías que podés acceder a un crédito hipotecario para construir tu DROP?</h3>
                <div className="d-flex flex-column justify-content-center align-items-center gap-2 py-3">
                    <img src={imgLogoHipotecario} alt="Logo_Hipotecario" height={50} />
                    <a className="button__secondary mt-4 fs-5" id="ver-modelos" href="#/inicio/?id=section__hipotecario" onClick={redirect}>Conocer más</a>
                </div>
            </article> : ''}
        </>
    )
}