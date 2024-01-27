import { useState,useEffect } from "react";
import BreadCrumb from "../../../BreadCrumb";
import ConfirmModal from "../components/ConfirmModal";
import QuestionBox from "../components/QuestionBox";
import { useNavigate } from "react-router";
import ShowConditions from "./ShowConditions";
import { useParams } from "react-router";
import { fetchtaskquestions } from "../../../../../services/api/candidate_api";
import { handleApiError } from "../../../../../utils/apiErrorHandling";
import { useSelector,useDispatch } from "react-redux";
import { setLoading } from "../../../../../features/loading/loadingSlice";
import { checktaskresult } from "../../../../../services/api/candidate_api";
import CountdownTimer from "./CountdownTimer";
function QuestionsWindow() {
    const dispatch = useDispatch();
    const params = useParams();
    // console.log(params)
    const {applyId,taskId} = params;
    const [currentTask,setCurrentTask] = useState(null);
    const [aditionalinfo,setaddinfo] = useState(null);
    const {examvariantdata} = useSelector(state=>state.question);
    const [stopTimerCondition,setstopTimerCondition] = useState(false)
    useEffect(()=>{
        const fetchQuestions = async () => {
            try {
                dispatch(setLoading(true))
                const {data} = await fetchtaskquestions(applyId,taskId);
                console.log(data)
                // console.log(data)
                setCurrentTask(data.data)
                setaddinfo(data.additionalInfo)
                dispatch(setLoading(false))
            } catch (error) {
                dispatch(setLoading(false))
                handleApiError(error);
            }
        }
        fetchQuestions();
    },[applyId,taskId,dispatch])
    const [showConditionBox, setShowConditionBox] = useState(false);
    const conditionClose = () => setShowConditionBox(false);
    const conditionShow = () => setShowConditionBox(true);
    const [res,setRes] = useState(null)
    const navigate = useNavigate();
    const finishExam = async () => {
        try {
            dispatch(setLoading(true))
            const {data} = await checktaskresult(applyId,taskId,{crtans:examvariantdata})
            // console.log(data)
            setRes(data)
            dispatch(setLoading(false))
            setShowConditionBox(true);
            setstopTimerCondition(true)
        } catch (error) {
            dispatch(setLoading(false))
            handleApiError(error)
        }

    }
        return ( 
            
            <div className="page-wrapper dashboard task-solve-p">
                {currentTask?.questions?.length >0 && (
                <section className="user-dashboard pb-5">
                    <div className="dashboard-outer">
                        
                        <span className="header-span"></span>
                        <span className="header-span"></span>
                        
                        <div className="row fixed-top">
                            <div className="col-lg-12">
                                {/* <!-- Ls widget --> */}
                                <div className="ls-widget">
                                    <div className="tabs-box">
                                        <div className="widget-title">
                                            <div className="chosen-outer" style={{display:"flex", flexDirection:"row", }}>
                                                {/* <!--Tabs Box--> */}
                                                <button onClick={()=> (navigate("/applicants-dashboard/my-tasks"))} className="theme-btn btn-style-three small" style={{marginRight:"10px"}}>
                                                    Geri qayıt
                                                </button>
                                                <button className="theme-btn btn-style-three small" onClick={()=> setShowConditionBox(true)}>
                                                    Tapşırıq haqqında
                                                </button>
                                            </div>

                                            <CountdownTimer durationInMinutes={aditionalinfo?.examdurationTime} stopTimerCondition={stopTimerCondition} />
                                        </div>    
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row d-flex flex-column align-items-center">
                            <div className="col-lg-12 col-xl-8 col-md-10">
                                <BreadCrumb title={currentTask?.name}/>
                                {/* breadCrumb */} 
                            </div>
                        </div>
                        
                        <div className="row d-flex flex-column align-items-center">
                            <div className="col-lg-12 col-xl-8 col-md-10">
                                {
                                    currentTask?.questions?.map((val,ind)=>(
                                        <QuestionBox key={ind} question={val} no={ind+1} /> 
                                    ))
                                }
                                <div className="row">
                                <div className="form-group col-lg-6 col-md-7 col-sm-12 mb-3 mb-md-0">
                                    <p>
                                    Göndər düyməsinə klik etdikdə, tapşırığı bitirmiş olursunuz !
                                    </p>
                                </div>
                                <div className="form-group d-flex flex-row-reverse col-lg-6 col-md-5 col-sm-12">
                                    <button onClick={finishExam} className="theme-btn btn-style-one">
                                    Bitir
                                    </button>
                                </div>
                                </div>
                            </div>
                        </div>
                    {/* End .row */}
                    </div>
                    {/* End dashboard-outer */}
                </section>
                )}
                {/* <!-- End Dashboard --> */}
                {
                    showConditionBox && <ShowConditions  handleClose={conditionClose} handleShow={conditionShow} showCond={showConditionBox} res={res || currentTask?.description}/>
                }
            </div>
            
        );
        
    }
    
    function formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    }

export default QuestionsWindow;