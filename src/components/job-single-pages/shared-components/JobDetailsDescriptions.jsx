const JobDetailsDescriptions = ({job}) => {
  return (
    <div className="job-detail">
      <h4>Vakansiya Təsviri</h4>
      <p
      dangerouslySetInnerHTML={{ __html: job?.['descriptionOfVacancy'] }}
       />
      <h4 className="mt-5">Xüsusi Tələblər</h4>
      <ul className="list-style-three">
        {
          job?.specialRequirements?.map((req)=>{
            return <li key={req}>{req}</li>
          })
        }
      </ul>
      {/* <h4>Skill & Experience</h4>
      <ul className="list-style-three">
        <li>
          You have at least 3 years’ experience working as a Product Designer.
        </li>
        <li>You have experience using Sketch and InVision or Framer X</li>
        <li>
          You have some previous experience working in an agile environment –
          Think two-week sprints.
        </li>
        <li>You are familiar using Jira and Confluence in your workflow</li>
      </ul> */}
    </div>
  );
};

export default JobDetailsDescriptions;
