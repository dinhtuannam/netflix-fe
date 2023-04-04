import { Fragment, useEffect } from 'react';
import { useState } from 'react';
import { getTrailerService } from '../../../apiService/MovieService';
import './Trailer.css';
function Trailer({ data }) {
    const [trailer, setTrailer] = useState();
    useEffect(() => {
        const getTrailer = async () => {
            const response = await getTrailerService(data);
            setTrailer(await response);
        };
        getTrailer();
    }, [data]);

    const RenderTrailer = () => {
        return (
            <Fragment>
                <h1 className="trailer-title text-3xl">Trailer</h1>
                <div className="trailer-video items-center truncate h-0 pb-[56.25%] relative">
                    <iframe
                        width="853"
                        height="480"
                        className='w-full h-full absolute top-0 left-0'
                        src={`https://www.youtube.com/embed/${trailer.key}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    />   
                </div>
            </Fragment>
        );
    };

    return <div>{trailer && RenderTrailer()}</div>;
}

export default Trailer;
