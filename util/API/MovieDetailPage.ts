import {fetchAPI} from "./axios";

const findMovieDetailPage = async (id: String) => {
    return (await fetchAPI.get(`/movie/getDetail?id=${id}`)).data as movieDetailPage;
}

export const movieDetailPageAPI = {
    findMovieDetailPage
}