import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import {toast} from 'react-toastify';
import { deleteeducation,addeducation } from "../../../../../services/api/candidate_api";
import { addEducation,deleteEducation } from "../../../../../features/candidate/candidateSlice";
import { setLoading } from "../../../../../features/loading/loadingSlice";
import { handleApiError } from "../../../../../utils/apiErrorHandling";
const Education = () => {
  const [edu,setEdu] = useState({
    name:"",
    school:"",
    startDate:"",
    endDate:"",
    description:"",
    continue:false

  })
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // If the input is a checkbox, use checked value
    const newValue = type === "checkbox" ? checked : value;

    setEdu((prevEdu) => ({
      ...prevEdu,
      [name]: newValue,
    }));
  };

  
  const dispatch = useDispatch();
  const {info} = useSelector(state=>state.candidate)
  const [showModal, setShowModal] = useState(false);

  const openModal = (e) => {
    e.preventDefault()
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSave = () => {
    // Handle saving education data
    closeModal(); // Close the modal after saving
  };
  const submitEducation =async (e) => {
    e.preventDefault();
    dispatch(setLoading(true))
    try {
      const {data} = await addeducation({education:edu});
      dispatch(addEducation(data.data));
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
  const dlteducation = async (id) => {
    dispatch(setLoading(true))
    try {
      const {data} = await deleteeducation(id);
      console.log(data)
      dispatch(deleteEducation(data.data));
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
    <div className="resume-outer">
      <div className="upper-title">
        <h4>Təhsil</h4>
        <button className="add-info-btn" onClick={openModal}>
          <span className="icon flaticon-plus"></span> Əlavə et
        </button>
      </div>
      {/* <!-- Resume BLock --> */}
      {
        info?.educations?.map((education,ind)=>{
          return <div key={ind} className="resume-block">
          <div className="inner">
            <span className="name">{education?.school[0]}</span>
            <div className="title-box">
              <div className="info-box">
                <h3>{education?.name}</h3>
                <span>{education?.school}</span>
              </div>
              <div className="edit-box">
                <span className="year">{education?.startDate?.split("-")[0]}-{education?.endDate?.split("-")[0]}</span>
                <div className="edit-btns">
                  <button>
                    <span className="la la-pencil"></span>
                  </button>
                  <button onClick={()=>dlteducation(education?._id)}>
                    <span className="la la-trash"></span>
                  </button>
                </div>
              </div>
            </div>
            <div className="text">
              {education?.description}
            </div>
          </div>
        </div>
        })
      }
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Təhsil əlavə et</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Your education form goes here */}
          <Form >
            {/* Form fields */}
            <Form.Group controlId="formName">
              <Form.Label>Təhsil pilləsi</Form.Label>
              <Form.Control onChange={handleChange} value={edu.name} name="name" type="text" placeholder="Təhsil pilləsi" />
            </Form.Group>
            <br />
            <Form.Group controlId="formName">
              <Form.Label>Müəssisə</Form.Label>
              <Form.Control onChange={handleChange} value={edu.school} name="school" type="text" placeholder="müəssisə" />
            </Form.Group>
            <br />
            <Form.Group controlId="formStartDate">
              <Form.Label>Başlama müddəti</Form.Label>
              <Form.Control onChange={handleChange} value={edu.startDate} name="startDate" type="text" placeholder="Başlama müddəti" />
            </Form.Group>
            <br />
            <Form.Group controlId="formEndDate">
              <Form.Label>Bitmə müddəti</Form.Label>
              <Form.Control onChange={handleChange} value={edu.endDate} name="endDate" type="text" placeholder="Bitmə müddəti" />
            </Form.Group>
            <br />
            <Form.Group controlId="formDescription">
              <Form.Label>Qeyd</Form.Label>
              <Form.Control onChange={handleChange} value={edu.description} name="description" as="textarea" rows={3} placeholder="Qeyd" />
            </Form.Group>
            <br />
            <Form.Group controlId="formContinue">
              <Form.Check onChange={handleChange} value={edu.continue} name="continue" type="checkbox" label="hələ davam edir" />
            </Form.Group>
            <br />
            <Button onClick={submitEducation} variant="primary" type="submit">
              Əlavə et
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Education;
