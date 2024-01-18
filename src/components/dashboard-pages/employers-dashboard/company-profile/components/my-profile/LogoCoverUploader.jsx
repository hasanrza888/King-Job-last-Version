import { useState } from "react";
import { updatecompanyinfo } from "../../../../../../services/api/company_api";
import { useDispatch,useSelector } from "react-redux";
import { setLoading } from "../../../../../../features/loading/loadingSlice";
import { setCompanyInfo } from "../../../../../../features/employer/employerSlice";
import {toast} from 'react-toastify'
import { handleApiError } from "../../../../../../utils/apiErrorHandling";
const LogoCoverUploader = () => {
    const dispatch = useDispatch();
    const [logoImg, setLogoImg] = useState("");
    const {companyInfo} = useSelector(state=>state.employer);
    // logo image
    const logoHandler = (file) => {
        setLogoImg(file);
    };

    const logoImgHandler = async (e) => {
        const file = e.target.files[0];
    
        try {
          const formData = new FormData();
          formData.append("file", file);
          dispatch(setLoading(true))
          const { data } = await updatecompanyinfo(formData);
          // Assuming your API response contains the updated user info
          dispatch(setCompanyInfo(data.data));
          dispatch(setLoading(false))
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
          dispatch(setLoading(false))
          handleApiError(error);
        }
      };

    return (
        <>
            <div className="uploading-outer">
                <div className="uploadButton">
                    <input
                        className="uploadButton-input"
                        type="file"
                        name="attachments[]"
                        accept="image/*"
                        id="upload"
                        onChange={logoImgHandler}
                    />
                    <label
                    style={{
                        backgroundImage: `url(${companyInfo?.logo})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "150px",
                        height: "130px", // Set a fixed height or adjust according to your design
                      }}
                        className="uploadButton-button ripple-effect"
                        htmlFor="upload"
                    >
                        Şəkil yüklə
                    </label>
                    <span className="uploadButton-file-name"></span>
                </div>
                <div className="text">
                    Şəkil həcmi ən çox 1mb.
                    Yalnız .jpg & .png
                </div>
            </div>
        </>
    );
};

export default LogoCoverUploader;
