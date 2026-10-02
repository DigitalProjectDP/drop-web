import { Resend } from 'resend';
import { enviroment } from "../interfaces/enviroment";
import { Contacto } from "../interfaces/contacto";

const BASE_URL: string = enviroment.urlBase() + "Email";
const ENV_DEMO: boolean = enviroment.demo();

export const SendMail = async (data: Contacto): Promise<any> => {
    // if (ENV_DEMO){
    //     return "Email enviado con éxito";
    // }
    //const url = BASE_URL;
    const url = `https://api.mayidev.com/Email`;
    let result;

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    result = await response.text();

    if (response.ok) {
        return result;
    }

    return "Ocurrió un error al enviar el correo";

}