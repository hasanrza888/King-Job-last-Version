import LogIn from "../../../components/pages-menu/login";
import SEO from "../../../utils/seo";
import pImage from "../../../img/social_media/new_vacancy.png";

const index = () => {
  return (
    <>
      <SEO
        title = "DaxiL OL - KING JOB" 
        description = "Hesabınıza daxil olaraq müraciətlərinizi, vakansiyalarınızı və geri dönüşlərinizi idarə edin !"
        name = "King Job" 
        ogType = "article"
        twType = "summary_large_image" 
        image = {pImage}
        // imageWidth = "" 
      />
      <LogIn />
    </>
  );
};

export default index
