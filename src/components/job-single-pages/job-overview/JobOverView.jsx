const JobOverView = ({job}) => {
  return (
    <div className="widget-content">
      <ul className="job-overview">
        <li>
          <i className="icon icon-calendar"></i>
          <h5>Paylaşılma Tarixi:</h5>
          <span>{job?.createdAt?.split('T')[0]}</span>
        </li>
        <li>
          <i className="icon icon-expiry"></i>
          <h5>Son Tarix:</h5>
          <span>{job?.endTime?.split('T')[0]}</span>
        </li>
        <li>
          <i className="icon icon-location"></i>
          <h5>Şəhər:</h5>
          <span>{job?.city}</span>
        </li>
        <li>
          <i className="icon icon-user-2"></i>
          <h5>Vakansiya adı:</h5>
          <span>{job?.name}</span>
        </li>
        {/* <li>
          <i className="icon icon-clock"></i>
          <h5>Hours:</h5>
          <span>50h / week</span>
        </li> */}
        {/* <li>
          <i className="icon icon-rate"></i>
          <h5>Rate:</h5>
          <span>$15 - $25 / hour</span>
        </li> */}
        <li>
          <i className="icon icon-salary"></i>
          <h5>Maaş:</h5>
          <span>{job?.agreedSalary ? 'Razilasma' :job?.salary}</span>
        </li>
      </ul>
    </div>
  );
};

export default JobOverView;
