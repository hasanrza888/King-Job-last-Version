import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";

import mobileMenuData from "../../../data/mobileMenuData";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import {
  isActiveLink,
  isActiveParentChaild,
} from "../../../utils/linkActiveChecker";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Index = () => {

  const router = useNavigate();
  const location = useLocation();

  return (
    <div
      className="offcanvas offcanvas-start mobile_menu-contnet"
      tabIndex="-1"
      id="offcanvasMenu"
      data-bs-scroll="true"
    >
      <SidebarHeader />
      {/* End pro-header */}

      
        <Sidebar>
          <Menu>
            {mobileMenuData.map((item) => (
              // <SubMenu
              //   className={
              //     isActiveParentChaild(item.items, location.pathname)
              //       ? "menu-active"
              //       : ""
              //   }
              //   label={item.label}
              //   key={item.id}
              // >
                // item.items.map((menuItem, i) => (
                  <MenuItem

                    onClick={()=>router(item.routePath)}
                    className={
                      isActiveLink(item.routePath, location.pathname)
                        ? "menu-active-link"
                        : ""
                    }
                    key={item.id}
                    component={<Link to={item.routePath} />}
                    // routerLink={<Link href={menuItem.routePath} />}
                  >
                    {item.label}
                  </MenuItem>
                // ))
              // </SubMenu>
            ))}
          </Menu>
        </Sidebar>


      <SidebarFooter />
    </div>
  );
};

export default Index;