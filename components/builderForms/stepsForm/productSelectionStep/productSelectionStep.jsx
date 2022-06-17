import { useState } from "react"
import { Form, Button, Row, Col, Dropdown, Modal } from "react-bootstrap"
import api from '../../../../api/index'

const ProductSelectionSteps = ({ FormsData,checkBoxData }) => {
        const [lgShow, setLgShow] = useState(false);
        // const [lgShow, setShow] = useState(false);
        const handleClose = () => setLgShow(false);
        // const setLgShow = () => setShow(true);
        
    const [isEncourageDiscount,setIsEncourageDiscount] = useState()
    const [itemReached, setItemReached] = useState()
    const [discountTitle, setDiscountTitle] = useState()
    const [applyAfter, setApplyAfter] = useState()
    const [onOrder, setOnOrder] = useState()


    const submitForm = async () => {
        handleClose()
        const response = await api.createBuilderSettings().then((d) => {
            console.log(d)
        });
    }
      
        return (
          <>
            <Button variant="outline-secondary" onClick={() => setLgShow(true)}>
              Add a Product Selection Step
            </Button>
      
            <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg" animation={true}>
              <Modal.Header closeButton>
                <Modal.Title>Add a Discount</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Form id="DiscountModal" onSubmit={() => { console.log('form Submitted') }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-sm ">Discount Title</Form.Label>
                        <Form.Control type="text" name="discount_title" value={discountTitle} onChange={(e) => { FormsData(e) }} placeholder="e.g. 10% off 8 items or more" />
                        <p className="text-secondary text-sm">Customers will see this in the cart/checkout pages </p>
                    </Form.Group>
                    <Form.Group  className="mb-3" controlId="formBasicCheckbox">
                        <Form.Label  className="text-sm ">Discount Type</Form.Label>
                        <Form.Select name="discount_type" onChange={(e)=>{ FormsData(e) }} aria-label="Default select example">
                            <option name="percentage"  value="percentage">Percentage</option>
                            <option name="fixed_amount"  value="fixed_amount">Fixed Amount</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Label className="text-sm ">Discount Amount %</Form.Label>
                        <Form.Control name='discount_amount' className="text-sm" type="number" onChange={(e)=>{ FormsData(e) }} label="Default value"  placeholder="e.g. 8" />
                        <p className="text-secondary text-sm">A percentage between 1-99</p>
                    </Form.Group>
                   

                    <Row>
                        <Col >
                            <Form.Group  className="mb-3" controlId="formBasicCheckbox">
                                <Form.Label className="text-sm ">Apply Discount When</Form.Label>
                                <Form.Select name="discount_when" onChange={(e)=>{ FormsData(e) }} aria-label="Default select example">
                                    <option name="on_item"  value="on_item">Numbers of items added</option>
                                    <option name="on_price"  value="on_price">Total price reaches an amount</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col >
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Label className="text-sm ">Number of items required</Form.Label>
                                <Form.Control name='require_item_num' className="text-sm" type="number" onChange={(e)=>{ FormsData(e) }} label="Default value"   placeholder="e.g. 10" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group  className="mb-3" controlId="formBasicCheckbox">
                        <Form.Label className="text-sm ">Apply to a step or the whole builder</Form.Label>
                        <Form.Select name="apply_on" onChange={(e)=>{ FormsData(e) }} aria-label="Default select example">
                            <option name="whole_builder"  value="whole_builder">Whole Builder</option>
                            <option name="step2"  value="step2">Step 2</option>
                            <option name="step3"  value="step3">Step 3</option>
                        </Form.Select>
                        <p className="text-secondary text-sm">The discount will only apply when the above requirements are met on the step you choose, or the builder as a whole.</p>
                    </Form.Group>
                    <Row>
                        <Col >
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check  className="text-sm" name='encourage_discount' type="checkbox" label="Encourage discount" onChange={(e)=>{ 
                                    setIsEncourageDiscount(!isEncourageDiscount)
                                    checkBoxData(e)
                                    }} />
                                <p className="text-secondary text-sm">A small alert will appear to tell the customer how close they are to receiving a discount. </p>
                            </Form.Group>
                        </Col>
                        {
                            isEncourageDiscount ?
                                <Col >
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Label className="text-sm ">Encourage when items selected reach</Form.Label>
                                        <Form.Control value={itemReached} name='item_reached' className="text-sm" onChange={(e)=>{ FormsData(e) }} type="number" placeholder="e.g. 15" label="Default value" />
                                        <p className="text-secondary text-sm">We will show a small popup when the item count or current price equals the amount you enter here.</p>
                                    </Form.Group>
                                </Col>
                                : null
                        }
                    </Row>
                    
                    <Row>
                        
                        <Col >
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check className="text-sm" name='apply_after' value={applyAfter} onChange={(e) => { checkBoxData(e) }} type="checkbox" label="Remove any discounts applied before this" />
                                <p className="text-secondary text-sm">If unchecked, this discount will be added to any other discounts that are applied earlier in the order.</p>
                            </Form.Group>
                        </Col>
                        <Col >
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Label className="text-sm ">Order</Form.Label>
                                <Form.Control  value={onOrder} name='on_order' className="text-sm" onChange={(e)=>{ FormsData(e) }} type="number" placeholder="e.g. 1" label="Default value" />
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

export default ProductSelectionSteps