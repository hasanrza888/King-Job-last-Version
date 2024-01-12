import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import LoginWithSocial from "./LoginWithSocial";
import Form from "./FormContent";
import { Link } from "react-router-dom";
import { useState } from "react";
import { validateUserData } from "../../../../services/api/auth_api";
import { registerCandidate } from "../../../../services/api/candidate_api";
const Register = () => {
  const [showotp,setShowOtp] = useState(false);
  const [registerdata, setRegisterData] = useState({
    name:"",
    email:"",
    password:"",
    passwordRepeat:""
  });
  const handleChange = (e) => {
    const {name,value} = e.target;
    setRegisterData((prev)=>({
      ...prev,
      [name]:value
    }))
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const {data} = await validateUserData(registerdata);
      setShowOtp(data.success);
     
      console.log(data)
    } catch (error) {
      console.log(error.response.data)
    }
    // console.log(registerdata)
  }

  const submitRegister = async (e,userdata) => {
    try {
      const {data} = await registerCandidate(userdata);
      console.log(data)
    } catch (error) {
      console.log(error.response)
    }
  }
  return (
    <div className="form-inner">
      <h3>Ödənişsiz hesab yaradın<nav></nav></h3>

      <Tabs>
        <div className="form-group register-dual">
          <TabList className="btn-box row">
            <Tab className="col-lg-6 col-md-12">
              <button className="theme-btn btn-style-four">
                <i className="la la-user"></i> Namizəd
              </button>
            </Tab>

            <Tab className="col-lg-6 col-md-12">
              <button className="theme-btn btn-style-four">
                <i className="la la-briefcase"></i> Şirkət
              </button>
            </Tab>
          </TabList>
        </div>
        {/* End .form-group */}

        <TabPanel>
          <Form submitRegister={submitRegister} showotp={showotp} handleRegister={handleRegister} handleChange = {handleChange} registerdata={registerdata} />
        </TabPanel>
        {/* End cadidates Form */}

        <TabPanel>
          <Form />
        </TabPanel>
        {/* End Employer Form */}
      </Tabs>
      {/* End form-group */}

      <div className="bottom-box">
        <div className="text">
          Artıq hesabın var?{" "}
          <Link
            to="/login"
            className="call-modal login"
          >
            Daxil ol
          </Link>
        </div>
        <div className="divider">
          <span>və ya</span>
        </div>
        <LoginWithSocial />
      </div>
      {/* End bottom-box LoginWithSocial */}
    </div>
  );
};

export default Register;
