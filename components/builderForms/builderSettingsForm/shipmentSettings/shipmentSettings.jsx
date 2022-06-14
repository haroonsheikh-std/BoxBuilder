import { useState } from "react"
import { Form, Button, Row, Col, Dropdown, Accordion } from "react-bootstrap"
const ShipmentSettings = ({ FormsData,checkBoxData }) => {
    return (
        <>
            <Accordion alwaysOpen>
                <Accordion.Item className="cus-border-none" eventKey="0">
                    <Accordion.Header>Shipping and Fulfilment</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <Col>
                                <>
                                    <Form.Label htmlFor="inputPassword5">Fulfilment Service
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="inputPassword5"
                                        placeholder="e.g. Cusstom Gift Box by My Company"
                                        aria-describedby="passwordHelpBlock"
                                        data-parent="shipping_and_fulfillment"
                                        name="fulfilment_service" 
                                        onChange={(e)=>{ FormsData(e) }}
                                    />
                                    <Form.Text id="passwordHelpBlock" muted>
                                        Optionally change the fulfilment service. Keep as Default to use the standard Shopify fulfilment method.
                                        If your fulfilment options aren't showing, you may need to enable permission for our app to access them.
                                    </Form.Text>
                                </></Col>
                            <Col>
                                <>
                                    <Form.Check className="text-sm" data-parent="shipping_and_fulfillment" name="require_shipping" onChange={(e)=>{ checkBoxData(e) }} type="checkbox" label="Requires Shipping" />
                                    <p className="text-secondary text-sm">Does this box/builder require a shipping address at checkout?</p>
                                </>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </>
    )
}
export default ShipmentSettings