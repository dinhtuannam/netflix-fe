import {AiFillStar} from 'react-icons/ai'
import { memo } from 'react';
function FilmItems({item,index,onChangeFilm,nowPlaying}) {
    return ( 
        <div key={index} className="flex mb-4 hover:bg-[#212121] py-2">
            <div>
                <img src={item.img} className="w-[110px] h-[165px] ml-2" alt='img'/>
            </div>
            <div className='ml-2 w-[62%] flex flex-col justify-between'>
                <p className='tracking-wider text-xl font-semibold'>{item.movieName}</p>
                <div className=' w-full h-[110px] relative'>
                    <p className=''>Date: {item.date.split("T")[0]}</p>
                    <div className="flex items-center mt-3">
                        <p className="setting-playlist-rating mr-1 !mb-0">Rating: {item.rating}</p>
                        <AiFillStar className="text-red-600"/>
                    </div>
                    {
                        nowPlaying === item.ID_Movie?
                        <p className='absolute bottom-0 border border-white uppercase px-2 rounded leading-[30px]'>Now Playing</p>
                        :
                        <button onClick={()=>onChangeFilm(item)} className='absolute bottom-0 bg-red-600 uppercase px-2 rounded leading-[30px]'>Play now</button>
                    }
                </div>
            </div>
        </div>  
     );
}

export default memo(FilmItems);