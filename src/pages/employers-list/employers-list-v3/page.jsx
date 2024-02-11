import EmployersList from "../../../components/employers-listing-pages/employers-list-v3";
import SEO from "../../../utils/seo";
import pImage from "../../../img/social_media/new_vacancy.png";

const index = () => {
  return (
    <>
      <SEO
        title = "kingjob.pro | Şirkətlər" 
        description = "Azərbaycanda arzuladığın şirkətləri axtararaq mövcud vakansiyalarını axtar və bircə kliklə müraciət et. Şirkətlərdən geri dönüşləri hesabında izlə !"
        name = "King Job" 
        ogType = "article"
        twType = "summary_large_image" 
        image = {pImage}
        // imageWidth = "" 
      />
      <EmployersList />
    </>
  );
};

export default index