import { useState } from "react"
import { Form, Button, Row, Col, Dropdown } from "react-bootstrap"

const BuilderSettings = () => {
    const [fixedPrice, setFixedPrice] = useState(false)
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-sm ">Builder Name</Form.Label>
                <Form.Control type="email" placeholder="e.g. Build Your Custom Laptop" />
            </Form.Group>
            <Row>
                <Col >
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check className="text-sm" type="checkbox" label="Check me out" />
                        <p className="text-secondary text-sm">You can uncheck if you wish to deactivate the builder.   </p>
                    </Form.Group>
                </Col>
                <Col >
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check className="text-sm" type="checkbox" label="Charge Tax" />
                        <p className="text-secondary text-sm">Would you like to charge tax when adding the boxes to the cart? </p>
                    </Form.Group>
                </Col>
                <Col >
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label className="text-sm ">When complete, send customers to the:</Form.Label>
                        <Dropdown >
                            <Dropdown.Toggle id="dropdown-basic">
                                Cart
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Cart</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Checkout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col >
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check defaultValue={fixedPrice} className="text-sm" type="checkbox" label="Use a Fixed Price" onChange={(e) => { setFixedPrice(!fixedPrice) }} />
                        <p className="text-secondary text-sm">If checked, the 'Use Your Products on new Orders' option above is unavailable. </p>
                    </Form.Group>
                </Col>
                {
                    fixedPrice ?
                        <Col >
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Label className="text-sm ">Fixed Price</Form.Label>
                                <Form.Control className="text-sm" type="number" placeholder="e.g. 99.99" label="Default value" />
                                <p className="text-secondary text-sm">The price of the box will always remain at this fixed price. </p>
                            </Form.Group>
                        </Col>
                        : null
                }
                <Col >
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Label className="text-sm ">Start Price</Form.Label>
                        <Form.Control defaultValue={0} className="text-sm" type="number" label="Default value" />
                        <p className="text-secondary text-sm">Default is 0.00. This price of the builder will start at this value. </p>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    )
}

export default BuilderSettings