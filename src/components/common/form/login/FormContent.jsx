import { Link } from "react-router-dom";
import LoginWithSocial from "./LoginWithSocial";

const FormContent = () => {
  return (
    <div className="form-inner">
      <h3>King Job-a daxil olun</h3>

      {/* <!--Login Form--> */}
      <form method="post">
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" placeholder="email" required />
        </div>
        {/* name */}

        <div className="form-group">
          <label>Şifrə</label>
          <input
            type="password"
            name="password"
            placeholder="şifrə"
            required
          />
        </div>
        {/* password */}

        <div className="form-group">
          <div className="field-outer">
            <div className="input-group checkboxes square">
              <input type="checkbox" name="remember-me" id="remember" />
              <label htmlFor="remember" className="remember">
                <span className="custom-checkbox"></span> Xatırla
              </label>
            </div>
            <a href="#" className="pwd">
              Şifrə-ni unutmusan?
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
            Daxil ol
          </button>
        </div>
        {/* login */}
      </form>
      {/* End form */}

      <div className="bottom-box">
        <div className="text">
          Hesabın yaxdur{" "}
          <Link
            to="#"
            className="call-modal signup"
            data-bs-toggle="modal"
            data-bs-target="#registerModal"
          >
            Qeydiyyat
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

export default FormContent;
