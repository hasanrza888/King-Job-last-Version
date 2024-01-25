import { Link } from "react-router-dom";
import jobs from "../../../../../data/job-featured.js";
import { useState,useEffect } from "react";
import ViewTask from "./ViewTask.jsx";
import { fetchusertasks } from "../../../../../services/api/candidate_api.js";
import { setUserTasks } from "../../../../../features/candidate/candidateSlice.js";
import { useSelector,useDispatch } from "react-redux";
import {handleApiError} from "../../../../../utils/apiErrorHandling.js"
const JobAlertsTable = () => {
  const dispatch = useDispatch();
  const {usertasks} = useSelector(state=>state.candidate);
  const [selectedTask,setSelectedTask] = useState(null);
  
  useEffect(()=>{
    const fetchtasks = async () => {
      try {
        const {data} = await fetchusertasks();
        dispatch(setUserTasks(data.data))
      } catch (error) {
        handleApiError(error);
      }
    }
    fetchtasks();

  },[dispatch])
  const [openTask, setOpenTask] = useState(false);
  const handleClose = () => setOpenTask(false);
  const handleShow = () => setOpenTask(true);
  const slc = (t) => {
    setSelectedTask(t);
    handleShow();
  }
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
                  <th>Müraciət</th>
                  <th>Tapşırıq adı</th>
                  <th>Sual sayı</th>
                  <th>Bitmə tarixi</th>
                  <th>Cəhd sayı</th>
                  <th>İdarə Etmə</th>
                </tr>
              </thead>

              <tbody>
                {usertasks?.map((item) => (
                  <tr key={item?._id}>
                    <td>
                      {/* <!-- Job Block --> */}
                      <div className="job-block">
                        <div className="inner-box">
                          <div className="content">
                            <span className="company-logo">
                              <img
                                width={50}
                                height={49}
                                src={item?.companyLogo}
                                alt="logo"
                              />
                            </span>
                            <h4>
                              <Link to={`/vacancies-list/${item.id}`}>
                                {item?.jobName}
                              </Link>
                            </h4>
                            <ul className="job-info">
                              <li>
                                <span className="icon flaticon-briefcase"></span>
                                {item?.companyName}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item?.taskInfoInfo?.name}</td>
                    <td>{item?.taskInfoInfo?.numOfQuestion}</td>
                    <td>{item?.taskInfo?.endTime}</td>
                    <td>{item?.taskInfo?.numberOfTry}</td>
                    <td>
                      <div className="option-box">
                        <ul className="option-list">
                          <li>
                            <button data-text="Həll etməyə başla !" onClick={()=>{slc(item)}}>
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
      <ViewTask handleClose={handleClose} handleShow={handleShow} openTask={openTask} task={selectedTask}/>
    </div>
  );
};

export default JobAlertsTable;
