import JobBox from "../../job-listing-pages/job-list-v6/JobBox";
const RelatedJobs = ({companyJobs}) => {
  return (
    <>
      {companyJobs?.map((item) => (
        <JobBox item={item} key={item._id}/>
      ))}
    </>
  );
};

export default RelatedJobs;
