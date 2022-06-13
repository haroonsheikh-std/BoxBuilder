import { useState } from "react"
import { Form, Button, Row, Col, Dropdown, Modal } from "react-bootstrap"

const DiscountModals = () => {
    const [lgShow, setLgShow] = useState(false);
        // const [lgShow, setShow] = useState(false);
        const handleClose = () => setLgShow(false);
        // const setLgShow = () => setShow(true);
        
      
        return (
          <>
            <Button variant="outline-secondary" onClick={() => setLgShow(true)}>
              Add a Discount
            </Button>
      
            <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg" animation={true}>
              <Modal.Header closeButton>
                <Modal.Title>Add a Discount</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-sm ">Discount Title</Form.Label>
                        <Form.Control type="email" placeholder="e.g. 10% off 8 items or more" />
                        <p className="text-secondary text-sm">Customers will see this in the cart/checkout pages </p>
                    </Form.Group>
                    <Form.Group  className="mb-3" controlId="formBasicEmail">
                        <Form.Label htmlFor="disabledSelect">Discount Type</Form.Label>
                        <Form.Select id="disabledSelect">
                            <option>Percentage</option>
                            <option>Fixed Amount</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-sm ">Discount Amount %</Form.Label>
                        <Form.Control type="number" placeholder="e.g. Build Your Custom Laptop" />
                        <p className="text-secondary text-sm">A percentage between 1-99</p>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-sm ">Builder Name</Form.Label>
                        <Form.Control type="email" placeholder="e.g. Build Your Custom Laptop" />
                    </Form.Group>

                    <Row>
                        <Col >
                            <Form.Group  className="mb-3" controlId="formBasicEmail">
                                <Form.Label htmlFor="disabledSelect">Apply Discount When</Form.Label>
                                <Form.Select id="disabledSelect">
                                    <option>Numbers of items added</option>
                                    <option>Total price reaches an amount</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="text-sm ">Discount Amount %</Form.Label>
                                <Form.Control type="number" placeholder="e.g. Build Your Custom Laptop" />
                                <p className="text-secondary text-sm">A percentage between 1-99</p>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group  className="mb-3" controlId="formBasicEmail">
                        <Form.Label htmlFor="disabledSelect">Apply to a step or the whole builder</Form.Label>
                        <Form.Select id="disabledSelect">
                            <option>Percentage</option>
                            <option>Fixed Amount</option>
                        </Form.Select>
                        <p className="text-secondary text-sm">The discount will only apply when the above requirements are met on the step you choose, or the builder as a whole.</p>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check className="text-sm" type="checkbox" label="Encourage discount" />
                        <p className="text-secondary text-sm">A small alert will appear to tell the customer how close they are to receiving a discount. </p>
                    </Form.Group>
                    <Row>
                        
                        <Col >
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check className="text-sm" type="checkbox" label="Remove any discounts applied before this" />
                                <p className="text-secondary text-sm">If unchecked, this discount will be added to any other discounts that are applied earlier in the order.</p>
                            </Form.Group>
                        </Col>
                        <Col >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="text-sm ">Order</Form.Label>
                                <Form.Control type="number" placeholder="e.g. 1" />
                                <p className="text-secondary text-sm">The order in which the discount is applied in case multiple discounts are added.</p>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Add Discount
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      
}

export default DiscountModals