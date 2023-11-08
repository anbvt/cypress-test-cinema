import {fetchAPI} from "./axios";

const findShowtimeByMovieAndDate = async (showdate: any, movieId: any, page: any) => {
    return (await fetchAPI.get("/showtime/getShowTimeByDate", { params: { showdate: showdate, movieId: movieId, page: page } })).data as showtime[];
}

const findById = async (id:any) =>{
    return (await fetchAPI.get("/showtime/"+id)).data;
}

export const showtimeAPI = {
    findShowtimeByMovieAndDate,
    findById
}