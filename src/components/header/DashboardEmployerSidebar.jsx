import { Link, useLocation,useNavigate } from "react-router-dom";
import employerMenuData from "../../data/employerMenuData";
import { isActiveLink } from "../../utils/linkActiveChecker";
import { logout } from "../../services/api/auth_api";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../features/auth/authSlice";
import { menuToggle } from "../../features/toggle/toggleSlice";
import {toast} from 'react-toastify'
import useLogout from "../../hooks/logoutUser";
const DashboardEmployerSidebar = () => {
    const location = useLocation();
    const nav = useNavigate();
    const logoutUser = useLogout();
    const { menu } = useSelector((state) => state.toggle);

    const dispatch = useDispatch();
    // menu togggle handler
    const menuToggleHandler = () => {
        dispatch(menuToggle());
    };
    

    return (
        <div className={`user-sidebar ${menu ? "sidebar_open" : ""}`}>
            {/* Start sidebar close icon */}
            <div className="pro-header text-end pb-0 mb-0 show-1266">
                <div className="fix-icon" onClick={menuToggleHandler}>
                    <span className="flaticon-close"></span>
                </div>
            </div>
            {/* End sidebar close icon */}

            <div className="sidebar-inner">
                <ul className="navigation">
                    {employerMenuData.map((item) => (
                        <li
                            className={`${
                                isActiveLink(item.routePath, location.pathname)
                                    ? "active"
                                    : ""
                            } mb-1`}
                            key={item.id}
                            onClick={item.onClick==='ok'?logoutUser: menuToggleHandler}
                        >
                            <Link to={item.routePath}>
                                <i className={`la ${item.icon}`}></i>{" "}
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DashboardEmployerSidebar;
