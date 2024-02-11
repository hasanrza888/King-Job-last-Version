import MobileMenu from "../../../header/MobileMenu";
import DashboardHeader from "../../../header/DashboardHeader";
import LoginPopup from "../../../common/form/login/LoginPopup";
import DashboardEmployerSidebar from "../../../header/DashboardEmployerSidebar";
import BreadCrumb from "../../BreadCrumb";
import CopyrightFooter from "../../CopyrightFooter";
import Form from "./components/Form";
import MenuToggler from "../../MenuToggler";
import SEO from "../../../../utils/seo";
import pImage from "../../../../img/social_media/new_vacancy.png";
import { useSelector } from "react-redux";

const Index = () => {
  const {user,info} = useSelector(state=>state.auth);

  return (
    <div className="page-wrapper dashboard">
      <SEO
        title = {`${user?.name} - Şifrəni Dəyiş | KING JOB`}
        description = "Hesabınızdakı Şifrəni dəyiş səhifəsində hesabınızın şifrəsini dəyişə bilərsiniz !"
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
          <BreadCrumb title="Şifrəni dəyiş" />
          {/* breadCrumb */}

          <MenuToggler />
          {/* Collapsible sidebar button */}

          <div className="ls-widget">
            <div className="widget-title">
              <h4>Şifrəni dəyiş</h4>
            </div>

            <div className="widget-content">
              <Form />
            </div>
          </div>
          {/* <!-- Ls widget --> */}
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
