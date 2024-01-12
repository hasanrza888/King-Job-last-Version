import { useState } from "react";

const FormContent = ({submitRegister={submitRegister},handleRegister,handleChange,registerdata,showotp}) => {
  const [otp,setotp] = useState("");
  const mainFunction = (e) => (showotp ? submitRegister(e, { ...registerdata, otp }) : handleRegister(e));
  return (
    <form onSubmit={mainFunction} method="post">
      <div className="form-group">
        <label>Ad və Soyad</label>
        <input onChange={handleChange} value={registerdata.name} type="text" name="name" placeholder="Ad və Soyad" required />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input onChange={handleChange} value={registerdata.email} type="email" name="email" placeholder="Email" required />
      </div>
      {/* name */}

      <div className="form-group">
        <label>Şifrə</label>
        <input
          id="password-field"
          type="password"
          name="password"
          placeholder="Şifrə"
          onChange={handleChange}
          value={registerdata.password}
        />
      </div>
      <div className="form-group">
        <label>Təkrar şifrə</label>
        <input
          id="passwordRepeat-field"
          type="password"
          name="passwordRepeat"
          placeholder="Təkrar şifrə"
          onChange={handleChange}
          value={registerdata.passwordRepeat}
        />
      </div>
      {showotp && (
        <div className="form-group">
        <label>Otp kod</label>
        <input
          id="otp-field"
          type="text"
          name="otp"
          placeholder="otp"
          onChange={(e)=>{setotp(e.target.value)}}
          value={otp}
        />
      </div>
      )}
      {/* password */}

      <div className="form-group">
        <button className="theme-btn btn-style-one" type="submit">
          Qeydiyyat
        </button>
      </div>
      {/* login */}
    </form>
  );
};

export default FormContent;
