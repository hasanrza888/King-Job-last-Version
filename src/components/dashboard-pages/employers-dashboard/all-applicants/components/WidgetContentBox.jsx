import candidatesData from "../../../../../data/candidates";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import defaultProfile  from '../../../../../img/defaultcompanylogo.jpg'
import { useSelector } from "react-redux";
const WidgetContentBox = () => {
  const {applyerlist,applyerSort} = useSelector(state=>state.applyerfilter)
  const {allapplyers,applystatuses} = useSelector(state=>state.employer)
  console.log(allapplyers)
  const jobNameFilter = (item) =>
    applyerlist.jobName !== ""
      ? item?.jobName?.toLocaleLowerCase() === applyerlist.jobName?.toLocaleLowerCase()
      : item;
  const statusFilter = (item) =>
    applyerlist.status !== ""
      ? item?.status?.name === applyerlist.status
      : item;  
  const percentageFilter = (item) =>
    (applyerlist.percentageOfCv.max !== 0)
      ? (item?.percentageOfCv >= applyerlist.percentageOfCv.min && item?.percentageOfCv <= applyerlist.percentageOfCv.max)
      : item;   
  let endData = allapplyers
  ?.filter(jobNameFilter)
  ?.filter(statusFilter)
  ?.filter(percentageFilter)
  return (
    <div className="widget-content">
      <div className="tabs-box">
        <Tabs>
          <div className="aplicants-upper-bar">
            <h6>{applyerlist?.jobName || 'Hamsı'}</h6>

            <TabList className="aplicantion-status tab-buttons clearfix">
              <Tab className="tab-btn totals"> Ümumi(s): {endData?.length}</Tab>
              {/* <Tab className="tab-btn approved"> Approved: 2</Tab>
              <Tab className="tab-btn rejected"> Rejected(s): 4</Tab> */}
            </TabList>
          </div>

          <div className="tabs-content">
            <TabPanel>
              <div className="row">
                {endData
                ?.slice(applyerSort?.perPage?.start,applyerSort?.perPage?.end)
                ?.sort((a,b)=>b?.percentageOfCv-a?.percentageOfCv)
                ?.map((candidate) => (
                  <div
                    className="candidate-block-three col-lg-6 col-md-12 col-sm-12"
                    key={candidate?._id}
                  >
                    <div className="inner-box">
                      <div className="content">
                        <figure className="image">
                          <img
                            width={90}
                            height={90}
                            src={candidate?.profilepic || defaultProfile }
                            alt="candidates"
                          />
                        </figure>
                        <h4 className="name">
                          <Link to={`/company-dashboard/applicant/`+candidate._id}>
                            {candidate?.userName || "Yoxdur"}
                          </Link>
                        </h4>

                        <ul className="candidate-info">
                          <li title={candidate?.jobTitle || 'Yoxdur'} className="designation">
                            {candidate?.jobTitle?.slice(0,5) || 'Yoxdur'}
                          </li>
                          <li>
                            <span style={{color:candidate?.status?.color}} className={"icon "+candidate?.status?.icon}>
                              
                            </span>
                            <span style={{color:candidate?.status?.color,backgroundColor:'#C9F7F8',padding:"8px",borderRadius:'6px'}}> {candidate?.status?.name}</span>
                           
                          </li>
                          <li>
                            <span className="icon las la-percent"></span>
                            {candidate?.percentageOfCv}
                          </li>
                        </ul>
                        {/* End candidate-info */}

                        <ul className="post-tags">
                          {candidate?.skills?.map((val, i) => (
                            <li key={i}>
                              <a href="#">{val}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* End content */}

                      <div className="option-box">
                        <ul className="option-list">
                          <li>
                            <button  data-text="Müraciətə ətraflı bax">
                              <Link  to={`/company-dashboard/applicant/`+candidate._id}><span className="la la-eye"></span></Link>
                            </button>
                          </li>
                          <li>
                            <button data-text="Birbaşa qəbul et">
                              <span className="la la-check"></span>
                            </button>
                          </li>
                          <li>
                            <button data-text="Birbaşa ləğv et">
                              <span className="la la-times-circle"></span>
                            </button>
                          </li>
                          <li>
                            <button data-text="Müraciəti sil">
                              <span className="la la-trash"></span>
                            </button>
                          </li>
                        </ul>
                      </div>
                      {/* End admin options box */}
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default WidgetContentBox;
