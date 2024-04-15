import axios from "axios";
export async function send_request(method:string = "get", url:string, data:any = null, accessToken:any = null){
    let settings:any = { 
        method,
        url,
    };

    if(data){
        settings.data = data;    
    }

    if(accessToken){
        settings.headers = {
            Authorization: `Bearer ${accessToken}`
        }
    }
    
    return await axios(settings);
}