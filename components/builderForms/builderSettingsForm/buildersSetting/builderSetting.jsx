import { useState } from "react"
import { Form, Button, Row, Col, Dropdown } from "react-bootstrap"

const BuilderSettings = ({ FormsData,checkBoxData }) => {
    const [isFixedPrice,setIsFixedprice] = useState()
    const [fixedPrice, setFixedPrice] = useState()
    const [builderName, setBuilderName] = useState()
    const [checkMeOut, setCheckMeOut] = useState(false)
    const [chargeTax, setChargeTax] = useState()
    const [cartOrCheckout, setCartOrCheckout] = useState(false)
    // collapsData
    return (
        <Form id="builder_settings" onSubmit={() => { console.log('form Submitted') }}>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label className="text-sm ">Builder Name</Form.Label>
                <Form.Control required name='builder_name' value={builderName} onChange={(e) => { FormsData(e) }} type="text" placeholder="e.g. Build Your Custom Laptop" />
            </Form.Group>
            <Row>
                <Col >
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check className="text-sm" name='live' value={checkMeOut} onChange={(e) => { checkBoxData(e) }} type="checkbox" label="Check me out" />
                        <p className="text-secondary text-sm">You can uncheck if you wish to deactivate the builder.   </p>
                    </Form.Group>
                </Col>
                <Col >
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check className="text-sm" defaultValue={chargeTax} name='charge_tax' value={chargeTax} onChange={(e) => { checkBoxData(e) }} type="checkbox" label="Charge Tax" />
                        <p className="text-secondary text-sm">Would you like to charge tax when adding the boxes to the cart? </p>
                    </Form.Group>
                </Col>
                <Col >
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Label className="text-sm ">When complete, send customers to the:</Form.Label>
                        <Form.Select name="redirect" onChange={(e)=>{ FormsData(e) }} aria-label="Default select example">
                            <option selected disabled> select </option>
                            <option name="cart"  value="cart">Cart</option>
                            <option name="checkout" value="checkout">CheckOut</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col >
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check  className="text-sm" name='use_fixed_price' type="checkbox" label="Use a Fixed Price" onChange={(e)=>{ 
                            setIsFixedprice(!isFixedPrice)
                            checkBoxData(e)
                             }} />
                        <p className="text-secondary text-sm">If checked, the 'Use Your Products on new Orders' option above is unavailable. </p>
                    </Form.Group>
                </Col>
                {
                    isFixedPrice ?
                        <Col >
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Label className="text-sm ">Fixed Price</Form.Label>
                                <Form.Control value={fixedPrice} name='fixed_price' className="text-sm" onChange={(e)=>{ FormsData(e) }} type="number" placeholder="e.g. 99.99" label="Default value" />
                                <p className="text-secondary text-sm">The price of the box will always remain at this fixed price. </p>
                            </Form.Group>
                        </Col>
                        : null
                }
                <Col >
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Label className="text-sm ">Start Price</Form.Label>
                        <Form.Control defaultValue={0} name='start_price' className="text-sm" type="number" onChange={(e)=>{ FormsData(e) }} label="Default value" />
                        <p className="text-secondary text-sm">Default is 0.00. This price of the builder will start at this value. </p>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    )
}

export default BuilderSettings