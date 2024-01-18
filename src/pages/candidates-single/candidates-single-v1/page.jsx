import candidates from "../../../data/candidates";
import candidateResume from "../../../data/candidateResume";
import LoginPopup from "../../../components/common/form/login/LoginPopup";
import FooterDefault from "../../../components/footer/common-footer";
import DefaulHeader from "../../../components/header/DefaulHeader";
import MobileMenu from "../../../components/header/MobileMenu";
import Contact from "../../../components/candidates-single-pages/shared-components/Contact";
import GalleryBox from "../../../components/candidates-single-pages/shared-components/GalleryBox";
import Social from "../../../components/candidates-single-pages/social/Social";
import JobSkills from "../../../components/candidates-single-pages/shared-components/JobSkills";
import AboutVideo from "../../../components/candidates-single-pages/shared-components/AboutVideo";
import { useParams } from "react-router";
import { getapplywithid } from "../../../services/api/company_api";
import { useEffect, useState } from "react";
import { handleApiError } from "../../../utils/apiErrorHandling";
import defaultProfile  from '../../../img/defaultcompanylogo.jpg'
import { useSelector } from "react-redux";
import DashboardHeader from "../../../components/header/DashboardHeader";
const CandidateSingleDynamicV1 = () => {
  const id = useParams().id;
  const candidate = candidates.find((item) => item.id === id) || candidates[0];
  const {allapplyers,vacancies,applystatuses} = useSelector(state=>state.employer);
  const [applyer,setApplyer] = useState(null);
  useEffect(()=>{
    const fetchapplyer = async ()=> {
      try {
        const {data} = await getapplywithid(id);
        console.log(data);
        setApplyer(data.data)
      } catch (error) {
        handleApiError(error);
      }
    }
    fetchapplyer();
  },[id])
  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <LoginPopup />
      {/* End Login Popup Modal */}

      <DashboardHeader />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      {/* <!-- Job Detail Section --> */}
      <section className="candidate-detail-section">
        <div className="upper-box">
          <div className="auto-container">
            <div className="candidate-block-five">
              <div className="inner-box">
                <div className="content">
                  <figure className="image">
                    <img
                      width={100}
                      height={100}
                      src={applyer?.user?.profilepic || defaultProfile}
                      alt="avatar"
                    />
                  </figure>
                  <h4 className="name">{applyer?.user?.name || "Qeyd yoxdur"}</h4>

                  <ul className="candidate-info">
                    <li className="designation">{applyer?.user?.jobTitle || "Qeyd yoxdur"}</li>
                    <li>
                      <span className="icon flaticon-map-locator"></span>
                      {applyer?.user?.city || "Qeyd yoxdur"}
                    </li>
                    <li>
                      <span className="icon flaticon-money"></span>
                      {applyer?.user?.currentSalary || "Qeyd yoxdur"}
                    </li>
                    {/* <li>
                      <span className="icon flaticon-clock"></span> Member
                      Since,Aug 19, 2020
                    </li> */}
                  </ul>

                  <ul className="post-tags">
                    {applyer?.user?.skills?.map((val, i) => (
                      <li key={i}>{val}</li>
                    ))}
                  </ul>
                </div>

                <div className="btn-box">
                  {/* <a
                    className="theme-btn btn-style-one"
                    href={applyer?.file}
                    download
                  >
                    Cv-ni yüklə
                  </a> */}
                  {/* <button className="bookmark-btn">
                    <i className="flaticon-bookmark"></i>
                  </button> */}
                  <select className="chosen-single form-select chosen-container">
        <option value={""}>Status ver</option>
        {
          applystatuses?.map((val,ind)=>(
            <option  style={{color:val?.color}} value={val?.name}>{val?.name}</option>
          ))
        }
      </select>
                </div>
              </div>
            </div>
            {/*  <!-- Candidate block Five --> */}
          </div>
        </div>
        {/* <!-- Upper Box --> */}

        <div className="candidate-detail-outer">
          <div className="auto-container">
            <div className="row">
              <div className="content-column col-lg-8 col-md-12 col-sm-12">
                <div className="job-detail">
                  <div className="video-outer">
                    <h4>Müraciətçi haqqında</h4>
                    {false && <AboutVideo />}

                  </div>
                  {/* <!-- About Video Box --> */}
                  <p>
                   {
                    applyer?.user?.coverLetter  || "Qeyd yoxdur"
                   }
                  </p>
 

                  {/* <!-- Portfolio --> */}
                  <div className="portfolio-outer">
                    {/* <div className="row">
                      <GalleryBox />
                    </div> */}
                  </div>
                  <div
                      className={`resume-outer theme-blue`}
                    >
                      <div className="upper-title">
                        <h4>Təcrübə</h4>
                      </div>
                      {/* <!-- Start Resume BLock --> */}
                      {applyer?.user?.experiences?.map((item) => (
                        <div className="resume-block" key={item._id}>
                          <div className="inner">
                            <span className="name">{item.companyName?.[0]}</span>
                            <div className="title-box">
                              <div className="info-box">
                                <h3>{item?.position}</h3>
                                <span>{item?.companyName}</span>
                              </div>
                              <div className="edit-box">
                                <span className="year">{item?.startDate?.split('-')[0]}-{item?.endDate?.split('-')[0]}</span>
                              </div>
                            </div>
                            <div className="text">{item?.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div
                      className={`resume-outer`}
                    >
                      <div className="upper-title">
                        <h4>Təhsil</h4>
                      </div>
                      {/* <!-- Start Resume BLock --> */}
                      {applyer?.user?.educations?.map((item) => (
                        <div className="resume-block" key={item._id}>
                          <div className="inner">
                            <span className="name">{item.school?.[0]}</span>
                            <div className="title-box">
                              <div className="info-box">
                                <h3>{item?.name}</h3>
                                <span>{item?.school}</span>
                              </div>
                              <div className="edit-box">
                                <span className="year">{item?.startDate?.split('-')[0]}-{item?.endDate?.split('-')[0]}</span>
                              </div>
                            </div>
                            <div className="text">{item?.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div
                      className={`resume-outer theme-yellow`}
                    >
                      <div className="upper-title">
                        <h4>Sertifikatlar/Uğurlar</h4>
                      </div>
                      {/* <!-- Start Resume BLock --> */}
                      {applyer?.user?.achievements?.map((item) => (
                        <div className="resume-block" key={item._id}>
                          <div className="inner">
                            <span className="name">{item.name?.[0]}</span>
                            <div className="title-box">
                              <div className="info-box">
                                <h3>{item?.name}</h3>
                                <a href={item?.certifivateUrl}>Sertifikat</a>
                              </div>
                              <div className="edit-box">
                                <span className="year">{item?.startDate?.split('-')[0]}-{item?.endDate?.split('-')[0]}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  {/* <!-- Candidate Resume Start --> */}
                  
                  {/* <!-- Candidate Resume End --> */}
                </div>
              </div>
              {/* End .content-column */}

              <div className="sidebar-column col-lg-4 col-md-12 col-sm-12">
                <aside className="sidebar">
                  <div className="sidebar-widget">
                    <div className="widget-content">
                      <ul className="job-overview">
                        <li>
                          <i className="icon icon-calendar"></i>
                          <h5>Təcrübə</h5>
                          <span>{applyer?.user?.experiencesYear || "Qeyd yoxdur"}</span>
                        </li>

                        <li>
                          <i className="icon icon-expiry"></i>
                          <h5>Yaş</h5>
                          <span>{applyer?.user?.age || "Qeyd yoxdur"}</span>
                        </li>

                        <li>
                          <i className="icon icon-rate"></i>
                          <h5>Hazırkı əmək haqqı</h5>
                          <span>{applyer?.user?.currentSalary || "Qeyd yoxdur"}</span>
                        </li>

                        <li>
                          <i className="icon icon-salary"></i>
                          <h5>Gözlənti əməkhaqqı</h5>
                          <span>{applyer?.user?.expestedSalary || "Qeyd yoxdur"}</span>
                        </li>

                        {/* <li>
                          <i className="icon icon-user-2"></i>
                          <h5>Gender:</h5>
                          <span>Female</span>
                        </li> */}

                        <li>
                          <i className="icon icon-language"></i>
                          <h5>Dil bilikləri</h5>
                          <span>{applyer?.user?.languages || "Qeyd yoxdur"}</span>
                        </li>

                        <li>
                          <i className="icon icon-degree"></i>
                          <h5>Hazırkı təhsil pilləsi</h5>
                          <span>{applyer?.user?.educationlevelNow || "Qeyd yoxdur"}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* End .sidebar-widget conadidate overview */}

                  {/* <div className="sidebar-widget social-media-widget">
                    <h4 className="widget-title">Sosial mediya</h4>
                    <div className="widget-content">
                      <div className="social-links">
                        <Social />
                      </div>
                    </div>
                  </div> */}
                  {/* End .sidebar-widget social-media-widget */}

                  <div className="sidebar-widget">
                    <h4 className="widget-title">Professional bacarıqlar</h4>
                    <div className="widget-content">
                      <ul className="job-skills">
                        {applyer?.user?.skills?.length ===0 && "Qeyd yoxdur"}
                        {applyer?.user?.skills?.length>0 && <JobSkills skills={applyer?.user?.skills} />}
                      </ul>
                    </div>
                  </div>
                  {/* End .sidebar-widget skill widget */}

                  {/* <div className="sidebar-widget contact-widget">
                    <h4 className="widget-title">Contact Us</h4>
                    <div className="widget-content">
                      <div className="default-form">
                        <Contact />
                      </div>
                    </div>
                  </div> */}
                  {/* End .sidebar-widget contact-widget */}
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

export default CandidateSingleDynamicV1