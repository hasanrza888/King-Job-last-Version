import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { setInfo } from "../../../../../features/candidate/candidateSlice";
import { setLoading } from "../../../../../features/loading/loadingSlice";
import { updatecarieerinfo } from "../../../../../services/api/candidate_api";
import {toast} from 'react-toastify';
import { handleApiError } from "../../../../../utils/apiErrorHandling";
const ContactInfoBox = () => {
  const dispatch = useDispatch();
  const [city,setcity] = useState("")
  const {info} = useSelector(state=>state.candidate);
  useEffect(()=>{
    setcity(info?.city)
  },[info])
  const handleCitySubmit = async(e) => {
    e.preventDefault();
    dispatch(setLoading(true))
    try {
      const {data} = await updatecarieerinfo({city});
      dispatch(setInfo(data.data));
      dispatch(setLoading(false));
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
  };
  return (
    <form className="default-form">
      <div className="row">

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Rayon/Şəhər</label>
          <input
            type="text"
            name="city"
            placeholder="məs-Bakı"
            value={city}
        onChange={(e)=>{setcity(e.target.value)}}
            
          />
        </div>
        <div className="form-group col-lg-12 col-md-12">
          <button onClick={handleCitySubmit} className="theme-btn btn-style-one">
            Yadda saxla
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactInfoBox;
