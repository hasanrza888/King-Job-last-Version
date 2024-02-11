import MobileMenu from "../../../header/MobileMenu";
import DashboardHeader from "../../../header/DashboardHeader";
import LoginPopup from "../../../common/form/login/LoginPopup";
import DashboardEmployerSidebar from "../../../header/DashboardEmployerSidebar";
import BreadCrumb from "../../BreadCrumb";
import CopyrightFooter from "../../CopyrightFooter";
import AboutTask from "./components/AboutTask";
import CreateQuestion from "./components/CreateQuestion";
import MenuToggler from "../../MenuToggler";
import FilterTask from "./components/FilterTask";
import SelectedQuestions from "./components/selectedQuestions";
import SEO from "../../../../utils/seo";
import pImage from "../../../../img/social_media/new_vacancy.png";
import { useSelector } from "react-redux";

const Index = () => {
  const {user,info} = useSelector(state=>state.auth);

  return (
    <div className="page-wrapper dashboard">
      <SEO
        title = {`${user?.name} - Sual Əlavə Et | KING JOB`}
        description = "Hesabınızdakı Sual Əlavə Et səhifəsində öncədən yaratdığınız tapşırıqlara suallar əlavə edə bilərsiniz !"
        name = "King Job" 
        ogType = "article"
        twType = "summary_large_image" 
        image = {pImage}
        // imageWidth = "" 
      />
      <span className="header-span"></span>
      {/* <!-- Header Span for hight --> */}

      <LoginPopup />
      {/* End Login Popup Modal */}

      <DashboardHeader />
      {/* End Header */}

      <MobileMenu />
      {/* End MobileMenu */}

      <DashboardEmployerSidebar />
      {/* <!-- End User Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <MenuToggler />

          <BreadCrumb title="Tapşırıq yarat" />
          {/* breadCrumb */}

          
          {/* Collapsible sidebar button */}

          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Ls widget --> */}
              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <FilterTask />
                  </div>
                </div>
              </div>
              
              {
                
                <div className="ls-widget">
                  <div className="tabs-box">
                    <div className="">
                      <SelectedQuestions />
                    </div>
                  </div>
                </div>
              }
              {/* <!-- Ls widget --> */}
              {/* <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-title">
                    <h4>Suallar yarat</h4>
                  </div>
                </div>
              </div> */}
              <div className="ls-widget">
                <div className="tabs-box">
                  <div className="widget-content">
                    <CreateQuestion />
                    {/* End post box form */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End dashboard-outer */}
      </section>
      {/* <!-- End Dashboard --> */}

      <CopyrightFooter />
      {/* <!-- End Copyright --> */}
    </div>
    // End page-wrapper
  );
};

export default Index;
