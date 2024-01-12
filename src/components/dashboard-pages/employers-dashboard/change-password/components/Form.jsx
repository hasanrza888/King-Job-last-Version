const Form = () => {
  return (
    <form className="default-form">
      <div className="row">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-7 col-md-12">
          <label>Köhnə Şifrə </label>
          <input type="password" name="name" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-7 col-md-12">
          <label>Yeni Şifrə</label>
          <input type="password" name="name" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-7 col-md-12">
          <label>Yeni Şifrə təsdiqi</label>
          <input type="password" name="name" required />
        </div>

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
