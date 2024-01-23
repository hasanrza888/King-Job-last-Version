import { Link } from "react-router-dom";
import candidatesData from "../../../../../data/candidates";
import { useSelector } from "react-redux";
import ApplicantBox from "../../all-applicants/components/ApplicantBox";
const Applicants = () => {
  const {allapplyers,vacancies} = useSelector(state=>state.employer)
  function filterRecentApplicants(applicants) {
    const currentDate = new Date();
    const twoDaysAgo = new Date(currentDate);
    twoDaysAgo.setDate(currentDate.getDate() - 4);
    return applicants.filter(applicant => {
      const applicationDate = new Date(applicant.createdAt);
      return applicationDate >= twoDaysAgo && applicationDate <= currentDate;
    });
  }
  const recentlyAppliedApplicants = filterRecentApplicants(allapplyers);
  console.log(recentlyAppliedApplicants);
  return (
    <>
      {recentlyAppliedApplicants?.map((candidate) => (
        (<ApplicantBox candidate={candidate} />)
      ))}
    </>
  );
};

export default Applicants;
