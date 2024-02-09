import employersInfo from "../../data/topCompany";
import LoginPopup from "../common/form/login/LoginPopup";
import FooterDefault from "../footer/common-footer";
import MobileMenu from "../header/MobileMenu";
import JobDetailsDescriptions from "./shared-components/JobDetailsDescriptions";
import RelatedJobs from "./related-jobs/RelatedJobs";
import MapJobFinder from "../job-listing-pages/components/MapJobFinder";
import Social from "./social/Social";
import PrivateMessageBox from "./shared-components/PrivateMessageBox";
import { useParams } from "react-router";
import DefaulHeader2 from "../header/DefaulHeader2";
import { useSelector,useDispatch } from "react-redux";
import { setLoading } from "../../features/loading/loadingSlice";
import JobBox from "../job-listing-pages/job-list-v6/JobBox";
import { useState,useEffect } from "react";
import { handleApiError } from "../../utils/apiErrorHandling";
import { getcompanydetail } from "../../services/api/common_api";
import defcompanylogo from "../../img/defaultcompanylogo.jpg"
import { Link } from "react-router-dom";
const EmployersSingleV1 = () => {
  const {loading} = useSelector(state=>state.loading);
  const dispatch = useDispatch();
  const [employer,setEmloyer] = useState(null)
  const id = useParams().id;
  const {alljobs} = useSelector(state=>state.job)
  const companyJobs = alljobs?.filter(job=>job?.companyId === id);

  useEffect(()=>{
    dispatch(setLoading(true))
    const gtcmp = async () => {
      try {
        const {data} = await getcompanydetail(id);
        console.log(data)
        setEmloyer(data.data)
        dispatch(setLoading(false))
      } catch (error) {
        dispatch(setLoading(false))
        handleApiError(error);
      }
    }
    gtcmp();
  },[id,dispatch])
  // const employer =
  //   employersInfo.find((item) => item.id == id) || employersInfo[0];

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
      {!loading && !employer && <section className="job-detail-section">
        Məlumat tapılmadı
        </section>}
      {employer &&  <section className="job-detail-section">
        {/* <!-- Upper Box --> */}
        <div className="upper-box">
          <div className="auto-container">
            <div className="job-block-seven">
              <div className="inner-box">
                <div className="content">
                  <span className="company-logo">
                    <img
                      width={100}
                      height={100}
                      src={employer?.companyInfo?.logo || defcompanylogo}
                      alt="logo"
                    />
                  </span>
                  <h4>{employer?.name || "Qeyd yoxdur"}</h4>

                  <ul className="job-info">
                    <li>
                      <span className="icon flaticon-map-locator"></span>
                      {employer?.companyInfo?.city || "Qeyd yoxdur"}
                    </li>
                    {/* compnay info */}
                    <li>
                      <span className="icon flaticon-briefcase"></span>
                      {employer?.companyInfo?.categories[0] || "Qeyd yoxdur"}
                    </li>
                    {/* location info */}
                    <li>
                      <span className="icon flaticon-telephone-1"></span>
                      {employer?.companyInfo?.phone || "Qeyd yoxdur"}
                    </li>
                    {/* time info */}
                    <li>
                      <span className="icon flaticon-mail"></span>
                      {employer?.email || "Qeyd yoxdur"}
                    </li>
                    {/* salary info */}
                  </ul>
                  {/* End .job-info */}

                  <ul className="job-other-info">
                    <li className="time">{employer?.companyInfo?.vacancynum} Vakansiya</li>
                  </ul>
                  {/* End .job-other-info */}
                </div>
                {/* End .content */}

                <div className="btn-box">
                  {/* <button
                    className="theme-btn btn-style-one"
                    data-bs-toggle="modal"
                    data-bs-target="#privateMessage"
                  >
                    Private Message
                  </button> */}
                  <button className="bookmark-btn">
                    <i className="flaticon-bookmark"></i>
                  </button>
                </div>
                {/* End btn-box */}

                {/* <!-- Modal --> */}
                <div
                  className="modal fade"
                  id="privateMessage"
                  tabIndex="-1"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="apply-modal-content modal-content">
                      <div className="text-center">
                        <h3 className="title">
                          Send message to {employer?.name}
                        </h3>
                        <button
                          type="button"
                          className="closed-modal"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      {/* End modal-header */}

                      <PrivateMessageBox />
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

        {/* <!-- job-detail-outer--> */}
        <div className="job-detail-outer">
          <div className="auto-container">
            <div className="row">
              <div className="content-column col-lg-8 col-md-12 col-sm-12">
                {/*  job-detail */}
                <JobDetailsDescriptions employer={employer} />
                {/* End job-detail */}

                {/* <!-- Related Jobs --> */}
                <div className="related-jobs mt-5">
                  {companyJobs.length > 0 &&
                  <div className="title-box">
                    <h3>{employer?.name} Şirkətinin Vakansiyaları</h3>
                  </div>
                  }
                  {/* End .title-box */}

                  <RelatedJobs companyJobs={companyJobs} />
                  {/* End RelatedJobs */}
                </div>
                {/* <!-- Related Jobs --> */}
              </div>
              {/* End .content-column */}

              <div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
                <aside className="sidebar">
                  <div className="sidebar-widget company-widget">
                    <div className="widget-content">
                      {/*  compnay-info */}
                      <ul className="company-info mt-0">
                        <li>
                          Şirkət tipi: <span>{employer?.companyInfo?.categories[0] || "Qeyd yoxdur"}</span>
                        </li>
                        {/* <li>
                          Company size: <span>501-1,000</span>
                        </li> */}
                        {/* <li>
                          Yaranma tarixi: <span>2011</span>
                        </li> */}
                        <li>
                          Telefon: <span>{employer?.companyInfo?.phone || "Qeyd yoxdur"}</span>
                        </li>
                        <li>
                          Email: <span>{employer?.email || "Qeyd yoxdur"}</span>
                        </li>
                        <li>
                          Şəhər: <span>{employer?.companyInfo?.city || "Qeyd yoxdur"}</span>
                        </li>
                        {/* <li>
                          Sosial şəbəkələri:
                          <Social />
                        </li> */}
                      </ul>
                      {/* End compnay-info */}

                      <div className="btn-box">
                        <Link
                          to={employer?.companyInfo?.website?.includes('https://www.')? employer.companyInfo.website : `https://${employer.companyInfo.website}`}
                          className="theme-btn btn-style-three"
                          style={{ textTransform: "lowercase" }}
                          target="_blank"
                        >
                         {employer?.companyInfo?.website || "Qeyd yoxdur"} 
                        </Link>
                      </div>
                      {/* btn-box */}
                    </div>
                  </div>
                  {/* End company-widget */}

                  {/* <!-- Map Widget --> */}
                  {/* <div className="sidebar-widget">
                    <h4 className="widget-title">Job Location</h4>
                    <div className="widget-content">
                      <div style={{ height: "300px", width: "100%" }}>
                        <MapJobFinder />
                      </div>
                    </div>
                  </div> */}
                  {/* End sidebar-widget */}
                </aside>
                {/* End .sidebar */}
              </div>
              {/* End .sidebar-column */}
            </div>
          </div>
        </div>
        {/* <!-- job-detail-outer--> */}
      </section>}
      {/* <!-- End Job Detail Section --> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
};
export default EmployersSingleV1