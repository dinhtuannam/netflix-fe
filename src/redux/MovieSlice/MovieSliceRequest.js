import { getDetailMovieStart , getDetailMovieSuccess } from "./getDetailMovieSlice"
import { getDetailMovieService } from "../../apiService/MovieService";
export const getDetailMovieRequest = async(id,dispatch) =>{
    dispatch(getDetailMovieStart())
    try{
        const res = await getDetailMovieService(id);
        if(res){
            setTimeout(() => {
                dispatch(getDetailMovieSuccess(res))
            }, 1000);
        }
            
    }
    catch(e){
        console.log(e);
    }
}