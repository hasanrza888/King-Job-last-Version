import JobList from "../../../components/job-listing-pages/job-list-v6";
import SEO from "../../../utils/seo";
import pImage from "../../../img/social_media/new_vacancy.png";

const index = () => {
  return (
    <>
      <SEO
        title = "kingjob.pro | Vakansiyalar | İş Elanları" 
        description = "Azərbaycanda arzuladığın işə uyğun vakansiya axtar və bircə kliklə müraciət et. Şirkətlərdən geri dönüşləri hesabında izlə !"
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