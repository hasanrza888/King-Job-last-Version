import { Link } from "react-router-dom";
import jobs from "../../../../../data/job-featured.js";
import { useSelector,useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setLoading } from "../../../../../features/loading/loadingSlice.js";
import { deleteJobFromSaved } from "../../../../../features/candidate/candidateSlice.js";
import { addJobToSaved } from "../../../../../features/candidate/candidateSlice.js";
import { addjobtosaved } from "../../../../../services/api/candidate_api.js";
import {toast} from 'react-toastify'
import { handleApiError } from "../../../../../utils/apiErrorHandling.js";
const JobFavouriteTable = () => {
  const dispatch = useDispatch();
  const {alljobs} = useSelector(state=>state.job);
  const {savedjobs} = useSelector(state=>state.candidate);
  const [sv,setSv] = useState([]);
  useEffect(()=>{
    const modify = () => {
      dispatch(setLoading(true));
      const sv = [];
        for(let i of alljobs){
          for(let j of savedjobs){
            if(i._id.toString() === j.job.toString()){
              sv.push(i);
            }
          }
        }
        setSv(sv);
        dispatch(setLoading(false))
    }
    modify();
  },[alljobs,savedjobs,dispatch]);

  const removeJobFromSaved = async (id) => {
    // dispatch(setLoading(true));
    try {
      const {data} = await addjobtosaved(id);
    const {action} = data;
    // dispatch(setLoading(false));
    if(action === 'remove'){
      dispatch(deleteJobFromSaved(data.data))
    }
    else{
      dispatch(addJobToSaved(data.data))
    }
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
      
    } catch (error) {
      dispatch(setLoading(false));
      handleApiError(error)
    }
    
  }
  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>My Favorite Jobs</h4>

        <div className="chosen-outer">
          {/* <!--Tabs Box--> */}
          <select className="chosen-single form-select">
            <option>Son 1 ay</option>
            <option>Son 2 ay</option>
            <option>Son 3 ay</option>
            <option>Son 4 ay</option>
            <option>Son 5 ay</option>
          </select>
        </div>
      </div>
      {/* End filter top bar */}

      {/* Start table widget content */}
      <div className="widget-content">
        <div className="table-outer">
          <div className="table-outer">
            <table className="default-table manage-job-table">
              <thead>
                <tr>
                  <th>Ad</th>
                  <th>Son tarix</th>
                  <th>Baxış sayı</th>
                  <th>Əməliyyat</th>
                </tr>
              </thead>

              <tbody>
                {sv?.map((item) => (
                  <tr key={item._id}>
                    <td>
                      {/* <!-- Job Block --> */}
                      <div className="job-block">
                        <div className="inner-box">
                          <div className="content">
                            <span className="company-logo">
                              <img
                                width={48}
                                height={48}
                                src={item?.logo}
                                alt="logo"
                              />
                            </span>
                            <h4>
                              <Link to={`/vacancies-list/${item?._id}`}>
                                {item?.name}
                              </Link>
                            </h4>
                            <ul className="job-info">
                              <li title={item?.category}>
                                <span className="icon flaticon-briefcase"></span>
                                {item?.category?.slice(0,6)}
                              </li>
                              <li>
                                <span className="icon flaticon-map-locator"></span>
                                {item?.city}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item?.endTime?.split('T')[0]}</td>
                    <td className="status">{item?.numberOfViews}</td>
                    <td>
                      <div className="option-box">
                        <ul className="option-list">
                          {/* <li>
                            <button data-text="View Aplication">
                              <span className="la la-eye"></span>
                            </button>
                          </li> */}
                          <li>
                            <button onClick={()=>{removeJobFromSaved(item?._id)}}  data-text="Sevimlilərdən çıxart">
                              <span  className="la la-trash"></span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* End table widget content */}
    </div>
  );
};

export default JobFavouriteTable;
