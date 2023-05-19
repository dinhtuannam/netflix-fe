import { useEffect, useState } from 'react';
// API
import { getPlaylistService } from '../../../apiService/PlaylistService';
// ICONS
import { BsFileLock2 } from 'react-icons/bs';
// COMPONENTS
import FilmItems from './FilmItems';
import FilmControl from './FilmControl';

function PlaylistPage() {
    const [playlist, setPlaylist] = useState([]);
    const [playing, setPlaying] = useState();
    const userID = JSON.parse(sessionStorage.user).Id;

    useEffect(() => {
        const getPlaylist = async () => {
            const res = await getPlaylistService(userID);
            setPlaylist(res.dataPlaylist);
            setPlaying(res.dataPlaylist[0]);
        };
        getPlaylist();
    }, [userID]);

    const handleChangeFilm = (item) => {
        if (playing === item) return;
        else setPlaying(item);
    };

    return (
        <div className="text-white mt-[80px] h-[70vh] st:h-[100vh] w-full flex lg:flex-row flex-col lg:mb-4">
            {playing && <FilmControl playing={playing} />}
            <div className=" w-[100%] lg:w-[32%] py-4">
                <div className="flex flex-col mx-4 h-full  border border-[rgba(255,255,255,0.2)] border-solid rounded-xl">
                    <div className="bg-[#212121] px-2 pt-2 rounded-t-xl hidden md:block">
                        <p className="font-semibold tracking-widest text-[18px]">Playlist</p>
                        <div className="flex items-center ">
                            <BsFileLock2 className="mr-1 opacity-70" />
                            <span className="text-sm opacity-70 mr-1">Private</span>
                            <span className="text-sm opacity-70"> - {playlist.length} films</span>
                        </div>
                    </div>
                    <div className="bg-transparent  overflow-y-scroll h-[200px] st:h-[400px] md:h-[400px] lg:h-[616px]">
                        {playlist.map((item, index) => (
                            <FilmItems
                                item={item}
                                index={index}
                                onChangeFilm={handleChangeFilm}
                                key={index}
                                nowPlaying={playing.ID_Movie}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlaylistPage;
