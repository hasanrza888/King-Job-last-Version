import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import {toast} from 'react-toastify';
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import { deleteachievement,addachievement } from "../../../../../services/api/candidate_api";
import { addAchievement,deleteAchievement } from "../../../../../features/candidate/candidateSlice";
import { setLoading } from "../../../../../features/loading/loadingSlice";
import { handleApiError } from "../../../../../utils/apiErrorHandling";
const Awards = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const openModal = (e) => {
    e.preventDefault()
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const [edu,setEdu] = useState({
    name:"",
    certificateUrl:"",
    startDate:"",
    endDate:"",

  })
  const handleChange = (e) => {
    const { name, value } = e.target;

    setEdu((prevEdu) => ({
      ...prevEdu,
      [name]: value,
    }));
  };
  const {info} = useSelector(state=>state.candidate);
  const submitAchievement =async (e) => {
    e.preventDefault();
    dispatch(setLoading(true))
    try {
      const {data} = await addachievement(edu);
      dispatch(addAchievement(data.data));
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
  const dltachievement = async (id) => {
    dispatch(setLoading(true))
    try {
      const {data} = await deleteachievement(id);
      console.log(data)
      dispatch(deleteAchievement(data.data));
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
    <div className="resume-outer theme-yellow">
      <div className="upper-title">
        <h4>Sertifikatlar</h4>
        <button onClick={openModal}  className="add-info-btn">
        <span className="icon flaticon-plus"></span> Əlavə et
        </button>
      </div>
      {
        info?.achievements?.map((ach,ind)=>{
          return <div key={ind} className="resume-block">
          <div className="inner">
            <span className="name">{ach?.name[0]}</span>
            <div className="title-box">
              <div className="info-box">
                <h3>{ach?.name}</h3>
                <span></span>
              </div>
              <div className="edit-box">
                <span className="year">{ach?.startDate?.split('-')[0]} - {ach?.endDate?.split('-')[0]}</span>
                <div className="edit-btns">
                  <button>
                    <span className="la la-pencil"></span>
                  </button>
                  <button onClick={()=>dltachievement(ach?._id)}>
                    <span className="la la-trash"></span>
                  </button>
                </div>
              </div>
            </div>
            <div className="text">
              <Link  to={ach?.certificateUrl}>Sertifikat</Link>
            </div>
          </div>
        </div>
        })
      }

      {/* <!-- Resume BLock --> */}
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Sertificat əlavə et</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Your education form goes here */}
          <Form >
            {/* Form fields */}
            <Form.Group controlId="formName">
              <Form.Label>Ad</Form.Label>
              <Form.Control onChange={handleChange} value={edu.name} name="name" type="text" placeholder="məs-Bronze medal of Respublician olympiad" />
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label>Sertifikat linki</Form.Label>
              <Form.Control onChange={handleChange} value={edu.certificateUrl} name="certificateUrl" type="text" placeholder="https://www.google.drive/myserfikat" />
            </Form.Group>
            <Form.Group controlId="formStartDate">
              <Form.Label>Başlama müddəti</Form.Label>
              <Form.Control onChange={handleChange} value={edu.startDate} name="startDate" type="text" placeholder="məs-2012-09-08" />
            </Form.Group>
            <Form.Group controlId="formEndDate">
              <Form.Label>Bitmə müddəti</Form.Label>
              <Form.Control onChange={handleChange} value={edu.endDate} name="endDate" type="text" placeholder="məs-2012-09-08" />
            </Form.Group>
            <Button onClick={submitAchievement} variant="primary" type="submit">
              Əlavə et
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Awards;
