import "./style.css";
import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsappButton(){

    return (
        <div className="whatsapp__container">
            <a href="https://wa.me/+542213146751" className="p-1 rounded-circle d-flex justify-content-center align-center" target="_blank">
                <FaWhatsapp size={40}></FaWhatsapp>
            </a>
        </div>
    )
}