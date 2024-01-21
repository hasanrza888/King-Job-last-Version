import { Link } from "react-router-dom";
import jobs from "../../../data/job-featured";
import JobBox from "../../job-listing-pages/job-list-v6/JobBox";
const RelatedJobs = ({companyJobs}) => {
  return (
    <>
      {companyJobs?.map((item) => (
        <JobBox item={item} />
      ))}
    </>
  );
};

export default RelatedJobs;
