import RegisterForm from "../../../components/pages-menu/register";
import SEO from "../../../utils/seo";
import pImage from "../../../img/social_media/new_vacancy.png";

const index = () => {
  return (
    <>
      <SEO
        title = "Qeydiyyat Et - KING JOB" 
        description = "kingjob.pro -da qeydiyyat edərək bizə qoşulun və vaxtınıza qənaət edin ! Namizəd kimi qediyyat edərək vakansiyalara müraciət et, Şirkət qeydiyyatı edərək vakansiya paylaş"
        name = "King Job" 
        ogType = "article"
        twType = "summary_large_image" 
        image = {pImage}
        // imageWidth = "" 
      />
      <RegisterForm />
    </>
  );
};

export default index
