import React from "react";
import Home from "../../../components/home-1";
import SEO from "../../../utils/seo";

const index = ({numjob}) => {
  return (
    <>
      <SEO 
        title = "kingjob.pro | Vakansiyalar | İş Elanları" 
        description = "KING JOB, Azərbaycanın ən mükəmməl vakansiya saytı, Bütün iş axtarış prosesi 1 Platformada, Vakansiya axtar və bircə toxunuşla müraciət et"
        name = "King Job" 
        ogType = "article"
        twType = "summary_large_image" 
        image = "images/social_media/new_vacancy.png" 
        // imageWidth = "" 
      />
      <Home numjob={numjob}  />
    </>
  );
};

export default index;
