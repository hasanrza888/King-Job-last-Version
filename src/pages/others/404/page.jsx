import { Link } from "react-router-dom";

const index = () => {
  return (
    <>
      <div
        className="error-page-wrapper "
        style={{
          backgroundImage: `url(/images/404.jpg)`,
        }}
        data-aos="fade"
      >
        <div className="content">
          <div className="logo">
            <Link to="/">
              <img
                width={154}
                height={50}
                src="/images/logo.svg"
                alt="brand"
              />
            </Link>
          </div>
          {/* End logo */}

          <h1>404!</h1>
          <p>Axtardığınız səhifə tapılmadı!</p>

          <Link className="theme-btn btn-style-three call-modal" to="/">
            Əsas səhifəyə qayıt
          </Link>
        </div>
        {/* End .content */}
      </div>
    </>
  );
};
export default index;