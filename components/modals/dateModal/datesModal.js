// import { useState } from "react"
// import { Form, Button, Row, Col, Dropdown, Accordion, Modal } from "react-bootstrap"

// function DatesModal({ modalState, handleClose }) {
//     return (
//         <>
//             <Modal

//                 show={modalState}
//                 onHide={handleClose}
//                 backdrop="static"
//                 keyboard={false}
//                 aria-labelledby="example-modal-sizes-title-md"
//             >
//                 <Modal.Header closeButton>
//                   <p className="text-2xl mt-4">Pick specific dates to block</p>
//                 </Modal.Header>
//                 <Modal.Body className="p-3">
//                     <div className="cus-Overflow">
//                        <p>hello</p>
//                     </div>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Okay
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     );
// }

// export default DatesModal

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DatesModal = ({ modalState, handleClose }) => {

  return (
    <>
      <Modal show={modalState} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DatesModal;