import { useEffect } from "react";
import { Link } from "react-router-dom";
import companyData from "../../../data/topCompany";
import Pagination from "../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import defaultcompanylogo from '../../../img/defaultcompanylogo.jpg'
import {toast} from 'react-toastify'
import {
  addCategory,
  addDestination,
  addFoundationDate,
  addKeyword,
  addLocation,
  addPerPage,
  addSort,
} from "../../../features/filter/employerFilterSlice";
//Services
import { fetchcompanies } from "../../../services/api/common_api";
import { setCompanies } from "../../../features/employer/employerSlice";
import { handleApiError } from "../../../utils/apiErrorHandling";
const FilterTopBox = () => {
  const {
    keyword,
    location,
    destination,
    category,
    foundationDate,
    sort,
    perPage,
  } = useSelector((state) => state.employerFilter) || {};
  const dispatch = useDispatch();
  const {allCompanies} = useSelector(state=>state.employer);
  console.log(allCompanies)
  useEffect(()=>{
    const fetchAllCompanies = async () => {
      try {
        const {data} = await fetchcompanies();
        console.log(data.data)
        dispatch(setCompanies(data.data));
      } catch (error) {
        handleApiError(error)
      }
    }

    fetchAllCompanies();
  },[dispatch])
  // console.log(allCompanies)
  // keyword filter
  const keywordFilter = (item) =>
    keyword !== ""
      ? item?.name?.toLowerCase().includes(keyword?.toLowerCase()) && item
      : item;

  // location filter
  const locationFilter = (item) =>
    location !== ""
      ? item?.location?.toLowerCase().includes(location?.toLowerCase())
      : item;

  // destination filter
  const destinationFilter = (item) =>
    item?.destination?.min >= destination?.min &&
    item?.destination?.max <= destination?.max;

  // category filter
  const categoryFilter = (item) =>
    category !== ""
      ? item?.category?.toLocaleLowerCase() === category?.toLocaleLowerCase()
      : item;

  // foundation date filter
  const foundationDataFilter = (item) =>
    item?.foundationDate?.min >= foundationDate?.min &&
    item?.foundationDate?.max <= foundationDate?.max;

  // sort filter
  const sortFilter = (a, b) =>
    sort === "des" ? a.id > b.id && -1 : a.id < b.id && -1;

  let content = allCompanies
    // ?.slice(perPage.start !== 0 && 12, perPage.end !== 0 ? perPage.end : 24)
    // ?.filter(keywordFilter)
    // ?.filter(locationFilter)
    // ?.filter(destinationFilter)
    // ?.filter(categoryFilter)
    // ?.filter(foundationDataFilter)
    // ?.sort(sortFilter)
    ?.map((company) => (
      <div
        className="company-block-four col-xl-3 col-lg-6 col-md-6 col-sm-12"
        key={company?.company?._id}
      >
        <div className="inner-box">
          <button className="bookmark-btn">
            <span className="flaticon-bookmark"></span>
          </button>

          <div className="content-inner">
            {/* <span className="featured">Featured</span> */}
            <span className="company-logo">
              <img
                width={50}
                height={50}
                src={company?.logo || defaultcompanylogo}
                alt="company brand"
              />
            </span>
            <h4>
              <Link to={`/companies-list/${company.id}`}>
                {company?.company?.name}
              </Link>
            </h4>
            <ul className="job-info flex-column">
              <li className="me-0">
                <span className="icon flaticon-map-locator"></span>
                {'Baku'}
              </li>
              <li className="me-0">
                <span className="icon flaticon-briefcase"></span>
                {'IT'}
              </li>
            </ul>
          </div>
          <ul className="flex-row">
            <li className="job-type">{company?.applynum} Müraciət</li>
            <li className="job-type me-0">{company?.vacancynum} Vakansiya</li>
          </ul>

          
        </div>
      </div>
    ));

  // per page handler
  const perPageHandler = (e) => {
    const pageData = JSON.parse(e.target.value);
    dispatch(addPerPage(pageData));
  };

  // sort handler
  const sortHandler = (e) => {
    dispatch(addSort(e.target.value));
  };

  // clear handler
  const clearAll = () => {
    dispatch(addKeyword(""));
    dispatch(addLocation(""));
    dispatch(addDestination({ min: 0, max: 100 }));
    dispatch(addCategory(""));
    dispatch(addFoundationDate({ min: 1900, max: 2028 }));
    dispatch(addSort(""));
    dispatch(addPerPage({ start: 0, end: 0 }));
  };
  return (
    <>
      <div className="ls-switcher">
        <div className="showing-result">
          <div className="text">
            <strong>{content?.length}</strong> Şirkət
          </div>
        </div>
        {/* End showing-result */}
        <div className="sort-by">
          {keyword !== "" ||
          location !== "" ||
          destination.min !== 0 ||
          destination.max !== 100 ||
          category !== "" ||
          foundationDate.min !== 1900 ||
          foundationDate.max !== 2028 ||
          sort !== "" ||
          perPage.start !== 0 ||
          perPage.end !== 0 ? (
            <button
              onClick={clearAll}
              className="btn btn-danger text-nowrap me-2"
              style={{
                minHeight: "45px",
                marginBottom: "15px",
              }}
            >
              Clear All
            </button>
          ) : undefined}

          <select
            value={sort}
            className="chosen-single form-select"
            onChange={sortHandler}
          >
            <option value="">Sıralama</option>
            <option value="asc">Ən yeni</option>
            <option value="des">Ən köhnə</option>
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
              Səhifədə 10 dənə
            </option>
            <option
              value={JSON.stringify({
                start: 0,
                end: 20,
              })}
            >
              Səhifədə 20 dənə
            </option>
            <option
              value={JSON.stringify({
                start: 0,
                end: 24,
              })}
            >
              Səhifədə 24 dənə
            </option>
          </select>
          {/* End select */}
        </div>
      </div>
      {/* End top filter bar box */}

      <div className="row">{content}</div>
      {/* End .row */}

      {/* <Pagination /> */}
      {/* <!-- Pagination --> */}
    </>
  );
};

export default FilterTopBox;
