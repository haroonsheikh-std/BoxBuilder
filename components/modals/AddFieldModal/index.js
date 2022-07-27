import { useState } from "react"
import { Form, Button, Row, Col, Dropdown, Accordion, Modal } from "react-bootstrap"
import AddField from './AddField/index'
import Image from "next/image"

const AddFieldModal = ({ modalState, handleClose }) => {

    const [selectedFieldType, setSelectedFIeldType] = useState();

    const fieldTypes = [
        'Text Entry',
        'Text Entry (Multi-line)',
        'DropDown Box',
        'Number entry',
        'Date Entry',
        'Custom Date Picker',
        'Swatch Color Picker',
        'Image Selection',
        'File/Image Upload',
        'Checkbox',
        'Color Picker'
    ]

    const handleFieldDropdown = (e) => {
        console.log(e.target.value)
        setSelectedFIeldType(e.target.value)
    }

    return (
        <>
            <Modal
                size="lg"
                show={modalState}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                aria-labelledby="example-modal-sizes-title-md"
            >
                <Modal.Header closeButton>
                    <Modal.Title >Add a field</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-sm cus-Overflow">
                    <Row>
                        <Col >
                            <Form.Group className="mb-3" controlId="redirect">
                                <Form.Label className="text-sm ">Field Type</Form.Label>
                                <Form.Select name="redirect" onChange={(e) => { handleFieldDropdown(e) }} aria-label="Default select example">
                                    {fieldTypes.map((d, i) => {
                                        return (
                                            <>
                                                <option selected name={d} value={d}>{d} </option>
                                            </>
                                        )
                                    }
                                    )}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>

                    <AddField fieldType={selectedFieldType} />

                    
                    <Col>
                        <Form.Label className="text-sm font-bold ">Conditions</Form.Label>
                        <Col>
                            <Form.Check
                                type="radio"
                                label="Show all the time                                "
                                id="fullWidth"
                                name="builder_theme_variant"
                                value={'full_width_with_fixed_bottom'}
                                data-parent='theme'
                                defaultChecked
                                onChange={(e) => {
                                    // radioButtonData(e);
                                }}
                            />
                            <Form.Text id="passwordHelpBlock" muted>
                                Always shown on the form
                            </Form.Text>
                        </Col>
                        <Col className="mt-3">
                            <Form.Check
                                type="radio"
                                label="Only show when one of these products are selected"
                                id="mnm"
                                name="builder_theme_variant"
                                value={'fixed_right_side_with_scroll'}
                                data-parent='theme'
                                onChange={(e) => {
                                    // radioButtonData(e);
                                }}
                            />
                        </Col>
                    </Col>

                </Modal.Body>
                <Modal.Footer className="justify-content-between text-sm">
                    <div>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button className="mx-1" variant="primary" onClick={() => {
                            // Callback(selectedItem)
                            // handleClose()
                        }} >Add Field</Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddFieldModal