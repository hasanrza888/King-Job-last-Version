import { Link,useNavigate,useLocation } from "react-router-dom";
import LoginWithSocial from "./LoginWithSocial";
import { loginUser } from "../../../../services/api/auth_api";
import {toast} from 'react-toastify';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../../../features/auth/authSlice";
import { setInfo } from "../../../../features/candidate/candidateSlice";
import { setCompanyInfo } from "../../../../features/employer/employerSlice";
import { setLoading } from "../../../../features/loading/loadingSlice";
import { handleApiError } from "../../../../utils/apiErrorHandling";
const FormContent2 = () => {
  const location = useLocation();
  const nav = useNavigate();
  const dispatch = useDispatch();
  const tt = new Date();
  const [userData,setUserData] = useState({
    email:"",
    password:"",
    time:tt.toLocaleString()
  })
  const handleChage  = (e) => {
    const {name,value} = e.target;
    setUserData((prev)=>{
      return {
        ...prev,[name]:value
      }
    })
  }

  const login = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true))
    try {
      const {data} = await loginUser(userData);
      const {u_t_p} = data.user.modified;
      dispatch(setUser(data.user.modified));
      dispatch(setLoading(false))
      console.log('logon',data.user.modified)
      toast.success(data.message,{
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
        if(u_t_p === 'u_s_r'){
          dispatch(setInfo(data.user.info))
        }else{
          dispatch(setCompanyInfo(data.user.info))
        }
        nav(location?.state?.prevUrl || '/')
      // console.log(data)
    } catch (error) {
      dispatch(setLoading(false))
      handleApiError(error);
    }
  }

  return (
    <div className="form-inner">
      <h3>Hesabınıza Daxil Olun</h3>

      {/* <!--Login Form--> */}
      <form onSubmit={login} method="post">
        <div className="form-group">
          <label>E-mail</label>
          <input type="email" name="email" placeholder="E-mail" required onChange={handleChage} />
        </div>
        {/* name */}

        <div className="form-group">
          <label>Şifrə</label>
          <input
            onChange={handleChage}
            type="password"
            name="password"
            placeholder="Şifrə"
            required
          />
        </div>
        {/* password */}

        {/* <div className="form-group">
          <div className="field-outer">
            <div className="input-group checkboxes square">
              <input type="checkbox" name="remember-me" id="remember" />
              <label htmlFor="remember" className="remember">
                <span className="custom-checkbox"></span> Yadda saxla
              </label>
            </div>
            <Link to="/" className="pwd">
              Şifrəmi unutdum
            </Link>
          </div>
        </div> */}
        {/* forgot password */}

        <div className="form-group mt-5">
          <button
            className="theme-btn btn-style-one"
            type="submit"
            name="log-in"
          >
            Daxil OL
          </button>
        </div>
        {/* login */}
      </form>
      {/* End form */}

      <div className="bottom-box">
        <div className="text">
          Hesabın yoxdur? <Link to="/register">Qeydiyyatdan keç</Link>
        </div>

        {/* <div className="divider">
          <span>Və ya</span>
        </div>

        <LoginWithSocial /> */}
      </div>
      {/* End bottom-box LoginWithSocial */}
    </div>
  );
};

export default FormContent2;
