import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function SelectedQuestions() {
    function extractTextFromHTML(htmlContent) {
        // Create a temporary div element
        const tempDiv = document.createElement('div');
      
        // Set the innerHTML of the div with the provided HTML content
        tempDiv.innerHTML = htmlContent;
      
        // Use innerText to get the text content from the div
        const extractedText = tempDiv.innerText;
      
        return extractedText;
      }
      
    const {folders} = useSelector(state=>state.task);
    const {formData} = useSelector(state=>state.question);
    const [selectedfolders,setSelectedFolders] = useState(null);

    useEffect(()=>{
        const selected = folders?.find(folder=>folder._id.toString() === formData?.folder); 
        setSelectedFolders(selected)
    },[formData?.folder,folders])
    return ( 
        <>
            {
                selectedfolders &&
                <div className="widget-title">
                    <table className="default-table manage-job-table">
                        <thead>
                        <tr>
                            <th>Ad</th>
                            <th>Sual sayı</th>
                            <th>Yaranma tarixi</th>
                        </tr>
                        </thead>
                        {/* End thead */}
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
                </div>
            }
        </>
     );
}

export default SelectedQuestions;