import { Link, useLocation } from "react-router-dom";
import employerMenuData from "../../data/employerMenuData";
import { isActiveLink } from "../../utils/linkActiveChecker";
import { logout } from "../../services/api/auth_api";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../features/candidate/candidateSlice";
import { menuToggle } from "../../features/toggle/toggleSlice";
import {toast} from 'react-toastify'
const DashboardEmployerSidebar = () => {
    const location = useLocation();
    const { menu } = useSelector((state) => state.toggle);

    const dispatch = useDispatch();
    // menu togggle handler
    const menuToggleHandler = () => {
        dispatch(menuToggle());
    };
    async function logoutUser() {
        try {
          const { data } = await logout();
          dispatch(clearUser());
          toast.success("Succesfully logged out",{
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              })
        } catch (error) {
          if(error.response.data){
            toast.error(error.response.data.message)
          }
          else{
            console.log(error)
          }
        }
      }

    return (
        <div className={`user-sidebar ${menu ? "sidebar_open" : ""}`}>
            {/* Start sidebar close icon */}
            <div className="pro-header text-end pb-0 mb-0 show-1023">
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
