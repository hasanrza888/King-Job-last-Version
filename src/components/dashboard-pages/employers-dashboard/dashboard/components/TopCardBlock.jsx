import { useSelector } from "react-redux";
const TopCardBlock = () => {
  const {allapplyers,vacancies} = useSelector(state=>state.employer)
  const {folders} = useSelector(state=>state.task)
  const cardContent = [
    {
      id: 1,
      icon: "flaticon-briefcase",
      countNumber: vacancies?.length,
      metaName: "Vakansiyalar",
      uiClass: "ui-blue",
    },
    {
      id: 2,
      icon: "la-file-invoice",
      countNumber: allapplyers?.length,
      metaName: "Müraciətlər",
      uiClass: "ui-red",
    },
    {
      id: 3,
      icon: "la-comment-o",
      countNumber: folders?.length,
      metaName: "Tapşırıqlar",
      uiClass: "ui-yellow",
    },
    {
      id: 4,
      icon: "la-bookmark-o",
      countNumber: "32",
      metaName: "Seçilmiş Müraciətlər",
      uiClass: "ui-green",
    },
  ];

  return (
    <>
      {cardContent.map((item) => (
        <div
          className="ui-block col-xl-3 col-lg-6 col-md-6 col-sm-12"
          key={item.id}
        >
          <div className={`ui-item ${item.uiClass}`}>
            <div className="left">
              <i className={`icon la ${item.icon}`}></i>
            </div>
            <div className="right">
              <h4>{item.countNumber}</h4>
              <p>{item.metaName}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopCardBlock;
