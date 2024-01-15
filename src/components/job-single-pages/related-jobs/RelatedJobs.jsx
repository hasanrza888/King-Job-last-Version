import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import JobBox from "../../job-listing-pages/job-list-v6/JobBox";
const RelatedJobs = ({category,id}) => {
  const {alljobs} = useSelector(state=>state.job);

  const relatedJobs = alljobs?.filter(job=>(job.category === category && job._id!==id));
  // console.log(relatedJobs)
  return (
    <>
      {relatedJobs?.map((item) => (
        <JobBox item={item} />
        // End job-block
      ))}
    </>
  );
};

export default RelatedJobs;
