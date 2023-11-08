import {fetchAPI} from "./axios";

const findAll = async () => {
    return (await fetchAPI.get("/home/getData")).data;
}
const searchMovie = async (params: MovieFilter) => {
    return (await fetchAPI.get("/home/search", { params: { country: params?.country, movieType: params?.movieType, branch: params?.branch, status: params?.status, name: params.name  } })).data
}
export const homeAPI = {
    findAll,
    searchMovie
}