import { getPlaylistService } from "../../../apiService/PlaylistService";
import { useState,useEffect } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import './Playlist.css'
import { deletePlaylistService } from "../../../apiService/PlaylistService";
import {AiOutlineMenuFold,AiFillStar} from "react-icons/ai"
import Sidebar from "../Sidebar/Sidebar";
function Playlist() {
    const [playlist,setPlaylist] = useState([])
    const [show,setShow] = useState(false);
    const userID = JSON.parse(sessionStorage.user).id

    useEffect(()=>{
        const fetchAPI = async() =>{
            const res = await getPlaylistService(userID)
            setPlaylist(res.dataPlaylist)
        }
        fetchAPI()
    },[userID])

    const deletePlaylist = async(idMovie) =>{
        const object = {
            ID_User: userID,
            ID_Movie:idMovie
        }
        const res = await deletePlaylistService(object)
        if(res.result)
            handleDelete(idMovie)
    }

    const handleDelete = (idMovie) =>{
        const newPlaylist = playlist.filter(item => item.ID_Movie !== idMovie)
        setPlaylist(newPlaylist)
    }

    const handleSidebar = () =>{
        setShow(false);
    }

    return ( 
        <Fragment>
            {show && <Sidebar onShow={handleSidebar}/>}
            <div className="setting-content-info-container">
                <div className="flex justify-between items-center">
                    <p className="setting-content-info-title">Playlist</p>
                    <AiOutlineMenuFold onClick={()=>setShow(true)} className="text-white text-2xl cursor-pointer md:hidden"/>
                </div>
                <ul className="setting-playlist-container">
                    {playlist.map((item,index)=>{
                        return (
                            <li className="setting-playlist-item" key={item.ID_Movie}>
                                <div className="setting-playlist-img">
                                    <img src={item.img} className="playlist-item-img" alt="img"></img>
                                </div>
                                <div className="setting-playlist-info">
                                    <div>
                                        <h2 className="setting-playlist-title">{item.movieName}</h2>
                                        <p className="setting-playlist-date">Date: {item.date.split("T")[0]}</p>
                                        <div className="flex items-center">
                                            <p className="setting-playlist-rating mr-1 !mb-0">Rating: {item.rating}</p>
                                            <AiFillStar className="text-red-600"/>
                                        </div>
                                    </div>
                                    <div className="playlist-btn-container">
                                        <Link to={`/watch/id=${item.ID_Movie}`}><button className="setting-playlist-btnWatch">Watch Now</button></Link>
                                        <button className="setting-playlist-btnDel" onClick={()=>deletePlaylist(item.ID_Movie)}>Delete</button>
                                    </div>
                                </div>
                            </li>
                    )
                    })}
                </ul>
            </div> 
        </Fragment>
    );
}

export default Playlist;