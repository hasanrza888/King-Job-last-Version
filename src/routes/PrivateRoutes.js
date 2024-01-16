import { Outlet, Navigate,useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
function PrivateRoutes() {
    const location  = useLocation();
    const token = useSelector(state=>state.auth.isLoggedIn)
    console.log(token)
    return token ? <Outlet /> : <Navigate to='/login' state={{prevUrl:location.pathname}} />
}

export default PrivateRoutes