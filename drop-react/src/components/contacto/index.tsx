import './style.css'
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { GetParametroByClave } from "../../services/parametroService";
import { ResendEmail, SendMail } from "../../services/mailService";
import { FaFacebook, FaInstagram, FaLocationDot, FaPhone, FaYoutube, FaTiktok } from 'react-icons/fa6';
import { IoMail } from "react-icons/io5";
import SpinnerLoading from '../spinner';
import { confirmAlert } from 'react-confirm-alert';

interface ConsultaProps{
    data: string;
    isModal?: boolean;
}

export default function Contacto({data, isModal}: ConsultaProps){
    const [message, setMessage] = useState(data);
    const [loading, setLoading] = useState(false);
    const [instagram, setInstagram] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [telefono, setTelefono] = useState('');

    useEffect(() => {
        let parametros = localStorage.getItem("parametros") ? JSON.parse(localStorage.getItem("parametros")!) : {};

        let instagramParametro = parametros?.instagram || '';
        let whatsappParametro = parametros?.whatsapp || '';
        let telefonoParametro = parametros?.telefono || '';
        setMessage(data);
        setInstagram(instagramParametro);
        setWhatsapp(whatsappParametro);
        setTelefono(telefonoParametro);
    }, [])  
    
    const { register, formState: {errors}, watch, handleSubmit } = useForm({
        defaultValues: {
            Nombre: '',
            Apellido: '',
            Email: '',
            Whatsapp: '',
            Destinatario: '',
            Asunto: 'Consulta Formulario Web',
            Mensaje: data,
            Datetime: ''
        }
    });

    useEffect(() => {
        setMessage(data);        
    }, []);  

    const enviarContacto = async (formData: any) => {
        setLoading(true);
        let vDestinatario = await GetParametroByClave('Correo');
        let today = new Date();
        formData = {
            ...formData,
            destinatario: vDestinatario?.valor,
            Datetime: today.toISOString(),
            Id: 0
        }
        let response = await SendMail(formData);        
        
        setLoading(false);
        
        confirmAlert({            
            message: response,
            buttons: [{
                label: 'Aceptar',
                className: "button__primary",
                onClick: () => window.location.reload()
                }],
            willUnmount: () => {window.location.reload()}
        });

        setTimeout(() => {
            window.location.reload();
        }, 2000);
        
        
    }

    return (
      <section className="container-fluid section__contacto">
        <div className="section__title text-center py-5">
          <h3>¡Hablemos!</h3>
        </div>
        <div className="row">
          {!isModal?<div className="col-12 col-lg-6 text-start align-items-start">
            <ul>
              <li>
                <FaLocationDot className="mx-3" size={24}></FaLocationDot>
                <div>
                    <h5>Ubicación</h5>
                    <p>12 779, B1900 La Plata, Provincia de Buenos Aires <br /> Cita previa requerida</p>
                </div>
              </li>
              <li>
                <FaPhone className="mx-3" size={24}></FaPhone>
                <div>
                    <h5>Teléfono</h5>
                    <p><a href="tel:+2212200007" target="_blank">2212200007</a></p>
                </div>
              </li>
              <li>
                <IoMail className="mx-3" size={24}></IoMail>
                <div>
                    <h5>Email</h5>
                    <p><a href="mailto:ventas@dropmodular.com" target="_blank">ventas@dropmodular.com</a></p>                    
                </div>
              </li>
            </ul>
            <div className="d-flex flex-row gap-1 justify-content-center py-4 mt-4">
              <a href={instagram} target="_blank"><FaInstagram className="contacto__icon mx-2" size={32}></FaInstagram></a>
              <a href="https://www.facebook.com/profile.php?id=100084131770712&mibextid=LQQJ4d" target="_blank"><FaFacebook className="contacto__icon mx-2" size={32}></FaFacebook></a>
              <a href={instagram} target="_blank"><FaTiktok className="contacto__icon mx-2" size={32}></FaTiktok></a>
            </div>
          </div>:''}

          <form className={`col-12 ${isModal?'':'col-lg-6'} `} onSubmit={handleSubmit(enviarContacto)}>
            <div className="row">
                <div className="col-md-6">
                    <input
                        type="text"
                        {...register("Nombre", { required: true })}
                        id="contacto_nombre"
                        placeholder="* Nombre"
                        className="form-control input__form"
                    />
                    {errors.Nombre?.type === "required" && (
                        <p className="text-danger"> El campo nombre es requerido</p>
                    )}
                </div>
                <div className="col-md-6">
                    <input
                        type="text"
                        {...register("Apellido", { required: true })}
                        id="contacto_apellido"
                        placeholder="* Apellido"
                        className="form-control input__form"
                    />
                    {errors.Apellido?.type === "required" && (
                        <p className="text-danger"> El campo apellido es requerido</p>
                    )}
                </div>
                <div className="col-md-6">
                    <input
                        type="text"
                        {...register("Whatsapp")}
                        id="contacto_telefono"
                        placeholder="WhatsApp (sin 0 ni 15)"
                        className="form-control input__form"
                    />
                </div>
                <div className="col-md-6">
                    <input
                        type="email"
                        {...register("Email", { required: true })}
                        id="contacto_email"
                        placeholder="* Email"
                        className="form-control input__form"
                    />
                    {errors.Email?.type === "required" && (
                        <p className="text-danger"> El campo email es requerido</p>
                    )}
                </div>
                <div className="col-md-12">
                    <textarea
                        id="contacto_mensaje"
                        {...register("Mensaje")}
                        placeholder="Escriba aquí su mensaje"
                        className="form-control input__form"
                    ></textarea>
                </div>
                <div className="col-md-12 text-center">
                    <button
                        type="submit"
                        id="contacto_submit"
                        className="button__primary my-3"
                    >
                        Enviar
                    </button>
                </div>
            </div>
          </form>
        </div>
        {loading? <SpinnerLoading></SpinnerLoading>: ''}
      </section>
    );
}