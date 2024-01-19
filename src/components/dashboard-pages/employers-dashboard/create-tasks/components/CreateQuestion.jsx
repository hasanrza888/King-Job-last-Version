import { useSelector,useDispatch } from "react-redux";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import { handleApiError } from "../../../../../utils/apiErrorHandling";
import {toast} from 'react-toastify';
import { setLoading } from "../../../../../features/loading/loadingSlice";
import { setQuestionData,updateOption,addOption,handleCorrectOptionChange } from "../../../../../features/question/questionSlice";
import { updateFolder } from "../../../../../features/task/taskSlice";
import { addquestion } from "../../../../../services/api/company_api";
const CreateQuestion = () => {
  const dispatch = useDispatch();
  const {formData} = useSelector(state=>state.question)
  console.log(formData)
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
  // const [formData, setFormData] = useState({
  //   name: "",
  //   descriptionOfTask: "",
  //   options: [{ans: "", isCorrect: false }],
  // });

  const handleChange = (value) => {
    dispatch(setQuestionData({ ...formData, question: value }));
  };

  // const handleDescriptionChange = (content) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     descriptionOfTask: content,
  //   }));
  // };

  const handleOptionChange = (index, value) => {
    dispatch(updateOption({ index, value }));
  };

  const handleCorrectOptionChanges = (index) => {
    dispatch(handleCorrectOptionChange({index}))
  };

  const addOptions = (e) => {
    e.preventDefault();
    dispatch(addOption());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
        const {data} = await addquestion(formData);
        dispatch(updateFolder(data.data))
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
    <form onSubmit={handleSubmit} className="default-form">
      <div className="row">
        {/* <div className="widget-title pl-1">
          <h4 className="text-center">Sual</h4>
        </div> */}
        {/* <!-- Input task name --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Sualın təsviri</label>
          <ReactQuill required onChange={handleChange} value={formData.question}  theme="snow" modules={modules} style={{minHeight: '100px'}} />
        </div>
        {/* task description */}
        <div className="row">
          {
            formData?.options.map((option,index)=>(

            <div className="form-group col-lg-6 col-md-12 quiz-var">
              <input type="radio" name='isCorrect' id="q1" checked={option.isCorrect}
            onChange={() => handleCorrectOptionChanges(index)}/>
              <input  onChange={(e) => handleOptionChange(index, e.target.value)}
              type="text"
              name='ans'
              placeholder="Variant"
              value={option.ans} />
            </div>

            ))
          }
          <div className="form-group col-lg-2 col-md-12 text-right">
            <button onClick={(e)=>addOptions(e)} className="theme-btn btn-style-eight" title="Sual Əlavə Et">Add option</button>
          </div> 
        </div>
        <div className="row d-flex justify-content-between mt-4">
          <div className="form-group col-lg-6 col-md-12 text-right">
            <button className="theme-btn btn-style-one">Yadda Saxla</button>
          </div>
        </div>
        
      </div>
    </form>
  );
};

export default CreateQuestion;
