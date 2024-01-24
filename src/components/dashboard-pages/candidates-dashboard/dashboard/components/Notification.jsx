import { useSelector,useDispatch } from "react-redux";
import { getusernotification } from "../../../../../services/api/candidate_api";
import { useEffect } from "react";
import { handleApiError } from "../../../../../utils/apiErrorHandling";
import { setNotifications } from "../../../../../features/candidate/candidateSlice";
import { Link } from "react-router-dom";
const Notification = () => {
  const stringfortype = {
    status:(
      <span>
        iş üçün <Link to="/applicants-dashboard/applies">{"müraciət"}</Link> statusunuzu yenilədi
      </span>
    ),
    exam:(
      <span>
        sizə <Link to="/applicants-dashboard/applies">{"imtahan"}</Link> göndərdi
      </span>
    ),
    meeting:(
      <span>
        siz ilə <Link to="/applicants-dashboard/meeting">{"görüş"}</Link> təyin etdi
      </span>
    ),
    message:(
      <span>
        sizə <Link to="/applicants-dashboard/messages">{"mesaj"}</Link> göndərdi
      </span>
    )
  }
  const dispatch = useDispatch();
  const {notifications} = useSelector(state=>state.candidate);
  // console.log(info?.notifications)
  useEffect(()=>{
    const fetchusernotifications = async() => {
      try {
        const {data} = await getusernotification();
        console.log(data)
        dispatch(setNotifications(data.data))
      } catch (error) {
        handleApiError(error)
      }
    }
    fetchusernotifications();
  },[])
  return (
    <ul style={{maxHeight:"270px",overflowY:'scroll'}} className="notification-list">
      {
        notifications?.map((val,index)=>(
          <li key={index}>
          <span className="icon flaticon-briefcase"></span>
          <strong>{val?.companyName}</strong> {stringfortype[val?.type]}
        </li>
        ))
      }
      {/* End li */}
    </ul>
  );
};

export default Notification;
