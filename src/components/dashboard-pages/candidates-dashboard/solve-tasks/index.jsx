import { useState } from "react";
import BreadCrumb from "../../BreadCrumb";
import ConfirmModal from "./components/ConfirmModal";
import QuestionBox from "./components/QuestionBox";

const Index = () => {
  const [openTask, setOpenTask] = useState(true);
  const handleClose = () => setOpenTask(false);
  const handleShow = () => setOpenTask(true);
  return (
    <div className="page-wrapper dashboard task-solve-p">
      {/* <span className="header-span"></span> */}
      
      {/* <!-- Dashboard --> */}
      <section className="user-dashboard pb-5">
        <div className="dashboard-outer">


          <BreadCrumb title="Tapşırıq adı" />
          {/* breadCrumb */}

          <div className="row">
            <div className="col-lg-12">
                <QuestionBox />
                <QuestionBox />
                <div className="row d-flex justify-content-between mt-4">
                    <div className="form-group col-lg-6 col-md-12 text-right">
                        <button className="theme-btn btn-style-one">Göndər</button>
                    </div>
                </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End dashboard-outer */}
      </section>
      {/* <!-- End Dashboard --> */}

    </div>
  );
};

export default Index