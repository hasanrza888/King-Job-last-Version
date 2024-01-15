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
          <label>Niyyət məktubu</label>
          <textarea value={coverLetter} onChange={(e)=>{setcoverletter(e.target.value)}}  placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"></textarea>
        </div>
        <div className="form-group col-lg-12 col-md-12">
          <button  onClick={handleCoverletterSubmit} type="submit" className="theme-btn btn-style-one">
            Yadda saxla
          </button>
        </div>
        {/* <!-- About Company --> */}

        <div className="form-group col-lg-12 col-md-12">
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
          <label>Skills </label>
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
