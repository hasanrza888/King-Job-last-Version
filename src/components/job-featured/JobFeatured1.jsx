import { Link } from "react-router-dom";
import jobFeatured from "../../data/job-featured";
import { useSelector } from "react-redux";
const JobFeatured1 = () => {
  const {alljobs} = useSelector((state)=>state.job);
  return (
    <>
      {alljobs.slice(0, 6).map((item) => (
        <div className="job-block col-lg-6 col-md-12 col-sm-12" key={item?._id}>
          <div className="inner-box">
            <div className="content">
              <span className="company-logo">
                <img
                  width={50}
                  height={49}
                  src={item?.logo}
                  alt="item brand"
                />
              </span>
              <h4>
                <Link to={`/vacancies-list/${item?._id}`}>{item?.name}</Link>
              </h4>

              <ul className="job-info">
                <li>
                  <span className="icon flaticon-briefcase"></span>
                  {item?.companyName}
                </li>
                {/* compnay info */}
                <li>
                  <span className="icon flaticon-map-locator"></span>
                  {item?.city}
                </li>
                {/* location info */}
                <li>
                  <span className="icon flaticon-clock-3"></span> {item?.endTime?.split('T')[0]}
                </li>
                {/* time info */}
                <li>
                  <span className="icon flaticon-money"></span> {item?.agreedSalary ? 'Raz;lasma' : item?.salary}
                </li>
                {/* salary info */}
              </ul>
              {/* End .job-info */}

              <ul className="job-other-info">
                {/* {item.jobType.map((val, i) => ( */}
                  <li className={`green`}>
                    {item?.type}
                  </li>
                {/* ))} */}
              </ul>
              {/* End .job-other-info */}

              <button className="bookmark-btn">
                <span className="flaticon-bookmark"></span>
              </button>
            </div>
          </div>
        </div>
        // End job-block
      ))}
    </>
  );
};

export default JobFeatured1;
