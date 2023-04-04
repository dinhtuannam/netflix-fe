import NetflixLogin from '../../assets/image/login-img.png';
import NetflixLogo from '../../assets/image/netflix-img.png';
import './Login.css';
import { Link , useNavigate } from 'react-router-dom';
import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux'
import { loginUser } from '../../redux/apiRequest';

function Login() {
    const [username,setUserName] = useState('');
    const [userpass,setUserPass] = useState('');
    const [error,setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const HandleSubmit = (e) =>{
        e.preventDefault();
        if(!username){
            setError("User's name can not be required")
            return false;
        }
        if(!userpass){
            setError("User's password can not be required")
            return false;
        }
        const user = {
            username: username,
            password: userpass
        }
        loginUser(user,dispatch,navigate).then(result =>{
            setError(result === "username or password are not correct" ? result : '');
        })
        
    }

    return (
        <div className="login-container">
            <div className="login-wrapper-background">
                <div className="login-img-container">
                    <img className="Login-image" src={NetflixLogin} alt="netflix login" />
                </div>
                <div className="login-logo">
                    <Link to={'/'}>
                        <img className="netflix-logo" src={NetflixLogo} alt="netflix logo" />
                    </Link>
                </div>
                <div className="login-form-container">
                    <div className="Login-form">
                        <div className="form-container">
                            <p className="login-title">Sign In</p>
                            <form onSubmit={HandleSubmit}>
                                <div className="input-container">
                                    <label className="login-label-textfield">
                                        <input className="form-login-textfield" placeholder="Email or phone number" value={username} onChange={(e)=>setUserName(e.target.value)}/>
                                    </label>
                                </div>
                                <div className="input-container">
                                    <label className="login-label-textfield">
                                        <input className="form-login-textfield" placeholder="Password" value={userpass} onChange={(e)=>setUserPass(e.target.value)}/>
                                    </label>
                                </div>
                                {error?<p className='login-error'>{error}</p>:<Fragment></Fragment>}
                                <div className="submit-btn-container">
                                    <input className="form-login-submit-input !bg-[#e50914] hover:opacity-80 ease-in-out duration-200" type="submit" value="Sign In" />                                
                                </div>

                                <div className="login-des">
                                    <p className="login-des-text">New to Netfix? </p>
                                    <Link to="/register">Sign up now</Link>
                                </div>
                                <p className="login-footer-text">
                                    This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
