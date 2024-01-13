import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const RelatedJobs = ({category,id}) => {
  const {alljobs} = useSelector(state=>state.job);

  const relatedJobs = alljobs?.filter(job=>(job.category === category && job._id!==id));
  // console.log(relatedJobs)
  return (
    <>
      {relatedJobs?.map((item) => (
        <div className="job-block" key={item._id}>
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
                <Link to={`/vacancies-list/${item._id}`}>{item.name}</Link>
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
                  <span className="icon flaticon-money"></span> {item?.agreedSalary ? "Razilasma" : item?.salary}
                </li>
                {/* salary info */}
              </ul>
              {/* End .job-info */}

              <ul className="job-other-info">
                {/* {item.jobType.map((val, i) => (
                  <li key={i} className={`${val.styleClass}`}>
                    {val.type}
                  </li>
                ))} */}
                <li className={`green`}>
                  {item?.type}
                </li>
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

export default RelatedJobs;
