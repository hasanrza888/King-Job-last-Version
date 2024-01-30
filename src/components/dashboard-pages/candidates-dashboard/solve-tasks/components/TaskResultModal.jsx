import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router";

function TaskResult({handleClose, showCond,res}) {
    const navigate = useNavigate();
    return ( 
        <div className="view-task">
            <Modal show={showCond} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                <Modal.Title>İmtahan nəticəniz</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <p>Ümumi bal: {res?.result}</p>
                <p>Ümumi doğru sayı: {res?.d?.correct}</p>
                <p>Ümumi yalnış sayı: {res?.d?.wrong}</p>
                <p>Boş bıraxılan say: {res?.d?.empty}</p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Bağla
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
     );
}

export default TaskResult;