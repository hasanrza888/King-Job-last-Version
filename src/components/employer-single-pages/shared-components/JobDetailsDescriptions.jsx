import GalleryBox from "./GalleryBox";

const JobDetailsDescriptions = ({employer}) => {
  return (
    <div className="job-detail">
      <h4>Şirkət haqqında</h4>
      {employer?.companyInfo?.info  || "Qeyd yoxdur"}
    </div>
  );
};

export default JobDetailsDescriptions;
