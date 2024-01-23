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
      {categories?.filter(v=>v.numofactivevacancywithiscategory!==0)?.map((item) => (
        <div
          className="category-block col-lg-4 col-md-6 col-sm-12"
          key={item?._id}
        >
          <div className="inner-box">
            <div className="content">
              <span className={`icon ${item.icon}`}></span>
              <h4>
                <Link onClick={()=>categoryHandler(item?.name)} to="/vacancies-list">{item?.name}</Link>
              </h4>
              <p>({item?.numofactivevacancywithiscategory} Aktiv Vakansiya)</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default JobCategorie1;
