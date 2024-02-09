import React from "react";
import Home from "../../../components/home-1";
import SEO from "../../../utils/seo";
import pImage from "../../../img/social_media/new_vacancy.png";

const index = ({numjob}) => {
  return (
    <>
      <SEO 
        title = "KING JOB, Azərbaycanın ən mükəmməl vakansiya saytı" 
        description = "Bütün iş axtarış prosesi 1 Platformada, Vakansiya axtar və bircə toxunuşla müraciət et"
        name = "King Job" 
        ogType = "article"
        twType = "summary_large_image" 
        image = {pImage}
        // imageWidth = "" 
      />
      <Home numjob={numjob}  />
    </>
  );
};

export default index;
