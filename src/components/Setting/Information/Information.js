import './Information.css'
import { ToastContainer} from 'react-toastify';
import {AiOutlineMenuFold} from "react-icons/ai"
import {successToast , errorToast} from '../../Toast/Toast.js'
import 'react-toastify/dist/ReactToastify.css';
import { Fragment, useEffect , useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import {getUserByIDService, updateUsernameService ,updateEmaileService ,updatePhoneService ,updatePasswordService} from '../../../apiService/UserService'
function Information() {
    const [user,setUser] = useState([])
    const userID = JSON.parse(sessionStorage.user).id
    // set display state
    const [showSidebar , setShowSidebar] = useState(false)
    const [showUser,setShowUser] = useState(false)
    const [showEmail,setShowEmail] = useState(false)
    const [showPassword,setShowPassword] = useState(false)
    const [showPhone,setShowPhone] = useState(false)
    // set value input
    const [updateUser,setUpdateUser] = useState('')
    const [updateEmail,setUpdateEmail] = useState('')
    const [updatePhone,setUpdatePhone] = useState('')
    const [currentPassword,setCurrentPassword] = useState('')
    const [newPassword,setNewPassword] = useState('')
    useEffect(()=>{
        const fetchAPI = async() =>{
            const res = await getUserByIDService(userID)
            setUser(res.dataUser[0])
            setUpdateUser(res.dataUser[0].username)
            setUpdateEmail(res.dataUser[0].email)
            setUpdatePhone(res.dataUser[0].phone)
        }

        fetchAPI()

    },[userID])

    // const validate = () =>{

    // }

    const handleChangeUsername = async() =>{
        if(updateUser === user.username){
            setShowUser(false)         
            return
        }
        const infoUser = {
            username:updateUser,
            id:userID            
        }
        const res = await updateUsernameService(infoUser)
        if(res.result === true ){
            const newUser = {...user,username:updateUser}
            setUser(newUser)
            successToast(res.message)
            setShowUser(false)
        }
        else{
            setUpdateUser(user.username)
            errorToast(res.message)
            setShowUser(false)
        }      
    }

    const handleChangePassword = async() =>{
        if(currentPassword === "" && newPassword === ""){
            setShowPassword(false)
            return
        }
        const infoUser = {
            currentPassword,
            newPassword,
            id:userID            
        }
        const res = await updatePasswordService(infoUser)
        if(res.result === true ){
            const updatePassword = newPassword.replace(/[0-9a-z]/gi, '*');
            const newUser = {...user,password:updatePassword}
            setUser(newUser)
            successToast(res.message)
            setShowPassword(false)
            setCurrentPassword('')
            setNewPassword('')
        }
        else{
            errorToast(res.message)
            setShowPassword(false)
        }      
    }

    const handleChangeEmail = async() =>{
        if(updateEmail === user.email){
            setShowEmail(false)
            return
        }
        if(updateEmail === ""){
            errorToast("Email cannot be required")
            setShowEmail(false)
            setUpdateEmail(user.email)
            return
        }
        const infoUser = {
            email:updateEmail,
            id:userID            
        }
        const res = await updateEmaileService(infoUser)
        if(res.result === true ){
            const newUser = {...user,email:updateEmail,}
            setUser(newUser)
            successToast(res.message)
            setShowEmail(false)
        }
        else{
            errorToast(res.message)
            setShowEmail(false)
        }
    }

    const handleChangePhone = async() =>{
        if(updatePhone === user.phone){
            setShowPhone(false)
            return
        }
        if(updatePhone === ""){
            errorToast("Phone number cannot be required")
            setShowPhone(false)
            setUpdatePhone(user.phone)
            return
        }
        const infoUser = {
            phone:updatePhone,
            id:userID            
        }
        const res = await updatePhoneService(infoUser)
        if(res.result === true ){
            const newUser = {...user,phone:updatePhone}
            setUser(newUser)
            successToast(res.message)
            setShowPhone(false)
        }
        else{
            errorToast(res.message)
            setShowPhone(false)
        }
    }

    const setUserStyle = (action,state) =>{
        if(action === "input")
            return state ? 'inline-block' : 'none'
        else
            return state ? 'none' : 'inline-block'
    }

    const setPasswordStyle = (action,state) =>{
        if(action === "close")
            return state ? 'inline-block' : 'none'
        if(action === "li")
            return state ? 'none' : 'block'
        if(action === "input")
            return state ? 'block' : 'none'
        else
            return state ? 'none' : 'inline-block'
    }

    const handleSidebar = () =>{
        setShowSidebar(false);
    }

    return ( 
        <Fragment>
            {showSidebar && <Sidebar onShow={handleSidebar}/>}
            <div className="setting-content-info-container">
                <ToastContainer limit={3} />
                <div className="flex justify-between items-center">
                    <p className="setting-content-info-title">User information</p>
                    <AiOutlineMenuFold onClick={()=>setShowSidebar(true)} className="text-white text-2xl cursor-pointer md:hidden"/>
                </div>
                <ul className='setting-info-list'>
                    <li className='setting-info-item'>
                        <p className='setting-userinfo-title'>Username</p>
                        <input type="text" className='setting-update-input' style={ {display: setUserStyle("input",showUser)} } value={updateUser} onChange={e=> setUpdateUser(e.target.value)}/>
                        <p className='setting-user-infomartion' style={ {display: setUserStyle("p",showUser)} }>{user.username}</p>
                        <p className='setting-userinfo-btn' onClick={()=>setShowUser(true)} style={ {display: setUserStyle("p",showUser)} }>update</p>
                        <p className='setting-userinfo-btn' onClick={handleChangeUsername} style={ {display: setUserStyle("input",showUser)} }>save</p>
                    </li>
                    <li className='setting-info-item' style={ {display: setPasswordStyle("li",showPassword)}}>
                        <p className='setting-userinfo-title'>Password</p>
                        <p className='setting-user-infomartion'>{user.password}</p>
                        <p className='setting-userinfo-btn' onClick={()=>setShowPassword(true)} style={ {display: setPasswordStyle("p",showPassword)} }>update</p>
                    </li>
                    <li className='setting-info-item' style={ {display: setPasswordStyle("input",showPassword)}}>
                        <p className='setting-userinfo-title'>Current Password</p>
                        <input type="text" className='setting-update-input' value={currentPassword} onChange={(e)=>setCurrentPassword(e.target.value)}/>
                        <p className='setting-userinfo-btn' onClick={handleChangePassword} style={ {display: setPasswordStyle("close",showPassword)}}>save</p>
                    </li>
                    <li className='setting-info-item' style={ {display: setPasswordStyle("input",showPassword)}}>
                        <p className='setting-userinfo-title'>New Password</p>
                        <input type="text" className='setting-update-input' value={newPassword} onChange={(e)=>setNewPassword(e.target.value)}/>               
                    </li>
                    <li className='setting-info-item'>
                    <p className='setting-userinfo-title'>Email</p>
                        <input type="text" className='setting-update-input' style={ {display: setUserStyle("input",showEmail)} } value={updateEmail} onChange={e=> setUpdateEmail(e.target.value)}/>
                        <p className='setting-user-infomartion' style={ {display: setUserStyle("p",showEmail)} }>{user.email}</p>
                        <p className='setting-userinfo-btn' onClick={()=>setShowEmail(true)} style={ {display: setUserStyle("p",showEmail)} }>update</p>
                        <p className='setting-userinfo-btn' onClick={handleChangeEmail} style={ {display: setUserStyle("input",showEmail)} }>save</p>
                    </li>
                    <li className='setting-info-item'>
                    <p className='setting-userinfo-title'>Phone</p>
                        <input type="text" className='setting-update-input' style={ {display: setUserStyle("input",showPhone)} } value={updatePhone} onChange={e=> setUpdatePhone(e.target.value)}/>
                        <p className='setting-user-infomartion' style={ {display: setUserStyle("p",showPhone)} }>{user.phone}</p>
                        <p className='setting-userinfo-btn' onClick={()=>setShowPhone(true)} style={ {display: setUserStyle("p",showPhone)} }>update</p>
                        <p className='setting-userinfo-btn' onClick={handleChangePhone} style={ {display: setUserStyle("input",showPhone)} }>save</p>
                    </li>
                </ul>
            </div> 
        </Fragment>
    );
}

export default Information;