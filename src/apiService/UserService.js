import {
    postDataRequest,
    getDataRequest
} from '../utils/ApiRequest';

export const loginService = async (user) => {
    try{
        const path = `accounts/login`;
        const response = await postDataRequest(path,user);
        return response;
    }
    catch(e){
        console.log(e);
    }
    
};

export const isUserExist = async (user) => {
    try{
        const path = `accounts/checkUser`;
        const response = await postDataRequest(path,user);
        return response;
    }
    catch(e){
        console.log(e);
    }
    
};

export const updateUsernameService = async (user) =>{
    try{
        const path = `accounts/updateUsername`;
        const response = await postDataRequest(path,user);
        return response;
    }
    catch(e){
        console.log(e);
    }
    
}

export const updatePasswordService = async (user) =>{
    try{
        const path = `accounts/updatePassword`;
        const response = await postDataRequest(path,user);
        return response;
    }
    catch(e){
        console.log(e);
    }
    
}

export const updateEmaileService = async (user) =>{
    try{
        const path = `accounts/updateEmail`;
        const response = await postDataRequest(path,user);
        return response;
    }
    catch(e){
        console.log(e);
    }
    
}

export const updatePhoneService = async (user) =>{
    try{
        const path = `accounts/updatePhone`;
        const response = await postDataRequest(path,user);
        return response;
    }
    catch(e){
        console.log(e);
    }
    
}

export const registerService = async (user) => {
    try{
        const path = `accounts/register`;
        const response = await postDataRequest(path,user);
        return response;
    }
    catch(e){
        console.log(e);
    }
    
};

export const getUserByIDService = async (id) => {
    try{
        const path = `accounts/${id}`
        const response = await getDataRequest(path);
        return response;
    }
    catch(e){
        console.log(e);
    }
    
}

export const getUserService = async () => {
    try{
        const path = `accounts`
        const response = await getDataRequest(path);
        return response;
    }
    catch(e){
        console.log(e);
    }
    
}

export const deleteUserService = async(id) =>{
    try{
        const path = `/accounts/delete/${id}`
        const response = await postDataRequest(path);
        return response;
    }
    catch(e){
        console.log(e);
    }  
}

export const updateUserService = async(user) =>{
    try{
        const path = `/accounts/updateUser`
        const response = await postDataRequest(path,user);
        return response;
    }
    catch(e){
        console.log(e)
    }
    
}

export const insertUserService = async(user) =>{
    try{
        const path = `accounts/insertAccounts`
        const response = await postDataRequest(path,user);
        return response;
    }
    catch(e){
        console.log(e);
    }
}