import { useState , useEffect ,Fragment } from "react";
import { getAllSimiliarService } from "../../../apiService/MovieService";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Scrollbar, A11y } from 'swiper';
import tmpImg from '../../../assets/image/netflix-temp-img.png'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { apiImgPath } from "../../../utils/publicPath";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
SwiperCore.use([Navigation, Scrollbar, A11y]);

function MovieSlider({data}) {
    const [movie,setMovie] = useState();
    useEffect(()=>{
        const getAPIMovie = async() =>{
            const response = await getAllSimiliarService(data);
            setMovie(response);
        }
        getAPIMovie();
    },[data])
     
    console.log(movie);

    const RenderMovie = () =>{
        return (
            <Swiper
                breakpoints={{
                    375: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    500: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    },
                    700: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    },
                }}
                spaceBetween={50}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                className="mx-5 mb-3 block lg:hidden"
            >
                {movie.map((movie, index) => {
                    return (
                        <SwiperSlide key={index} >
                            <div className="w-[100px] st:w-[120px] md:w-[160px]">
                                <a href={`http://localhost:3000/movie/id=${movie.id}`} 
                                className="inline-block h-[150px]  w-full st:h-[170px] md:h-[210px]">
                                    {
                                        <img
                                        src={movie.poster_path?apiImgPath + movie.poster_path:tmpImg}
                                        className="w-full h-full rounded-2xl"
                                        alt="movie poster"
                                        />
                                        ||
                                        <Skeleton />
                                    }
                                </a>
                                <p className=" text-white opacity-60 mb-4 text-center text-[14px]">{movie.title}</p>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        )
    }

    return ( 
        <div>
            {movie?RenderMovie():<Fragment></Fragment>}
        </div>
    );
}

export default MovieSlider;