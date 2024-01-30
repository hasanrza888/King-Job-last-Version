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
import { detectillegalactiononexam,uploadexamscreenrocerder } from "../../../../../services/api/company_api";
import TaskResult from "./TaskResultModal";
import RecordRTC from 'recordrtc';
function QuestionsWindow() {
    const dispatch = useDispatch();
    const params = useParams();
    // console.log(params)
    const {applyId,taskId} = params;
    const [currentTask,setCurrentTask] = useState(null);
    const [aditionalinfo,setaddinfo] = useState(null);
    const {examvariantdata} = useSelector(state=>state.question);
    const [stopTimerCondition,setstopTimerCondition] = useState(false)
    const [recorder, setRecorder] = useState(null);
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
    const [showResultBox, setShowResultBox] = useState(false);
    const conditionClose = () => setShowConditionBox(false);
    const conditionShow = () => setShowConditionBox(true);
    const resultBoxClose = () => {
        setShowResultBox(false);
        navigate('/applicants-dashboard/my-tasks')

    };
    const resultBoxShow = () => setShowResultBox(true);
    const [res,setRes] = useState(null)
    var navigate = useNavigate();
    
    const sendIllegalActionToDb = async (data) => {
        try {
          const response = await detectillegalactiononexam(data)
        } catch (error) {
          handleApiError(error)
        }
      }
      useEffect(() => {
        const handleVisibilityChange = async () => {
          if (document.visibilityState === 'hidden') {
            // Page is hidden, user switched tabs or left the page
            await sendIllegalActionToDb({applyerId:applyId,leftTime:new Date()});
          } else {
            await sendIllegalActionToDb({applyerId:applyId,joinTime:new Date()});
            // Page is visible again
            // You can add additional logic if needed
          }
        };
    
        document.addEventListener("visibilitychange", handleVisibilityChange);
    
        return () => {
          // Cleanup function
          document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
      }, []);

    //   const startRecording = () => {
    //     navigator.mediaDevices
    //       .getDisplayMedia({ video: true })
    //       .then((stream) => {
    //         const recorder = RecordRTC(stream, { type: 'video' });
    //         setRecorder(recorder);
    //         recorder.startRecording();
    //       })
    //       .catch((error) => {
    //         console.error('Error accessing screen:', error);
    //       });
    //   };
    //   useEffect(()=>{
    //     startRecording();
    //   },[])
    //   const stopRecordingAndUpload = async () => {
    //     if (recorder) {
    //       recorder.stopRecording(() => {
    //         const blob = recorder.getBlob();
    //         uploadVideo(blob);
    //       });
    //     }
    //   };
    //   const uploadVideo = async (videoBlob) => {
    //     try {
    //       const formData = new FormData();
    //       formData.append('file', videoBlob, 'exam_video.webm');
    //       const response = await uploadexamscreenrocerder(formData, {
    //         headers: {
    //           'Content-Type': 'multipart/form-data',
    //         },
    //       });
    //     } catch (error) {
    //       console.error('Error uploading video:', error);
    //     }
    //   };
      const finishExam = async () => {
        try {
            dispatch(setLoading(true))
            const {data} = await checktaskresult(applyId,taskId,{crtans:examvariantdata})
            // console.log(data)
            setRes(data)
            dispatch(setLoading(false))
            setShowResultBox(true);
            setstopTimerCondition(true)
            // await stopRecordingAndUpload()
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
                    showConditionBox && <ShowConditions  handleClose={conditionClose} handleShow={conditionShow} showCond={showConditionBox} res={currentTask?.description}/>
                }
                {
                    showResultBox && <TaskResult  handleClose={resultBoxClose} handleShow={resultBoxShow} showCond={showResultBox} res={res}/>
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