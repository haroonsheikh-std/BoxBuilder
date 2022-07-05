import Link from 'next/link';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const PermitPopup = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
                   <Button variant="outline-danger" size="sm" onClick={handleShow}>Exit/Update</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure? You want to quit?</Modal.Body>
        <Modal.Footer>
          <button className='btn btn-secondary' onClick={handleClose}>
            Close
          </button>
          <Link href={'/HomeScreen'}>
              <button className='btn btn-danger' onClick={handleClose}>
            Yes
          </button></Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PermitPopup;