// LoadingModal.js
import React from 'react';
import { Modal, Spinner } from 'react-bootstrap';

const Loading = ({ show }) => {
  return (
    <Modal show={show} centered>
      <Modal.Body className="text-center">
        <Spinner animation="border" variant="primary" />
        <p>Loading...</p>
      </Modal.Body>
    </Modal>
  );
};

export default Loading;

