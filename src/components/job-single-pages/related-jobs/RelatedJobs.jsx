import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import JobBox from "../../job-listing-pages/job-list-v6/JobBox";
const RelatedJobs = ({category,id}) => {
  const {alljobs} = useSelector(state=>state.job);

  const relatedJobs = alljobs?.filter(job=>(job.category === category && job._id!==id));
  console.log(relatedJobs)
  return (
    <>
      {
        relatedJobs.length > 0 &&
        <div className="title-box">
          <h3>Əlaqədar Vakansiyalar</h3>
        </div>
      }
      

      {relatedJobs?.map((item) => (
        <JobBox item={item} key={item._id}/>
        // End job-block
      ))}
    </>
  );
};

export default RelatedJobs;
