import { Link } from "react-router-dom";
import jobFeatured from "../../data/job-featured";
import { useSelector } from "react-redux";
import JobBox from "../job-listing-pages/job-list-v6/JobBox";
const JobFeatured1 = () => {
  const {alljobs} = useSelector((state)=>state.job);
  return (
    <>
      {alljobs.slice(0, 6).map((item) => (
        <JobBox item={item} />
        // End job-block
      ))}
    </>
  );
};

export default JobFeatured1;
