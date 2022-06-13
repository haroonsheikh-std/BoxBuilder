import { useState } from "react"
import { Form, Button, Row, Col, Dropdown } from "react-bootstrap"

const DisplaySettings = () => {
    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <h5>Display Settings</h5>
                </Form.Group>
                <Row>

                    <Col >
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check className="text-sm" type="checkbox" label="Enable Image Lightbox" />
                            <p className="text-secondary text-sm">Allow customers to click product images to enlarge them. </p>
                        </Form.Group>
                    </Col>
                    <Col >

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check className="text-sm" type="checkbox" label="Show Prices in the Button" />
                            <p className="text-secondary text-sm">The only toggles the price's visibility within the button. </p>
                        </Form.Group>
                    </Col>

                    <Col >
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check className="text-sm" type="checkbox" label="Show Formatted Descriptions" />
                            <p className="text-secondary text-sm">This will copy the format of the descriptions you saved for each product and display it on the lightbox. </p>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>





                    <Col >
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check className="text-sm" type="checkbox" label=" Hide Sold Out Products" />
                            <p className="text-secondary text-sm">Sold out products will not show to the customer.</p>
                        </Form.Group>
                    </Col>
                    <Col >

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check className="text-sm" type="checkbox" label="Show a message when adding to cart" />
                            <p className="text-secondary text-sm">A small popup will display when the customer waits for the builder to be added to the cart. </p>
                        </Form.Group>
                    </Col>

                    <Col >
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Label className="text-sm ">Fixed Price</Form.Label>
                            <Form.Control className="text-sm" type="number" placeholder="e.g. 99.99" label="Default value" />
                            <p className="text-secondary text-sm">The price of the box will always remain at this fixed price. </p>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>

                    <Col >
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check className="text-sm" type="checkbox" label="Enable Image Lightbox" />
                            <p className="text-secondary text-sm">Allow customers to click product images to enlarge them. </p>
                        </Form.Group>
                    </Col>
                    <Col >

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check className="text-sm" type="checkbox" label="Show Prices in the Button" />
                            <p className="text-secondary text-sm">The only toggles the price's visibility within the button. </p>
                        </Form.Group>
                    </Col>

                    <Col >
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check className="text-sm" type="checkbox" label="Show Formatted Descriptions" />
                            <p className="text-secondary text-sm">This will copy the format of the descriptions you saved for each product and display it on the lightbox. </p>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default DisplaySettings