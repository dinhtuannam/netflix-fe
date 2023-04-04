import './AdminNavbar.css'
import {AiOutlineMenu} from 'react-icons/ai'
import NetflixLogo from '../../../assets/image/netflix-img.png'
import useLogOut from '../../../hooks/useLogOut'
function AdminNavbar() {
    const logOut = useLogOut;
    return ( 
        <div className='text-white h-[60px] bg-navbar-dark fixed w-full z-100'>
            <div className='flex items-center h-full px-5 justify-between'>
                <div className='w-[100px]'>
                    <img src={NetflixLogo} alt="logo" className='w-[100%]'/>
                </div>
                <div className='flex items-center '>
                    <p className='navbar-username inline-block'>Admin</p>     
                    <span className='login-btn !py-[6px] lg:block hidden' onClick={logOut}>Logout</span>
                    <AiOutlineMenu className='lg:hidden block ml-3 cursor-pointer hover:text-red-600 text-xl ease-linear duration-150'/>  
                </div>
            </div>
        </div> 
    );
}

export default AdminNavbar;