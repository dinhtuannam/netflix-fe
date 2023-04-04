import { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import MovieBanner from '../../components/Movie/MovieBanner/MovieBanner';
import CasterSlider from '../../components/Slider/CasterSlider/CasterSlider';
import '../../assets/css/DetailMovie.css';
import Trailer from '../../components/Movie/Trailer/Trailer';
import { getDetailMovieRequest } from "../../redux/MovieSlice/MovieSliceRequest"
import { useDispatch , useSelector } from "react-redux"
import Spinner from '../../components/Spinner/Spinner';
function DetailMovie() {
    const { id } = useParams();
    const movie = useSelector(state=> state.detailMovie.detailMovie?.data)
    const isLoading = useSelector(state=> state.detailMovie.detailMovie?.isLoading)
    const dispatch = useDispatch();
    
    useEffect(() => {
        getDetailMovieRequest(id,dispatch)
    }, [id,dispatch]);

    return (
        <>
            {
            isLoading?
            <Spinner />
            :
            <div className="detail-movie-container" >
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
            }
        </>
    );
}

export default DetailMovie;
