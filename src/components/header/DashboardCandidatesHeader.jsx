import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import candidatesMenuData from "../../data/candidatesMenuData";
import HeaderNavContent from "./HeaderNavContent";
import { isActiveLink } from "../../utils/linkActiveChecker";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DefCandidateP from '../../img/defApplicant5.png';
import useLogout from "../../hooks/logoutUser";
import { menuToggle } from "../../features/toggle/toggleSlice";

const DashboardCandidatesHeader = () => {
    const {user,info} = useSelector(state=>state.candidate)
    console.log(user)
    const [navbar, setNavbar] = useState(false);
    const location = useLocation();
    const dispatch = useDispatch();

    const logoutUser = useLogout();
    const changeBackground = () => {
        if (window.scrollY >= 0) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
    }, []);
    // menu togggle handler
    const menuToggleHandler = () => {
        dispatch(menuToggle());
    };

    return (
        // <!-- Main Header-->
        <header
            className={`main-header header-shaddow  ${
                navbar ? "fixed-header " : ""
            }`}
        >
            <div className="container-fluid">
                {/* <!-- Main box --> */}
                <div className="main-box">
                    {/* <!--Nav Outer --> */}
                    <div className="nav-outer">
                        <div className="logo-box">
                            <div className="logo">
                                <Link to="/">
                                    <img
                                        alt="brand"
                                        src="/images/logo.svg"
                                        width={154}
                                        height={50}
                                        priority
                                    />
                                </Link>
                            </div>
                        </div>
                        {/* End .logo-box */}

                        <HeaderNavContent />
                        {/* <!-- Main Menu End--> */}
                    </div>
                    {/* End .nav-outer */}

                    <div className="outer-box">
                        <button className="menu-btn">
                            <span className="count">1</span>
                            <span className="icon la la-heart-o"></span>
                        </button>
                        {/* wishlisted menu */}

                        <button className="menu-btn">
                            <span className="icon la la-bell"></span>
                        </button>
                        {/* End notification-icon */}

                        {/* <!-- Dashboard Option --> */}
                        <div className="dropdown dashboard-option dash-h-drop">
                            <a
                                className="dropdown-toggle dash-h-drop-toggle"
                            >
                                <img
                                    alt="avatar"
                                    className="thumb"
                                    src={info?.profilepic || DefCandidateP}
                                    width={50}
                                    height={50}
                                />
                                <span className="name">{user?.name}</span>
                            </a>

                            <div className="dash-h-drop-menu-cont">
                                <ul className="dropdown-menu dash-h-drop-menu">
                                    {candidatesMenuData.map((item) => (
                                        <li
                                            className={`${
                                                isActiveLink(
                                                    item.routePath,
                                                    location.pathname
                                                )
                                                    ? "active"
                                                    : ""
                                            } mb-1`}
                                            key={item.id}
                                            onClick={item.onCLick ==='ok' ? logoutUser : menuToggleHandler}
                                        >
                                            <Link to={item.routePath}>
                                                <i
                                                    className={`la ${item.icon}`}
                                                ></i>{" "}
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                        </div>
                        {/* End dropdown */}
                    </div>
                    {/* End outer-box */}
                </div>
            </div>
        </header>
    );
};

export default DashboardCandidatesHeader;
