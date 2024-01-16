import { Link } from "react-router-dom";
import jobCatContent from "../../data/job-catergories";
import { useSelector } from "react-redux";
const JobCategorie1 = () => {
  const {categories} = useSelector(state=>state.category)
  return (
    <>
      {categories.map((item) => (
        <div
          className="category-block col-lg-4 col-md-6 col-sm-12"
          key={item._id}
        >
          <div className="inner-box">
            <div className="content">
              <span className={`icon ${item.icon}`}></span>
              <h4>
                <Link to="/vacancies-list">{item.name}</Link>
              </h4>
              <p>({2} Aktiv Vakansiya)</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default JobCategorie1;
