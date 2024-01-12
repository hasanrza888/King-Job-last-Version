import { Link } from "react-router-dom";

const SidebarHeader = () => {
  return (
    <div className="pro-header">
      <Link to="/">
        <img width={154} height={50} src="/images/logo.svg" alt="King Job" />
      </Link>
      {/* End logo */}

      <div className="fix-icon" data-bs-dismiss="offcanvas" aria-label="Close">
        <span className="flaticon-close"></span>
      </div>
      {/* icon close */}
    </div>
  );
};

export default SidebarHeader;
