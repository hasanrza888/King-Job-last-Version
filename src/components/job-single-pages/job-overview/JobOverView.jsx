const JobOverView = () => {
  return (
    <div className="widget-content">
      <ul className="job-overview">
        <li>
          <i className="icon icon-calendar"></i>
          <h5>Paylaşılma Tarixi:</h5>
          <span>1 saat əvvəl</span>
        </li>
        <li>
          <i className="icon icon-expiry"></i>
          <h5>Son Tarix:</h5>
          <span>06.02.2024</span>
        </li>
        <li>
          <i className="icon icon-location"></i>
          <h5>Şəhər:</h5>
          <span>London, UK</span>
        </li>
        <li>
          <i className="icon icon-user-2"></i>
          <h5>Vakansiya adı:</h5>
          <span>Designer</span>
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
          <span>35k - 45k AZN</span>
        </li>
      </ul>
    </div>
  );
};

export default JobOverView;
