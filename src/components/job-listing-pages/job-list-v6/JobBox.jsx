import React from 'react'
import { Link,useNavigate,useLocation } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {toast} from 'react-toastify'
import { setLoading } from '../../../features/loading/loadingSlice';
import { addjobtosaved } from '../../../services/api/candidate_api';
import { addJobToSaved } from '../../../features/candidate/candidateSlice';
import { deleteJobFromSaved } from '../../../features/candidate/candidateSlice';
import { handleApiError } from '../../../utils/apiErrorHandling';
export default function JobBox({item}) {
    const location  = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {savedjobs} = useSelector(state=>state.candidate)
    const {isLoggedIn} = useSelector(state=>state.auth)
    const removeJobFromSaved = async (id) => {
        if(!isLoggedIn){
          toast.info('İşi yadda saxlamaq üçün hesabınıza daxil olun',{
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            })
          navigate('/login', { state: { prevUrl: location.pathname } });
        }
        else{
        dispatch(setLoading(true));
        try {
          const {data} = await addjobtosaved(id);
        const {action} = data;
        dispatch(setLoading(false));
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
          handleApiError(error);
        }
        } 
      }
      const check = (id) => {
        let d = savedjobs?.find(s=>s.job.toString() === id.toString());
        if(d) return true;
        return false
      }
  return (
    <div className="job-block col-lg-6 col-md-12 col-sm-12" key={item?._id}>
        <div className="inner-box">
          <div className="content">
            <span className="company-logo">
              <img width={50} height={49} src={item?.logo} alt="item brand" />
            </span>
            <h4>
              <Link to={`/vacancies-list/${item?._id}`}>{item?.name}</Link>
            </h4>

            <ul className="job-info">
              <li>
                <span className="icon flaticon-briefcase"></span>
                {item?.companyName}
              </li>
              {/* compnay info */}
              <li>
                <span className="icon flaticon-map-locator"></span>
                {item?.city}
              </li>
              {/* location info */}
              <li>
                <span className="icon flaticon-clock-3"></span> {item?.endTime?.split("T")[0]}
              </li>
              {/* time info */}
              <li>
                <span className="icon flaticon-money"></span> {item?.agreedSalary ? "Razılaşma": (item?.salary + ' AZN')}
              </li>
              {/* salary info */}
            </ul>
            {/* End .job-info */}

            <ul className="job-other-info">
              {/* {item?.jobType?.map((val, i) => ( */}
                <li className={`green`}>
                  {item?.type}
                </li>
                <li className={`green`}>
                <span className="la la-eye"></span> {item?.numberOfViews}
                </li>
              {/* ))} */}
            </ul>
            {/* End .job-other-info */}

            <button onClick={()=>removeJobFromSaved(item?._id)}  className="bookmark-btn">
              <span style={{color:check(item?._id) ? 'blue':''}} className="flaticon-bookmark"></span>
            </button>
          </div>
        </div>
      </div>
  )
}
