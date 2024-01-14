import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { updateprofilepic } from "../../../../../../services/api/candidate_api"; // Update this with the correct path
import { setInfo } from "../../../../../../features/candidate/candidateSlice"; // Update this with the correct path
import {toast} from 'react-toastify'
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

      const { data } = await updateprofilepic(formData);

      // Assuming your API response contains the updated user info
      dispatch(setInfo(data.data));
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
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        console.error(error);
      }
      console.error("Error uploading profile photo:", error);
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
            {logoImg ? logoImg.name : "Browse Logo"}
          </label>
          <span className="uploadButton-file-name"></span>
        </div>
        <div className="text">
          Max file size is 1MB, Minimum dimension: 330x300 And Suitable files
          are .jpg & .png
        </div>
        {/* <img style={{width:150}} src={info?.profilepic} alt="ll" /> */}
      </div>
    </>
  );
};

export default LogoUpload;

