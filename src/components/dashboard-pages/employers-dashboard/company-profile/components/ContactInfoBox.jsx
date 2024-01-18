import Map from "../../../Map";
import { useDispatch,useSelector } from "react-redux";
import { updatecompanyinfo } from "../../../../../services/api/company_api";
import { setCompanyInfo } from "../../../../../features/employer/employerSlice";
import { setLoading } from "../../../../../features/loading/loadingSlice";
import { useState,useEffect } from "react";
import {toast} from 'react-toastify'
import { handleApiError } from "../../../../../utils/apiErrorHandling";
const ContactInfoBox = () => {
    const dispatch = useDispatch();
  const [city,setcity] = useState("")
  const {companyInfo} = useSelector(state=>state.employer);
  useEffect(()=>{
    setcity(companyInfo?.city)
  },[companyInfo])
  const handleCitySubmit = async(e) => {
    e.preventDefault();
    dispatch(setLoading(true))
    try {
      const {data} = await updatecompanyinfo({city});
      dispatch(setCompanyInfo(data.data));
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
        <form onSubmit={handleCitySubmit} className="default-form">
            <div className="row">
                {/* <!-- Input --> */}

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

                {/* <!-- Input --> */}
            

                {/* <!-- Input --> */}
                

                {/* <!-- Input --> */}
                

                {/* <!-- Input --> */}
                

                {/* <!-- Input --> */}
                

                {/* <div className="form-group col-lg-12 col-md-12">
                    <div className="map-outer">
                        <div style={{ height: "420px", width: "100%" }}>
                            <Map />
                        </div>
                    </div>
                </div> */}
                {/* End MapBox */}

                {/* <!-- Input --> */}
                <div className="form-group col-lg-12 col-md-12">
                    <button type="submit" className="theme-btn btn-style-one">
                        Yadda saxla
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ContactInfoBox;
