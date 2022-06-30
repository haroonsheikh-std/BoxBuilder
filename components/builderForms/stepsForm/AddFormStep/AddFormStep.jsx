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

const AddFormStep = ({ getSteps, handleResetCallback, currentEditObject }) => {
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
                            <h3>Adding a Form Step</h3>
                            <Col >
                                <Form.Group className="mb-3" controlId="StepTitle">
                                    <Form.Label className="text-sm ">Step Title</Form.Label>
                                    <Form.Control defaultValue={currentEditObject?.title} required placeholder='e.g select your Hard Drive' name='title' className="text-sm" type="text" onChange={(e) => { FormsData(e) }} label="Step Title" />
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
                                <Col >
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check className="text-sm" defaultChecked={currentEditObject?.meta_settings?.requied_steps} data-parent='meta_settings' name='requied_steps' type="checkbox" label="A Required Step" onChange={(e) => {
                                            checkBoxData(e)
                                        }} />
                                        <p className="text-secondary text-sm">Requires at least 1 item selection from the customer</p>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                
                                <Col >
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check className="text-sm" defaultChecked={currentEditObject?.meta_settings?.show_box_content_summary} data-parent='meta_settings' name='show_box_content_summary' type="checkbox" label="Show Box Contents/Summary" onChange={(e) => {
                                            checkBoxData(e)
                                        }} />
                                        <p className="text-secondary text-sm">This will show the currently selected products below the step title.</p>
                                    </Form.Group>
                                </Col>
                                <Col >
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check className="text-sm" data-parent='meta_settings' defaultChecked={currentEditObject?.meta_settings?.hide_from_step_progress} name='hide_from_step_progress' type="checkbox" label="Hide from Step Progress" onChange={(e) => {
                                            checkBoxData(e)
                                        }} />
                                        <p className="text-secondary text-sm">Hide this step from the list of steps in the progress bar.</p>
                                    </Form.Group>
                                </Col>
                                
                            </Row>
                            <hr />
                            <Row>
                                <Col>
                                    <div className="mt-4">
                                        <Col>
                                            <Button onClick={() => setIsProductsModal(true)} style={{ backgroundColor: "#f0f2f4", color: "black", border: 'none', fontSize: "12px" }} >Add more steps</Button>
                                            {showProductData ?
                                                showProductData?.map((data, index) => {
                                                    return (
                                                        <div className="d-flex-inline bg_hover my-2 p-2">
                                                            <img className="d-inline-block mx-2 rounded w-14 mb-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU" alt="Dog" />
                                                            <div className="d-inline-block mx-2">
                                                                <div>{data?.name}</div>
                                                                <div className="text-sm text-secondary text-ellipsis">{data?.description}</div>
                                                            </div>
                                                            <button className="cus_rem_button" onClick={() => { setShowProductsData(showProductData.filter(x => x != data)) }}> remove</button>
                                                        </div>
                                                    )
                                                })
                                                : null
                                            }
                                        </Col>
                                        <hr />
                                        <Row>

                                            <Col >
                                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                    <Form.Check className="text-sm" defaultChecked={currentEditObject?.meta_settings?.show_sort_by_dropdown_menu} data-parent='meta_settings' name='show_sort_by_dropdown_menu' type="checkbox" label="Show sort by drop down menu" onChange={(e) => {
                                                        checkBoxData(e)
                                                    }} />
                                                    <p className="text-secondary text-sm">Allows customers to sort by product title, collections and price</p>
                                                </Form.Group>
                                            </Col>
                                            <Col >
                                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                    <Form.Check className="text-sm" defaultChecked={currentEditObject?.meta_settings?.show_title_filter} data-parent='meta_settings' name='show_title_filter' type="checkbox" label="Show title filter" onChange={(e) => {
                                                        checkBoxData(e)
                                                    }} />
                                                    <p className="text-secondary text-sm">Allows customers to filter by product title for this step</p>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col >
                                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                    <Form.Check className="text-sm" defaultChecked={currentEditObject?.meta_settings?.show_collection_filter} data-parent='meta_settings' name='show_collection_filter' type="checkbox" label="Show collection filter" onChange={(e) => {
                                                        checkBoxData(e)
                                                    }} />
                                                    <p className="text-secondary text-sm">Allows customers to filter by collection for this step </p>
                                                </Form.Group>
                                            </Col>
                                            <Col >
                                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                    <label>0 collection(s) selected</label>
                                                    <Button variant="secondary" data-parent='meta_settings' name='set_collection_filter' className="button text-sm">Set Collections for Collections Filter</Button>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col >
                                                <Form.Group className="mb-3" >
                                                    <Form.Check className="text-sm" defaultChecked={currentEditObject?.meta_settings?.show_tags_filter} data-parent='meta_settings' name='show_tags_filter' type="checkbox" label="Show tags filter" onChange={(e) => {
                                                        checkBoxData(e)
                                                    }} />
                                                    <p className="text-secondary text-sm">Allows customers to sort by product tags </p>
                                                </Form.Group>
                                            </Col>
                                            <Col >
                                                <Form.Group className="mb-3">
                                                    <Col >
                                                        <Form.Group className="mb-3" controlId="MaximumSelections">
                                                            <Form.Label className="text-sm ">Limit to these tags only (optional)</Form.Label>
                                                            <Form.Control required data-parent='meta_settings' defaultValue={currentEditObject?.meta_settings?.tags} placeholder='e.g Bags, Shoes, Necklaces' name='tags' className="text-sm" type="text" onChange={(e) => { FormsData(e) }} label='Limit to these tags only (optional)' />
                                                            <p className="text-secondary text-sm">A comma-separated list of tags to show. If used, all other tags will be hidden. Please make sure to capitalize tags where necessary.</p>
                                                        </Form.Group>
                                                    </Col>
                                                    {/* <TextField change={FormsData} placeholder='e.g Bags, Shoes, Necklaces' label='Limit to these tags only (optional)' name='tags' type='text' description='A comma-separated list of tags to show. If used, all other tags will be hidden. Please make sure to capitalize tags where necessary.' /> */}
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>

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

export default AddFormStep