import React, { useState } from 'react';
import { Col,Button,Modal,Form } from 'react-bootstrap';

const DatesModal = ({ modalState, handleClose }) => {

  return (
    <>
      <Modal show={modalState} onHide={handleClose} centered backdrop='static'>
        <Modal.Header closeButton>
          <Modal.Title>Pick specific dates to block</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Col >
            <Form.Group className="mb-3" controlId="titles">
                <Form.Label className="text-sm ">Dates</Form.Label>
                <Form.Control required name='titles' className="text-sm" type="date" onChange={(e) => { }} label="Field Title" />
            </Form.Group>
        </Col>
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancle
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add Date
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DatesModal;