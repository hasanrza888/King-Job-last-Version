import { Link } from "react-router-dom";
import LoginWithSocial from "./LoginWithSocial";

const FormContent2 = () => {
  return (
    <div className="form-inner">
      <h3>Hesabınıza Daxil Olun</h3>

      {/* <!--Login Form--> */}
      <form method="post">
        <div className="form-group">
          <label>E-mail</label>
          <input type="email" name="email" placeholder="E-mail" required />
        </div>
        {/* name */}

        <div className="form-group">
          <label>Şifrə</label>
          <input
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
            <a href="#" className="pwd">
              Şifrəmi unutdum
            </a>
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
