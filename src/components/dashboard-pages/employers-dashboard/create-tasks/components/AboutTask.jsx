import { useSelector, useDispatch } from "react-redux";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import { handleApiError } from "../../../../../utils/apiErrorHandling";
import { toast } from 'react-toastify';
import { setLoading } from "../../../../../features/loading/loadingSlice";
import { setDescriptionOfTask, setName } from "../../../../../features/question/questionSlice";
import { Modal, Button } from 'react-bootstrap';
import { creatfolder } from "../../../../../services/api/company_api";
import { addFolder } from "../../../../../features/task/taskSlice";
const AboutTask = ({showModal,setShowModal}) => {
  const dispatch = useDispatch();
  const { formData1 } = useSelector(state => state.question);
  console.log(formData1)
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      [{ 'align': [] }],
      ['clean']
    ],
  };

  const handleChange = (e) => {
    dispatch(setName(e.target.value));
  };

  const handleDescriptionChange = (content) => {
    dispatch(setDescriptionOfTask(content));
  };

  // const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true))
    try {
      const {data} = await creatfolder(formData1);
      dispatch(addFolder(data.data));
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
      handleClose();
    } catch (error) {
      dispatch(setLoading(false));
      handleApiError(error);
    }
  }

  return (
    <>
      <Modal size="lg" show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>About Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} className="default-form">
            <div className="row">
              <div className="form-group col-lg-6 col-md-12">
                <label>Tapşırıq adı</label>
                <input required onChange={handleChange} type="text" value={formData1.name} name="name" placeholder="məs: Front-end tasks" />
              </div>
              <div className="form-group col-lg-12 col-md-12">
                <label>Tapşırığın təsviri</label>
                <ReactQuill required onChange={handleDescriptionChange} value={formData1.descriptionOfTask} theme="snow" modules={modules} style={{ minHeight: '100px' }} />
              </div>
              <div className="form-group col-lg-12 col-md-12 text-right">
                <button className="theme-btn btn-style-one">Əlavə et</button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AboutTask;
