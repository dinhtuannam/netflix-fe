import { Fragment, useEffect, useState } from 'react';
import { getCasterMovieService } from '../../../apiService/MovieService';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Scrollbar, A11y } from 'swiper';
import { apiImgPath } from '../../../utils/publicPath';
import casterImg from '../../../assets/image/actor-img.png'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './CasterSlider.css';
SwiperCore.use([Navigation, Scrollbar, A11y]);

function CasterSlider({ data }) {
    const [caster, setCaster] = useState();

    useEffect(() => {
        const getCaster = async () => {
            const response = await getCasterMovieService(data);
            setCaster(await response);
        };
        getCaster();
    }, [data]);

    const renderSlider = () => {
        return (
            <Fragment>
                <h1 className="cast-title text-3xl">Cast</h1>
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
                pagination={{ clickable: true }}>
                    {caster.map((person, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="caster-info">
                                    <div className="caster-img">
                                        <img
                                            src={person.profile_path?apiImgPath + person.profile_path:casterImg}
                                            className="w-full rounded-[32px] md:rounded-[50px] ease-linear duration-300"
                                            alt="casterimg"
                                        />
                                    </div>
                                    <p className="caster-name text-[14px] st:text-[16px] md:text-[20px]">{person.name}</p>
                                    <p className="caster-character text-[12px] st:text-[15px] md:text-[15px]">{person.character}</p>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </Fragment>
        );
    };

    return <div className="caster-slider-container">{caster && renderSlider()}</div>;
}

export default CasterSlider;
