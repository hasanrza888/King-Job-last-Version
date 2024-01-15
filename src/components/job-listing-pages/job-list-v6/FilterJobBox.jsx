import { Link,useNavigate,useLocation } from "react-router-dom";
import jobs from "../../../data/job-featured";
import ListingShowing from "../components/ListingShowing";
import JobSelect from "../components/JobSelect";
import { addjobtosaved } from "../../../services/api/candidate_api";
import { addJobToSaved,deleteJobFromSaved } from "../../../features/candidate/candidateSlice";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../../features/loading/loadingSlice";
import {toast} from 'react-toastify'
import JobBox from "./JobBox";
import {
  addCategory,
  addDatePosted,
  addExperienceSelect,
  addJobTypeSelect,
  addKeyword,
  addLocation,
  addPerPage,
  addSalary,
  addSort,
} from "../../../features/filter/filterSlice";
import { handleApiError } from "../../../utils/apiErrorHandling";

const FilterJobBox = () => {
  const navigate = useNavigate();
  const locations = useLocation();
  const { jobList, jobSort } = useSelector((state) => state.filter);
  const {alljobs} = useSelector((state)=>state.job);
  const {savedjobs,isLoggedIn} = useSelector(state=>state.candidate)
  console.log(alljobs)
  const {
    keyword,
    location,
    destination,
    category,
    datePosted,
    jobTypeSelect,
    experienceSelect,
    salary,
  } = jobList || {};

  const { sort, perPage } = jobSort;

  const dispatch = useDispatch();

  // keyword filter on title
  const keywordFilter = (item) =>
    keyword !== ""
      ? item.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
      : item;

  // location filter
  const locationFilter = (item) =>
    location !== ""
      ? item?.city
          ?.toLocaleLowerCase()
          .includes(location?.toLocaleLowerCase())
      : item;

  // location filter
  const destinationFilter = (item) =>
    item?.destination?.min >= destination?.min &&
    item?.destination?.max <= destination?.max;

  // category filter
  const categoryFilter = (item) =>
    category !== ""
      ? item?.category?.toLocaleLowerCase() === category?.toLocaleLowerCase()
      : item;

  // job-type filter
  const jobTypeFilter = (item) =>
    item.type !== undefined && jobTypeSelect !== ""
      ? item?.type.toUpperCase() ===
          jobTypeSelect && item
      : item;

  // date-posted filter
  const datePostedFilter = (item) =>
    datePosted !== "all" && datePosted !== ""
      ? item?.created_at
          ?.toLocaleLowerCase()
          .split(" ")
          .join("-")
          .includes(datePosted)
      : item;

  // experience level filter
  const experienceFilter = (item) =>
    experienceSelect !== ""
      ? item?.experience?.toUpperCase() ===
          experienceSelect.toUpperCase() && item
      : item;

  // salary filter
  const salaryFilter = (item) => {
    if (item?.agreedSalary) {
        return true;
    }
    return (
        item?.salary !== null &&
        item?.salary >= jobList.salary.min &&
        item?.salary <= jobList.salary.max
    );
};
const removeJobFromSaved = async (id) => {
  if(!isLoggedIn){
    toast.info('İşi yadda saxlamaq üçün hesabınıza daxil olun',{
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      })
    navigate('/login', { state: { prevUrl: locations.pathname } });
  }
  else{
  dispatch(setLoading(true));
  try {
    const {data} = await addjobtosaved(id);
  const {action} = data;
  dispatch(setLoading(false));
  if(action === 'remove'){
    dispatch(deleteJobFromSaved(data.data))
  }
  else{
    dispatch(addJobToSaved(data.data))
  }
  toast.success(data.message, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
    
  } catch (error) {
    dispatch(setLoading(false));
    handleApiError(error);
  }
  }
  
}
const check = (id) => {
  let d = savedjobs?.find(s=>s.job.toString() === id.toString());
  if(d) return true;
  return false
}

  // sort filter
  const sortFilter = (a, b) =>
    sort === "des" ? a._id > b._id && -1 : a._id < b._id && -1;

  let content = alljobs
    ?.filter(keywordFilter)
    ?.filter(locationFilter)
    // ?.filter(destinationFilter)
    ?.filter(categoryFilter)
    ?.filter(jobTypeFilter)
    // ?.filter(datePostedFilter)
    ?.filter(experienceFilter)
    ?.filter(salaryFilter)
    ?.sort(sortFilter)
    .slice(perPage.start, perPage.end !== 0 ? perPage.end : 16)
    ?.map((item) => (
      <JobBox item={item} />
      // End all jobs
    ));

  // sort handler
  const sortHandler = (e) => {
    dispatch(addSort(e.target.value));
  };

  // per page handler
  const perPageHandler = (e) => {
    const pageData = JSON.parse(e.target.value);
    dispatch(addPerPage(pageData));
  };

  // clear all filters
  const clearAll = () => {
    dispatch(addKeyword(""));
    dispatch(addLocation(""));
    dispatch(addCategory(""));
    dispatch(addJobTypeSelect(""));
    dispatch(addDatePosted(""));
    dispatch(addExperienceSelect(""));
    dispatch(addSalary({ min: 0, max: 20000 }));
    dispatch(addSort(""));
    dispatch(addPerPage({ start: 0, end: 0 }));
  };
  return (
    <>
      <div className="ls-switcher">
        <div className="showing-result">
          <div className="text">
            <strong>{content?.length}</strong> Vakansiya
          </div>
        </div>
        {/* End .showing-result */}

        <div className="sort-by">
          {keyword !== "" ||
          location !== "" ||
          category !== "" ||
          jobTypeSelect !== "" ||
          datePosted !== "" ||
          experienceSelect !== "" ||
          salary?.min !== 0 ||
          salary?.max !== 20000 ||
          sort !== "" ||
          perPage.start !== 0 ||
          perPage.end !== 0 ? (
            <button
              onClick={clearAll}
              className="btn btn-danger text-nowrap me-2"
              style={{ minHeight: "45px", marginBottom: "15px" }}
            >
              Sıfırla
            </button>
          ) : undefined}

          <select
            value={sort}
            className="chosen-single form-select"
            onChange={sortHandler}
          >
            <option value="">Sıralama</option>
            <option value="asc">Newest</option>
            <option value="des">Oldest</option>
          </select>
          {/* End select */}

          <select
            onChange={perPageHandler}
            className="chosen-single form-select ms-3 "
            value={JSON.stringify(perPage)}
          >
            <option
              value={JSON.stringify({
                start: 0,
                end: 0,
              })}
            >
              Hamısı
            </option>
            <option
              value={JSON.stringify({
                start: 0,
                end: 10,
              })}
            >
              Səhifədə 10 ədəd
            </option>
            <option
              value={JSON.stringify({
                start: 0,
                end: 20,
              })}
            >
              Səhifədə 20 ədəd
            </option>
            <option
              value={JSON.stringify({
                start: 0,
                end: 30,
              })}
            >
              Səhifədə 30 ədəd
            </option>
          </select>
          {/* End select */}
        </div>
        {/* End sort by filter */}
      </div>
      {/* <!-- ls Switcher --> */}

      <div className="row">{content}</div>
      {/* End .row with jobs */}

      {/* <ListingShowing /> */}
      {/* <!-- End Pagination --> */}
    </>
  );
};

export default FilterJobBox;
