import { Col, Row, Form } from "react-bootstrap";
const ImageSelectionField = () => {
    return (
        <>
            <Col >
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label className="text-sm ">Field Title</Form.Label>
                    <Form.Control required placeholder='e.g Would you like to engrave this product?' name='title' className="text-sm" type="text" onChange={(e) => { }} label="Field Title" />
                    <p className="text-secondary text-sm"> Text to appear above the field.</p>
                </Form.Group>
            </Col>
        </>
    )
}
export default ImageSelectionField;