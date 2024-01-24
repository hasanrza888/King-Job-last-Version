import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { updateprofilepic } from "../../../../../../services/api/candidate_api"; // Update this with the correct path
import { setInfo } from "../../../../../../features/candidate/candidateSlice"; // Update this with the correct path
import { setLoading } from "../../../../../../features/loading/loadingSlice";
import {toast} from 'react-toastify'
import { handleApiError } from "../../../../../../utils/apiErrorHandling";
const LogoUpload = () => {
  const dispatch = useDispatch();
  const {info} = useSelector(state=>state.candidate)
  console.log(info)
  const [logoImg, setLogoImg] = useState(null);
//   console.log(logoImg)
const logoImgHandler = async (e) => {
    const file = e.target.files[0];

    try {
      const formData = new FormData();
      formData.append("file", file);
      dispatch(setLoading(true))
      const { data } = await updateprofilepic(formData);

      // Assuming your API response contains the updated user info
      dispatch(setInfo(data.data));
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
        <div  className="uploadButton">
          <input
            className="uploadButton-input"
            type="file"
            name="attachments[]"
            accept="image/*"
            id="upload"
            required
            onChange={logoImgHandler}
          />
          <label
          style={{
            backgroundImage: `url(${info?.profilepic})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "150px",
            height: "130px", // Set a fixed height or adjust according to your design
          }}
            className="uploadButton-button ripple-effect"
            htmlFor="upload"
          >
            {logoImg ? logoImg.name : "Profil Şəkli yüklə"}
          </label>
          <span className="uploadButton-file-name"></span>
        </div>
        <div className="text">
          Maksimum fayl ölçüsü 1MB, minimum ölçüsü 300x300 və .jpg & .png formatında olmalıdır
        </div>
        {/* <img style={{width:150}} src={info?.profilepic} alt="ll" /> */}
      </div>
    </>
  );
};

export default LogoUpload;

