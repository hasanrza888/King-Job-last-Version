import { Link } from "react-router-dom";
import Social from "./Social";

const CopyrightFooter = () => {
  return (
    <div className="footer-bottom">
      <div className="auto-container">
        <div className="outer-box">
          <div className="copyright-text">
            © {new Date().getFullYear()} King Job{" "}
            <Link
              to="https://www.kingjob.pro"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.kingjob.pro
            </Link>
            . Bütün hüquqlar qorunur.
            {/* Saytın rəhbərliyi yerləşdirilmiş elanların məzmununa görə məsuliyyət daşımır. */}
          </div>
          <div className="social-links">
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyrightFooter;
