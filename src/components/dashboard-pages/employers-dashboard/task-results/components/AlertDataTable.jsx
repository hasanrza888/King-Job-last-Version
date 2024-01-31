import { getallfolders } from "../../../../../services/api/company_api";
import { setFolders } from "../../../../../features/task/taskSlice";
import { useSelector,useDispatch } from "react-redux";
import AboutTask from "../../create-tasks/components/AboutTask";
const AlertDataTable = () => {
  const dispatch = useDispatch();
  const {folders} = useSelector(state=>state.task)
  return (
    <>
    <table className="default-table manage-job-table">
      <thead>
        <tr>
          <th>Namizəd</th>
          <th>Tapşırıq</th>
          <th>Sual sayı</th>
          <th>Düzgün cavablar</th>
          <th>Qiymət</th>
          <th>Göndərmə tarixi</th>
          <th>İdarə Et</th>
        </tr>
      </thead>
      {/* End thead */}
      <tbody>
        {
          folders?.map((folder,index)=>(
            <tr>
              <td>Namizəd</td>
              <td><strong>{folder?.name?.toUpperCase()}</strong></td>
              <td>{folder?.questions?.length}</td>
              <td>3</td>
              <td>15</td>
              <td>{folder?.createdAt?.split('T')[0]}</td>
              <td>
                <div className="option-box">
                  <ul className="option-list">
                    <li>
                      <button data-text="Namizədə bax">
                        <span className="la la-eye"></span>
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
