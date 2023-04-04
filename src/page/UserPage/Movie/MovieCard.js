import { apiImgPath } from "../../../utils/publicPath";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
function MovieCard({data}) {
    return ( 
        <div className="w-1/2 px-1 py-1 my-3 basis-1/3 lg:px-2 md:basis-1/4 lg:basis-1/5">
            <div className="lg:min-h-[301.9px] min-h-[154.66px]">
                <Link to={`/movie/id=${data.id}`} >
                    <LazyLoadImage
                        effect="blur"
                        src={apiImgPath + data.poster_path} 
                        alt="movie img" 
                        className="lg:min-h-[301.9px] st:min-h-[266.98px] min-h-[180.979px] w-full"
                    />
                </Link>
            </div>
            <div className="w-full text-center mt-2 max-w-[192px] text-[12px] st:text-[14px] md:text-[16px]">
                <p>{data.title}</p>
            </div>
        </div>
    );
}

export default MovieCard;