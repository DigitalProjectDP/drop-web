import { enviroment } from "../interfaces/enviroment";
import { InstagramPost } from "../interfaces/instagramPost";
import { MockInstagramPosts } from "../mocks/instagramPosts";

const ENV_DEMO: boolean = enviroment.demo();
const BASE_URL: string = "https://graph.instagram.com/";
//const USER_ID: string = "25009521585305506";
const USER_ID: string = "17841450550013988";
const ACCESS_TOKEN: string = "IGAAH756DZBT5BBZAFEtSHZAVRGZADUUNCM1VObXhOUXE4ZAkRObWxVd2t5ZAnB6V1NYQUVaMXdpT0Fyb3IxZAjFxTU9UTUU1N0tQOENUZAWtWWXFtSlV6cXpJR0M1MW5pQzVpV1B1MXF5eG9XXzdQNG16Y1lzS19oMDF6bGdmQ0drU0J2TQZDZD";

interface InstagramJSON{
    data: any;
    pagin: any;
}

export const GetAllInstagramPosts = async (): Promise<InstagramPost[]> => {
    // if (ENV_DEMO){
    //     return MockInstagramPosts;        
    // }
    const url = `${BASE_URL}${USER_ID}/media?access_token=${ACCESS_TOKEN}&fields=media_url,permalink,media_type`;
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