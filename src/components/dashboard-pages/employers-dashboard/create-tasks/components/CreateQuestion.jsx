import { useSelector,useDispatch } from "react-redux";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import { handleApiError } from "../../../../../utils/apiErrorHandling";
import {toast} from 'react-toastify';
import { setLoading } from "../../../../../features/loading/loadingSlice";
const CreateQuestion = () => {
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
        <div className="widget-title pl-1">
          <h4 className="text-center">Sual 1</h4>
        </div>
        {/* <!-- Input task name --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Sual adı</label>
          <input required onChange={handleChange} type="text" name="name" placeholder="Sual" />
        </div>
        {/* task description */}
        <div className="row">
          <div className="form-group col-lg-6 col-md-12 quiz-var">
            <input type="radio" name="question-1" id="q1"/>
            <input onChange={handleChange} type="text" name="variant-1" placeholder="Variant" />
          </div>
          <div className="form-group col-lg-6 col-md-12 quiz-var">
            <input type="radio" name="question-1" id="q2"/>
            <input onChange={handleChange} type="text" name="variant-2" placeholder="Variant" />
          </div>
          {/* <div className="form-group col-lg-6 col-md-12 quiz-var">
            <input type="radio" name="question-1" id="q3"/>
            <input onChange={handleChange} type="text" name="variant-3" placeholder="Variant" />
          </div> */}
          <div className="form-group col-lg-2 col-md-12 text-right">
            <button className="theme-btn btn-style-eight" title="Sual Əlavə Et">Variant əlavə et</button>
          </div> 
        </div>
        <div className="row d-flex justify-content-between mt-4">
          <div className="form-group col-lg-6 col-md-12 text-right">
            <button className="theme-btn btn-style-one">Yadda Saxla</button>
          </div>
          <div className="form-group col-lg-2 col-md-12 text-right">
            <button className="theme-btn btn-style-three" title="Sual Əlavə Et">+</button>
          </div>  
        </div>
        
      </div>
    </form>
  );
};

export default CreateQuestion;
