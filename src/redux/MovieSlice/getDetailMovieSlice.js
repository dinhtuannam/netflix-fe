import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "getDetailMovie",
    initialState:{
        detailMovie:{
            isLoading : false,
            data : null
        }
    },
    reducers:{
        getDetailMovieStart:(state)=>{
            state.detailMovie.isLoading=true
        },
        getDetailMovieSuccess:(state,action)=>{
            state.detailMovie.data = action.payload;     
            state.detailMovie.isLoading = false;      
        },
    }
})

export const {
    getDetailMovieStart,
    getDetailMovieSuccess,
} = authSlice.actions

export default authSlice.reducer