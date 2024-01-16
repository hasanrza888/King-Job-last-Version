import { useState } from "react";
import { addPerPage } from "../../../features/filter/filterSlice";
import { useDispatch,useSelector } from "react-redux";
const ListingShowing = () => {
  const {alljobs} = useSelector(state=>state.job)
  const start = 0;
  const checker = 20;
  const [end,setEnd] = useState(checker);
  const dispatch = useDispatch();
  const perPageHandler = () => {
    setEnd(prev=>alljobs.length ===prev ? prev-checker :prev+checker)
    dispatch(addPerPage({
      start,
      end: alljobs.length ===end ? end-checker :end+checker
    }));
  };
  // console.log(alljobs.length,end)
  const tx =  alljobs.length ===end ? "az" : "çox"
  return (
    <div className="ls-show-more">
      {/* <p>497 Vakansiyadan 37-i göstərilir</p>
      <div className="bar">
        <span className="bar-inner" style={{ width: "40%" }}></span>
      </div> */}
      { alljobs.length>=end && (<button onClick={(perPageHandler)} className="show-more">Daha {tx} göstər</button>)}
    </div>
  );
};

export default ListingShowing;
