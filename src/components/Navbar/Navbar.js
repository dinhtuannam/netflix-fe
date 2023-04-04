import NetflixLogo from '../../assets/image/netflix-img.png';
import './Navbar.css';
import { useScrollY } from '../../hooks/useScrollY';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Fragment } from 'react';
import {RiUser3Fill } from 'react-icons/ri'
import { useState , useEffect } from 'react';

function Navbar() {
    const [scrollY] = useScrollY();
    const value = sessionStorage.user ? JSON.parse(sessionStorage.user) : null
    const [user,setUser] = useState(value)
    const [show,setShow] = useState(false)

    useEffect(() => {
        const handleScrollY = () => {
            hideTippy();
        };

        window.addEventListener('scroll', handleScrollY);
        return () => {
            window.removeEventListener('scroll', handleScrollY);
        };
    }, [scrollY]);

    const hideTippy = () =>{
        setShow(false)
    }

    const handleLogout = () =>{
        sessionStorage.removeItem("user")
        setUser(null)
        window.location.reload();
    }

    return (
        <div
            className="Navigation lg:h-[80px] h-[60px] px-[16px] lg:px-[40px]"
            style={scrollY < 50 ? { background: 'transparent' } : { background: 'var(--color-background)' }}
        >
            <div className="navContainer">
                <div className="navbarLogo">
                    <Link to="/">
                        <img className="navbarImg" src={NetflixLogo} alt="Netflix logo" />
                    </Link>
                </div>
                    <div className='navbar-controller'>
                        {user ?
                        <Fragment>                                                  
                            <p className='navbar-username hidden md:block lg:block'>{user.username}</p>                                                
                            <Tippy 
                            interactive
                            onClickOutside={hideTippy}
                            visible={show}
                            render={(attrs) => (
                                <div className='tippy-option lg:mt-[10px] mt-[4px] ' tabIndex="-1" {...attrs} style={scrollY < 50 ? { marginTop: '-8px' , backgroundColor: 'transparent'} : {  }}>
                                    <ul className='tippy-list'>
                                        <li key="playlist" className={scrollY < 50 ? "tippy-item-1" : "tippy-item-2"}><Link to="/playlist">Playlist</Link></li>
                                        <li key="setting" className={scrollY < 50 ? "tippy-item-1" : "tippy-item-2"}><Link to="/setting/information">Setting</Link></li>
                                        <li key="logout" className={scrollY < 50 ? "tippy-item-1" : "tippy-item-2"} onClick={handleLogout}>Log out</li>
                                    </ul>
                                </div>)}> 
                                <div><RiUser3Fill className='userIcon' onClick={()=>setShow(!show)} /></div>
                            </Tippy>
                        </Fragment>
                        :
                        <Fragment>
                            <a href="http://localhost:3000/register" className='register-btn hidden lg:block md:block'>Register</a>
                            <a href="http://localhost:3000/login" className='login-btn'>Login</a>   
                        </Fragment> 
                        }
                    </div>
                
            </div>
        </div>
    );
}

export default Navbar

