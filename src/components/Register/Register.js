import './Register.css'
import NetflixLogin from '../../assets/image/login-img.png';
import NetflixLogo from '../../assets/image/netflix-img.png';
import { Link , useNavigate } from 'react-router-dom';
import { Fragment, useState , useRef } from 'react';
import { isUserExist ,registerService } from '../../apiService/UserService'

function Register() {
    const [username,setUserName] = useState('');
    const [userpass,setUserPass] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [error,setError] = useState('');
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const navigate = useNavigate();
    const phoneRegex = /^0\d{9}$/;
    const inputRegex = /^[a-zA-Z0-9]+$/;

    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(!username){
            setError("Username can not be required")
            usernameRef.current.focus();
            return false;
        }
        if(username.length<=5){
            setError("Username must greater than 5 characters")
            usernameRef.current.focus();
            return false;
        }
        if(!inputRegex.test(username)){
            setError("Username cannot contain special characters")
            usernameRef.current.focus();
            return false;
        }
        const res = await isUserExist({username})
        if(res.result === false){
            setError("Username has been used")
            usernameRef.current.focus();
            return false;
        }
        if(!userpass){
            setError("Password can not be required")
            passwordRef.current.focus();
            return false;
        }
        if(userpass.length<=5){
            setError("Password must greater than 5 characters")
            passwordRef.current.focus();
            return false;
        }
        if(!inputRegex.test(userpass)){
            setError("Password cannot contain special characters")
            passwordRef.current.focus();
            return false;
        }
        if(!email){
            setError("Email can not be required")
            emailRef.current.focus();
            return false;
        }
        if(!phone){
            setError("Phone number can not be required")
            phoneRef.current.focus();
            return false;
        } 
        if(!phoneRegex.test(phone)){
            setError("Phone number is not valid")
            phoneRef.current.focus();
            return false;
        }
        setError('');
        handleRegister();
    }

    const handleRegister = async() =>{
        const user = {
            username: username,
            password: userpass,
            email: email,
            phone: phone,
            role: 'user'
        }
        const res = await registerService(user)
        if(res.result){
            navigate("/login");
        }
        else{
            setError("something wrong please try again")
        }
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
                <div className="register-form-container">
                    <div className="register-form">
                        <div className="form-container">
                            <p className="register-title">Register</p>
                            <form onSubmit={handleSubmit}>
                                <div className="input-container">
                                    <label className="login-label-textfield">
                                        <input 
                                            className="form-login-textfield" 
                                            placeholder="Username" 
                                            value={username} 
                                            onChange={(e)=>setUserName(e.target.value)}
                                            ref={usernameRef}
                                        />
                                    </label>
                                </div>
                                <div className="input-container">
                                    <label className="login-label-textfield">
                                        <input 
                                            className="form-login-textfield" 
                                            placeholder="Password" 
                                            value={userpass} 
                                            onChange={(e)=>setUserPass(e.target.value)}
                                            ref={passwordRef}
                                        />
                                    </label>
                                </div>
                                <div className="input-container">
                                    <label className="login-label-textfield">
                                        <input 
                                            className="form-login-textfield" 
                                            placeholder="Email" 
                                            value={email} 
                                            onChange={(e)=>setEmail(e.target.value)} 
                                            type='email'
                                            ref={emailRef}
                                        />
                                    </label>
                                </div>
                                <div className="input-container">
                                    <label className="login-label-textfield">
                                        <input 
                                            className="form-login-textfield" 
                                            placeholder="Phone number" 
                                            value={phone} 
                                            onChange={(e)=>setPhone(e.target.value)}
                                            ref={phoneRef}
                                        />
                                    </label>
                                </div>
                                {error?<p className='login-error'>{error}</p>:<Fragment></Fragment>}
                                <div className="submit-btn-container">
                                    <input className="form-login-submit-input !bg-[#e50914] hover:opacity-80 ease-in-out duration-200" type="submit" value="Sign In" />                                
                                </div>

                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;