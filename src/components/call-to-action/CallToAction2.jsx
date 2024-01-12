import { Link } from "react-router-dom";

const CallToAction2 = () => {
  return (
    <section
      className="call-to-action-two"
      style={{ backgroundImage: "url(/images/background/1.jpg)" }}
    >
      <div className="auto-container" data-aos="fade-up">
        <div className="sec-title light text-center">
          <h2>Xəyalındakı işi bizimlə tap</h2>
          {/* <div className="text">
            Over 1 million interactions, 50,000 success stories Make yours now.
          </div> */}
        </div>

        <div className="btn-box">
          <Link to="/vacancies-list" className="theme-btn btn-style-three">
            Vakansiya Axtar
          </Link>
          <Link to="/register" className="theme-btn btn-style-two">
            Qeydiyyat
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction2;
