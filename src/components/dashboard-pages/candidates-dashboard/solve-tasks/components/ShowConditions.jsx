import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router";

function ShowConditions({handleClose, showCond,res}) {
    const navigate = useNavigate();
    return ( 
        <div className="view-task">
            <Modal show={showCond} onHide={handleClose} backdrop="static">
                <Modal.Header closeButton>
                <Modal.Title>Tapşırıq haqqında</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p dangerouslySetInnerHTML={{__html:res}} />
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

export default ShowConditions;