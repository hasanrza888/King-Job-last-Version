import Select from "react-select";
import { useEffect,useState } from "react";
import { setInfo } from "../../../../../../features/candidate/candidateSlice";
import { useSelector,useDispatch } from "react-redux";
import { updatecarieerinfo } from "../../../../../../services/api/candidate_api";
import {toast} from 'react-toastify'
const FormInfoBox = () => {
  const dispatch = useDispatch();
  const {info} = useSelector(state=>state.candidate);
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
    try {
      const {data} = await updatecarieerinfo(formData);
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
      console.log(data)
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        console.error(error);
      }
      
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
          <label>Job Title</label>
          <input type="text" name="jobTitle" placeholder="UI Designer" value={formData.jobTitle}
        onChange={handleChange}  />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="0 123 456 7890"
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
          <label>Current Salary($)</label>
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
          <label>Expected Salary($)</label>
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
          <label>Experience</label>
          <input type="text" name="experiencesYear" placeholder="5-10 Years" value={formData.experiencesYear}
        onChange={handleChange}  />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Age</label>
          <input type="text" name="age" placeholder="22 years" value={formData.age}
        onChange={handleChange}  />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Education Levels</label>
          <input type="text" name="educationlevelNow" placeholder="Master" value={formData.educationlevelNow}
        onChange={handleChange} />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Languages</label>
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
        <div className="form-group col-lg-6 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormInfoBox;
