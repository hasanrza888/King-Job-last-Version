import { useSelector } from "react-redux";
import Categories from "../components/Categories";
import JobSelect from "../components/JobSelect";
import LocationBox from "../components/LocationBox";
import SearchBox from "../components/SearchBox";
import SEO from "../../../utils/seo";
import pImage from "../../../img/social_media/new_vacancy.png";

const JobSearchForm = () => {
    const { jobList } = useSelector((state) => state.filter);
    const keyword = jobList.keyword;
     // keyword filter on title
    const keywordFilter = (item) =>
    keyword !== ""
      ? item.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
      : item;
    
    const {alljobs} = useSelector((state)=>state.job);
    let content = alljobs?.filter(keywordFilter);
    
    return (
        <>
            {
                jobList.keyword && content.length > 0 &&
                <SEO
                    title = {`Azərbaycanda ${jobList.keyword} vakansiyaları üçün elanlar | King Job`} 
                    description = {`kingjob.pro-da aktiv ${jobList.keyword} vakansiyalarına baxaraq, özünə uyğun olanına bircə kliklə müraciət et və Şirkətlərdən geri dönüşünü hesabından izlə !`}
                    name = "King Job" 
                    ogType = "article"
                    twType = "summary_large_image" 
                    image = {pImage}
                    // imageWidth = "" 
                />
            }
            <div className="job-search-form">
                <div className="row">
                    <div className="form-group col-lg-4 col-md-12 col-sm-12">
                        <SearchBox />
                    </div>
                    {/* <!-- Form Group --> */}

                    <div className="form-group col-lg-4 col-md-12 col-sm-12 location">
                        <LocationBox />
                    </div>
                    {/* <!-- Form Group --> */}

                    <div className="form-group col-lg-4 col-md-12 col-sm-12 location">
                        <Categories />
                    </div>
                    {/* <!-- Form Group --> */}

                    {/* <div className="form-group col-lg-2 col-md-12 col-sm-12 text-right">
                        <button
                            type="submit"
                            className="theme-btn btn-style-one"
                        >
                            Axtar
                        </button>
                    </div> */}
                    {/* <!-- Form Group --> */}
                </div>
            </div>

            <JobSelect />
        </>
    );
};

export default JobSearchForm;
