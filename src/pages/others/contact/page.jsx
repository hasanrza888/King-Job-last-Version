import Contact from "../../../components/pages-menu/contact";
import SEO from "../../../utils/seo";
import pImage from "../../../img/social_media/new_vacancy.png";

const index = () => {
  return (
    <>
      <SEO
        title = "Bizimlə Əlaqə - KING JOB" 
        description = "King Job əlaqə vasitələri, Əlaqə nömrəsi: +994-077-577-31-33, E-mail: info@kingjob.pro. Təklif və İradlarınız üçün bizə məktub yazın !"
        name = "King Job" 
        ogType = "article"
        twType = "summary_large_image" 
        image = {pImage}
        // imageWidth = "" 
      />
      <Contact />
    </>
  );
};

export default index
