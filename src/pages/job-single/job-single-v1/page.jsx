import jobs from "../../../data/job-featured";
import LoginPopup from "../../../components/common/form/login/LoginPopup";
import FooterDefault from "../../../components/footer/common-footer";
import DefaulHeader from "../../../components/header/DefaulHeader";
import MobileMenu from "../../../components/header/MobileMenu";
import RelatedJobs from "../../../components/job-single-pages/related-jobs/RelatedJobs";
import JobOverView from "../../../components/job-single-pages/job-overview/JobOverView";
import JobSkills from "../../../components/job-single-pages/shared-components/JobSkills";
import CompnayInfo from "../../../components/job-single-pages/shared-components/CompanyInfo";
import MapJobFinder from "../../../components/job-listing-pages/components/MapJobFinder";
import SocialTwo from "../../../components/job-single-pages/social/SocialTwo";
import JobDetailsDescriptions from "../../../components/job-single-pages/shared-components/JobDetailsDescriptions";
import ApplyJobModalContent from "../../../components/job-single-pages/shared-components/ApplyJobModalContent";
import { useLocation, useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { updateJob } from "../../../features/job/jobSlice";
import { increaseViews } from "../../../services/api/common_api";
import {toast} from 'react-toastify'
import {Modal} from "bootstrap";
import { handleApiError } from "../../../utils/apiErrorHandling";
import { useEffect } from "react";
import DefaulHeader2 from "../../../components/header/DefaulHeader2";
import { Link } from "react-router-dom";
import defcompanylogo from "../../../img/defaultcompanylogo.jpg"
import SEO from "../../../utils/seo";
import pImage from "../../../img/social_media/new_vacancy.png";

const JobSingleDynamicV1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const {isLoggedIn} = useSelector(state=>state.auth);
  const id = useParams().id;
  const company = jobs.find((item) => item.id == id) || jobs[0];
  const {alljobs,viewedJobs} = useSelector(state=>state.job)
  let checker = viewedJobs.includes(id) ? 'second' : 'first';
  const job = alljobs.find((item) => item._id === id);
  console.log(job)
  useEffect(()=>{
    const incrs = async () => {
      try {
        const {data} = await increaseViews(id,checker);
        const { numberOfViews } = data.data;
        dispatch(updateJob({...job,numberOfViews:numberOfViews}));
        
      } catch (error) {
        handleApiError(error)
      }
    }
    incrs();
  },[checker,dispatch,id])

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

  function htmlToPlainText(html) {
    var element = document.createElement('div');
    element.innerHTML = html;
    
    // Traverse the DOM tree and extract text content
    function traverse(node) {
      var text = '';
      
      if (node.nodeType === Node.TEXT_NODE) {
        text += node.textContent;
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        var children = node.childNodes;
        for (var i = 0; i < children.length; i++) {
          text += traverse(children[i]);
        }
      }
      
      return text;
    }
    
    return traverse(element);
  }
  return (
    <>
      {
        job &&
        <SEO
          title = {`${job?.name} | ${job?.companyName} | kingjob.pro`}
          description = {htmlToPlainText(job?.['descriptionOfVacancy']).slice(0, 170)}
          name = "King Job" 
          ogType = "article"
          twType = "summary_large_image" 
          image = {pImage}
          // imageWidth = "" 
        />
      }

      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <LoginPopup />
      {/* End Login Popup Modal */}

      <DefaulHeader2 />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      {/* <!-- Job Detail Section --> */}
      {
        job ?
          <section className="job-detail-section">
            <div className="upper-box">
              <div className="auto-container">
                <div className="job-block-seven">
                  <div className="inner-box">
                    <div className="content">
                      <span className="company-logo">
                        <img
                          width={100}
                          height={98}
                          src={job?.logo || defcompanylogo}
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
                          {job?.agreedSalary ? 'Razılaşma' :job?.salary}
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

                    {/*<div className="btn-box">
                      <button
                        onClick={openModal}
                        className="theme-btn btn-style-one"
                      >
                        Müraciət Et
                      </button>
                      <button className="bookmark-btn">
                        <i className="flaticon-bookmark"></i>
                      </button>
                    </div>*/}
                    {/* End apply for job btn */}

                    {/* <!-- Modal --> */}
                    {
                      isLoggedIn && (
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

                              <ApplyJobModalContent job={id}/>
                              {/* End PrivateMessageBox */}
                            </div>
                            {/* End .send-private-message-wrapper */}
                          </div>
                        </div>
                      )
                    }
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
                  <div className="content-column col-lg-8 col-md-12 col-sm-12">
                    <JobDetailsDescriptions job={job}/>
                    {/* End jobdetails content */}

                    {/* <div className="other-options">
                      <div className="social-share">
                        <h5>Share this job</h5>
                        <SocialTwo />
                      </div>
                    </div> */}
                    {/* <!-- Other Options --> */}

                    
                    {/* <!-- Related Jobs --> */}
                  </div>
                  {/* End .content-column */}

                  <div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
                    <aside className="sidebar">
                      <div className="sidebar-widget">
                        {/* <!-- Job Overview --> */}
                        <h4 className="widget-title">Vakansiya Detalları</h4>
                        <JobOverView job={job}/>

                        {/* <!-- Map Widget --> */}
                        {/* <h4 className="widget-title mt-5">Job Location</h4>
                        <div className="widget-content">
                          <div className="map-outer">
                            <div style={{ height: "300px", width: "100%" }}>
                              <MapJobFinder />
                            </div>
                          </div>
                        </div> */}
                        {/* <!--  Map Widget --> */}

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
                                src={job?.logo || defcompanylogo}
                                alt="resource"
                              />
                            </div>
                            <h5 className="company-name">{job?.companyName}</h5>
                            <Link to={`/companies-list/${job?.companyId}`} className="profile-link">
                              Şirkətin profilinə bax
                            </Link>
                          </div>
                          {/* End company title */}

                          {/* <CompnayInfo /> */}

                          {/* <div className="btn-box">
                            <Link
                              to={`/companies-list/${job?.company}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="theme-btn btn-style-three"
                            >
                              Şirkətin profilinə bax
                            </Link>
                          </div> */}
                          {/* End btn-box */}
                        </div>
                      </div>
                      {/* End .company-widget */}
                    </aside>
                    {/* End .sidebar */}
                  </div>
                  {/* End .sidebar-column */}
                </div>
                <div className="related-jobs">
                  {/* <div className="title-box">
                    <h3>Əlaqədar Vakansiyalar</h3>
                  </div> */}
                  {/* End title box */}
                  <RelatedJobs category={job?.category} id={job?._id} />
                </div>
              </div>
            </div>
            {/* <!-- job-detail-outer--> */}
          </section>
          :
          (<h1 style={{height:'100vh', display:"flex", justifyContent:"center", alignItems:"center"}}>Uyğun iş tapılmadı</h1>)
      }
      
      {/* <!-- End Job Detail Section --> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default JobSingleDynamicV1
