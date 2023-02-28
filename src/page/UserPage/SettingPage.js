import { Fragment} from "react";
import '../../assets/css/SettingPage.css'
import {HiUserCircle} from 'react-icons/hi'
import {BiPlayCircle , BiExit} from 'react-icons/bi'
import { Routes, Route ,Link} from 'react-router-dom';
import { SettingRoutes } from '../../routes/SettingRoutes'
import { ProtectRoutes } from '../../routes/ProtectRoutes'
import useLogOut from "../../hooks/useLogOut";
function SettingPage() {
    return ( 
        <Fragment>
            <div className="navigation-spacing"></div>
            <div className="setting-container mt-[60px] ">                
                <div className="setting-controller hidden md:block">
                    <ul className="setting-controller-list ">
                        <li className="setting-controller-title">Setting</li>
                        <Link to="/setting/information">
                            <li className="setting-controller-item items-center">                       
                                <HiUserCircle className="setting-controller-icon"/>
                                Information                          
                            </li>
                        </Link>
                        <Link to="/setting/playlist">
                            <li className="setting-controller-item items-center">                           
                                <BiPlayCircle className="setting-controller-icon"/>
                                Playlist                          
                            </li>
                        </Link>
                        <li className="setting-controller-item items-center" onClick={useLogOut}>
                            <BiExit className="setting-controller-icon"/>
                            Log out
                        </li>
                    </ul>
                </div>
                <div className="setting-content md:ml-[232px]">
                    <Routes>
                        {SettingRoutes.map((value, index) => {
                            const Page = value.component;
                            return (
                                <Route element={<ProtectRoutes />} key="protectRoutes">
                                    <Route
                                    exact
                                    path={value.path}
                                    element={<Page />}
                                    key={value.path} />
                                </Route>
                            );
                        })}
                    </Routes>                
                </div>
            </div>
        </Fragment>
     );
}

export default SettingPage;