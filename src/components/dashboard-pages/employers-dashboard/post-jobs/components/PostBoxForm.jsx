import Map from "../../../Map";
import Select from "react-select";
import { useSelector,useDispatch } from "react-redux";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import { addjob } from "../../../../../services/api/company_api";
import { handleApiError } from "../../../../../utils/apiErrorHandling";
import {toast} from 'react-toastify';
import { setLoading } from "../../../../../features/loading/loadingSlice";
import { addVacancy } from "../../../../../features/employer/employerSlice";
const PostBoxForm = () => {
  const dispatch = useDispatch();
  const {categories} = useSelector(state=>state.category);
  const {jobtypes}= useSelector(state=>state.jobtype);
  const { jobTypeList, datePost, experienceLavel } = useSelector(
    (state) => state.job
);
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
  const specialisms = [
    { value: "Banking", label: "Banking" },
    { value: "Digital & Creative", label: "Digital & Creative" },
    { value: "Retail", label: "Retail" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Managemnet", label: "Managemnet" },
    { value: "Accounting & Finance", label: "Accounting & Finance" },
    { value: "Digital", label: "Digital" },
    { value: "Creative Art", label: "Creative Art" },
  ];
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    city: "",
    type: "",
    experience: "",
    education: "",
    age: "",
    skills: [],
    descriptionOfVacancy: "",
    salary: "",
    agreedSalary: false,
    endTime: "",
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSkillsChange = (selectedOptions) => {
    const skills = selectedOptions.map((option) => option.value);
    setFormData((prevData) => ({ ...prevData, skills }));
  };

  const handleDescriptionChange = (content) => {
    setFormData((prevData) => ({
      ...prevData,
      descriptionOfVacancy: content,
    }));
  };

  const handleSubmit  = async (e) => {
    e.preventDefault();
    try {
      if(window.confirm("Paylaşmaqa əminsizmi?")){
        dispatch(setLoading(true));
        const {data} = await addjob(formData);
        dispatch(addVacancy(data.data))
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
      <div className="form-group col-lg-6 col-md-12">
          <label>Kateqoriya</label>
          
          <select required onChange={handleChange} name="category" className="chosen-single form-select">
          <option value={""} >Kateqoriya</option>
            {categories?.map((val)=>(
             <option key={val?._id} value={val?._id}>{val?.name}</option>
            ))}
          </select>
        </div>
        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Vakansiya adı</label>
          <input required onChange={handleChange} type="text" name="name" placeholder="məs: Java Developer" />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Şəhər</label>
          <select onChange={handleChange} name='city' className="chosen-single form-select">
          <option value={""} >Şəhər</option>
            {['Bakı']?.map((val)=>(
             <option key={val} value={val}>{val}</option>
            ))}
          </select>
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>İş qrafiki</label>
          <select required onChange={handleChange} name='type' className="chosen-single form-select">
          <option value={""}>İş qrafiki</option>
            {jobtypes?.map((val)=>(
             <option key={val?._id} value={val?._id}>{val?.name}</option>
            ))}
          </select>
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>Təcrübə</label>
          <select onChange={handleChange} name='experience' className="chosen-single form-select">
          <option value={""}>İş qrafiki</option>
            {experienceLavel?.map((val)=>(
             <option key={val?.id} value={val?.value}>{val?.name}</option>
            ))}
          </select>
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>Yaş</label>
          <input onChange={handleChange} type="text" name="age" placeholder="məs: 18-25" />
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>Təhsil səviyyəsi</label>
          <select onChange={handleChange} name='education' className="chosen-single form-select">
          <option value={""}>İş qrafiki</option>
            {['Təhsilsiz','Orta','Ali']?.map((val)=>(
             <option key={val} value={val}>{val}</option>
            ))}
          </select>
        </div>
        {/* <!-- About Company --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Vakansiyanın təsviri</label>
          <ReactQuill required onChange={handleDescriptionChange} value={formData.descriptionOfVacancy}  theme="snow" modules={modules} style={{minHeight: '100px'}} />
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>Xüsusi bacarıqlar </label>
          <Select
            defaultValue={[specialisms[2]]}
            isMulti
            name="skills"
            options={specialisms}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={handleSkillsChange}
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Əmək haqqı</label>
          <input onChange={handleChange} title="Əgər əmək haqqı daxil etməsəz Razılaşma kimi görünəcək" type="number" name="salary" placeholder="məs: 1000 və ya boş bıraxın" />
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>Razılaşma?</label><br />
          <input onChange={handleChange} type="checkbox" name="agreedSalary" />
        </div>
        <div className="form-group col-lg-6 col-md-12">
          <label>Bitmə tarixi</label><br />
          <input required onChange={handleChange}  type="date" name="endTime" placeholder="məs: 1000 və ya boş bıraxın" />
        </div>
        <div className="form-group col-lg-12 col-md-12 text-right">
          <button className="theme-btn btn-style-one">Paylaş</button>
        </div>
      </div>
    </form>
  );
};

export default PostBoxForm;
