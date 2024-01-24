import Select from "react-select";
import { useEffect,useState } from "react";
import { setInfo } from "../../../../../../features/candidate/candidateSlice";
import { useSelector,useDispatch } from "react-redux";
import { updatecarieerinfo } from "../../../../../../services/api/candidate_api";
import { setLoading } from "../../../../../../features/loading/loadingSlice";
import {toast} from 'react-toastify'
import { handleApiError } from "../../../../../../utils/apiErrorHandling";
const FormInfoBox = () => {
  const dispatch = useDispatch();
  const {info} = useSelector(state=>state.candidate);
  console.log(info)
  const [formData, setFormData] = useState({
    jobTitle: info.jobTitle || "",
    phone: info.phone || "",
    currentSalary: info.currentSalary || "",
    expestedSalary: info.expestedSalary || "",
    experiencesYear: info.experiencesYear || "",
    age: info.age || "",
    educationlevelNow: info.educationlevelNow || "",
    languages: info.languages || "",
  });

  // Update local state when Redux state changes
  useEffect(() => {
    setFormData({
      jobTitle: info.jobTitle || "",
      phone: info.phone || "",
      currentSalary: info.currentSalary || "",
      expestedSalary: info.expestedSalary || "",
      experiencesYear: info.experiencesYear || "",
      age: info.age || "",
      educationlevelNow: info.educationlevelNow || "",
      languages: info.languages || "",
    });
  }, [info])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const updateSubmit =async (e) => {
    e.preventDefault();
    dispatch(setLoading(true))
    try {
      const {data} = await updatecarieerinfo(formData);
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
      console.log(data)
    } catch (error) {
      dispatch(setLoading(false))
      handleApiError(error);
      
    }

  }
  return (
    <form onSubmit={updateSubmit} className="default-form">
      <div className="row">
        {/* <!-- Input --> */}
        {/* <div className="form-group col-lg-6 col-md-12">
          <label>Full Name</label>
          <input type="text" name="name" placeholder="Jerome" required />
        </div> */}

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Vəzifə</label>
          <input type="text" name="jobTitle" placeholder="UI Designer" value={formData.jobTitle}
          onChange={handleChange}  />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Telefon</label>
          <input
            type="text"
            name="phone"
            placeholder="+994 12 456 78 90"
            value={formData.phone}
            onChange={handleChange}
            
          />
        </div>

        {/* <!-- Input --> */}
        {/* <div className="form-group col-lg-6 col-md-12">
          <label>Email address</label>
          <input
            type="text"
            name="name"
            placeholder="creativelayers"
            required
          />
        </div> */}

        {/* <!-- Input --> */}
        {/* <div className="form-group col-lg-6 col-md-12">
          <label>Website</label>
          <input
            type="text"
            name="name"
            placeholder="www.jerome.com"
            required
          />
        </div> */}

        {/* <!-- Input --> */}
        <div className="form-group col-lg-3 col-md-12">
          <label>Hazırki əməkhaqqınız (AZN)</label>
          <input
            type="text"
            name="currentSalary"
            placeholder="1000-2000"
            value={formData.currentSalary}
            onChange={handleChange}
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-3 col-md-12">
          <label>Gözlənti əmək haqqı (AZN)</label>
          <input
            type="text"
            name="expestedSalary"
            placeholder="2000-3000"
            value={formData.expestedSalary}
            onChange={handleChange}
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Təcrübə</label>
          <input type="text" name="experiencesYear" placeholder="5-10" value={formData.experiencesYear}
          onChange={handleChange}  />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Yaş</label>
          <input type="text" name="age" placeholder="22" value={formData.age}
          onChange={handleChange}  />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Hazırki təhsil pilləsi</label>
          <input type="text" name="educationlevelNow" placeholder="Magistr" value={formData.educationlevelNow}
          onChange={handleChange} />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Dil bilikləri</label>
          <input
            type="text"
            name="languages"
            placeholder="English, Turkish"
            value={formData.languages}
            onChange={handleChange}
            
          />
        </div>

        {/* <!-- Search Select --> */}
        {/* <div className="form-group col-lg-6 col-md-12">
          <label>Categories </label>
          <Select
            defaultValue={[catOptions[1]]}
            isMulti
            name="colors"
            options={catOptions}
            className="basic-multi-select"
            classNamePrefix="select"
            required
          />
        </div> */}

        {/* <!-- Input --> */}
        {/* <div className="form-group col-lg-6 col-md-12">
          <label>Allow In Search & Listing</label>
          <select className="chosen-single form-select" required>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div> */}

        {/* <!-- About Company --> */}
        {/* <div className="form-group col-lg-12 col-md-12">
          <label>Description</label>
          <textarea placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"></textarea>
        </div> */}

        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Yadda saxla
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormInfoBox;
