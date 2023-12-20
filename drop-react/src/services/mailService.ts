import { enviroment } from "../interfaces/enviroment";
import { Contacto } from "../interfaces/contacto";

const BASE_URL: string = enviroment.urlBase() + "api/Mail";
const ENV_DEMO: boolean = enviroment.demo();

export const SendMail = async (data: Contacto): Promise<any> => {
    if (ENV_DEMO){
        return "Email enviado con éxito";
    }
    const url = `${BASE_URL}`;
    let result;

        const response = await fetch(url, {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                //"Authorization": `Bearer ${JwtToken}`
            },
            body: JSON.stringify(data) 
        })
            
        result = await response.text();

        if(response.ok){
            return result;
        }

        return undefined;

}