import { Link } from "react-router-dom";
import { setNotificationsForCompany,addNotificationForCompany } from "../../../../../features/employer/employerSlice";
import { useSelector,useDispatch } from "react-redux";
import { getcompanynotifications } from "../../../../../services/api/company_api";
import { useEffect } from "react";
import { handleApiError } from "../../../../../utils/apiErrorHandling";
const Notification = () => {
  const dispatch = useDispatch();
  const {notifications} = useSelector(state=>state.employer)
  useEffect(()=>{
    const fetchnotifications = async () => {
      try {
        const {data} = await getcompanynotifications();
        dispatch(setNotificationsForCompany(data.data))
      } catch (error) {
        handleApiError(error)
      }
    }
    fetchnotifications();
  },[dispatch])
  const stringfortype = {
    exam:(
      <span>
        göndərdiyiniz <Link to="/company-dashboard/exams">{"imtahanı"}</Link> bitirdi.
      </span>
    ),
    meeting:(
      <span>
        sizin təyin etdiyiniz <Link to="/company-dashboard/meeting">{"görüşü"}</Link> qəbul etdi
      </span>
    ),
    message:(
      <span>
        sizə <Link to="/company-dashboard/messages">{"mesaj"}</Link> göndərdi
      </span>
    ),
    apply:(
      <span>
        iş üçün <Link to="/company-dashboard/all-applicants">{"müraciət"}</Link> göndərdi
      </span>
    )
  }
  return (
    <ul style={{maxHeight:"270px",overflowY:'scroll'}} className="notification-list">
      {
        notifications?.map((val,index)=>(
          <li key={index}>
          <span className="icon flaticon-briefcase"></span>
          <strong>{val?.userName}</strong> {stringfortype[val?.type]}
        </li>
        ))
      }
      {/* End li */}
    </ul>
  );
};

export default Notification;
