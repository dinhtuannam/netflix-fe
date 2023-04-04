import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function HomeLoading({title}) {
    return ( 
        <>
            <p className="content-slider-name ">Now Playing</p>
            <div className='flex justify-between'>
                <Skeleton height={330} width={220} className="inline-block"/>
                <Skeleton height={330} width={220} className="inline-block"/>
                <Skeleton height={330} width={220} className="inline-block"/>
                <Skeleton height={330} width={220} className="inline-block"/>
            </div>
        </>
     );
}

export default HomeLoading;