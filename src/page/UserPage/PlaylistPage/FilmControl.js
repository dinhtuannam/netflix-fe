import {BsExclamationCircle} from 'react-icons/bs'
import {FaDatabase} from 'react-icons/fa'
import {AiOutlineCloudDownload,AiFillStar} from 'react-icons/ai';
import { memo } from 'react';

function FilmControl({playing}) {
    return ( 
        <div className='w-[100%] lg:w-[68%] mt-[16px] px-[20px] lg:pl-[40px]'>
            <div className='watch-control py-2 hidden lg:flex lg:flex-row md:flex md:flex-row'>
                <div className='watch-server'>
                    <FaDatabase className='inline-block'/>
                    <p>Server</p>
                    <button className='server-1'>#1 GR</button>
                    <button className='server-2'>#2 HR</button>
                </div>
                <div className='watch-download flex justify-center items-center'>
                     <div className='watch-download-btn'>
                        <div className='flex justify-center items-center'>
                            <AiOutlineCloudDownload className='download-icon inline-block'/>
                            Download
                        </div>
                    </div>
                    <div className='watch-download-btn'>
                        <div className='flex justify-center items-center'>
                            <BsExclamationCircle className='download-icon inline-block'/>
                            Report
                        </div>
                    </div>
                </div>
            </div>
            <iframe
                    id="iframe"
                    src={`https://www.2embed.to/embed/tmdb/movie?id=${playing.ID_Movie}`}
                    className="w-full lg:h-[380px] md:h-[360px] h-[200px]"
                    title="iframe"
                    allowFullScreen
            ></iframe>
            
            <div className='watch-movie-info h-[126px] lg:h-[164px]'>
                <div className='info-container relative h-full'>
                    <h1 className='watch-movie-title text-lg font-semibold mb-3 lg:mb-6 lg:text-2xl'>{playing.movieName}</h1>
                    <p className='text-base mb-1 lg:mb-2'>Date: {playing.date.split("T")[0]}</p>
                    <div className='bottom-2 absolute flex justify-start items-center'>
                        <p className='watch-movie-rate text-lg lg:text-xl'>Vote rate : {playing.rating}</p>
                        <AiFillStar className='watch-movie-icon'/>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default memo(FilmControl);