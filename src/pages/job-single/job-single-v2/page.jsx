import jobs from "../../../data/job-featured";
import LoginPopup from "../../../components/common/form/login/LoginPopup";
import FooterDefault from "../../../components/footer/common-footer";
import MobileMenu from "../../../components/header/MobileMenu";
import JobOverView from "../../../components/job-single-pages/job-overview/JobOverView";
import JobSkills from "../../../components/job-single-pages/shared-components/JobSkills";
import SocialTwo from "../../../components/job-single-pages/social/SocialTwo";
import JobDetailsDescriptions from "../../../components/job-single-pages/shared-components/JobDetailsDescriptions";
import Contact from "../../../components/job-single-pages/shared-components/Contact";
import RelatedJobs3 from "../../../components/job-single-pages/related-jobs/RelatedJobs3";
import ApplyJobModalContent from "../../../components/job-single-pages/shared-components/ApplyJobModalContent";
import { Navigate,useLocation,useNavigate ,useParams} from "react-router-dom";
import RelatedJobs from "../../../components/job-single-pages/related-jobs/RelatedJobs";
import { useSelector } from "react-redux";
import DefaulHeader2 from "../../../components/header/DefaulHeader2";
import {toast} from 'react-toastify'
import {Modal} from "bootstrap";
const JobSingleDynamicV2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {isLoggedIn} = useSelector(state=>state.candidate);
  const id = useParams().id;
  const {alljobs} = useSelector(state=>state.job)
  const job = alljobs.find((item) => item._id === id) || jobs[0];
  const openModal = () => {
    console.log(isLoggedIn)
    if(!isLoggedIn){
      toast.info('Müraciət etmək üçün hesabınıza daxil olun',{
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
      navigate('/login', { state: { prevUrl: location.pathname } });
    }else{
      const modal = new Modal(document.getElementById('applyJobModal'));
      modal.show();
    }
  }
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
      <section className="job-detail-section">
        <div className="job-detail-outer">
          <div className="auto-container">
            <div className="row">
              <div className="content-column col-lg-8 col-md-12 col-sm-12">
                <div className="job-block-outer">
                  <div className="job-block-seven">
                    <div className="inner-box">
                      <div className="content">
                        <span className="company-logo">
                          <img
                            width={100}
                            height={98}
                            src={job?.logo}
                            alt="logo"
                          />
                        </span>
                        <h4>{job?.name}</h4>

                        <ul className="job-info">
                          <li>
                            <span className="icon flaticon-briefcase"></span>
                            {job?.companyName}
                          </li>
                          {/* compnay info */}
                          <li>
                            <span className="icon flaticon-map-locator"></span>
                            {job?.city}
                          </li>
                          {/* location info */}
                          <li>
                            <span className="icon flaticon-clock-3"></span>{" "}
                            {job?.endTime?.split('T')[0]}
                          </li>
                          {/* time info */}
                          <li>
                            <span className="icon flaticon-money"></span>{" "}
                            {job?.agreedSalary ? 'Razilasma' :job?.salary}
                          </li>
                          {/* salary info */}
                        </ul>
                        {/* End .job-info */}

                        <ul className="job-other-info">
                          <li className={`green`}>
                            {job?.type}
                          </li>
                        </ul>
                        {/* End .job-other-info */}
                      </div>
                      {/* End .content */}
                    </div>
                  </div>
                  {/* <!-- Job Block --> */}
                </div>
                {/* End job-block-outer */}

                <JobDetailsDescriptions job={job} />
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

                  <div className="row">
                    <RelatedJobs category={job?.category} id={job?._id} />
                  </div>
                  {/* End .row */}
                </div>
                {/* <!-- Related Jobs --> */}
              </div>
              {/* End .content-column */}

              <div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
                <aside className="sidebar">
                  <div   className="btn-box">
                    <button
                      className="theme-btn btn-style-one"
                      onClick={openModal}
                    >
                      Müraciət Et
                    </button>
                    <button className="bookmark-btn">
                      <i className="flaticon-bookmark"></i>
                    </button>
                  </div>
                  {/* End apply for job btn */}

                  {/* <!-- Modal --> */}
                  {/* Your modal component */}
      {isLoggedIn && (
        <div className="modal fade" id="applyJobModal" tabIndex="-1" aria-hidden="true">
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
      )}
                  {/* End .modal */}

                  <div className="sidebar-widget">
                    {/* <!-- Job Overview --> */}
                    <h4 className="widget-title">Vakansiya Detalları</h4>
                    <JobOverView job={job} />

                    <h4 className="widget-title mt-5">Bacarıqlar</h4>
                    <div className="widget-content">
                      <JobSkills job={job} />
                    </div>
                    {/* <!-- Job Skills --> */}
                  </div>
                  {/* End .sidebar-widget */}

                  <div className="sidebar-widget company-widget">
                    <div className="widget-content">
                      <div className="company-title">
                        <div className="company-logo">
                          <img
                            width={54}
                            height={53}
                            src={job?.logo}
                            alt="resource"
                          />
                        </div>
                        <h5 className="company-name">{job?.company}</h5>
                        <a href="#" className="profile-link">
                          Şirkətin profilinə bax
                        </a>
                      </div>
                      {/* End company title */}
                    </div>
                  </div>
                  {/* End .company-widget */}

                  {/* <div className="sidebar-widget contact-widget">
                    <h4 className="widget-title">Contact Us</h4>
                    <div className="widget-content">
                      <div className="default-form">
                        <Contact />
                      </div>
                    </div>
                  </div> */}
                  {/* End contact-widget */}
                </aside>
                {/* End .sidebar */}
              </div>
              {/* End .sidebar-column */}
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

export default JobSingleDynamicV2