import './style.css'
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { GetParametroByClave } from "../../services/parametroService";
import { SendMail } from "../../services/mailService";
import { FaLocationDot, FaPhone } from 'react-icons/fa6';
import { IoMail } from "react-icons/io5";
import SpinnerLoading from '../spinner';

interface ConsultaProps{
    data: string;
}

export default function Contacto({data}: ConsultaProps){
    const [message, setMessage] = useState(data);
    const [loading, setLoading] = useState(false);

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
        let destinatario = await GetParametroByClave('CORREO');
        let today = new Date();
        formData = {
            ...formData,
            Destinatario: destinatario?.valor,
            Datetime: today.toISOString()
        }
        //let response =  SendMail(formData);

        setTimeout(() => {
            let btnConfirmar = document.getElementById("btnModalEmail");
            btnConfirmar?.click();
            setLoading(false);
        }, 500);
    }

    return (
      <section className="container-fluid section__contacto">
        <div className="section__title text-center py-4">
          <h2>Hablemos!</h2>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6 text-start align-items-start">
            <ul>
              <li>
                <FaLocationDot className="mx-3" size={32}></FaLocationDot>
                <div>
                    <h4>Ubicación</h4>
                    <p>12 779, B1900 La Plata, Provincia de Buenos Aires <br /> Cita previa requerida</p>
                </div>
              </li>
              <li>
                <FaPhone className="mx-3" size={32}></FaPhone>
                <div>
                    <h4>Teléfono</h4>
                    <p>221.2200007</p>
                </div>
              </li>
              <li>
                <IoMail className="mx-3" size={32}></IoMail>
                <div>
                    <h4>Email</h4>
                    <p>drop.modulos@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>

          <form className="col-12 col-lg-6" onSubmit={handleSubmit(enviarContacto)}>
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
                        ENVIAR
                    </button>
                </div>
            </div>
          </form>
        </div>
        {loading? <SpinnerLoading></SpinnerLoading>: ''}
        <button type="button" id="btnModalEmail" className="d-none" data-bs-toggle="modal" data-bs-target="#modal-contacto-confirmacion"></button>  
      </section>
    );
}