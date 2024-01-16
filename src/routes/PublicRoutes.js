import { Outlet, Navigate,useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
function PublicRoutes() {
  const location = useLocation();
    const {isLoggedIn:token,user} = useSelector(state=>state.auth);
    const u_t_p = user ? user.u_t_p : 'x'
    const profilenavigate = {
    'c_m_p':'/company-dashboard/dashboard',
    'u_s_r':'/applicants-dashboard/dashboard'
  }
    return token ? <Navigate to={profilenavigate[u_t_p] || "/"} /> : <Outlet />
}

export default PublicRoutes