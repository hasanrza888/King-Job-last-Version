import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import {toast} from 'react-toastify'
import { addexperience,deleteexperience } from "../../../../../services/api/candidate_api";
import { addExperience,deleteExperience } from "../../../../../features/candidate/candidateSlice.js";
import { setLoading } from "../../../../../features/loading/loadingSlice.js";
import { handleApiError } from "../../../../../utils/apiErrorHandling.js";
const Experiences = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = (e) => {
    e.preventDefault()
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const [edu,setEdu] = useState({
    position:"",
    companyName:"",
    startDate:"",
    endDate:"",
    description:"",

  })
  const handleChange = (e) => {
    const { name, value } = e.target;

    setEdu((prevEdu) => ({
      ...prevEdu,
      [name]: value,
    }));
  };
  const dispatch = useDispatch();
  const {info} = useSelector(state=>state.candidate);
  const submitExperience =async (e) => {
    e.preventDefault();
    dispatch(setLoading(true))
    try {
      const {data} = await addexperience(edu);
      dispatch(addExperience(data.data));
      dispatch(setLoading(false))
      toast.success(data.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      closeModal();
    } catch (error) {
      dispatch(setLoading(false))
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        console.error(error);
      }
    }

  }
  const dltexperience = async (id) => {
    dispatch(setLoading(true))
    try {
      const {data} = await deleteexperience(id);
      console.log(data)
      dispatch(deleteExperience(data.data));
      dispatch(setLoading(false))
      toast.success(data.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      closeModal();
    } catch (error) {
      dispatch(setLoading(false))
      handleApiError(error)
    }
  }
  return (
    <div className="resume-outer theme-blue">
      <div className="upper-title">
        <h4>İş və Təcrübə</h4>
        <button onClick={openModal} className="add-info-btn">
          <span className="icon flaticon-plus"></span> Əlavə et
        </button>
      </div>
      {/* <!-- Resume BLock --> */}
      {
        info?.experiences?.map((experience,ind)=>{
          return <div key={ind} className="resume-block">
          <div className="inner">
            <span className="name">{experience?.companyName[0]}</span>
            <div className="title-box">
              <div className="info-box">
                <h3>{experience?.position}</h3>
                <span>{experience?.companyName}</span>
              </div>
              <div className="edit-box">
                <span className="year">{experience?.startDate?.split('-')[0]} - {experience?.endDate?.split('-')[0]}</span>
                <div className="edit-btns">
                  <button>
                    <span className="la la-pencil"></span>
                  </button>
                  <button onClick={()=>dltexperience(experience?._id)}>
                    <span className="la la-trash"></span>
                  </button>
                </div>
              </div>
            </div>
            <div className="text">
              {experience?.description}
            </div>
          </div>
        </div>
        })
      }
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>İş və ya təcrübə əlavə et</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Your education form goes here */}
          <Form >
            {/* Form fields */}
            <Form.Group controlId="formName">
              <Form.Label>Vəzifə</Form.Label>
              <Form.Control onChange={handleChange} value={edu.position} name="position" type="text" placeholder="məs-Front end developer" />
            </Form.Group>
            <br />
            <Form.Group controlId="formName">
              <Form.Label>Müəssisə</Form.Label>
              <Form.Control onChange={handleChange} value={edu.companyName} name="companyName" type="text" placeholder="məs-Paşa Bank" />
            </Form.Group>
            <br />
            <Form.Group controlId="formStartDate">
              <Form.Label>Başlama müddəti</Form.Label>
              <Form.Control onChange={handleChange} value={edu.startDate} name="startDate" type="text" placeholder="məs-2012-09-08" />
            </Form.Group>
            <br />
            <Form.Group controlId="formEndDate">
              <Form.Label>Bitmə müddəti</Form.Label>
              <Form.Control onChange={handleChange} value={edu.endDate} name="endDate" type="text" placeholder="məs-2012-09-08" />
            </Form.Group>
            <br />
            <Form.Group controlId="formDescription">
              <Form.Label>Qeyd</Form.Label>
              <Form.Control onChange={handleChange} value={edu.description} name="description" as="textarea" rows={3} placeholder="Qeyd" />
            </Form.Group>
            <br />
            <Button onClick={submitExperience} variant="primary" type="submit">
              Əlavə et
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Experiences;
