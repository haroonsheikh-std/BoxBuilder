import { Col, Row, Form } from "react-bootstrap";
import { SketchPicker } from "react-color";

const SwatchColorPickerField = () => {
    return (
        <>
            <Col >
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label className="text-sm ">Field Title</Form.Label>
                    <Form.Control required placeholder='e.g Would you like to engrave this product?' name='title' className="text-sm" type="text" onChange={(e) => { }} label="Field Title" />
                    <p className="text-secondary text-sm"> Text to appear above the field.</p>
                </Form.Group>
            </Col>
            <Row>
                <Col >
                    <Form.Label className="text-sm "><b>Primary Button Color</b></Form.Label>
                    <SketchPicker />
                </Col>
                <Col >
                    <Form.Group className="mt-9" controlId="hide_from_step_progress">
                        <button type="button" class="btn btn-danger">Add Selected Color</button>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col >
                    <Form.Group className="mt-9 mb-3" controlId="description">
                        <Form.Label className="text-sm ">Display Order</Form.Label>
                        <Form.Control placeholder='e.g 1' name='description' className="text-sm" type="number" onChange={(e) => { }} label="Required Field" />
                        <p className="text-secondary text-sm">Set the order the field will display within this step. </p>
                    </Form.Group>
                </Col>
                <Col >
                    <Form.Group className="mt-9 mb-3" controlId="hide_from_step_progress">
                        <Form.Check className="text-sm" data-parent='meta_settings' name='hide_from_step_progress' type="checkbox" label="Required Field" onChange={(e) => {
                            // checkBoxData(e)
                        }} />
                        <p className="text-secondary text-sm"> Requires an answer/entry from the customer.  </p>
                    </Form.Group>
                </Col>
            </Row>
        </>
    )
}
export default SwatchColorPickerField;