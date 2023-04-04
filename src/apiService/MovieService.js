import {
    getNowPlayingMovie,
    getTopRatedMovie,
    getUpcomingMovie,
    apiKey,
    getDetailMovie,
    getCasterMovie,
    getTrailer,
    getSimiliar,
    getAllSimiliar
} from '../utils/ApiRequest';
import {
    getTmdbDataRequest,
    searchTmdbRequest
} from "../utils/tmdbRequest"

export const getMovieForMoviePage = async(cate,page) =>{
    try{
        const path = `${cate}?api_key=${apiKey}&language=en-US&page=${page}`
        const response = await getTmdbDataRequest(path);
        return response;
    }
    catch(e){
        console.log(e);
    } 
}

export const searchMovieByQuery = async(query,page) =>{
    try{
        const path = `movie?api_key=${apiKey}&language=en-US&query=${query}&page=${page}&include_adult=false`
        const response = await searchTmdbRequest(path);
        return response;
    }
    catch(e){
        console.log(e);
    } 
}

export const getNowPlayingService = async (page) => {
    const path = `/now_playing?api_key=${apiKey}&language=en-US&page=${page}`;
    const response = await getNowPlayingMovie(path);
    return response;
};

export const getTopRatedService = async (page) => {
    const path = `/top_rated?api_key=${apiKey}&language=en-US&page=${page}`;
    const response = await getTopRatedMovie(path);
    return response;
};

export const getUpcomingService = async (page) => {
    const path = `/upcoming?api_key=${apiKey}&language=en-US&page=${page}`;
    const response = await getUpcomingMovie(path);
    return response;
};

export const getDetailMovieService = async (id) => {
    try{
        const path = `${id}?api_key=${apiKey}&language=en-US`;
        const response = await getDetailMovie(path);
        return response;
    }
    catch(e){
        console.log(e);
    }
    
};

export const getCasterMovieService = async (id) => {
    try{
        const path = `${id}/credits?api_key=${apiKey}&language=en-US`;
        const response = await getCasterMovie(path);
        return response;
    }
    catch(e){
        console.log(e);
    }
    
};

export const getTrailerService = async (id) => {
    try{
        const path = `${id}/videos?api_key=${apiKey}&language=en-US`;
        const response = await getTrailer(path);
        return response;
    }
    catch(e){
        console.log(e);
    }
    
};

export const getSimiliarService = async (id) => {
    try{
        const path = `${id}/similar?api_key=${apiKey}&language=en-US`;
        const response = await getSimiliar(path);
        return response;
    }
    catch(e){
        console.log(e);
    }
    
};

export const getAllSimiliarService = async (id) => {
    try{
        const path = `${id}/similar?api_key=${apiKey}&language=en-US`;
        const response = await getAllSimiliar(path);
        return response;
    }
    catch(e){
        console.log(e);
    }
    
};
