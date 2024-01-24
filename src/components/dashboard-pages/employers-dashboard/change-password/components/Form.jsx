import { verifyemailandsendotp } from "../../../../../services/api/common_api";
import { changecompanyaccountpassword } from "../../../../../services/api/company_api";
import { handleApiError } from "../../../../../utils/apiErrorHandling";
import { setLoading } from "../../../../../features/loading/loadingSlice";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {toast} from "react-toastify"
const Form = () => {
  const {user} = useSelector(state=>state.auth);
  const [showotp,setShowotp] = useState(false);
  const dispatch = useDispatch();
  const [form,setForm] = useState({
    email:user?.email,
    password:"",
    newpassword:"",
    newpasswordRepeat:"",
    otp:""
  })
  const handleChange = (e) => {
    const {name,value} = e.target;
    setForm(prev=>{
      return {
        ...prev,
        [name]:value
      }
    })
  }
  const vrfyemlandsndotp = async () => {
    dispatch(setLoading(true))
    try {
      const {data} = await verifyemailandsendotp({email:user?.email});
      setShowotp(true)
      toast.success(data.message,{position:'top-center',autoClose:1500});
      dispatch(setLoading(false))
    } catch (error) {
      dispatch(setLoading(false))
      handleApiError(error);
    }
  }
  const changePassword = async() => {
    dispatch(setLoading(true))
    try {
      const {data} = await changecompanyaccountpassword(form);
      toast.success(data.message,{position:'top-center',autoClose:1500});
      setShowotp(false);
      setForm({
        email:user?.email,
        password:"",
        newpassword:"",
        newpasswordRepeat:"",
        otp:""
      })
      dispatch(setLoading(false))
    } catch (error) {
      dispatch(setLoading(false))
      handleApiError(error);
    }
  }
  const submitData = async (e) => {
    e.preventDefault();
    try {
      if(form.email && form.password && form.newpassword && form.newpasswordRepeat && form.otp){
        await  changePassword();
      }
      else{
        await  vrfyemlandsndotp();
      }
    } catch (error) {
      handleApiError(error)
    }
    console.log(form)
  }
  return (
    <form onSubmit={submitData} className="default-form">
      <div className="row">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-7 col-md-12">
          <label>Köhnə Şifrə </label>
          <input onChange={handleChange} value={form.password} type="password" name="password" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-7 col-md-12">
          <label>Yeni Şifrə</label>
          <input onChange={handleChange} value={form.newpassword}  type="password" name="newpassword" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-7 col-md-12">
          <label>Yeni Şifrə təsdiqi</label>
          <input onChange={handleChange} value={form.newpasswordRepeat}  type="password" name="newpasswordRepeat" required />
        </div>
        {showotp && (
          <div className="form-group col-lg-7 col-md-12">
          <label>Otp</label>
          <input onChange={handleChange} value={form.otp}  type="text" name="otp" required />
        </div>
        )}
        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Təsdiq Et
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
