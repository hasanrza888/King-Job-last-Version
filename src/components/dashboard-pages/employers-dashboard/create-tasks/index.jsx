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

const index = () => {
  return (
    <div className="page-wrapper dashboard">
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

export default index;
