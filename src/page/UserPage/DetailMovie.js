import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailMovieService } from '../../apiService/MovieService';
import MovieBanner from '../../components/Movie/MovieBanner/MovieBanner';
import CasterSlider from '../../components/Slider/CasterSlider/CasterSlider';
import '../../assets/css/DetailMovie.css';
import Trailer from '../../components/Movie/Trailer/Trailer';
function DetailMovie() {
    const { id } = useParams();
    const [movie, setMovie] = useState();

    useEffect(() => {
        const getMovie = async () => {
            const response = await getDetailMovieService(id);
            setMovie(await response);
        };
        getMovie();
    }, [id]);

    return (
        <div className="detail-movie-container">
            {movie && <MovieBanner data={movie} />}
            <div className="detail-movie-content px-[16px] lg:px-[40px]">
                <div className="movie-caster">
                    <CasterSlider data={id} />
                </div>
                <div className="movie-trailer-container">
                    <Trailer data={id} />
                </div>
            </div>
        </div>
    );
}

export default DetailMovie;
