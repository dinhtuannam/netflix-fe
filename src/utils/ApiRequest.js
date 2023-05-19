import axios from 'axios';

export const apiKey = '528eea1629968b3d0a5dba66ef8c4c5b';

export const tmdbRequest = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/',
});

export const restApiRequest = axios.create({
    baseURL: 'https://netflix-be.onrender.com/api/v1/',
});

export const postDataRequest = async (path, option = {}) => {
    try {
        const response = await restApiRequest.post(path, option);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export const getDataRequest = async (path, option = {}) => {
    try {
        const response = await restApiRequest.get(path, option);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export const delDataRequest = async (path, option = {}) => {
    try {
        const response = await restApiRequest.delete(path, option);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export const getNowPlayingMovie = async (path, option = {}) => {
    try {
        const response = await tmdbRequest.get(path, option);
        return response.data.results;
    } catch (e) {
        console.log(e);
    }
};

export const getTopRatedMovie = async (path, option = {}) => {
    try {
        const response = await tmdbRequest.get(path, option);
        return response.data.results;
    } catch (e) {
        console.log(e);
    }
};

export const getUpcomingMovie = async (path, option = {}) => {
    try {
        const response = await tmdbRequest.get(path, option);
        return response.data.results;
    } catch (e) {
        console.log(e);
    }
};

export const getDetailMovie = async (path, option = {}) => {
    try {
        const response = await tmdbRequest.get(path, option);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export const getCasterMovie = async (path, option = {}) => {
    try {
        const response = await tmdbRequest.get(path, option);
        return response.data.cast.slice(0, 8);
    } catch (e) {
        console.log(e);
    }
};

export const getTrailer = async (path, option = {}) => {
    try {
        const response = await tmdbRequest.get(path, option);
        return response.data.results[0];
    } catch (e) {
        console.log(e);
    }
};

export const getSimiliar = async (path, option = {}) => {
    try {
        const response = await tmdbRequest.get(path, option);
        return response.data.results.slice(0, 4);
    } catch (e) {
        console.log(e);
    }
};

export const getAllSimiliar = async (path, option = {}) => {
    try {
        const response = await tmdbRequest.get(path, option);
        return response.data.results;
    } catch (e) {
        console.log(e);
    }
};
