// useDataFetching.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser,setUser } from '../features/auth/authSlice.js';
import { fetchjobsandsearch, getCategories, getjobTypes } from '../services/api/common_api.js';
import { getuserapplys, getsavedjobs, getallcontacts } from '../services/api/candidate_api.js';
import { loggedin,logout } from '../services/api/auth_api.js';
import { setJobs } from '../features/job/jobSlice.js';
import { setCategories } from '../features/category/categorySlice.js';
import { setJobtypes } from '../features/jobtypes/jobtypeSlice.js';
import { setApplieds, setSavedJobs, setContacts,setInfo } from '../features/candidate/candidateSlice.js';
import { setCompanyInfo,setVacancies,setApplyers,setApplyStatuses } from '../features/employer/employerSlice.js';
import { handleApiError } from '../utils/apiErrorHandling.js';
import { getallvacancies,getallapplyers,getapplystatuses,getallfolders } from '../services/api/company_api.js';
import {toast} from 'react-toastify'
import { setFolders } from '../features/task/taskSlice.js';
import socket from '../socket/socketService.js';
import useLogout from './logoutUser.js';
const useDataFetching = () => {
  const lguser = useLogout();
  const dispatch = useDispatch();
  const { isLoggedIn,user } = useSelector(state => state.auth);
  useEffect(() => {
    if (isLoggedIn && user && socket) {
      socket.emit('joinRoom', user._id);
    }
  }, [user, isLoggedIn]);
  useEffect(() => {
    if (socket && isLoggedIn && user) {
      socket.on('company-block', (data) => {
        console.log("socket work",data)
        // lguser();
      });
    }
  }, [isLoggedIn, user,lguser]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [jobsResponse, categoriesResponse, jobTypesResponse] = await Promise.all([
          fetchjobsandsearch(),
          getCategories(),
          getjobTypes()
        ]);

        dispatch(setJobs(jobsResponse.data.data));
        dispatch(setCategories(categoriesResponse.data.data));
        dispatch(setJobtypes(jobTypesResponse.data.data));

        if (isLoggedIn && user?.u_t_p === 'u_s_r') {
          const [appliedsResponse, savedJobsResponse, contactsResponse] = await Promise.all([
            getuserapplys(),
            getsavedjobs(),
            getallcontacts()
          ]);
          dispatch(setApplieds(appliedsResponse.data.data));
          dispatch(setSavedJobs(savedJobsResponse.data.data));
          dispatch(setContacts(contactsResponse.data.data));
          return
        }
        if(isLoggedIn && user?.u_t_p === 'c_m_p'){
            const [vacanciesResponse,applyerResponse,applystatusesResponse,folderResponse] = await Promise.all([
                getallvacancies(),
                getallapplyers(),
                getapplystatuses(),
                getallfolders(),
            ]);
            const applyersData = applyerResponse.data.data;
            const sortedApplyers = applyersData.sort((a, b) => b.percentageOfCv - a.percentageOfCv);
            dispatch(setVacancies(vacanciesResponse.data.data));
            dispatch(setApplyers(sortedApplyers))
            dispatch(setApplyStatuses(applystatusesResponse.data.data));
            dispatch(setFolders(folderResponse.data.data))
        }
      } catch (error) {
        handleApiError(error);
      }
    };

    fetchData();
  }, [dispatch, isLoggedIn,user]);
  useEffect(() => {
    const logoutUser = async () => {
      try {
        const { data } = await logout();
        dispatch(clearUser());
        toast.success("Successfully logged out", {
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
        handleApiError(error)
      }
    };
    const checkLoggedIn = async () => {
      try {
        const { data } = await loggedin();
        if (data.user.returnedData.u_t_p === 'c_m_p') {
          if (data.user.info.isBlock) {
            // console.log("okkkokokok")
            return logoutUser();
          }
          else{
            console.log(data?.user?.info)
            dispatch(setCompanyInfo(data?.user?.info))
          }
        }
        else{
          dispatch(setInfo(data?.user?.info));
        }
        dispatch(setUser(data?.user?.returnedData));
      } catch (error) {
        dispatch(clearUser());
      }
    };

    checkLoggedIn();
  }, [dispatch]);

  return null; // You can modify this based on your needs
};

export default useDataFetching;