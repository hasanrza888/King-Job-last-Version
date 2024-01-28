import { useSelector, useDispatch } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { handleApiError } from "../../../../../utils/apiErrorHandling";
import { toast } from "react-toastify";
import { setLoading } from "../../../../../features/loading/loadingSlice";
import {
  setDescriptionOfTask,
  setName,
} from "../../../../../features/question/questionSlice";
import { Modal, Button } from "react-bootstrap";
import { creatfolder } from "../../../../../services/api/company_api";
import { addFolder,clearApplyer } from "../../../../../features/task/taskSlice";
import { companysendtasktouser } from "../../../../../services/api/company_api";
const TaskModal = ({ showModal, setShowModal }) => {
  const dispatch = useDispatch();
  const { folders,selectedapplyerIds } = useSelector((state) => state.task);
  const [formData1, setFomrData1] = useState({
    folderId: "",
    endTime: "",
    startDate:"",
    numberOfTry: "",
    examdurationTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFomrData1((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true))
    try {
    //   console.log({...formData1,applyIds:selectedapplyerIds});
        const {data} = await companysendtasktouser({...formData1,applyIds:selectedapplyerIds});
        dispatch(setLoading(false));
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
          dispatch(clearApplyer())
        handleClose();

    } catch (error) {
        dispatch(setLoading(false));
      handleApiError(error);
    }
  };

  return (
    <>
      <Modal size="lg" show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>About Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} className="default-form">
            <select
              name="folderId"
              onChange={handleChange}
              value={formData1.folderId}
              className="chosen-single form-select chosen-container"
            >
              <option value="">Tapşırıq seç</option>
              {folders?.map((folder, index) => (
                <option key={index} value={folder._id}>
                  {folder.name}
                </option>
              ))}
            </select>
            <div className="form-group col-lg-6 col-md-12">
              <label>Başlanma tarixi</label><br />
              <input
                required
                onChange={handleChange}
                type="datetime-local"
                value={formData1.startDate}
                name="startDate"
              />
            </div>
            <div className="form-group col-lg-6 col-md-12">
              <label>Son tarix</label><br />
              <input
                required
                onChange={handleChange}
                type="datetime-local"
                value={formData1.endTime}
                name="endTime"
              />
            </div>
            <div className="form-group col-lg-6 col-md-12">
              <label>Cəhd sayı</label>
              <input
                onChange={handleChange}
                type="number"
                value={formData1.numberOfTry}
                name="numberOfTry"
                placeholder="məs:2"
              />
            </div>
            <div className="form-group col-lg-6 col-md-12">
              <label>
                İmtahan müddəti<small>dəqiqə ilə</small>
              </label>
              <input
                onChange={handleChange}
                type="number"
                value={formData1.examdurationTime}
                name="examdurationTime"
                placeholder="məs:90"
              />
            </div>
            <div className="form-group col-lg-12 col-md-12 text-right">
              <button className="theme-btn btn-style-one">Əlavə et</button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TaskModal;
