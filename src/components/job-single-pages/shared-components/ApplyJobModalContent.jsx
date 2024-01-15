import { Link } from "react-router-dom";
import { sendapply } from "../../../services/api/candidate_api";
import {toast} from 'react-toastify';
import { useState } from "react";
import { handleApiError } from "../../../utils/apiErrorHandling";
const ApplyJobModalContent = ({job}) => {
  const [logoName, setLogoName] = useState('');
  const [file,setFile] = useState(null);
  const uploadNewCv = (e)=>{
    if(e.target.files.length > 0){
        setLogoName(e.target.files[0].name);  
        setFile(e.target.files[0]);
      }      
  }
  const sndaply = async (e) => {
    e.preventDefault();
    const formData = new FormData();
        formData.append('job', job);
        if (file) {
          formData.append('file', file);
        }
    try {
      const {data} = await sendapply(formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success(data.message,{
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
    } catch (error) {
      handleApiError(error);
    }
  }
  return (
    <form className="default-form job-apply-form">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <div className="uploading-outer apply-cv-outer">
            <div className="uploadButton">
              <input
                className="uploadButton-input"
                type="file"
                name="attachments[]"
                accept="application/pdf"
                id="upload"
                onChange={uploadNewCv}
              />
              <label
                className="uploadButton-button ripple-effect"
                htmlFor="upload"
              >
                Yeni cv yüklə (pdf)
                <br />
                Və ya hesabınla müraciət et 
                {logoName}
              </label>
            </div>
          </div>
        </div>
        {/* End .col */}

        {/* <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <textarea
            className="darma"
            name="message"
            placeholder="Mesaj"
            required
          ></textarea>
        </div> */}
        {/* End .col */}
      
        {/* <div className="col-lg-12 col-md-12 col-sm-12 form-group mt-3">
          <div className="input-group checkboxes square">
            <input type="checkbox" name="remember-me" id="rememberMe" />
            <label htmlFor="rememberMe" className="remember">
              <span className="custom-checkbox"></span>
              <span>
                <Link to="/terms" target="_blank">
                  Şərtləri
                </Link>
                {" "}
                qəbul edirəm
              </span>
            </label>
          </div>
        </div> */}
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <button
            className="theme-btn btn-style-one w-100"
            type="submit"
            name="submit-form"
            onClick={sndaply}
          >
            Tamamla
          </button>
        </div>
        {/* End .col */}
      </div>
    </form>
  );
};

export default ApplyJobModalContent;
