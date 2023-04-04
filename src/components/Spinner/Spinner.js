import { BeatLoader } from "react-spinners"

function Spinner() {
    return ( 
        <div className="h-[100vh] z-3 flex justify-center items-center absolute top-0 bottom-0 right-0 left-0 bg-black">
            <div>
                <BeatLoader size={50} color={"#ff3300"} className=""/>
                <h1 className="text-white text-center text-2xl mt-4">Loading ...</h1>
            </div>
        </div>
     );
}

export default Spinner;