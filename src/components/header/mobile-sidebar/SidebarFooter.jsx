import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const SidebarFooter = () => {
  const socialContent = [
    { id: 1, icon: "fa-facebook-f", link: "https://www.facebook.com/theekingjob" },
    // { id: 2, icon: "fa-twitter", link: "https://www.twitter.com" },
    { id: 3, icon: "fa-instagram", link: "https://www.instagram.com/the_king_job" },
    { id: 4, icon: "fa-linkedin-in", link: "https://az.linkedin.com/company/king-job" },
  ];
  const {isLoggedIn,user} = useSelector(state=>state.candidate);
  return (
    <div className="mm-add-listing mm-listitem pro-footer">
      { 
      !isLoggedIn &&
        <Link to="/Login" className="btn-style-one-bordered">
          Daxil OL
        </Link>
      }
      {
        !isLoggedIn &&
        <Link to="/register" className="theme-btn btn-style-one mm-listitem__text mt-3">
          Qeydiyyat
        </Link>
      }
      {/* job post btn */}

      <div className="mm-listitem__text">
        <div className="contact-info">
          <span className="phone-num">
            <span>Bizimlə Əlaqə</span>
            <a href="tel:+9940775773133">+994 077 577 31 33</a>
          </span>
          {/* <span className="address">
            329 Queensberry Street, North Melbourne VIC <br />
            3051, Australia.
          </span> */}
          <a href="mailto:info@kingjob.pro" className="email">
            info@kingjob.pro
          </a>
        </div>
        {/* End .contact-info */}

        <div className="social-links">
          {socialContent.map((item) => (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={item.id}
            >
              <i className={`fab ${item.icon}`}></i>
            </a>
          ))}
        </div>
        {/* End social-links */}
      </div>
      {/* End .mm-listitem__text */}
    </div>
  );
};

export default SidebarFooter;
