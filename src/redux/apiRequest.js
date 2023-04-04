import { loginFailed, loginStart, loginSuccess } from "./authSlice";
import {loginService} from '../apiService/UserService'

export const loginUser = async(user,dispatch,navigate) =>{
    dispatch(loginStart());
    try {
        const res = await loginService(user)
        console.log(res);
        if(res.dataUser){
            dispatch(loginSuccess(res.dataUser))
            sessionStorage.setItem("user",JSON.stringify(res.dataUser))
            if(res.dataUser.role === "user")
                navigate("/");
            else if(res.dataUser.role === "admin")
                navigate("/admin");
        }
        else{
            return res.message
        }
        
    } catch (error) {
        dispatch(loginFailed());
    }
}
