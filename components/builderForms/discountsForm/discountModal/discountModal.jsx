import { useState } from "react"
import { Form, Button, Row, Col, Dropdown, Modal } from "react-bootstrap"
import api from '../../../../api/index'
import { dicountFormData } from '../../../../constants/defaultData'
import { LoaderProvider, useLoading } from '@agney/react-loading';

const DiscountModals = () => {
    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setLgShow(false);
    const [formData, setFormData] = useState(dicountFormData);
    const [validated, setValidated] = useState(false);
    const [isEncourageDiscount, setIsEncourageDiscount] = useState()
    const [itemReached, setItemReached] = useState()
    const [discountTitle, setDiscountTitle] = useState()
    const [applyAfter, setApplyAfter] = useState()
    const [onOrder, setOnOrder] = useState()
    const [load, setLoad] = useState(false)
    const { containerProps, indicatorEl } = useLoading({
        loading: load,
    });

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            console.log('not submitted...');
            e.preventDefault();
            e.stopPropagation();
        }
        else {
            console.log('Submitted....');
            e.preventDefault();
            submitForm()
        }
        setValidated(true)
    }

    const submitForm = async () => {
        await api.AddDiscounts.createDiscounts(formData).then(() => {
            handleClose()
        })
    }

    const FormsData = (data) => {
        let parent_obj_name = data.target.dataset.parent;
        let input_name = data.target.name;
        let input_value = data.target.value;
        setFormData((prev) => {
            if (parent_obj_name) {
                return {
                    ...prev,
                    [parent_obj_name]: {
                        ...prev[parent_obj_name],
                        [input_name]: input_value
                    }
                }
            } else {
                return {
                    ...prev,
                    [input_name]: input_value
                }
            }
        })
    }

    const checkBoxData = (data) => {
        let parent_obj_name = data.target.dataset.parent;
        let input_name = data.target.name;
        let input_value = data.target.checked;
        setFormData((prev) => {
            if (parent_obj_name) {
                return {
                    ...prev,
                    [parent_obj_name]: {
                        ...prev[parent_obj_name],
                        [input_name]: input_value
                    }
                }
            } else {
                return {
                    ...prev,
                    [input_name]: input_value
                }
            }
        })
    }

    console.log(formData);

    return (
        <>
            <Button variant="outline-secondary" onClick={() => setLgShow(true)}>
                Add a Discount
            </Button>

            <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg" animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a Discount</Modal.Title>
                </Modal.Header>
                <Modal.Body className="cus-Overflow">
                    <Form noValidate validated id="DiscountModal" onSubmit={(e) => handleSubmit(e)}>
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label className="text-sm ">Discount Title</Form.Label>
                            <Form.Control required type="text" name="title" value={discountTitle} onChange={(e) => { FormsData(e) }} placeholder="e.g. 10% off 8 items or more" />
                            <p className="text-secondary text-sm">Customers will see this in the cart/checkout pages </p>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Label className="text-sm ">Discount Type</Form.Label>
                            <Form.Select name="type" onChange={(e) => { FormsData(e) }} aria-label="Default select example">
                                <option name="percentage" value="percentage">Percentage</option>
                                <option name="fixed_amount" value="fixed_amount">Fixed Amount</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Label className="text-sm ">Discount Amount %</Form.Label>
                            <Form.Control required name='value' className="text-sm" type="number" onChange={(e) => { FormsData(e) }} label="Amount" placeholder="e.g. 8" />
                            <p className="text-secondary text-sm">A percentage between 1-99</p>
                        </Form.Group>


                        <Row>
                            <Col >
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Label className="text-sm ">Apply Discount When</Form.Label>
                                    <Form.Select name="discount_criteria" onChange={(e) => { FormsData(e) }} aria-label="Default select example">
                                        <option name="on_item" value="Number of items added">Number of items added</option>
                                        <option name="on_price" value="Total price reaches to an amount">Total price reaches to an amount</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col >
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Label className="text-sm ">Number of items required</Form.Label>
                                    <Form.Control required name='items_required' className="text-sm" type="number" onChange={(e) => { FormsData(e) }} label="Default value" placeholder="e.g. 10" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Label className="text-sm ">Apply to a step or the whole builder</Form.Label>
                            <Form.Select name="apply_to" onChange={(e) => { FormsData(e) }} aria-label="Default select example">
                                <option name="whole_builder" value="whole_builder">Whole Builder</option>
                                <option name="step1" value="step_1">Step 1</option>
                                {/* <option name="step3" value="step3"></option> */}
                            </Form.Select>
                            <p className="text-secondary text-sm">The discount will only apply when the above requirements are met on the step you choose, or the builder as a whole.</p>
                        </Form.Group>
                        <Row>
                            <Col >
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check className="text-sm" name='encourage_discount' type="checkbox" label="Encourage discount" onChange={(e) => {
                                        setIsEncourageDiscount(!isEncourageDiscount)
                                        checkBoxData(e)
                                    }} />
                                    <p className="text-secondary text-sm">A small alert will appear to tell the customer how close they are to receiving a discount. </p>
                                </Form.Group>
                            </Col>
                            {
                                !isEncourageDiscount ?
                                    <Col >
                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Label className="text-sm ">Encourage when items selected reach</Form.Label>
                                            <Form.Control required value={itemReached} name='encourage_when' className="text-sm" onChange={(e) => { FormsData(e) }} type="number" placeholder="e.g. 15" label="Default value" />
                                            <p className="text-secondary text-sm">We will show a small popup when the item count or current price equals the amount you enter here.</p>
                                        </Form.Group>
                                    </Col>
                                    : null
                            }
                        </Row>
                        <Row>
                            <Col >
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check requiredv className="text-sm" name='remove_previous_discounts' value={applyAfter} onChange={(e) => { checkBoxData(e) }} type="checkbox" label="Remove any discounts applied before this" />
                                    <p className="text-secondary text-sm">If unchecked, this discount will be added to any other discounts that are applied earlier in the order.</p>
                                </Form.Group>
                            </Col>
                            <Col >
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Label className="text-sm ">Order</Form.Label>
                                    <Form.Control required value={onOrder} name='order' className="text-sm" onChange={(e) => { FormsData(e) }} type="number" placeholder="e.g. 1" label="Default value" />
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
                    <Button type="submit" form="DiscountModal" variant="primary">
                    {indicatorEl ? 
                    <>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                    </>
                    : "Next"}
                        
                         Add Discount</Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}

export default DiscountModals