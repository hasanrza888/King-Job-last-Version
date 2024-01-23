import React from "react";
import { handleApiError } from "../../../../../utils/apiErrorHandling";
import { giveanstatustoapplyer } from "../../../../../services/api/company_api";
import { updateApplyer } from "../../../../../features/employer/employerSlice";
import { useSelector,useDispatch } from "react-redux";
import {toast}  from "react-toastify"
import defaultProfile  from '../../../../../img/defaultcompanylogo.jpg'
import { Link } from "react-router-dom";
import { useState } from "react";
export default function ApplicantBox({candidate}) {
    const dispatch = useDispatch();
    const [hoveredStatus, setHoveredStatus] = useState(null);
    const sendNewStatus = async (applyerId, statusId, emailsend) => {
        try {
          const confirmationMessage = "Bu əməliyyatı etməyə əminsizmi? Təsdiq etdiyiniz anda Müraciətçiyə email bildirişi gedəcək.";
      
          if (emailsend && window.confirm(confirmationMessage)) {
            await updateApplyerAndNotify(applyerId, statusId, emailsend);
          } else {
            await updateApplyerAndNotify(applyerId, statusId, false);
          }
        } catch (error) {
          handleApiError(error);
        }
      };
      
      const updateApplyerAndNotify = async (applyerId, statusId, emailsend) => {
        const { data } = await giveanstatustoapplyer(applyerId, statusId, { emailsend });
        toast.success(data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        dispatch(updateApplyer(data.data));
      };
  return (
                <div className="candidate-block-three col-lg-6 col-md-12 col-sm-12" key={candidate?._id} >
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
                          <li className="candidate-status-li">
                            <span style={{color:candidate?.status[candidate?.status.length-1]?.color}} className={"icon "+candidate?.status[candidate?.status.length-1]?.icon}>
                              
                            </span>
                            <span style={{color:candidate?.status[candidate?.status.length-1]?.color}}> 
                              {candidate?.status[candidate?.status.length-1]?.name}
                            </span>
                            <div className="status-roadmap-tooltip">
                              <div className="status-roadmap-box">
                                <p>Müraciətçinin Statusu</p>
                               {candidate.status?.map((status, index) => (
                                <div key={index} className="status-roadmap-text">
                                  <p>
                                    {status.name}
                                  </p>
                                  {index < candidate.status?.length - 1 && (<i class="las la-angle-down"></i>)}
                                </div>
                                ))} 
                              </div>
                            </div>
                          </li>
                          {/* <li>
                            {candidate?.percentageOfCv} %
                          </li> */}
                        </ul>
                        {/* End candidate-info */}

                        <ul className="post-tags">
                          {candidate?.skills?.slice(0,2)?.map((val, i) => (
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
                            <button onClick={()=>sendNewStatus(candidate?._id,'65a6ec29788f1a9ccd9f0e49',true)} data-text="Birbaşa qəbul et">
                              <span className="la la-check"></span>
                            </button>
                          </li>
                          <li>
                            <button onClick={()=>sendNewStatus(candidate?._id,'65a6ea2a788f1a9ccd9f0e26',true)} data-text="Birbaşa ləğv et">
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

                      <span className="inner-box-percent" title="Vakansiya təsvirinə uyğunluq faizi">
                        <p>
                          {candidate?.percentageOfCv} %
                        </p>
                      </span>
                    </div>
                </div>
  );
}
