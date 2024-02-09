import JobList from "../../../components/job-listing-pages/job-list-v6";
import SEO from "../../../utils/seo";
import pImage from "../../../img/social_media/new_vacancy.png";

const index = () => {
  return (
    <>
      <SEO
        title = "kingjob.pro | Vakansiyalar | İş Elanları" 
        description = "KING JOB, Azərbaycanın ən mükəmməl vakansiya saytı, Bütün iş axtarış prosesi 1 Platformada, Vakansiya axtar və bircə toxunuşla müraciət et"
        name = "King Job" 
        ogType = "article"
        twType = "summary_large_image" 
        image = {pImage}
        // imageWidth = "" 
      />
      <JobList />
    </>
  );
};
export default index