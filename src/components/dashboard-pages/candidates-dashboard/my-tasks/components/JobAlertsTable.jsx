import { Link } from "react-router-dom";
import jobs from "../../../../../data/job-featured.js";
import { useState } from "react";
import ViewTask from "./ViewTask.jsx";

const JobAlertsTable = () => {
  const [openTask, setOpenTask] = useState(false);
  const handleClose = () => setOpenTask(false);
  const handleShow = () => setOpenTask(true);

  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>Müraciətlərim üçün gələn tapşırıqlar</h4>
        
        {/* <!--Tabs Box--> */}
        {/* <div className="chosen-outer">
          <select className="chosen-single form-select">
            <option>Last 6 Months</option>
            <option>Last 12 Months</option>
            <option>Last 16 Months</option>
            <option>Last 24 Months</option>
            <option>Last 5 year</option>
          </select>
        </div> */}
      </div>
      {/* End filter top bar */}

      {/* Start table widget content */}
      <div className="widget-content">
        <div className="table-outer">
          <div className="table-outer">
            <table className="default-table manage-job-table">
              <thead>
                <tr>
                  <th>Tapşırıq</th>
                  <th>Göndərilmə tarixi</th>
                  <th>Bitmə tarixi</th>
                  <th>İdarə Etmə</th>
                </tr>
              </thead>

              <tbody>
                {jobs.slice(4, 8).map((item) => (
                  <tr key={item.id}>
                    <td>
                      {/* <!-- Job Block --> */}
                      <div className="job-block">
                        <div className="inner-box">
                          <div className="content">
                            <span className="company-logo">
                              <img
                                width={50}
                                height={49}
                                src={item.logo}
                                alt="logo"
                              />
                            </span>
                            <h4>
                              <Link to={`/vacancies-list/${item.id}`}>
                                {item.jobTitle}
                              </Link>
                            </h4>
                            <ul className="job-info">
                              <li>
                                <span className="icon flaticon-briefcase"></span>
                                Şirkət adı
                              </li>
                              <li>
                                <span className="icon flaticon-map-locator"></span>
                                Vakansiya
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>Human Resources, Junior</td>
                    <td>Nov 12, 2021 </td>
                    <td>
                      <div className="option-box">
                        <ul className="option-list">
                          <li>
                            <button data-text="Həll etməyə başla !" onClick={()=> setOpenTask(true)}>
                              <i className="las la-play"></i>
                            </button>
                          </li>
                          <li>
                            <button data-text="Tapşırıqdan İmtina Et">
                              <i className="las la-ban"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* End table widget content */}

      {/* task open modal */}
      <ViewTask handleClose={handleClose} handleShow={handleShow} openTask={openTask} task={"task item"}/>
    </div>
  );
};

export default JobAlertsTable;
