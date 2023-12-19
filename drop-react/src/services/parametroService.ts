import { ClaveValor } from "../interfaces/claveValor";
import { enviroment } from "../interfaces/enviroment";
import { MockParametros } from "../mocks/parametros";
import { UnauthorizedLogout } from "../utils/unauthorizedLogout";

const BASE_URL: string = enviroment.urlBase() + "api/Parametro";
const ENV_DEMO: boolean = enviroment.demo();
let parametros = MockParametros;

export const GetAllParametros = async (): Promise<ClaveValor[]> => {
    if (ENV_DEMO){
        return parametros;
    }
    const url = `${BASE_URL}`;
    try {
        const response = await fetch(url);
        if (!response.ok){
            throw new Error(response.statusText);        
        }
        const data: ClaveValor[] = await response.json();
        return data;        
    } catch (error) {
        return [];
    }
}

export const GetParametroByClave = async (clave?: string): Promise<ClaveValor | undefined> => {
    if (ENV_DEMO){        
        return parametros.find((param) => param.clave === clave);
    }
    const url = `${BASE_URL}/${clave}`;    
    const response = await fetch(url);
    try {
        if (!response.ok){
            throw new Error(response.statusText);        
        }
        const data: ClaveValor = await response.json();
        return data;        
    } catch (error) {
        return undefined;
    }
}

export const UpdateParametro = async (data: ClaveValor): Promise<any> => {
    if (ENV_DEMO){
        return 0;
    }
    const url = `${BASE_URL}`;
    const JwtToken = localStorage.getItem("token")?.replace(/['"]+/g, '');
    //const JwtToken = localStorage.getItem("token")?.replace(/['"]+/g, '');
    let result;
    try {
        const response = await fetch(url, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${JwtToken}`
            },
            body: JSON.stringify(data) 
        })
        
        if(response.status == 401){
            UnauthorizedLogout();
        }
        
        if (!response.ok){
            throw new Error(response.statusText);
        }
        result = await response.json();
        if(response.ok && response.status == 200){
            return result;
        }        
    } catch (error) {
        return undefined;
    }
}