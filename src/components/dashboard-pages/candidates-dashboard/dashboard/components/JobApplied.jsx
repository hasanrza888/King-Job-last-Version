import { Link } from "react-router-dom";
import recentJobApplied from "../../../../../data/job-featured";
import { useSelector } from "react-redux";
import JobBox from "../../../../job-listing-pages/job-list-v6/JobBox";
const JobApplied = () => {
  const {alljobs} = useSelector(state=>state.job);
  const {myapplieds} = useSelector(state=>state.candidate);
  const getAppliedJobsDetails = (allJobs,appliedJobs) => {
    // Create a set of applied job IDs for efficient filtering
    const appliedJobIds = new Set(appliedJobs?.map((appliedJob) => appliedJob.jobId));
  
    // Filter allJobs to include only the applied jobs
    const appliedJobsDetails = allJobs?.filter((job) => appliedJobIds.has(job._id));
  
    return appliedJobsDetails;
  };
  const data = getAppliedJobsDetails(alljobs,myapplieds);
  return (
    <>
      {data?.map((item) => (
        <JobBox item={item} />
        // End job-block
      ))}
    </>
  );
};

export default JobApplied;
