import { useEffect, useState } from "react";
import {
    Form,
    Button,
    Row,
    Col,
    Dropdown,
    Accordion,
    Modal,
} from "react-bootstrap";
import Incorporate from "./Incorporate/index";

function FeatureModal({ updateResultedObject, modalState, handleClose }) {
    const [featuresObject, setFeaturesObject] = useState()
    const [price, setPrice] = useState()

    const send = (obj) => {
        updateResultedObject(obj)
        setFeaturesObject(obj)
    }

    useEffect(() => {
        setPrice(featuresObject?.assigned?.length * 10)
    }, [featuresObject])

    return (
        <>
            <Modal
                size="lg"
                show={modalState}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Create Your Own Customized Package</Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-3">
                    <p> <span><b>Note:</b></span> <span className="text-secondary">Add Features By Dragging and Dropping</span></p>
                    <div className="cus-Overflow">
                        <Incorporate send={send} />
                    </div>
                </Modal.Body>
                <Modal.Footer className=" d-flex justify-content-between text-sm">
                    <div cclas style={{ backgroundColor: "#9cf6e5", padding: '5px', borderRadius: '5px' }}>
                        {" "}
                        <b className="text-lg"> Total Price</b> :{" "}
                        <span className="text-lg">{price ? price : 0}$</span>
                    </div>
                    <div>
                        <Button variant="secondary" onClick={handleClose}>
                            Okay
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default FeatureModal;
