import { useEffect, useState } from "react";
import { Link , useParams , useNavigate} from "react-router-dom";
import {AiOutlineSearch} from "react-icons/ai"
import MovieCard from "../Movie/MovieCard";
import { searchMovieByQuery } from "../../../apiService/MovieService";
function SearchPage() {
    const [search,setSearch] = useState(useParams().query)
    const [movie,setMovie] = useState([])
    const query= useParams().query
    const page = parseInt(useParams().page) 
    const navigate = useNavigate()

    useEffect(()=>{
        const fetchAPI = async() =>{
            const res = await searchMovieByQuery(query,page)
            setMovie(res.results)
        }
        fetchAPI()
    },[query,page])

    const handleKeyDown = (event) => {
        if(search === "")
            return
        else if (event.keyCode === 13) {
            navigate(`/search/query=${search}&page=1`)
        }
    };
    

    return ( 
        <>
            <div className='h-[70px] w-full bg-black'></div>
            <div className=' text-white lg:px-[40px] px-[16px] min-h-screen bg-[#181818]'>
                <div className='mt-5 flex flex-col justify-between items-center lg:flex-row'>
                    <div className=''>
                        <Link to="/">
                            <span className='mr-2 uppercase text-2xl text-[#375e85] cursor-pointer font-bold'>
                                Home
                            </span>
                        </Link>
                        <span className='mr-2 uppercase text-2xl opacity-70'>/</span>
                        <span className='mr-2 uppercase text-2xl font-bold opacity-70'>Search</span>
                    </div>
                    <div className='mt-4 lg:mt-0'>
                        <div className='border border-white rounded-lg h-8 flex justify-center items-center w-[308px] lg:w-full'>
                            <input 
                                type="text" 
                                value={search}
                                onKeyDown={handleKeyDown}
                                onChange={e=>setSearch(e.target.value)}
                                className='bg-transparent lg:max-w-[210px] px-1 h-full focus:outline-none w-full'
                            />
                            <AiOutlineSearch 
                                className='inline-block cursor-pointer text-xl mr-1 font-bold'
                                onClick={()=>navigate(`/search/query=${search}&page=1`)}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex flex-wrap w-full'>
                        {movie.map((item,index)=>{
                            return (
                                <MovieCard data={item} key={item.id}/>
                            )
                        })}
                    </div>
                </div>
                <div className='flex justify-center my-6'>
                    <Link to={`/search/query=${query}&page=${page-1}`}>
                        <button className='movie-button-page'>
                            Previous
                        </button>
                    </Link>
                    <span className='px-10 text-xl font-bold cursor-pointer tracking-wider'>{page}</span>
                    <Link to={`/search/query=${query}&page=${page+1}`}>
                        <button className='movie-button-page'>
                            Next
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default SearchPage;