import { Outlet , Navigate } from 'react-router-dom'
// import layout
import AdminLayout from '../layout/AdminLayout.js';
// import components 
import AdminPage from '../page/AdminPage/AdminPage.js';

export const AdminRoutes = [   
    { path: '/admin', component: AdminPage, layout: AdminLayout },
];

export const ProtectAdminRoutes = () =>{
    const user = sessionStorage.user ? JSON.parse(sessionStorage.user) : null
    if(!user)
        return (<Navigate to="/"/>)
    else
        return ( user.role==="admin" ? <Outlet /> : <Navigate to="/" />)
}