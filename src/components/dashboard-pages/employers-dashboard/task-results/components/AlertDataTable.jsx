import { getallfolders } from "../../../../../services/api/company_api";
import { setFolders } from "../../../../../features/task/taskSlice";
import { useSelector,useDispatch } from "react-redux";
import AboutTask from "../../create-tasks/components/AboutTask";
import { fetchwaitingtasks } from "../../../../../services/api/company_api";
import { useState,useEffect } from "react";
import {Link} from 'react-router-dom'
import { handleApiError } from "../../../../../utils/apiErrorHandling";
const AlertDataTable = () => {
  
// endTime
// examdurationTime
// folder
// illegalDetection
// name
// numberOfTry
// startDate
// totalPoint
  const dispatch = useDispatch();
  const {folders} = useSelector(state=>state.task);
  const {allapplyers,applystatuses} = useSelector(state=>state.employer);
  const [tasksendedApplicant,settasksendedApplicant] = useState([])
  // const tasksendedApplicant = allapplyers?.filter(applyer=>applyer?.taskInfo?.folder !== null);
  useEffect(()=>{
    const ftchwaitingtask = async () => {
      try {
        const {data} = await fetchwaitingtasks();
        settasksendedApplicant(data.data);
      } catch (error) {
        handleApiError(error);
      }
    }
    ftchwaitingtask();
  },[])
  console.log(tasksendedApplicant)
  return (
    <>
    <table className="default-table manage-job-table">
      <thead>
        <tr>
          <th>Namizəd</th>
          <th>Vakansiya</th>
          <th>Tapşırıq</th>
          <th>Sual sayı</th>
          <th>Düzgün cavablar</th>
          <th>Səhf</th>
          <th>Boş</th>
          <th>Bal</th>
          <th title="İmtahan zamanı imtahan səyifəsini tərk etmə və yenidən daxil olma">Çıxış/Giriş</th>
          <th>Göndərmə tarixi</th>
          <th>İdarə Et</th>
        </tr>
      </thead>
      {/* End thead */}
      <tbody>
        {
          tasksendedApplicant?.map((folder,index)=>(
            <tr>
              <td>{folder?.userName}</td>
              <td>{folder?.jobName}</td>
              <td><strong>{folder?.taskInfo?.name?.toUpperCase()}</strong></td>
              <td>{folder?.taskInfo?.numOfQuestion}</td>
              <td>{folder?.taskInfo?.correct}</td>
              <td>{folder?.taskInfo?.wrong}</td>
              <td>{folder?.taskInfo?.empty}</td>
              <td>{folder?.taskInfo?.totalPoint}</td>
              <td>{folder?.taskInfo?.illegalDetection?.length}</td>
              <td>{folder?.taskInfo?.sendedTime?.split('.')[0] || "Göndərməyib"}</td>
              <td>
                <div className="option-box">
                  <ul className="option-list">
                    <li>
                      <button data-text="Namizədə bax">
                        <Link to={`/company-dashboard/applicant/`+folder._id}>
                        <span className="la la-eye"></span>
                        </Link>
                      </button>
                    </li>
                    {/* <li>
                      <button data-text="Tapşırığı redaktə et">
                        <span className="la la-pencil"></span>
                      </button>
                    </li> */}
                    <li>
                      <button data-text="Namizədi ləğv et">
                        <span className="la la-trash"></span>
                      </button>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>

    </>
  );
};

export default AlertDataTable;
