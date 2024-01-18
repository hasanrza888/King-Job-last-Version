import Select from "react-select";
import { setCompanyInfo } from "../../../../../../features/employer/employerSlice";
import { handleApiError } from "../../../../../../utils/apiErrorHandling";
import {toast} from 'react-toastify';
import {updatecompanyinfo} from '../../../../../../services/api/company_api'
import { useDispatch,useSelector } from "react-redux";
import { useState,useEffect } from "react";
import { setLoading } from "../../../../../../features/loading/loadingSlice";
const FormInfoBox = () => {
    const dispatch = useDispatch();
  const {companyInfo} = useSelector(state=>state.employer);

  console.log(companyInfo)
  const [formData, setFormData] = useState({
    info: companyInfo?.info || "",
    phone: companyInfo?.phone || "",
    website: companyInfo?.website || "",
    categories:companyInfo?.categories || []
  });

  // Update local state when Redux state changes
  useEffect(() => {
    setFormData({
      info: companyInfo?.info || "",
      phone: companyInfo?.phone || "",
      website: companyInfo?.website || "",
      categories:companyInfo?.categories || []
    });
  }, [companyInfo])
  const [def, setDef] = useState([]);
  useEffect(()=>{
    const s = companyInfo?.categories?.map(val=>({value:val,label:val}));
    setDef(s);
  },[companyInfo])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleCategoriesChange = (selectedOptions) => {
    setDef(selectedOptions);
    const d =  selectedOptions.map(option => option.value)
    console.log(d)
    setFormData((prevData) => ({
      ...prevData,
      categories:d,
    }));
  };
  const updateSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    // dispatch(setLoading(true))
    try {
      const {data} = await updatecompanyinfo(formData);
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
      console.log(data)
    } catch (error) {
      dispatch(setLoading(false))
      handleApiError(error);
      
    }

  }
    const catOptions = [
        { value: "Banking", label: "Banking" },
        { value: "Digital & Creative", label: "Digital & Creative" },
        { value: "Retail", label: "Retail" },
        { value: "Human Resources", label: "Human Resources" },
        { value: "Managemnet", label: "Managemnet" },
        { value: "Accounting & Finance", label: "Accounting & Finance" },
        { value: "Digital", label: "Digital" },
        { value: "Creative Art", label: "Creative Art" },
    ];

    return (
        <form onSubmit={updateSubmit} className="default-form">
            <div className="row">
                {/* <!-- Input --> */}
                {/* <div className="form-group col-lg-6 col-md-12">
                    <label>Company name (optional)</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Invisionn"
                        required
                    />
                </div> */}

                {/* <!-- Input --> */}
                {/* <div className="form-group col-lg-6 col-md-12">
                    <label>Email address</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="ib-themes"
                        required
                    />
                </div> */}

                {/* <!-- Input --> */}
                <div className="form-group col-lg-6 col-md-12">
                    <label>Telefon</label>
                    <input
                        onChange={handleChange}
                        value={formData.phone}
                        type="text"
                        name="phone"
                        placeholder="0 123 456 7890"
                    />
                </div>

                {/* <!-- Input --> */}
                <div className="form-group col-lg-6 col-md-12">
                    <label>Veb sayt</label>
                    <input
                        onChange={handleChange}
                        value={formData.website}
                        type="text"
                        name="website"
                        placeholder="www.invision.com"
                    />
                </div>

                {/* <!-- Input --> */}
                {/* <div className="form-group col-lg-6 col-md-12">
                    <label>Est. Since</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="06.04.2020"
                        required
                    />
                </div> */}

                {/* <!-- Input --> */}
                {/* <div className="form-group col-lg-6 col-md-12">
                    <label>Team Size</label>
                    <select className="chosen-single form-select" required>
                        <option>50 - 100</option>
                        <option>100 - 150</option>
                        <option>200 - 250</option>
                        <option>300 - 350</option>
                        <option>500 - 1000</option>
                    </select>
                </div> */}

                {/* <!-- Search Select --> */}
                <div className="form-group col-lg-6 col-md-12">
                    <label>Şirkətin xidmət kateqoriyaları</label>
                    <Select
                        value={def}
                        isMulti
                        name="categories"
                        isSearchable
                        options={catOptions}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={handleCategoriesChange}
                    />
                </div>

                {/* <!-- Input --> */}
                {/* <div className="form-group col-lg-6 col-md-12">
                    <label>Allow In Search & Listing</label>
                    <select className="chosen-single form-select">
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div> */}

                {/* <!-- About Company --> */}
                <div className="form-group col-lg-12 col-md-12">
                    <label>Şirkət haqqında</label>
                    <textarea onChange={handleChange} value={formData.info} name="info" placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"></textarea>
                </div>

                {/* <!-- Input --> */}
                <div className="form-group col-lg-6 col-md-12">
                    <button className="theme-btn btn-style-one">Yadda saxla</button>
                </div>
            </div>
        </form>
    );
};

export default FormInfoBox;
