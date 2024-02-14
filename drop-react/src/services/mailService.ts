import { Resend } from 'resend';
import { enviroment } from "../interfaces/enviroment";
import { Contacto } from "../interfaces/contacto";

const BASE_URL: string = enviroment.urlBase() + "api/Mail";
const ENV_DEMO: boolean = enviroment.demo();
const API_KEY: string = "re_Y6sYT857_EkroVg5ZscfgqDa5qEXneE1g";

export const SendMail = async (data: Contacto): Promise<any> => {
    // if (ENV_DEMO){
    //     return "Email enviado con éxito";
    // }
    const url = `https://mayicuervo-001-site2.atempurl.com/Email`;
        let result;

        const response = await fetch(url, {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data) 
        })
        result = await response.text();
        
        if(response.ok){
            return result;
        }

        return "Ocurrió un error al enviar el correo";

}

export const ResendEmail = async (data: Contacto): Promise<any> => {
    const resend = new Resend(API_KEY);
    try {
        const response = await resend.emails.send({
            from: 'maxi_nomemolesten@hotmail.com',
            to: 'noreply@maximilianohermosilla.website',
            subject: "Consulta",
            html: data?.mensaje!,
            headers: {
                "Access-Control-Allow-Origin": "*",
                'X-Entity-Ref-ID': 'Y6sYT857_EkroVg5ZscfgqDa5qEXneE1g',
              },
        });
        console.log(response)
        alert("Email enviado")
    } catch (error) {
        alert(error);
    }
   
}