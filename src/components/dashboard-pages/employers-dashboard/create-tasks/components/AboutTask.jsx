import { useSelector,useDispatch } from "react-redux";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import { handleApiError } from "../../../../../utils/apiErrorHandling";
import {toast} from 'react-toastify';
import { setLoading } from "../../../../../features/loading/loadingSlice";
const AboutTask = () => {
  const dispatch = useDispatch();
  const modules = {
    toolbar: [
      // [{ 'header': '1' }, { 'header': '2' }],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],  
      [{ 'align': [] }],
      ['clean'] 
    ],
  };
  const [formData, setFormData] = useState({
    name: "",
    descriptionOfTask: "",
  });
  const handleChange = (e) => {
    const { name} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name,
    }));
  };


  const handleDescriptionChange = (content) => {
    setFormData((prevData) => ({
      ...prevData,
      descriptionOfTask: content,
    }));
  };

  const handleSubmit  = async (e) => {
    e.preventDefault();
    try {
      if(window.confirm("Paylaşmaqa əminsizmi?")){
        dispatch(setLoading(true));
        // const {data} = await addjob(formData);
        // dispatch(addVacancy(data.data))
        dispatch(setLoading(false));
        // toast.success(data.message, {
        //   position: "top-right",
        //   autoClose: 2000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "light",
        // });
      }
      else{
        toast.success("Uğurla ləğv olundu", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      
    } catch (error) {
      dispatch(setLoading(false));
      handleApiError(error);
    }
  }
  return (
    <form onSubmit={handleSubmit} className="default-form">
      <div className="row">
        {/* <!-- Input task name --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Tapşırıq adı</label>
          <input required onChange={handleChange} type="text" name="name" placeholder="məs: Front-end tasks" />
        </div>
        {/* task description */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Tapşırığın təsviri</label>
          <ReactQuill required onChange={handleDescriptionChange} value={formData.descriptionOfTask}  theme="snow" modules={modules} style={{minHeight: '100px'}} />
        </div>
        <div className="form-group col-lg-12 col-md-12 text-right">
          <button className="theme-btn btn-style-one">Yadda Saxla</button>
        </div>
      </div>
    </form>
  );
};

export default AboutTask;
