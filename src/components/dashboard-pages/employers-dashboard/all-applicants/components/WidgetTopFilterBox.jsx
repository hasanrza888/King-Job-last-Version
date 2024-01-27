import { useDispatch,useSelector } from "react-redux";
import { addJobName,addStatus,addPerPage,addPercentageOfCv } from "../../../../../features/filter/applyerFilterSlice";
import { useState } from "react";
const WidgetTopFilterBox = () => {
  const dispatch = useDispatch();
  const {applyerlist,applyerSort} = useSelector(state=>state.applyerfilter);
  const {allapplyers,vacancies,applystatuses} = useSelector(state=>state.employer);
  const [currentcolor,setcurrentcolor] = useState("");
  const handleStatusChange = (e) => {
    const selectedStatus = e.target.value;
    const selectedColor = applystatuses.find((status) => status.name === selectedStatus)?.color || "";
    setcurrentcolor(selectedColor);
    dispatch(addStatus(selectedStatus));
  };
  return (
    <div className="chosen-outer">
      <select onChange={(e)=>dispatch(addPercentageOfCv(JSON.parse(e.target.value)))} value={JSON.stringify(applyerlist?.percentageOfCv)} className="chosen-single form-select chosen-container">
        <option value={JSON.stringify({min:0,max:0})}>Göstərici/hamısı</option>
        <option value={JSON.stringify({min:0,max:10})}>0-10 % arası</option>
        <option value={JSON.stringify({min:10,max:20})}>10-20 % arası</option>
        <option value={JSON.stringify({min:20,max:30})}>20-30 % arası</option>
        <option value={JSON.stringify({min:30,max:40})}>30-40 % arası</option>
        <option value={JSON.stringify({min:40,max:50})}>40-50 % arası</option>
        <option value={JSON.stringify({min:50,max:60})}>50-60 % arası</option>
        <option value={JSON.stringify({min:60,max:70})}>60-70 % arası</option>
        <option value={JSON.stringify({min:70,max:80})}>70-80 % arası</option>
        <option value={JSON.stringify({min:80,max:90})}>80-90 % arası</option>
        <option value={JSON.stringify({min:90,max:100})}>90-100 % arası</option>
      </select>
      <select onChange={(e)=>dispatch(addJobName(e.target.value))} value={applyerlist?.jobName} className="chosen-single form-select chosen-container">
        <option value={""}>Vakansiya/hamısı</option>
        {
          vacancies?.map((val,ind)=>(
            <option key={ind} value={val?.name}>{val?.name}</option>
          ))
        }
      </select>
      {/* <!--Tabs Box--> */}

      <select style={{color:currentcolor}} onChange={handleStatusChange} value={applyerlist?.status} className="chosen-single form-select chosen-container">
        <option value={""}>Status/hamısı</option>
        {
          applystatuses?.map((val,ind)=>(
            <option key={ind} style={{color:val?.color}} value={val?.name}>{val?.name}</option>
          ))
        }
      </select>
      <button style={{border:'1px solid gray'}} onClick={()=>dispatch(addPerPage({start:0,end:applyerSort?.perPage?.end>20?applyerSort?.perPage?.end-10 : 10}))} className="chosen-single  chosen-container">
        Daha - 10
      </button>
      <button style={{border:'1px solid gray'}} onClick={()=>dispatch(addPerPage({start:0,end:applyerSort?.perPage?.end+10}))} className="chosen-single  chosen-container">
        Daha + 10
      </button>
      {/* <!--Tabs Box--> */}
    </div>
  );
};

export default WidgetTopFilterBox;
