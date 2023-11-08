import {fetchAPI} from "./axios";

const findAll = async() =>{
    return (await fetchAPI.get("/movieType")).data as Array<movieType>;
}
const findById = async(id:String) =>{
    return (await fetchAPI.get(`/movieType/${id}`)).data as movieType;
}


export const movieTypeAPI = {
    findAll,
    findById
}