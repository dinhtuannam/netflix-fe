import { useEffect, useState } from 'react';
import { useParams , Link , useNavigate } from 'react-router-dom';
import { getMovieForMoviePage } from '../../../apiService/MovieService';
import {AiOutlineSearch} from "react-icons/ai"
import MovieCard from './MovieCard';
import "./Movie.css"
function Movie() {
    const [search,setSearch] = useState('')
    const [movie,setMovie] = useState([])  
    const category = useParams().category;
    const page = parseInt(useParams().page) 
    const navigate = useNavigate()

    const handleKeyDown = (event) => {
        if(search === "")
            return
        else if (event.keyCode === 13) {
            navigate(`/search/query=${search}&page=1`)
        }
    };

    useEffect(()=>{
        const fetchAPI = async() =>{
            const res = await getMovieForMoviePage(category,page)
            setMovie(res)
        }
        fetchAPI()
    },[category,page])

    return (
        <>
            <div className='h-[70px] w-full bg-black'></div>
            <div className=' text-white lg:px-[40px] px-[16px] min-h-screen bg-[#181818]'>
                <div className='mt-5 flex flex-col justify-between items-center lg:flex-row'>
                    <div className='lg:basis-2/8 mb-3 lg:mb-0'>
                        <Link to="/">
                            <span className='mr-2 uppercase text-2xl text-[#375e85] cursor-pointer font-bold'>
                                Home
                            </span>
                        </Link>
                        <span className='mr-2 uppercase text-2xl opacity-70'>/</span>
                        <span className='mr-2 uppercase text-2xl font-bold opacity-70'>Movies</span>
                    </div>
                    <div className='lg:basis-4/8 mb-3 lg:mb-0'>
                        <Link to={`/movie/category=now_playing&page=1`}>
                            <span className='movie-categories-item'>Now playing</span>
                        </Link>
                        <Link to={`/movie/category=top_rated&page=1`}>
                            <span className='movie-categories-item'>Top Rated</span>
                        </Link>
                        <Link to={`/movie/category=upcoming&page=1`}>
                            <span className='movie-categories-item'>Upcoming</span>
                        </Link>
                    </div>
                    <div className='lg:basis-2/8 mb-3 lg:mb-0'>
                        <div className='border border-white rounded-lg h-8 flex justify-center items-center w-[308px] lg:w-full'>
                            <input 
                                type="text" 
                                value={search}
                                onKeyDown={handleKeyDown}
                                onChange={e=>setSearch(e.target.value)}
                                className='bg-transparent lg:max-w-[210px] px-1 h-full focus:outline-none w-full'/>
                            <AiOutlineSearch 
                                className='inline-block cursor-pointer text-xl mr-1 font-bold'
                                onClick={()=>navigate(`/search/query=${search}&page=1`)}    
                            />
                        </div>
                        
                    </div>
                </div>
                <div className='min-h-screen'>
                    <div className='flex flex-wrap w-full'>
                        {movie.results?.map((item,index)=>{
                            return (
                                <MovieCard data={item} key={item.id}/>
                            )
                        })}
                    </div>
                </div>
                <div className='flex justify-center my-6'>
                    <Link to={`/movie/category=${category}&page=${page-1}`}>
                        <button className='movie-button-page'>
                            Previous
                        </button>
                    </Link>
                    <span className='md:px-10 px-4 text-xl font-bold cursor-pointer tracking-wider'>{page} / {movie.total_pages}</span>
                    <Link to={`/movie/category=${category}&page=${page+1}`}>
                        <button className='movie-button-page'>
                            Next
                        </button>
                    </Link>
                </div>
            </div>
        </>
        );
}

export default Movie;
