import { REGISTER_API } from "@/helpers/api-routes";


export const createRegister = (payload) => {
    return fetch(REGISTER_API,{
        method: 'POST',
        headers: {
            "Content-Type" : "application/json"
        },
        body:JSON.stringify(payload),
    });
}