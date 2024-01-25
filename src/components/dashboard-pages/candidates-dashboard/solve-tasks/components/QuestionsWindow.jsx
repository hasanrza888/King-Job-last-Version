import { useState } from "react";
import BreadCrumb from "../../../BreadCrumb";
import ConfirmModal from "../components/ConfirmModal";
import QuestionBox from "../components/QuestionBox";
import { useNavigate } from "react-router";
import ShowConditions from "./ShowConditions";

function QuestionsWindow() {
    const [openTask, setOpenTask] = useState(true);
    const [showConditionBox, setShowConditionBox] = useState(false);
    const handleClose = () => setOpenTask(false);
    const handleShow = () => setOpenTask(true);
    const conditionClose = () => setShowConditionBox(false);
    const conditionShow = () => setShowConditionBox(true);
    const navigate = useNavigate();


    if(openTask){
        return(
            <ConfirmModal handleClose={handleClose} handleShow={handleShow} openTask={openTask}/>
        )
    }

    if(!openTask){
        return ( 
            <div className="page-wrapper dashboard task-solve-p">
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

                                            <h4>00:00:50</h4>
                                        </div>    
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row d-flex flex-column align-items-center">
                            <div className="col-lg-12 col-xl-8 col-md-10">
                                <BreadCrumb title="Tapşırıq adı"/>
                                {/* breadCrumb */} 
                            </div>
                        </div>
                        
                        <div className="row d-flex flex-column align-items-center">
                            <div className="col-lg-12 col-xl-8 col-md-10">
                                <QuestionBox />
                                <QuestionBox />

                                {/* submit */}
                                <div className="row">
                                <div className="form-group col-lg-6 col-md-7 col-sm-12 mb-3 mb-md-0">
                                    <p>
                                    Göndər düyməsinə klik etdikdə, tapşırığı bitirmiş olursunuz !
                                    </p>
                                </div>
                                <div className="form-group d-flex flex-row-reverse col-lg-6 col-md-5 col-sm-12">
                                    <button type="submit" className="theme-btn btn-style-one">
                                    Yadda saxla
                                    </button>
                                </div>
                                </div>
                            </div>
                        </div>
                    {/* End .row */}
                    </div>
                    {/* End dashboard-outer */}
                </section>
                {/* <!-- End Dashboard --> */}
                {
                    showConditionBox && <ShowConditions  handleClose={conditionClose} handleShow={conditionShow} showCond={showConditionBox}/>
                }
            </div>
        );
    }
}

export default QuestionsWindow;