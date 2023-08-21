import { useParams } from 'react-router-dom';
import { useState, useEffect, Fragment } from 'react';
import { getDetailMovieService } from '../../apiService/MovieService';
import { FaDatabase } from 'react-icons/fa';
import { AiOutlineCloudDownload, AiFillStar } from 'react-icons/ai';
import { BsExclamationCircle } from 'react-icons/bs';
import '../../assets/css/WatchPage.css';
import SimiliarMovie from '../../components/Movie/SimiliarMovie/SimiliarMovie';
import MovieSlider from '../../components/Slider/MovieSlider/MovieSlider';
import { getDetailMovieRequest } from '../../redux/MovieSlice/MovieSliceRequest';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
function WatchPage() {
    const { id } = useParams();
    const movie = useSelector((state) => state.detailMovie.detailMovie?.data);
    const isLoading = useSelector((state) => state.detailMovie.detailMovie?.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        getDetailMovieRequest(id, dispatch);
    }, [id]);

    const RenderContent = () => {
        return (
            <>
                {isLoading ? (
                    <Spinner />
                ) : (
                    <div className="watch-page-container">
                        <div className="navigation-spacing lg:h-[80px] h-[60px]"></div>
                        <div className="watch-content lg:px-[40px] px-[16px] justify-center items-center">
                            <div className="lg:mt-[-96px] lg:mr-4 lg:w-[64%] w-[100%] ease-linear duration-150">
                                <div className="watch-control py-2 hidden lg:flex lg:flex-row md:flex md:flex-row">
                                    <div className="watch-server">
                                        <FaDatabase className="inline-block" />
                                        <p>Server</p>
                                        <button className="server-1">#1 GR</button>
                                        <button className="server-2">#2 HR</button>
                                    </div>
                                    <div className="watch-download flex justify-center items-center">
                                        <div className="watch-download-btn">
                                            <div className="flex justify-center items-center">
                                                <AiOutlineCloudDownload className="download-icon inline-block" />
                                                Download
                                            </div>
                                        </div>
                                        <div className="watch-download-btn">
                                            <div className="flex justify-center items-center">
                                                <BsExclamationCircle className="download-icon inline-block" />
                                                Report
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <iframe
                                    id="iframe"
                                    src={`https://www.2embed.cc/embed/${id}`}
                                    className="w-full lg:h-[380px] md:h-[360px] h-[200px]"
                                    title="iframe"
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                                <div className="watch-movie-info">
                                    <div className="info-container">
                                        <h1 className="watch-movie-title">{movie.title}</h1>
                                        <div className="watch-rate-container flex justify-start items-center">
                                            <p className="watch-movie-rate">
                                                Vote rate : {movie.vote_average.toFixed(1)}
                                            </p>
                                            <AiFillStar className="watch-movie-icon" />
                                        </div>
                                        <p className="watch-overview-title">Overview</p>
                                        <p className="watch-movie-overview">{movie.overview}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="watch-similiar-film hidden lg:block">
                                <SimiliarMovie data={id} />
                            </div>
                        </div>
                        <div>
                            <MovieSlider data={id} />
                        </div>
                    </div>
                )}
            </>
        );
    };

    return <div>{movie ? RenderContent() : <Fragment></Fragment>}</div>;
}

export default WatchPage;
