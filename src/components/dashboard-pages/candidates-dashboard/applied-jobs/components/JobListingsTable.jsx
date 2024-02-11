import { Link } from "react-router-dom";
import jobs from "../../../../../data/job-featured.js";
import { useSelector } from "react-redux";
const JobListingsTable = () => {
  const {myapplieds} = useSelector(state=>state.candidate)
  console.log(myapplieds)
  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>Müraciət etdiyim vakansiyalar</h4>

        <div className="chosen-outer">
          {/* <!--Tabs Box--> */}
          <select className="chosen-single form-select">
            <option>Son 1 ay</option>
            <option>Son 2 ay</option>
            <option>Son 3 ay</option>
            <option>Son 4 ay</option>
            <option>Son 5 ay</option>
          </select>
        </div>
      </div>
      {/* End filter top bar */}

      {/* Start table widget content */}
      <div className="widget-content">
        <div className="table-outer">
          <div className="table-outer">
            <table className="default-table manage-job-table">
              <thead>
                <tr>
                  <th>Ad</th>
                  <th>Müraciət tarixi</th>
                  <th>Status</th>
                  <th>Əməliyyat</th>
                </tr>
              </thead>

              <tbody>
                {myapplieds?.map((item) => (
                  <tr key={item._id}>
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
                              <Link to={`/vacancies-list/${item?.jobId}`}>
                                {item?.jobName}
                              </Link>
                            </h4>
                            <ul className="job-info">
                              <li title={item?.category}>
                                <span className="icon flaticon-briefcase"></span>
                                {item?.category.slice(0,6)}
                              </li>
                              <li>
                                <span className="icon flaticon-map-locator"></span>
                               {item?.jobCity}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item?.createdAt?.split("T")[0]}</td>
                    <td style={{color:item?.status[item?.status?.length-1]?.color}} className="status"><span style={{backgroundColor:'#C9F7F8',padding:"8px",borderRadius:'6px'}}>{item?.status[item?.status?.length-1]?.name}</span></td>
                    <td>
                      <div className="option-box">
                        <ul className="option-list">
                          <li>
                            <button data-text="View Aplication">
                              <span className="la la-eye"></span>
                            </button>
                          </li>
                          <li>
                            <button data-text="Delete Aplication">
                              <span className="la la-trash"></span>
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
    </div>
  );
};

export default JobListingsTable;
