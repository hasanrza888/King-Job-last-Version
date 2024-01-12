import { Link } from "react-router-dom";
import About from "../about/About";
import AppSection from "../app-section/AppSection";
import Blog from "../blog/Blog";
import CallToAction from "../call-to-action/CallToAction";
import LoginPopup from "../common/form/login/LoginPopup";
import Partner from "../common/partner/Partner";
import FooterDefault from "../footer/common-footer";
import Funfact from "../fun-fact-counter/Funfact";
import DefaulHeader2 from "../header/DefaulHeader2";
import MobileMenu from "../header/MobileMenu";
import Hero1 from "../hero/hero-1";
import JobCategorie1 from "../job-categories/JobCategorie1";
import JobFeatured1 from "../job-featured/JobFeatured1";
import Testimonial from "../testimonial/Testimonial";

const index = () => {
  return (
    <>
      <LoginPopup />
      {/* End Login Popup Modal */}

      <DefaulHeader2 />
      {/* End Header with upload cv btn */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Hero1 />
      {/* End Hero Section */}

      <section className="job-categories ui-job-categories">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Məşhur Kateqoriyalar</h2>
            <div className="text">202 Aktiv Vakansiya - 29 bugün əlavə olunub.</div>
          </div>

          <div
            className="row "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            {/* <!-- Category Block --> */}
            <JobCategorie1 />
          </div>
        </div>
      </section>
      {/* End Job Categorie Section */}

      <section className="job-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Ən son Vakansiyalar</h2>
            <div className="text">
            Özünüzə uyğun gələn işi tapın
            </div>
          </div>

          <div className="row " data-aos="fade-up">
            <JobFeatured1 />
          </div>

          <div className="btn-box">
            <Link
              to="/vacancies-list"
              className="theme-btn btn-style-one bg-blue"
            >
              <span className="btn-title">Daha çoxuna bax</span>
            </Link>
          </div>
        </div>
      </section>
      {/* End Job Featured Section */}

      {/* testimonial-section */}
      {/* <section className="testimonial-section">
        <div className="container-fluid">
          
          <div className="sec-title text-center">
            <h2>Testimonials From Our Customers</h2>
            <div className="text">
              Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
            </div>
          </div>
        </div>
        <div className="carousel-outer" data-aos="fade-up">
          
          <div className="testimonial-carousel gap-x25 center-item-active slick-list-visible">
            <Testimonial />
          </div>
        </div>
      </section> */}
      {/* <!-- End Testimonial Section --> */}

      {/* Sponsors */}
      {/* <section className="clients-section">
        <div className="sponsors-outer" data-aos="fade">
          
          <ul className="sponsors-carousel">
            <Partner />
          </ul>
        </div>
      </section> */}
      {/* <!-- End Clients Section--> */}

      {/* <!-- Fun Fact Section --> */}
      {/* <section className="about-section">
        <div className="auto-container">
          <div className="row">
            <About />
          </div>

          
          <div className="fun-fact-section">
            <div className="row">
              <Funfact />
            </div>
          </div>
          
        </div>
      </section> */}
      {/* <!-- End About Section --> */}

      {/* news article */}
      {/* <section className="news-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Recent News Articles</h2>
            <div className="text">
              Fresh job related news content posted each day.
            </div>
          </div>
          
          <div className="row" data-aos="fade-up">
            <Blog />
          </div>
        </div>
      </section> */}
      {/* <!-- End News Section --> */}

      {/* <section className="app-section">
        <div className="auto-container">
          <AppSection />
        </div>
      </section> */}
      {/* <!-- End App Section --> */}

      <CallToAction />
      {/* <!-- End Call To Action --> */}

      <FooterDefault />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
