import Terms from "../../../components/pages-menu/terms";
import SEO from "../../../utils/seo";
import pImage from "../../../img/social_media/new_vacancy.png";

const index = () => {
  return (
    <>
      <SEO
        title = "Şərtlərimiz - KING JOB" 
        description = "King Job-un şərtləri ilə tanış olaraq bizə qoşula bilərsiniz !"
        name = "King Job" 
        ogType = "article"
        twType = "summary_large_image" 
        image = {pImage}
        // imageWidth = "" 
      />
      <Terms />
    </>
  );
};

export default index
