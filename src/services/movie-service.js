// src/services/movieService.js
import api from "./api";
import { MOVİE_CREATE_API } from "@/helpers/api-routes";



export const createMovies = (payload) => {
    return fetch(MOVİE_CREATE_API,{
        method: 'POST',
        headers: {
            "Content-Type" : "application/json"
        },
        body:JSON.stringify(payload),
    });
}
