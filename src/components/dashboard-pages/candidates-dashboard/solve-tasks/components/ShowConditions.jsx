import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router";

function ShowConditions({handleClose, showCond}) {
    const navigate = useNavigate();
    return ( 
        <div className="view-task">
            <Modal show={showCond} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Tapşırıq adı</Modal.Title>
                </Modal.Header>
                <Modal.Body>Tapşırıq təsviri:
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ab quibusdam dolorum vero expedita voluptatem corrupti doloremque perspiciatis nemo reiciendis? Ipsam aut soluta voluptas atque unde, velit quaerat eaque veritatis.
                    Animi quis nisi impedit officia magni quidem autem eum! A est temporibus officiis consectetur non doloribus tempore veritatis voluptatibus voluptate, expedita ab nulla ratione rem totam nisi sint itaque ipsam?
                    Amet iure quo vitae mollitia labore animi itaque, veritatis accusamus. Hic ad ab alias eligendi reprehenderit eius cum deleniti! Beatae harum id hic pariatur iusto deserunt quibusdam culpa voluptate reiciendis!
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