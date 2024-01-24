// import AddPortfolio from "./AddPortfolio";
import Awards from "./Awards";
import Education from "./Education";
import Experiences from "./Experiences";
import SkillsMultiple from "./SkillsMultiple";
import { updatecarieerinfo } from "../../../../../services/api/candidate_api";
import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { setLoading } from "../../../../../features/loading/loadingSlice";
import { setInfo } from "../../../../../features/candidate/candidateSlice";
import {toast} from 'react-toastify'
import { handleApiError } from "../../../../../utils/apiErrorHandling";
const Index = () => {
  const dispatch = useDispatch();
  const {info} = useSelector(state=>state.candidate)
  const [coverLetter,setcoverletter] = useState("");
  useEffect(()=>{
    setcoverletter(info?.coverLetter)
  },[info])
  const handleCoverletterSubmit = async(e) => {
    e.preventDefault();
    dispatch(setLoading(true))
    try {
      const {data} = await updatecarieerinfo({coverLetter});
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
      handleApiError(error)
    }
  };

  return (
    <form className="default-form">
      <div className="row">
        {/* <div className="form-group col-lg-6 col-md-12">
          <label>Select Your CV</label>
          <select className="chosen-single form-select">
            <option>My CV</option>
          </select>
        </div> */}
        {/* <!-- Input --> */}

        <div className="form-group col-lg-12 col-md-12">
          <label>Haqqımda</label>
          <textarea value={coverLetter} onChange={(e)=>{setcoverletter(e.target.value)}}  placeholder="Haqqımda"></textarea>
        </div>
        <div className="form-group col-lg-12 col-md-12">
          <button  onClick={handleCoverletterSubmit} type="submit" className="theme-btn btn-style-one">
            Yadda saxla
          </button>
        </div>
        {/* <!-- About Company --> */}

        <div className="form-group col-lg-12 col-md-12 mt-5">
          <Education />
          {/* <!-- Resume / Education --> */}

          <Experiences />
          {/* <!-- Resume / Work & Experience --> */}
        </div>
        {/* <!--  education and word-experiences --> */}

        {/* <div className="form-group col-lg-6 col-md-12">
          <AddPortfolio />
        </div> */}
        {/* <!-- End more portfolio upload --> */}

        <div className="form-group col-lg-12 col-md-12">
          {/* <!-- Resume / Awards --> */}
          <Awards />
        </div>
        {/* <!-- End Award --> */}

        <div className="form-group col-lg-6 col-md-12">
          <label>Bacarıqlar </label>
          <SkillsMultiple />
        </div>
        {/* <!-- Multi Selectbox --> */}

        
        {/* <!-- Input --> */}
      </div>
      {/* End .row */}
    </form>
  );
};

export default Index;
