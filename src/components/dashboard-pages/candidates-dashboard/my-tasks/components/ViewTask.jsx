import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router";

function ViewTask({handleClose, openTask, task}) {
    const navigate = useNavigate();
    return ( 
        <div className="view-task">
            <Modal show={openTask} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{task?.taskInfoInfo?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Tapşırıq təsviri:<br />
                <p
                dangerouslySetInnerHTML={{ __html: task?.taskInfoInfo?.description }}
                />
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Bağla
                </Button>
                <Button variant="primary" onClick={()=> navigate(`/applicants-dashboard/solve-tasks/${task?._id}/${task?.taskInfo?.folder}`)}>
                    Həll Etməyə Başla
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
     );
}

export default ViewTask;