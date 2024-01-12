import { Link } from "react-router-dom";
import CopyrightFooter from "./CopyrightFooter";
import FooterContent from "./FooterContent";

const index = ({ footerStyle = "" }) => {
  return (
    <footer className={`main-footer ${footerStyle}`}>
      <div className="auto-container">
        {/* <!--Widgets Section--> */}
        <div className="widgets-section" data-aos="fade-up">
          <div className="row">
            <div className="big-column col-xl-4 col-lg-3 col-md-12">
              <div className="footer-column about-widget">
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
                <p className="phone-num">
                  <span>Bizimlə Əlaqə</span>
                  <a href="tel:+9940775773133">+994 077 577 31 33</a>
                </p>
                <p className="address">
                  {/* 329 Queensberry Street, North Melbourne VIC
                  <br /> 3051, Australia. <br /> */}
                  <a href="mailto:info@kingjob.pro" className="email">
                    info@kingjob.pro
                  </a>
                </p>
              </div>
            </div>
            {/* End footer left widget */}

            <div className="big-column col-xl-8 col-lg-9 col-md-12">
              <div className="row">
                <FooterContent />
              </div>
            </div>
            {/* End col-xl-8 */}
          </div>
        </div>
      </div>
      {/* End auto-container */}
      <p style={{textAlign:"center"}}>Saytın rəhbərliyi yerləşdirilmiş elanların məzmununa görə məsuliyyət daşımır.</p>
      <br />
      <CopyrightFooter />
      {/* <!--Bottom--> */}
    </footer>
    //   {/* <!-- End Main Footer --> */}
  );
};

export default index;
