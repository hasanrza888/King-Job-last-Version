import MobileMenu from "../../../header/MobileMenu";
import DashboardHeader from "../../../header/DashboardHeader";
import LoginPopup from "../../../common/form/login/LoginPopup";
import DashboardEmployerSidebar from "../../../header/DashboardEmployerSidebar";
import BreadCrumb from "../../BreadCrumb";
import CopyrightFooter from "../../CopyrightFooter";
import ChatBox from "./components";
import MenuToggler from "../../MenuToggler";
import { useSelector } from "react-redux";
import ChatHamburger from "./components/ChatHamburger";
import SEO from "../../../../utils/seo";
import pImage from "../../../../img/social_media/new_vacancy.png";

const Index = () => {

  const { chatSidebar } = useSelector((state) => state.toggle);
  const {user,info} = useSelector(state=>state.auth);

  return (
    <div className="page-wrapper dashboard">
      <SEO
        title = {`${user?.name} - Mesajlar | KING JOB`}
        description = "Hesabınızdakı Mesajlar səhifəsində müraciətçilərinizə mesaj yazaraq əlaqə yarada bilərsiniz !"
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
          <BreadCrumb title="Mesajlar" />
          <p>Yalnız müraciət edən namizədlərə mesaj göndərə bilərsiniz !</p>
          
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
              {/* <!-- Chat Widget --> */}
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
