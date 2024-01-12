import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderNavContent from "./HeaderNavContent";

const DefaulHeader2 = () => {
  const [navbar, setNavbar] = useState(false);

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
            <Link
              to="/login"
              className="theme-btn btn-style-three"
            >
              Daxil OL
            </Link>
            <Link
              to="/register"
              className="theme-btn btn-style-one"
            >
              Qeydiyyat
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DefaulHeader2;
