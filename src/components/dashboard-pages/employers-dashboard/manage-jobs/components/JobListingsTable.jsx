import { Link } from "react-router-dom";
import jobs from "../../../../../data/job-featured.js";
import { useSelector } from "react-redux";
const JobListingsTable = () => {
  const {vacancies,companyInfo} = useSelector(state=>state.employer);
  console.log(vacancies)
  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>Vakansiyalarım</h4>

        <div className="chosen-outer">
          {/* <!--Tabs Box--> */}
          <select className="chosen-single form-select">
            <option>Last 6 Months</option>
            <option>Last 12 Months</option>
            <option>Last 16 Months</option>
            <option>Last 24 Months</option>
            <option>Last 5 year</option>
          </select>
        </div>
      </div>
      {/* End filter top bar */}

      {/* Start table widget content */}
      <div className="widget-content">
        <div className="table-outer">
          <table className="default-table manage-job-table">
            <thead>
              <tr>
                <th>Ad</th>
                <th>Müraciət</th>
                <th>Baxış</th>
                <th>Yaranıb & Bitir</th>
                <th>Status</th>
                <th>Əməliyat</th>
              </tr>
            </thead>

            <tbody>
              {vacancies?.map((item,x) => (
                
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
                              src={companyInfo?.logo}
                              alt="logo"
                            />
                          </span>
                          <h4 title={item?.name}>
                            <Link to={`/vacancies-list/${item?._id}`}>
                              {item?.name?.slice(0,10)}
                            </Link>
                          </h4>
                          <ul className="job-info">
                            <li title={item?.categoryInfo?.name}>
                              <span className="icon flaticon-briefcase"></span>
                              {item?.categoryInfo?.name?.slice(0,6)}
                            </li>
                            <li>
                              <span className="icon flaticon-map-locator"></span>
                              {item?.city}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="applied">
                    {item?.numberOfApplys}
                  </td>
                  <td className="applied">
                    {item?.numberOfViews}
                  </td>
                  <td>
                    {item?.createdAt?.split('T')[0]} <br />
                    {item?.endTime?.split('T')[0]}
                  </td>
                  <td className="status">
                    {item?.active ? (<span style={{color:'green'}}>Aktiv</span>) : (<span style={{color:'red'}}>Deaktiv</span>)}
                  </td>
                  <td>
                    <div className="option-box">
                      <ul className="option-list">
                        <li>
                          <button data-text="View Aplication">
                            <span className="la la-eye"></span>
                          </button>
                        </li>
                        <li>
                          <button data-text="Reject Aplication">
                            <span className="la la-pencil"></span>
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
      {/* End table widget content */}
    </div>
  );
};

export default JobListingsTable;
