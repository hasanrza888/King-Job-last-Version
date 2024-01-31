import { useState } from "react";
import AboutTask from "../../create-tasks/components/AboutTask";
const WidgetToFilterBox = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="chosen-outer">
      {/* <!--search box--> */}
      <div className="search-box-one">
        <form>
          <div className="form-group">
            <span className="icon flaticon-search-1"></span>
            <input
              type="search"
              name="search-field"
              placeholder="Namizəd"
              required
            />
          </div>
        </form>
      </div>
      {/* End searchBox one */}

      {/* <!--Tabs Box--> */}
      <select className="chosen-single form-select chosen-container">
        <option>Sıralama</option>
        <option>Ən Çox Qiymət</option>
        <option>Ən Az Qiymət</option>
        <option>BACKEND DEVELOPMENT	</option>
        <option>RUBY INTEVIEW</option>
        <option>NODE JS INTERVIEW</option>
      </select>

      {/* <!--Tabs Box--> */}
      <select className="chosen-single form-select chosen-container">
        <option>Tapşırıq adı</option>
        <option>MATHEMATICS</option>
        <option>FRONT END DEVELOPMENT	</option>
        <option>BACKEND DEVELOPMENT	</option>
        <option>RUBY INTEVIEW</option>
        <option>NODE JS INTERVIEW</option>
      </select>
      {/* <button onClick={()=>setShowModal(true)} className="chosen-container theme-btn btn-style-one">
        Yeni tapşırıq +
      </button> */}

      
    <AboutTask showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default WidgetToFilterBox;
