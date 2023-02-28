import './HomeContent.css';
import { useEffect, useState } from 'react';
import { getNowPlayingService, getTopRatedService, getUpcomingService } from '../../apiService/MovieService';
import ContentSlider from '../Slider/HomeSlider/ContentSlider.js';
import { Link } from 'react-router-dom';

function HomeContent() {
    const [nowPlaying, setNowPlaying] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [isShown, setIsShown] = useState(false);

    const MouseEnterEvent = () => {
        if (isShown) return false;
        else setIsShown(true);
    };

    const MouseLeaveEvent = () => {
        if (isShown === false) return false;
        else setIsShown(false);
    };

    useEffect(() => {
        const getMovie = async () => {
            const response1 = await getNowPlayingService('1');
            const response2 = await getTopRatedService('1');
            const response3 = await getUpcomingService('1');
            setNowPlaying(await response1);
            setTopRated(await response2);
            setUpcoming(await response3);
        };

        getMovie();
    }, []);

    return (
        <div className="home-content-container px-[16px] lg:px-[40px]">
            <div className="content-paragraph lg:w-[50%] w-full">
                <h1 className="content-intro lg:pt-10 lg:text-[48px] lg:mb-3 text-3xl">Movies</h1>
                <p className="content-des text-[16px] lg:text-[18px]">
                    Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere
                    in-between. So many titles, so much to experience.
                </p>
            </div>
            <div className="content-slider lg:mb-[60px] md:mb-[50px]">
                <div onMouseLeave={MouseLeaveEvent} onMouseEnter={MouseEnterEvent} style={{ display: 'inline-block' }}>
                    <p className="content-slider-name ">Now Playing</p>
                    <Link
                        to="/movie"
                        style={isShown ? { display: 'inline-block' } : { display: 'none' }}
                        className="content-slider-explore"
                    >
                        Explore more
                    </Link>
                </div>
                <ContentSlider data={nowPlaying}></ContentSlider>
            </div>
            <div className="content-slider lg:mb-[60px] md:mb-[50px]">
                <div onMouseLeave={MouseLeaveEvent} onMouseEnter={MouseEnterEvent} style={{ display: 'inline-block' }}>
                    <p className="content-slider-name">Top Rated</p>
                    <Link
                        to="/movie"
                        style={isShown ? { display: 'inline-block' } : { display: 'none' }}
                        className="content-slider-explore"
                    >
                        Explore more
                    </Link>
                </div>
                <ContentSlider data={topRated}></ContentSlider>
            </div>
            <div className="content-slider lg:mb-[60px] md:mb-[50px]">
                <div onMouseLeave={MouseLeaveEvent} onMouseEnter={MouseEnterEvent} style={{ display: 'inline-block' }}>
                    <p className="content-slider-name">Upcoming</p>
                    <Link
                        to="/movie"
                        style={isShown ? { display: 'inline-block' } : { display: 'none' }}
                        className="content-slider-explore"
                    >
                        Explore more
                    </Link>
                </div>
                <ContentSlider data={upcoming}></ContentSlider>
            </div>
        </div>
    );
}

export default HomeContent;
