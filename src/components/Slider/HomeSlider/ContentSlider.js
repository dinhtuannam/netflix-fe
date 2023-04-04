import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Scrollbar, A11y } from 'swiper';
//import { Link } from 'react-router-dom';
import './ContentSlider.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { apiImgPath } from '../../../utils/publicPath';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
SwiperCore.use([Navigation, Scrollbar, A11y]);

function ContentSlider({ data }) {

    return (
        <div>
            <Swiper
                breakpoints={{
                    375: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 50
                    },
                }}
                spaceBetween={50}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                {data.map((movie, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="content-movie-item ">
                                <a href={`http://localhost:3000/movie/id=${movie.id}`} >
                                    <div className="lg:h-[350.25px] lg:w-[223.5px] sm:h-[156.500px] sm:w-[104.333px] st:h-[269px] st:w-[180px]">
                                        <LazyLoadImage
                                            effect='blur'
                                            src={apiImgPath + movie.poster_path}
                                            className="content-poster-img"
                                            alt="movie poster"
                                        />
                                    </div>
                                </a>
                                <p className="content-poster-title text-[12px] lg:text-[18px]">{movie.title}</p>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default ContentSlider;
