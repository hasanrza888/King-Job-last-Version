import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
function PrivateRoutes() {
    const token = useSelector(state=>state.candidate.isLoggedIn)
    console.log(token)
    return token ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoutes