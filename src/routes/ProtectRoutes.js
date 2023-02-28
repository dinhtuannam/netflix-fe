import { Outlet , Navigate } from 'react-router-dom'

export const ProtectRoutes = () =>{
    const user = sessionStorage.user ? JSON.parse(sessionStorage.user) : null
    return (
        user ? <Outlet /> : <Navigate to="/login" />
    )
}

