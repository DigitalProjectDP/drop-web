import { enviroment } from "../interfaces/enviroment";
import { Imagen } from "../interfaces/imagen";
import { MockBlogs } from "../mocks/blogs";
import { MockModelos } from "../mocks/modelos";

const BASE_URL: string = enviroment.urlBase() + "api/Admin";
const ENV_DEMO: boolean = enviroment.demo();

export const GetAllBlogs = async (): Promise<Imagen[]> => {
    if (ENV_DEMO){
        return MockBlogs;        
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
        const data: Imagen[] = await response.json();
        return data;
    } catch (error) {
        return [];
    }
    
}

export const GetBlogById = async (id?: number): Promise<Imagen | undefined> => {
    if (ENV_DEMO){
        return MockBlogs.find(o => o.id == id);
    }
    const url = `${BASE_URL}/${id}`;    
    const response = await fetch(url);
    try {
        if (!response.ok){
            throw new Error(response.statusText);        
        }
        const data: Imagen = await response.json();
        return data;        
    } catch (error) {
        return undefined;
    }
}