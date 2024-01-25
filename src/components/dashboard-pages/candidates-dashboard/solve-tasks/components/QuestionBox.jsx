import React,{useEffect} from 'react'
import { setExamVariantData } from '../../../../../features/question/questionSlice';
import { useSelector,useDispatch } from 'react-redux';
const SocialNetworkBox = ({question,no}) => {
  const dispatch  = useDispatch();
  const {examvariantdata} = useSelector(state=>state.question);
  useEffect(()=>{
    dispatch(setExamVariantData({ questionId:question?._id, answerId:null }));
  },[dispatch,question])
  const handleAnswerSelection = (questionId, answerId) => {
    dispatch(setExamVariantData({ questionId, answerId }));
  };
  return (

    <div className="ls-widget ">
      <div className="tabs-box">
        <div className="widget-title">
          <div dangerouslySetInnerHTML={{ __html: no+"."+question?.question}} />
        </div>
        {/* End widget-title */}
        <div className="widget-content">
        <form  className="default-form">
          <div className="row">
            {
              question?.options?.map((val,ind)=>(
                <div key={val?._id} className="form-group col-lg-6 col-md-12 quiz-var">
              <input type="radio" name={`question_${question?._id}`} id={`q_${question?._id}_a_${val?._id}`} onChange={() => handleAnswerSelection(question?._id, val?._id)}  />

              <input 
              type="text"
              name='ans'
              placeholder={val?.ans} disabled/>
            </div>
              ))
            }
          </div>
        </form>
        </div>
      </div>
    </div>
    
  );
};

export default SocialNetworkBox;

