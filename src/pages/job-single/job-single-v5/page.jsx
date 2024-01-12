import jobs from "../../../data/job-featured";
import LoginPopup from "../../../components/common/form/login/LoginPopup";
import FooterDefault from "../../../components/footer/common-footer";
import MobileMenu from "../../../components/header/MobileMenu";
import RelatedJobs from "../../../components/job-single-pages/related-jobs/RelatedJobs";
import SocialTwo from "../../../components/job-single-pages/social/SocialTwo";
import JobDetailsDescriptions from "../../../components/job-single-pages/shared-components/JobDetailsDescriptions";
import ApplyJobModalContent from "../../../components/job-single-pages/shared-components/ApplyJobModalContent";
import { useParams } from "react-router";
import DefaulHeader2 from "../../../components/header/DefaulHeader2";


const JobSingleDynamicV1 = () => {
  const id = useParams().id;
  const company = jobs.find((item) => item.id == id) || jobs[0];

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

      {/* <!-- Job Detail Section --> */}
      <section className="job-detail-section style-three">
        <div className="upper-box">
          <div className="auto-container">
            <div className="job-block-seven style-three">
              <div className="inner-box">
                <div className="content">
                  <span className="company-logo">
                    <img
                      width={100}
                      height={98}
                      src={company?.logo}
                      alt="logo"
                    />
                  </span>
                  <h4>{company?.jobTitle}</h4>

                  <ul className="job-info">
                    <li>
                      <span className="icon flaticon-briefcase"></span>
                      {company?.company}
                    </li>
                    {/* compnay info */}
                    <li>
                      <span className="icon flaticon-map-locator"></span>
                      {company?.location}
                    </li>
                    {/* location info */}
                    <li>
                      <span className="icon flaticon-clock-3"></span>{" "}
                      {company?.time}
                    </li>
                    {/* time info */}
                    <li>
                      <span className="icon flaticon-money"></span>{" "}
                      {company?.salary} AZN
                    </li>
                    {/* salary info */}
                  </ul>
                  {/* End .job-info */}

                  <ul className="job-other-info">
                    <li className={`${company?.jobType?.[0].styleClass}`}>
                      {company?.jobType?.[0]['type']}
                    </li>
                  </ul>
                  {/* End .job-other-info */}
                </div>
                {/* End .content */}

                <div className="btn-box">
                  <a
                    href="#"
                    className="theme-btn btn-style-one"
                    data-bs-toggle="modal"
                    data-bs-target="#applyJobModal"
                  >
                    Müraciət Et
                  </a>
                  <button className="bookmark-btn" title="Yadda Saxla"> 
                    <i className="flaticon-bookmark"></i>
                  </button>
                </div>
                {/* End apply for job btn */}

                {/* <!-- Modal --> */}
                <div
                  className="modal fade"
                  id="applyJobModal"
                  tabIndex="-1"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="apply-modal-content modal-content">
                      <div className="text-center">
                        <h3 className="title">Müraciət</h3>
                        <button
                          type="button"
                          className="closed-modal"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      {/* End modal-header */}

                      <ApplyJobModalContent />
                      {/* End PrivateMessageBox */}
                    </div>
                    {/* End .send-private-message-wrapper */}
                  </div>
                </div>
                {/* End .modal */}
              </div>
            </div>
            {/* <!-- Job Block --> */}
          </div>
        </div>
        {/* <!-- Upper Box --> */}

        <div className="job-detail-outer">
          <div className="auto-container">
            <div className="row">
              <div className="content-column col-lg-8 offset-2 col-md-12 col-sm-12">
                <JobDetailsDescriptions />
                {/* End jobdetails content */}

                {/* <div className="other-options">
                  <div className="social-share">
                    <h5>Vakansiyanı Sosial Şəbəkədə paylaş</h5>
                    <SocialTwo />
                  </div>
                </div> */}
                {/* <!-- Other Options --> */}

                <div className="related-jobs">
                  <div className="title-box">
                    <h3>Əlaqədar Vakansiyalar</h3>
                    <div className="text">
                    202 Aktiv Vakansiya - 29 bugün əlavə olunub.
                    </div>
                  </div>
                  {/* End title box */}

                  <RelatedJobs />
                </div>
                {/* <!-- Related Jobs --> */}
              </div>
              {/* End .content-column */}
            </div>
          </div>
        </div>
        {/* <!-- job-detail-outer--> */}
      </section>
      {/* <!-- End Job Detail Section --> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default JobSingleDynamicV1