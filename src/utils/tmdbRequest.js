import axios from 'axios';

export const apiKey = '528eea1629968b3d0a5dba66ef8c4c5b';

export const tmdbRequest = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/',
});

export const tmdbSearchRequest = axios.create({
    baseURL: 'https://api.themoviedb.org/3/search/',
});

export const getTmdbDataRequest = async (path, option = {}) => {
    try{
        const response = await tmdbRequest.get(path, option);
        return response.data;
    }
    catch(e){
        console.log(e);
    }
};

export const searchTmdbRequest = async(path, option = {}) =>{
    try{
        const response = await tmdbSearchRequest.get(path, option);
        return response.data;
    }
    catch(e){
        console.log(e);
    }
}