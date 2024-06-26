import MobileMenu from "../../../header/MobileMenu";
import LoginPopup from "../../../common/form/login/LoginPopup";
import DashboardCandidatesSidebar from "../../../header/DashboardCandidatesSidebar";
import BreadCrumb from "../../BreadCrumb";
import CopyrightFooter from "../../CopyrightFooter";
import ChatBox from "./components";
import DashboardCandidatesHeader from "../../../header/DashboardCandidatesHeader";
import MenuToggler from "../../MenuToggler";
import { useSelector } from "react-redux";
import ChatHamburger from "../../employers-dashboard/messages/components/ChatHamburger";
import SEO from "../../../../utils/seo";
import pImage from "../../../../img/social_media/new_vacancy.png";

const Index = () => {
  const { chatSidebar } = useSelector((state) => state.toggle);
  const {user,info} = useSelector(state=>state.auth);

  return (
    <div className="page-wrapper dashboard">
      <SEO
        title = {`${user?.name} - Mesajlar | KING JOB`}
        description = "Hesabınızdakı Mesajlar səhifəsində müraciət etdiniz vakansiyanın aid olduğu şirkətlərə mesaj yazaraq əlaqə saxlaya bilərsiniz !"
        name = "King Job" 
        ogType = "article"
        twType = "summary_large_image" 
        image = {pImage}
        // imageWidth = "" 
        noindex = {true}
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

          {/* <BreadCrumb title="Messages!" /> */}
          {/* breadCrumb */}
          <BreadCrumb title="Mesajlar" />
          <p>Yalnız müraciət etdiyiniz şirkətlərə mesaj göndərə bilərsiniz !</p>
          
          {/* Collapsible sidebar button */}
          <div className="d-flex flex-row-reverse btn-box mb-5" title="Kontaktlarım">
            <ChatHamburger />
          </div>

          <div className="row">
            <div
              className={`col-lg-12 ${
                chatSidebar ? "active-chat-contacts" : ""
              }`}
            >
              <div className="chat-widget">
                <div className="widget-content">
                  <ChatBox />
                </div>
              </div>
            </div>
          </div>
          {/* End row */}
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
