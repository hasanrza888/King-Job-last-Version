import candidatesData from "../../../../../data/candidates";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";

import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { updateApplyer } from "../../../../../features/employer/employerSlice";
import { giveanstatustoapplyer } from "../../../../../services/api/company_api";
import { handleApiError } from "../../../../../utils/apiErrorHandling";
import {toast} from 'react-toastify'
import ApplicantBox from "./ApplicantBox";
const WidgetContentBox = () => {
  const dispatch = useDispatch();
  const {applyerlist,applyerSort} = useSelector(state=>state.applyerfilter)
  const {allapplyers,applystatuses} = useSelector(state=>state.employer)
  
  console.log(allapplyers)
  const jobNameFilter = (item) =>
    applyerlist.jobName !== ""
      ? item?.jobName?.toLocaleLowerCase() === applyerlist.jobName?.toLocaleLowerCase()
      : item;
  const statusFilter = (item) =>
    applyerlist.status !== ""
      ? item?.status?.[item?.status?.length-1]?.name === applyerlist.status
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
                  (<ApplicantBox candidate={candidate} />)
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
