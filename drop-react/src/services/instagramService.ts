import { enviroment } from "../interfaces/enviroment";
import { InstagramPost } from "../interfaces/instagramPost";
import { MockInstagramPosts } from "../mocks/instagramPosts";

const ENV_DEMO: boolean = enviroment.demo();
const BASE_URL: string = "https://graph.instagram.com/";
const USER_ID: string = "25009521585305506";
const ACCESS_TOKEN: string = "IGQWRPOVJzaDIzdExNWm15OVJPZAnI2OXRQSEhJbEFrbkdMNURobW8zSlJQZA0lCOGdOTVNSODJiRkhlYkRhWGhfX09EdVhCdDVKWENlMnY4UW5EaGxkekVvNHpWelRzSy1LcVd5U0hldERCZAEN2RUxGU3pMcXNNNTAZD";

interface InstagramJSON{
    data: any;
    pagin: any;
}

export const GetAllInstagramPosts = async (): Promise<InstagramPost[]> => {
    if (ENV_DEMO){
        return MockInstagramPosts;        
    }
    const url = `${BASE_URL}${USER_ID}/media?access_token=${ACCESS_TOKEN}&fields=media_url,permalink`;
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
        const data: InstagramJSON = await response.json();
        const posts: InstagramPost[] = data?.data;
        return posts;
    } catch (error) {
        return [];
    }    
}