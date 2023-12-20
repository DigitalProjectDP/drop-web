import { enviroment } from "../interfaces/enviroment";
import { Modelo } from "../interfaces/modelo";
import { MockModelos } from "../mocks/modelos";
import { UnauthorizedLogout } from "../utils/unauthorizedLogout";

const BASE_URL: string = enviroment.urlBase() + "api/Admin";
const ENV_DEMO: boolean = enviroment.demo();

export const GetAllModelos = async (): Promise<Modelo[]> => {
    if (ENV_DEMO){
        return MockModelos;        
    }
    const url = `${BASE_URL}/getObrasList`;
    try {
        const response = await fetch(url, {
            method: "GET",
            headers:{
                "Access-Control-Allow-Origin": "*",
            }
        });
        if (!response.ok){
            throw new Error(response.statusText);        
        }
        const data: Modelo[] = await response.json();
        return data;
    } catch (error) {
        return [];
    }
    
}

export const GetModeloById = async (id?: number): Promise<Modelo | undefined> => {
    if (ENV_DEMO){
        return MockModelos.find(o => o.id == id);
    }
    const url = `${BASE_URL}/${id}`;    
    const response = await fetch(url);
    try {
        if (!response.ok){
            throw new Error(response.statusText);        
        }
        const data: Modelo = await response.json();
        return data;        
    } catch (error) {
        return undefined;
    }
}