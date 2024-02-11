import About from "../../../components/pages-menu/about";
import SEO from "../../../utils/seo";
import pImage from "../../../img/social_media/new_vacancy.png";

const index = () => {

  return (
    <>
      <SEO
        title = "Haqqımızda - KING JOB" 
        description = "Biz King Job olaraq, işlərinizi daha asanlaşdırmaq və vaxtınıza qənaət etmək üçün yeni bir yol aça bilməyimizə sevinirik ! kingjob.pro iş və ya işçi axtaranların onlayn."
        name = "King Job" 
        ogType = "article"
        twType = "summary_large_image" 
        image = {pImage}
        // imageWidth = "" 
      />
      <About />
    </>
  );
};

export default index
