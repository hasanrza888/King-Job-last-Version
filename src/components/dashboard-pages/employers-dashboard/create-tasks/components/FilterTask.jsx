import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { setFolder } from "../../../../../features/question/questionSlice";
const FilterTask = () => {
    function extractTextFromHTML(htmlContent) {
        // Create a temporary div element
        const tempDiv = document.createElement('div');
      
        // Set the innerHTML of the div with the provided HTML content
        tempDiv.innerHTML = htmlContent;
      
        // Use innerText to get the text content from the div
        const extractedText = tempDiv.innerText;
      
        return extractedText;
      }
      
    const dispatch = useDispatch();
    const {folders} = useSelector(state=>state.task);
    const {formData} = useSelector(state=>state.question);
    const [selectedfolders,setSelectedFolders] = useState(null);
    useEffect(()=>{
        const selected = folders?.find(folder=>folder._id.toString() === formData?.folder); 
        setSelectedFolders(selected)
    },[formData?.folder,folders])
    // const selectedFolder = folders?.find(folder=>folder._id.toString() === formData?._id);
  return (
    <div className="chosen-outer">
        <select onChange={(e)=>dispatch(setFolder(e.target.value))} value={formData.folder} className="chosen-single form-select chosen-container">
          <option value="">Tapşırıq seç</option>
          {
              folders?.map((folder,index)=>(
                  <option value={folder?._id}>{folder?.name}</option>
              ))
          }
        </select>
        {/* <!--search box--> */}
        {/* <div className="search-box-one">
          {selectedfolders && 
            <table className="default-table manage-job-table">
              <thead>
                <tr>
                  <th>Ad</th>
                  <th>Sual sayı</th>
                  <th>Yaranma tarixi</th>
                </tr>
              </thead>
              <tbody>
                {
                  [selectedfolders]?.map((folder,index)=>(
                    <tr>
                      <td><strong>{folder?.name?.toUpperCase()}</strong></td>
                      <td title={folder?.questions.map((q,i)=>i+1+'-'+extractTextFromHTML(q.question)).join('\n')}>{folder?.questions?.length}</td>
                      <td><strong>{folder?.createdAt?.split("T")[0]},{folder?.createdAt?.split("T")[1]?.split(".")[0]}</strong></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          }
        </div> */}
      {/* End searchBox one */}
      {/* <!--Tabs Box--> */}
    </div>
  );
};

export default FilterTask;
