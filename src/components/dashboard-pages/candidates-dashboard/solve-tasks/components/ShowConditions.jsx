import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router";

function ShowConditions({handleClose, showCond,res}) {
    const navigate = useNavigate();
    return ( 
        <div className="view-task">
            <Modal show={showCond} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Tapşırıq nəticəsi</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {JSON.stringify(res,null,2)}
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