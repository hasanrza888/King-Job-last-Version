import LoginPopup from "../../common/form/login/LoginPopup";
import Partner from "../../common/partner/Partner";
import FooterDefault from "../../footer/common-footer";
import MobileMenu from "../../header/MobileMenu";
import Funfact from "../../fun-fact-counter/Funfact";
import ImgBox from "./ImgBox";
import IntroDescriptions from "./IntroDescriptions";
import CallToAction2 from "../../call-to-action/CallToAction2";
import Testimonial2 from "../../testimonial/Testimonial2";
import Block1 from "../../block/Block1";
import Breadcrumb from "../../common/Breadcrumb";
import DefaulHeader2 from "../../header/DefaulHeader2";

const index = () => {
  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <LoginPopup />
      {/* End Login Popup Modal */}

      <DefaulHeader2 />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Breadcrumb title="Haqqımızda" meta="Haqqımızda" />
      {/* <!--End Page Title--> */}

      <section className="about-section-three">
        <div className="auto-container">
          {/* <ImgBox /> */}

          {/* <!-- Fun Fact Section --> */}
          <div className="fun-fact-section">
            <div className="row">
              <Funfact />
            </div>
          </div>
          {/* <!-- Fun Fact Section --> */}

          <IntroDescriptions />
        </div>
      </section>
      {/* <!-- End About Section Three --> */}

      <CallToAction2 />
      {/* <!-- End CallToAction2 --> */}

      {/* testimonials */}
      {/* <section className="testimonial-section-two">
        <div className="container-fluid">
          <div className="testimonial-left">
            <img
              width={504}
              height={451}
              src="/images/resource/testimonial-left.png"
              alt="testimonial"
            />
          </div>
          

          <div className="testimonial-right">
            <img
              width={504}
              height={451}
              src="/images/resource/testimonial-right.png"
              alt="testimonial"
            />
          </div>
          
          <div className="sec-title text-center">
            <h2>Testimonials From Our Customers</h2>
            <div className="text">
              Lorem ipsum dolor sit amet elit, sed do eiusmod tempor
            </div>
          </div>
          

          <div className="carousel-outer" data-aos="fade-up">
            <div className="testimonial-carousel">
              <Testimonial2 />
            </div>
          </div>
        </div>
      </section> */}
      {/* <!-- End Testimonial Section --> */}

      {/* <section className="work-section style-two">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>How It Works?</h2>
            <div className="text">Job for anyone, anywhere</div>
          </div>

          <div className="row" data-aos="fade-up">
            <Block1 />
          </div>
        </div>
      </section> */}
      {/* <!-- End Work Section --> */}

      {/* <!--Sponsors Carousel--> */}  
      {/* <section className="clients-section">
        <div className="sponsors-outer" data-aos="fade">
          
          <ul className="sponsors-carousel">
            <Partner />
          </ul>
        </div>
      </section> */}
      {/* <!-- End Clients Section--> */}

      <FooterDefault />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
