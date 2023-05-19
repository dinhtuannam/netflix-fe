import './HomeContent.css';
import { useEffect, useState } from 'react';
import { getNowPlayingService, getTopRatedService, getUpcomingService } from '../../apiService/MovieService';
import ContentSlider from '../Slider/HomeSlider/ContentSlider.js';
import { Link } from 'react-router-dom';
import HomeLoading from './HomeLoading';
function HomeContent() {
    const [nowPlaying, setNowPlaying] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getMovie = async () => {
            setLoading(true);
            const [response1, response2, response3] = await Promise.all([
                getNowPlayingService('1'),
                getTopRatedService('1'),
                getUpcomingService('1'),
            ]);
            setNowPlaying(response1);
            setTopRated(response2);
            setUpcoming(response3);
            setTimeout(() => {
                setLoading(false);
            }, 500);
        };

        getMovie();
    }, []);

    return (
        <div className="home-content-container px-[16px] lg:px-[40px] max-w-[1156px]">
            <div className="content-paragraph lg:w-[50%] w-full">
                <h1 className="content-intro lg:pt-10 lg:text-[48px] lg:mb-3 text-3xl">Movies</h1>
                <p className="content-des text-[16px] lg:text-[18px]">
                    Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere
                    in-between. So many titles, so much to experience.
                </p>
            </div>
            {loading ? (
                <HomeLoading title={'Now Playing'} />
            ) : (
                <div className="content-slider lg:mb-[60px] md:mb-[50px]">
                    <div className="flex justify-between items-center">
                        <p className="content-slider-name ">Now Playing</p>
                        <Link to="/movie/category=now_playing&page=1" className="content-slider-explore">
                            Explore more
                        </Link>
                    </div>
                    <ContentSlider data={nowPlaying}></ContentSlider>
                </div>
            )}
            {loading ? (
                <HomeLoading title={'Top Rated'} />
            ) : (
                <div className="content-slider lg:mb-[60px] md:mb-[50px]">
                    <div className="flex justify-between items-center">
                        <p className="content-slider-name">Top Rated</p>
                        <Link to="/movie/category=top_rated&page=1" className="content-slider-explore">
                            Explore more
                        </Link>
                    </div>
                    <ContentSlider data={topRated}></ContentSlider>
                </div>
            )}
            {loading ? (
                <HomeLoading title={'Upcoming'} />
            ) : (
                <div className="content-slider lg:mb-[60px] md:mb-[50px]">
                    <div className="flex justify-between items-center">
                        <p className="content-slider-name">Upcoming</p>
                        <Link to="/movie/category=upcoming&page=1" className="content-slider-explore">
                            Explore more
                        </Link>
                    </div>
                    <ContentSlider data={upcoming}></ContentSlider>
                </div>
            )}
        </div>
    );
}

export default HomeContent;
