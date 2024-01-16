import { useSelector } from "react-redux";
const TopCardBlock = () => {
  const {myapplieds,savedjobs,numofactivesavedjobs} = useSelector(state=>state.candidate)
  console.log(savedjobs)
  const cardContent = [
    {
      id: 1,
      icon: "flaticon-briefcase",
      countNumber: myapplieds?.length,
      metaName: "Müraciətlərim",
      uiClass: "ui-blue",
    },
    {
      id: 2,
      icon: "las la-bell",
      countNumber: "9382",
      metaName: "Geri dönüşlər",
      uiClass: "ui-red",
    },
    {
      id: 3,
      icon: "la-comment-o",
      countNumber: "74",
      metaName: "Mesajlar",
      uiClass: "ui-yellow",
    },
    {
      id: 4,
      icon: "la-bookmark-o",
      countNumber: savedjobs?.length,
      metaName: "Yadda saxlanmışlar",
      uiClass: "ui-green",
    },
    // {
    //   id: 4,
    //   icon: "la-bookmark-o",
    //   countNumber: "32",
    //   metaName: "Yadda saxlanmışlar",
    //   uiClass: "ui-green",
    // },
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
