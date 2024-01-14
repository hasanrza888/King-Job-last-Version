import { useSelector } from "react-redux";

const ContactInfoBox = () => {
  const {info} = useSelector(state=>state.candidate)
  return (
    <form className="default-form">
      <div className="row">

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>City</label>
          <select value={info?.city} className="chosen-single form-select">
            <option>Melbourne</option>
            <option>Pakistan</option>
            <option>Chaina</option>
            <option>Japan</option>
            <option>India</option>
          </select>
        </div>
        <div className="form-group col-lg-12 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactInfoBox;
