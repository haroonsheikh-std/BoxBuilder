import { useEffect, useState } from "react"
import { Form, Button, Row, Col, Spinner, Dropdown, Modal } from "react-bootstrap"
import api from '../../../../api/index'
import { dicountFormData } from '../../../../constants/defaultData'

const DiscountModals = ({ lgShow, handleModalClose, getDiscounts, editAbleObject }) => {
    console.log('editAbleObject=>', editAbleObject);
    const [isEdit, setIsEdit] = useState(editAbleObject ? true : false)
    const [formData, setFormData] = useState(isEdit ? editAbleObject : dicountFormData)
    const [validated, setValidated] = useState(false);
    const [isEncourageDiscount, setIsEncourageDiscount] = useState()
    const [itemReached, setItemReached] = useState()
    const [discountTitle, setDiscountTitle] = useState()
    const [applyAfter, setApplyAfter] = useState()
    const [onOrder, setOnOrder] = useState()
    const [loading, setLoading] = useState(false)

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

    useEffect(() => {
        setIsEdit(editAbleObject && editAbleObject!=null ? true : false)
        setFormData(isEdit ? editAbleObject : dicountFormData)
    }, [editAbleObject])

    const submitForm = async () => {
        if (isEdit) {
            console.log('edit.....');
            setLoading(true)
            await api.AddDiscounts.editDiscounts(editAbleObject?.id, formData).then(() => {
                getDiscounts()
                handleModalClose()
                setLoading(false)
            })
        } else {
            console.log('addding new one');
            setLoading(true)
            await api.AddDiscounts.createDiscounts(formData).then(() => {
                getDiscounts()
                handleModalClose()
                setLoading(false)
            })
        }
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
            <Modal size="lg" show={lgShow} onHide={() => handleModalClose()} aria-labelledby="example-modal-sizes-title-lg" animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a Discount</Modal.Title>
                </Modal.Header>
                <Modal.Body className="cus-Overflow">
                    <Form noValidate validated id="DiscountModal" onSubmit={(e) => handleSubmit(e)}>
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label className="text-sm ">Discount Title</Form.Label>
                            <Form.Control required defaultValue={editAbleObject?.title} type="text" name="title" value={discountTitle} onChange={(e) => { FormsData(e) }} placeholder="e.g. 10% off 8 items or more" />
                            <p className="text-secondary text-sm">Customers will see this in the cart/checkout pages </p>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="type">
                            <Form.Label className="text-sm ">Discount Type</Form.Label>
                            <Form.Select defaultValue={editAbleObject?.type} name="type" onChange={(e) => { FormsData(e) }} aria-label="Default select example">
                                <option name="percentage" value="percentage">Percentage</option>
                                <option name="fixed_amount" value="fixed_amount">Fixed Amount</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="value">
                            <Form.Label className="text-sm ">Discount Amount %</Form.Label>
                            <Form.Control required defaultValue={editAbleObject?.value} name='value' className="text-sm" type="number" onChange={(e) => { FormsData(e) }} label="Amount" placeholder="e.g. 8" />
                            <p className="text-secondary text-sm">A percentage between 1-99</p>
                        </Form.Group>


                        <Row>
                            <Col >
                                <Form.Group className="mb-3" controlId="discount_criteria">
                                    <Form.Label className="text-sm ">Apply Discount When</Form.Label>
                                    <Form.Select defaultValue={editAbleObject?.discount_criteria} name="discount_criteria" onChange={(e) => { FormsData(e) }} aria-label="Default select example">
                                        <option name="on_item" value="Number of items added">Number of items added</option>
                                        <option name="on_price" value="Total price reaches to an amount">Total price reaches to an amount</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col >
                                <Form.Group className="mb-3" controlId="items_required">
                                    <Form.Label className="text-sm ">Number of items required</Form.Label>
                                    <Form.Control defaultValue={editAbleObject?.items_required} required name='items_required' className="text-sm" type="number" onChange={(e) => { FormsData(e) }} label="Default value" placeholder="e.g. 10" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3" controlId="apply_to">
                            <Form.Label className="text-sm ">Apply to a step or the whole builder</Form.Label>
                            <Form.Select defaultValue={editAbleObject?.apply_to} name="apply_to" onChange={(e) => { FormsData(e) }} aria-label="Default select example">
                                <option name="whole_builder" value="whole_builder">Whole Builder</option>
                                <option name="step1" value="step_1">Step 1</option>
                                {/* <option name="step3" value="step3"></option> */}
                            </Form.Select>
                            <p className="text-secondary text-sm">The discount will only apply when the above requirements are met on the step you choose, or the builder as a whole.</p>
                        </Form.Group>
                        <Row>
                            <Col >
                                <Form.Group className="mb-3" controlId="encourage_discount">
                                    <Form.Check className="text-sm" defaultChecked={editAbleObject?.encourage_discount} name='encourage_discount' type="checkbox" label="Encourage discount" onChange={(e) => {
                                        setIsEncourageDiscount(!isEncourageDiscount)
                                        checkBoxData(e)
                                    }} />
                                    <p className="text-secondary text-sm">A small alert will appear to tell the customer how close they are to receiving a discount. </p>
                                </Form.Group>
                            </Col>
                            {
                                !isEncourageDiscount ?
                                    <Col >
                                        <Form.Group className="mb-3" controlId="encourage_when">
                                            <Form.Label className="text-sm ">Encourage when items selected reach</Form.Label>
                                            <Form.Control defaultValue={editAbleObject?.encourage_when} required value={itemReached} name='encourage_when' className="text-sm" onChange={(e) => { FormsData(e) }} type="number" placeholder="e.g. 15" label="Default value" />
                                            <p className="text-secondary text-sm">We will show a small popup when the item count or current price equals the amount you enter here.</p>
                                        </Form.Group>
                                    </Col>
                                    : null
                            }
                        </Row>
                        <Row>
                            <Col >
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check requiredv className="text-sm" defaultChecked={editAbleObject?.remove_previous_discounts} name='remove_previous_discounts' value={applyAfter} onChange={(e) => { checkBoxData(e) }} type="checkbox" label="Remove any discounts applied before this" />
                                    <p className="text-secondary text-sm">If unchecked, this discount will be added to any other discounts that are applied earlier in the order.</p>
                                </Form.Group>
                            </Col>
                            <Col >
                                <Form.Group className="mb-3" controlId="order">
                                    <Form.Label className="text-sm ">Order</Form.Label>
                                    <Form.Control defaultValue={editAbleObject?.order} required value={onOrder} name='order' className="text-sm" onChange={(e) => { FormsData(e) }} type="number" placeholder="e.g. 1" label="Default value" />
                                    <p className="text-secondary text-sm">The order in which the discount is applied in case multiple discounts are added.</p>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleModalClose()}>
                        Cancel
                    </Button>
                    <Button type="submit" form="DiscountModal" variant="primary">
                        {loading ?
                            <Spinner size="sm" animation="border" variant="light" />
                            : 'Add Discount'
                        }
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}

export default DiscountModals