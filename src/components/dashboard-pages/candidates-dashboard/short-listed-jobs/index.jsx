import MobileMenu from "../../../header/MobileMenu";
import LoginPopup from "../../../common/form/login/LoginPopup";
import DashboardCandidatesSidebar from "../../../header/DashboardCandidatesSidebar";
import BreadCrumb from "../../BreadCrumb";
import CopyrightFooter from "../../CopyrightFooter";
import JobFavouriteTable from "./components/JobFavouriteTable";
import DashboardCandidatesHeader from "../../../header/DashboardCandidatesHeader";
import MenuToggler from "../../MenuToggler";
import SEO from "../../../../utils/seo";
import pImage from "../../../../img/social_media/new_vacancy.png";
import { useSelector } from "react-redux";

const Index = () => {
  const {user,info} = useSelector(state=>state.auth);

  return (
    <div className="page-wrapper dashboard">
      <SEO
        title = {`${user?.name} - Yadda saxlanmışlar | KING JOB`}
        description = "Hesabınızdakı yadda saxlanmışlar səhifəsində yadda saxlamaq üçün kliklədiyiniz vakansiyalara baxa bilərsiniz !"
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

      <DashboardCandidatesHeader />
      {/* End Header */}

      <MobileMenu />
      {/* End MobileMenu */}

      <DashboardCandidatesSidebar />
      {/* <!-- End Candidates Sidebar Menu --> */}

      {/* <!-- Dashboard --> */}
      <section className="user-dashboard">
        <div className="dashboard-outer">
          <MenuToggler />
          {/* Collapsible sidebar button */}

          <BreadCrumb title="Yadda saxlanmışlar" />
          {/* breadCrumb */}

          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Ls widget --> */}
              <div className="ls-widget">
                <JobFavouriteTable />
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
