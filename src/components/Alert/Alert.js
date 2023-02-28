function Alert({onDialog}) {
    return ( 
        <div className="fixed top-0 bottom-0 right-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center" style={onDialog?{position:"fixed"}:{display:"none"}}>
            <div className="w-[360px] h-[140px] bg-[#1a1a1a] text-white px-4 py-4 mt-[-130px] md:mt-0">
                <p className="text-center uppercase text-xl font-bold tracking-widest mb-1">Confirm dialog</p>
                <p className="text-center mb-4">Are you sure ?</p>
                <div className="flex items-center justify-center">
                    <button className="mr-3 border-solid border-white border-[1.2px] px-2 hover:bg-red-600 hover:border-red-600 ease-in-out duration-300 "
                            onClick={()=>onDialog(false)}
                    >
                        Cancel
                    </button>
                    <button className="mr-3 bg-red-600 border-solid border-red-600 border-[1.2px] px-2 hover:bg-transparent hover:border-white ease-in-out duration-300"
                            onClick={()=>onDialog(true)}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Alert;