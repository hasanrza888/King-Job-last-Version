import { Link } from "react-router-dom";
import jobCatContent from "../../data/job-catergories";
import { useSelector,useDispatch } from "react-redux";
import { addCategory } from "../../features/filter/filterSlice";
const JobCategorie1 = () => {
  const dispatch = useDispatch();
  const {categories} = useSelector(state=>state.category);
  const categoryHandler = (ctg) => {
    dispatch(addCategory(ctg));
};
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
                <Link onClick={()=>categoryHandler(item.name)} to="/vacancies-list">{item.name}</Link>
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
