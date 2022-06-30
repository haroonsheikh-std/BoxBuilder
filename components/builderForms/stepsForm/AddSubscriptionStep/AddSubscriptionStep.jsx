import { Button, Alert, Table, Col, InputGroup, Label, Tab, Nav, Form, Row } from "react-bootstrap"
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import initialValues from './initialValues'
import validate from './validate'
import { TextField } from '../../../widgets/textField'
import { CheckBoxField } from '../../../widgets/checkBoxField'
import { DropDown } from '../../../widgets/dropDown'
import { useState } from "react";
import api from "../../../../api/index";
import InformationCard from '../../../widgets/infoCard'
import PickCollectionsModal from '../../../modals/pickCollections/pickCollection'
import AddProductsModal from '../../../modals/AddProductsModal/addProductsModal'

const AddSubscriptionStep = ({ getSteps, handleResetCallback, currentEditObject }) => {
    const [isEdit, setIsEdit] = useState(currentEditObject && currentEditObject != '' ? true : false)
    const [showCollectionsData, setShowCollectionsData] = useState();
    const [showProductData, setShowProductsData] = useState([]);
    const [isCollectionsModal, setIsCollectionsModal] = useState(false)
    const [isProductsModal, setIsProductsModal] = useState(false)
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState(isEdit ? currentEditObject : initialValues);

    const ProductsModal = () => {
        setIsProductsModal(false);
    }
    const CollectionsModal = () => {
        setIsCollectionsModal(false);
    }
    console.log(isEdit, currentEditObject);
    const SubmitForm = async () => {
        if (isEdit) {
            await api.StepsForm.editBuilderSteps(currentEditObject?.id, formData).then(() => {
                getSteps()
                handleResetCallback()
            })
        } else {
            await api.StepsForm.createBuilderSteps(formData).then(() => {
                getSteps()
                handleResetCallback()
            })
        }
        setIsEdit(false)
    }

    const handlePickCollectionsCallback = (obj) => {
        setShowCollectionsData(obj)
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            console.log('not submitted...');
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            console.log('submitted....');
            SubmitForm()
        }

        setValidated(true);
    };


    const handleProductsCallback = (obj, event) => {
        if (event?.target.checked) {
            let containsObject = showProductData.indexOf(obj)
            if (containsObject == -1) {
                setShowProductsData(prev => [...prev, obj])
                console.log('added')
            }
            console.log('not added')
        } else {
            setShowProductsData(showProductData.filter(d => d != obj))
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
    console.log(formData);
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

    return (
        <>
            <Formik
                initialValues={initialValues}
            // validationSchema={validate}
            >
                {
                    formik => (
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <h3>Adding a Subscription Step</h3>
                            <InformationCard bullets={true} heading='Setting Up Subscription Plans' description='Please note that you will need to set up subscription plans using your preferred subscription app. Once they have been setup, you can link the plan to the product generated for this builder. All linked subscription plans/options will show within this step.' />

                            <Col >
                                <Form.Group className="mb-3" controlId="StepTitle">
                                    <Form.Label className="text-sm ">Step Title</Form.Label>
                                    <Form.Control defaultValue={currentEditObject?.title} required placeholder='e.g select your Hard Drive' name='title' className="text-sm" type="text" onChange={(e) => { FormsData(e) }} label="Step Title" />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col >
                                <Form.Group className="mb-3" controlId="StepTitle">
                                    <Form.Label className="text-sm ">Step Description</Form.Label>
                                    <Form.Control defaultValue={currentEditObject?.description} required placeholder='e.g You cans select only one Hard Drive' name='description' className="text-sm" type="text" onChange={(e) => { FormsData(e) }} label="Step Title" />
                                    <p className="text-secondary text-sm"> Additional text to help the customer understand what's required from this step. </p>
                                </Form.Group>
                            </Col>
                            <Col >
                                <Form.Group className="mb-3" controlId="StepTitle">
                                    <Form.Label className="text-sm ">Step Short Title</Form.Label>
                                    <Form.Control defaultValue={currentEditObject?.short_title} required placeholder='e.g Gift Box' name='short_title' className="text-sm" type="text" onChange={(e) => { FormsData(e) }} label='Step Short Title' />
                                    <p className="text-secondary text-sm"> If you're using the step progress bar, you can add a shorter title for this step to show there. </p>
                                </Form.Group>
                            </Col>
                            
                            <Row>
                                <Col >
                                    <Form.Group className="mb-3" controlId="DisplayOrder">
                                        <Form.Label className="text-sm ">Display Order</Form.Label>
                                        <Form.Control required defaultValue={currentEditObject?.display_order} placeholder='e.g 1' name='display_order' className="text-sm" type="number" onChange={(e) => { FormsData(e) }} label='Display Order' />
                                        <p className="text-secondary text-sm">Set the order the step will display within this builder.</p>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col >
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check className="text-sm" defaultChecked={currentEditObject?.meta_settings?.requied_steps} data-parent='meta_settings' name='requied_steps' type="checkbox" label="A Required Step" onChange={(e) => {
                                            checkBoxData(e)
                                        }} />
                                        <p className="text-secondary text-sm">Requires at least 1 item selection from the customer</p>
                                    </Form.Group>
                                </Col>
                                <Col >
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check className="text-sm" defaultChecked={currentEditObject?.meta_settings?.show_box_content_summary} data-parent='meta_settings' name='show_box_content_summary' type="checkbox" label="Show Box Contents/Summary" onChange={(e) => {
                                            checkBoxData(e)
                                        }} />
                                        <p className="text-secondary text-sm">This will show the currently selected products below the step title.</p>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Col >
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check className="text-sm" data-parent='meta_settings' defaultChecked={currentEditObject?.meta_settings?.hide_from_step_progress} name='hide_from_step_progress' type="checkbox" label="Hide from Step Progress" onChange={(e) => {
                                        checkBoxData(e)
                                    }} />
                                    <p className="text-secondary text-sm">Hide this step from the list of steps in the progress bar.</p>
                                </Form.Group>
                            </Col>
                            <div className="float-right">
                                <Button variant="secondary" size="sm" onClick={() => handleResetCallback()}>Back</Button>
                                <Button className="ml-2" variant="primary" size="sm" type="submit">Submit</Button>
                            </div>

                        </Form>
                    )
                }
            </Formik>
            <PickCollectionsModal Callback={handlePickCollectionsCallback} modalState={isCollectionsModal} handleClose={CollectionsModal} />
            <AddProductsModal Callback={handleProductsCallback} modalState={isProductsModal} handleClose={ProductsModal} />
        </>
    )
}

export default AddSubscriptionStep
