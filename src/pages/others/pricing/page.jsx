import Pricing from "../../../components/pages-menu/pricing";
import pImage from "../../../img/social_media/new_vacancy.png";
import SEO from "../../../utils/seo";

const index = () => {
  return (
    <>
      <SEO
        title = "Abunəliklər - KING JOB" 
        description = "Şirkətlər üçün Abunəlik Paketlərinə baxaraq Şirkətinizə uyğun abunəlik paketini seçin ! Qiymətlər - Başlanğıc: 0 AZN, Dinamik Aylıq: 40 AZN, Dinamik İllik: 75 AZN"
        name = "King Job" 
        ogType = "article"
        twType = "summary_large_image" 
        image = {pImage}
        // imageWidth = "" 
      />
      <Pricing />
    </>
  );
};

export default index
