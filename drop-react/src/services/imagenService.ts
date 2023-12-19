import { enviroment } from "../interfaces/enviroment";
import { Imagen } from "../interfaces/imagen";
import { MockBanners } from "../mocks/banners";
import { UnauthorizedLogout } from "../utils/unauthorizedLogout";

const BASE_URL: string = enviroment.urlBase() + "api/Seccion";
const ENV_DEMO: boolean = enviroment.demo();

export const GetAllImages = async (): Promise<Imagen[]> => {
    if (ENV_DEMO){
        return [];
    }
    const url = `${BASE_URL}`;
    try {
        const response = await fetch(url);
        if (!response.ok){
            throw new Error(response.statusText);
        }
        const data: Imagen[] = await response.json();
        return data;        
    } catch (error) {
        return [];
    }
}

export const GetAllImagesByType = async (seccionId?: number): Promise<Imagen[]> => {
    if (ENV_DEMO){
        return MockBanners;
    }
    const url = `${BASE_URL}/${seccionId}`;
    try {
        const response = await fetch(url);
        if (!response.ok){
            throw new Error(response.statusText);
        }
        const data: Imagen[] = await response.json();
        return data;        
    } catch (error) {
        return [];
    }
}

export const InsertImage= async (data: any): Promise<any> => {
    if (ENV_DEMO){
        return 0;
    }
    const url = `${BASE_URL}`;
    const JwtToken = localStorage.getItem("token")?.replace(/['"]+/g, '');
    let result;
    try {
        const response = await fetch(url, {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${JwtToken}`
            },
            body: JSON.stringify(data) 
        })
        
        if (!response.ok){
            throw new Error(response.statusText);        
        }
        
        if(response.status == 401){
            UnauthorizedLogout();
        }
        
        result = await response.json();
        if(response.ok && response.status == 201){
            return result;
        }        
    } catch (error) {
        return undefined;
    }
}

export const UpdateImage = async (data: any): Promise<any> => {
    if (ENV_DEMO){
        return 0;
    }
    const url = `${BASE_URL}`;    
    const JwtToken = localStorage.getItem("token")?.replace(/['"]+/g, '');
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

export const DeleteImage = async (seccionId: number): Promise<any> => {
    if (ENV_DEMO){
        return 0;
    }
    const url = `${BASE_URL}/${seccionId}`;    
    const JwtToken = localStorage.getItem("token")?.replace(/['"]+/g, '');
    let result;
    try {
        const response = await fetch(url, {
            method: "DELETE",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${JwtToken}`
            },
            body: JSON.stringify(seccionId) 
        })        
        
        if(response.status == 401){
            UnauthorizedLogout();
        }
        
        if (!response.ok){
            throw new Error(response.statusText);        
        }   
        
        if(response.ok && response.status == 201){
            return response;
        }     
    } catch (error) {
        return undefined;
    }    
}