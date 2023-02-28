import {
    postDataRequest,
    getDataRequest,
    // delDataRequest
} from '../utils/ApiRequest';

export const addPlaylistService = async (playlist) => {
    try{
        const path = `playlists/addPlaylist`;
        const response = await postDataRequest(path,playlist);
        return response;
    }
    catch(e){
        console.log(e);
    }
    
};

export const getPlaylistService = async (id) => {
    try{
        const path = `playlists/getPlaylist/${id}`;
        const response = await getDataRequest(path);
        return response;
    }
    catch(e){
        console.log(e);
    }
    
};

export const deletePlaylistService = async (playlist) => {
    try{
        const path = `playlists/delPlaylist`;
        const response = await postDataRequest(path,playlist);
        return response;
    }
    catch(e){
        console.log(e);
    }
    
};

