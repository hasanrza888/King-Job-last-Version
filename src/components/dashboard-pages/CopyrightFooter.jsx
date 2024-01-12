import { Link } from "react-router-dom";

const CopyrightFooter = () => {
  return (
    <div className="copyright-text">
      <p>
        © {new Date().getFullYear()} King Job{" "}
        <Link
          to="https://www.kingjob.pro"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.kingjob.pro
        </Link>
        . Bütün hüquqlar qorunur.
      </p>
    </div>
  );
};

export default CopyrightFooter;
