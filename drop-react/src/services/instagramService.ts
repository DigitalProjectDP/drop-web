import { enviroment } from "../interfaces/enviroment";
import { InstagramPost } from "../interfaces/instagramPost";
import { MockInstagramPosts } from "../mocks/instagramPosts";

const ENV_DEMO: boolean = enviroment.demo();
const BASE_URL: string = "https://graph.instagram.com/";

interface InstagramJSON {
    data: any;
    pagin: any;
}

export const GetInstagramUserId = async (): Promise<string> => {
    try {
        const response = await fetch("https://api.mayidev.com/ParametroConfiguracion/IG_USER_ID/5");
        if (!response.ok) {
            return "";
        }
        const data = await response.json();
        return data.valor;
    } catch (error) {
        return "";
    }
};

export const GetInstagramToken = async (): Promise<string> => {
    try {
        const response = await fetch("https://api.mayidev.com/ParametroConfiguracion/IG_TOKEN/5");
        if (!response.ok) {
            return "";
        }
        const data = await response.json();
        return data.valor;
    } catch (error) {
        return "";
    }
};

export const GetAllInstagramPosts = async (): Promise<InstagramPost[]> => {
    // if (ENV_DEMO){
    //     return MockInstagramPosts;        
    // }

    const accessToken = await GetInstagramToken();
    if (!accessToken) {
        return [];
    }

    const userId = await GetInstagramUserId();
    if (!userId) {
        return [];
    }

    const url = `${BASE_URL}${userId}/media?access_token=${accessToken}&fields=media_url,permalink,media_type`;
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data: InstagramJSON = await response.json();
        const posts: InstagramPost[] = data?.data;
        return posts;
    } catch (error) {
        return [];
    }
}