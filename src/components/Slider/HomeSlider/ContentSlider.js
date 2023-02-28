import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Scrollbar, A11y } from 'swiper';
import { Link } from 'react-router-dom';
import './ContentSlider.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { apiImgPath } from '../../../utils/publicPath';
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
                        spaceBetween: 50,
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
                            <div className="content-movie-item">
                                <Link to={`/movie/id=${movie.id}`}>
                                    <img
                                        src={apiImgPath + movie.poster_path}
                                        className="content-poster-img"
                                        alt="movie poster"
                                    />
                                </Link>
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
