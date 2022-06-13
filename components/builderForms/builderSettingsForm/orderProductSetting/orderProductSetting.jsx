import { useState } from "react"
import { Form, Button, Row, Col, Dropdown } from "react-bootstrap"

const OrderProduct = () => {
    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <h5>Order Product/SKU Settings</h5>
                </Form.Group>
                <Row>
                    <Col >
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check className="text-sm" type="checkbox" label="Use Your Products on new Orders" />
                            <p className="text-secondary text-sm"> <span> <button className="text-sm underline text-blue-600">More Info</button></span>  </p>
                        </Form.Group>
                    </Col>
                    <Col >
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check className="text-sm" type="checkbox" label="Keep the builder on the order?" />
                            <p className="text-secondary text-sm">If the price of the builder won't be determined by the selected products, (e.g. you are using the Fixed Price option), this option is recommended.<span> <button className="text-sm underline text-blue-600">More Info</button></span> </p>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </>
    )
}
export default OrderProduct