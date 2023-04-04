import {HiUserCircle} from 'react-icons/hi'
import {RiDeleteBack2Line} from 'react-icons/ri'
import {BiPlayCircle , BiExit} from 'react-icons/bi'
import {Link} from 'react-router-dom';
import useLogOut from '../../../hooks/useLogOut';
import './Sidebar.css'
function Sidebar({onShow}) {
    return ( 
            <div  className="fixed top-0 bottom-0 right-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex justify-start z-30"  >
                <div className='animate-slideRight'>
                    <RiDeleteBack2Line onClick={()=>onShow()} className=" text-white absolute left-[160px] st:left-[230px] top-2 text-2xl cursor-pointer hover:text-red-600 ease-in-out duration-300"/>
                    <div className="w-[190px] h-[100vh] bg-[#232323] text-white px-4 py-4 st:w-[260px]">
                        <ul >
                            <li className="setting-controller-title ml-5 st:ml-10">Setting</li>
                            <Link to="/setting/information" >
                                <li className="sidebar-controller" onClick={()=>onShow()}>                       
                                    <HiUserCircle className="setting-controller-icon"/>
                                    Information                          
                                </li>
                            </Link>
                            <Link to="/setting/playlist" >
                                <li className="sidebar-controller" onClick={()=>onShow()}>                           
                                    <BiPlayCircle className="setting-controller-icon"/>
                                    Playlist                          
                                </li>
                            </Link>
                            <li className="sidebar-controller" onClick={useLogOut}>
                                <BiExit className="setting-controller-icon"/>
                                Log out
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='w-full z-40' onClick={()=>onShow()}></div>
            </div>
     );
}

export default Sidebar;