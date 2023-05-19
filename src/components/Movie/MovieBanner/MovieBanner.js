import { apiImgPath, apiBannerPath } from '../../../utils/publicPath';
import './MovieBanner.css';
import { Link, useNavigate } from 'react-router-dom';
import { addPlaylistService } from '../../../apiService/PlaylistService';
import { successToast, errorToast } from '../../Toast/Toast';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MovieBanner({ data }) {
    const navigate = useNavigate();
    const path = apiBannerPath + data.backdrop_path;
    const myStyle = { backgroundImage: `url(${path})` };
    const user = sessionStorage.user ? JSON.parse(sessionStorage.user) : null;

    console.log(user);
    const Time = () => {
        const hour = Math.floor(data.runtime / 60);
        const minutes = data.runtime % 60;
        return `${hour} hour ${minutes} minutes`;
    };

    const handleAddPlaylist = async () => {
        if (user == null) navigate('/login');
        else {
            const playlist = {
                ID_User: user.Id,
                ID_Movie: data.id,
                movieName: data.title,
                img: apiImgPath + data.poster_path,
                date: data.release_date,
                rating: data.vote_average,
            };
            const res = await addPlaylistService(playlist);
            if (res.result) successToast(res.message);
            else errorToast(res.message);
        }
    };

    return (
        <div className="movie-banner-container">
            <ToastContainer />
            <div className="movie-banner bg-center h-[60vh] st:h-[80vh] md:h-[700px]" style={myStyle}>
                <div className="banner-info-container px-4 pt-[118px] md:px-10 md:pt-[150px]">
                    <div className="detail-poster w-[112px] st:w-[300px] ">
                        <img className="poster mt-[10px] md:mt-0" src={apiImgPath + data.poster_path} alt="poster" />
                        <div className="banner-genres-container flex flex-col !mt-2 st:hidden">
                            {data.genres.map((item, index) => {
                                return (
                                    <span key={item.id} className="banner-genres-item mb-2 !mr-0 text-center">
                                        {item.name}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                    <div className="detail-info ml-3 md:ml-20">
                        <h1 className="banner-info-title mb-[10px] text-[28px] md:mb-5 md:text-[42px]">{data.title}</h1>
                        <p className="banner-overview tracking-tight text-[16px] md:tracking-[.2px] md:text-[18px] ">
                            {data.overview}
                        </p>
                        <p className="banner-time hidden md:block">Time : {Time()}</p>
                        <p className="banner-releasedate hidden md:block">Release date : {data.release_date}</p>
                        <div className="banner-genres-container hidden st:block">
                            {data.genres.map((item, index) => {
                                return (
                                    <span key={item.id} className="banner-genres-item">
                                        {item.name}
                                    </span>
                                );
                            })}
                        </div>
                        <div className="banner-btn hidden st:block">
                            <Link to={`/watch/id=${data.id}`} className="watch-span">
                                Watch now
                            </Link>
                            <span className="addplaylist-span " onClick={handleAddPlaylist}>
                                Add to playlists
                            </span>
                        </div>
                        <div className="banner-btn st:hidden !mt-7">
                            <Link to={`/watch/id=${data.id}`} className="watch-span !mr-2 !px-[8px]">
                                Watch
                            </Link>
                            <span className="addplaylist-span !px-[6px] " onClick={handleAddPlaylist}>
                                Add playlists
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieBanner;
