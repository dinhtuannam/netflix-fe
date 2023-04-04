import {configureStore} from '@reduxjs/toolkit'
import authReducer from './authSlice'
import getDetailMovieSlice from './MovieSlice/getDetailMovieSlice'

export const store = configureStore({
    reducer:{
        auth: authReducer,
        detailMovie : getDetailMovieSlice
    }
})