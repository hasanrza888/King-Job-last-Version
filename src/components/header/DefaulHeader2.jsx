import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderNavContent from "./HeaderNavContent";
import { useSelector } from "react-redux";
const DefaulHeader2 = () => {
  const [navbar, setNavbar] = useState(false);
  const {isLoggedIn,user} = useSelector(state=>state.auth);
  // console.log(user)
  // const { u_t_p } = user || {u_t_p:'x'};
  const u_t_p = user ? user.u_t_p : 'x'
  const profilenavigate = {
    'c_m_p':'/company-dashboard/dashboard',
    'u_s_r':'/applicants-dashboard/dashboard',
    'x':'/'
  }
  // console.log(user)
  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    // <!-- Main Header-->
    <header
      className={`main-header  ${
        navbar ? "fixed-header animated slideInDown" : ""
      }`}
    >
      {/* <!-- Main box --> */}
      <div className="main-box">
        {/* <!--Nav Outer --> */}
        <div className="nav-outer">
          <div className="logo-box">
            <div className="logo">
              <Link to="/">
                <img
                  width={154}
                  height={50}
                  src="/images/logo.svg"
                  alt="King Job"
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
          {/* <!-- Add Listing --> */}
          <Link to="/subscriptions" className="upload-cv">
            Abunəliklər
          </Link>
          
          {/* <!-- Login/Register --> */}
          <div className="btn-box">
            {!isLoggedIn && <Link
              to="/login"
              className="theme-btn btn-style-three"
            >
              Daxil OL
            </Link>}
            {!isLoggedIn && <Link
              to="/register"
              className="theme-btn btn-style-one"
            >
              Qeydiyyat
            </Link>}
            {isLoggedIn && user && <Link
              to={profilenavigate[u_t_p]}
              className="theme-btn btn-style-one"
            >
              Hesabım
            </Link>}
          </div>
        </div>
      </div>
    </header>
  );
};

export default DefaulHeader2;
