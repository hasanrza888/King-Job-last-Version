import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="call-to-action">
      <div className="auto-container">
        <div className="outer-box" data-aos="fade-up">
          <div className="content-column">
            <div className="sec-title">
              <h2>Şirkətiniz üçün namizəd axtarırsınız ?</h2>
              <div className="text">
                Şirkət hesabı yaradaraq, vakansiyalarımızı paylaşa bilərsiniz! 
              </div>
              <Link to="/register" className="theme-btn btn-style-one bg-blue">
                <span className="btn-title">Qeydiyyat</span>
              </Link>
            </div>
          </div>
          {/* End .content-column */}

          <div
            className="image-column"
            style={{ backgroundImage: " url(images/resource/image-1.png)" }}
          >
            <figure className="image">
              <img
                width={417}
                height={328}
                src="/images/resource/image-1.png"
                alt="resource"
              />
            </figure>
          </div>
          {/* End .image-column */}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
