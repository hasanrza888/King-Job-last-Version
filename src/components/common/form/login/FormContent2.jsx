import { Link,useNavigate } from "react-router-dom";
import LoginWithSocial from "./LoginWithSocial";
import { loginUser } from "../../../../services/api/auth_api";
import {toast} from 'react-toastify';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser,setInfo } from "../../../../features/candidate/candidateSlice";
const FormContent2 = () => {
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
    try {
      const {data} = await loginUser(userData);
      dispatch(setUser(data.user.modified));
      dispatch(setInfo(data.user.info))
      console.log('logon',data.user.info)
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
        nav('/')
      // console.log(data)
    } catch (error) {
      if(error.response.data){
        toast.error(error.response.data.message,{
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          })
      }
      else{
        console.log(error)
      }
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

        <div className="form-group">
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
        </div>
        {/* forgot password */}

        <div className="form-group">
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

        <div className="divider">
          <span>Və ya</span>
        </div>

        <LoginWithSocial />
      </div>
      {/* End bottom-box LoginWithSocial */}
    </div>
  );
};

export default FormContent2;
