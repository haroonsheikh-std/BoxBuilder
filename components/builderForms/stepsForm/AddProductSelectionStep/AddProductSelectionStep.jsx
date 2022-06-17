import { Button, Alert, Table, Col, InputGroup, Label, Tab, Nav, Form, Row } from "react-bootstrap"
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import initialValues from './initialValues'
import validate from './validate'
import { TextField } from '../../../widgets/textField'
import { CheckBoxField } from '../../../widgets/checkBoxField'
import { DropDown } from '../../../widgets/dropDown'
import { useState } from "react";
import api from "../../../../api";
import InformationCard from '../../../widgets/infoCard'

const AddProductSelectionStep = ({ handleResetCallback }) => {
    const [formData, setFormData] = useState(initialValues);

    const SubmitForm = async () => {
        await api.createBuilderSteps(formData)
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

    console.log(formData)

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
        <Formik
            initialValues={initialValues}
        // validationSchema={validate}
        >
            {
                formik => (
                    <Form>
                        <TextField change={FormsData} placeholder='e.g select your Hard Drive' label='Step Title' name='title' type='text' description='' />
                        <TextField change={FormsData} placeholder='e.g You cans select only one Hard Drive' label='Step Description' name='description' type='text' description="Additional text to help the customer understand what's required from this step." />
                        <TextField change={FormsData} placeholder='e.g Gift Box' label='Step Short Title' name='short_title' type='text' description="If you're using the step progress bar, you can add a shorter title for this step to show there." />
                        <CheckBoxField change={checkBoxData} placeholder='' label='Allow more than 1 of the same product to be selected' name='allow_more_than_one_product' type='checkbox' description='The maximum quantity allowed, per item, will take into account your settings below.' />

                        <Row>
                            <TextField change={FormsData} placeholder='e.g 1' label='Display Order' name='display_order' type='number' description='Set the order the step will display within this builder.' />
                            <TextField change={FormsData} placeholder='e.g 1' label='Minimum Selections' name='minimum_selection' type='number' description='How many products does the customer have to select on this step?' />
                            <TextField change={FormsData} placeholder='e.g 1' label='Maximum Selections' name='maximum_selection' type='number' description='Can the customer select more than 1 product on this step?' />
                        </Row>
                        <hr />
                        <Row>
                            <Col >
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check className="text-sm" data-parent='meta_settings' name='requied_steps' type="checkbox" label="A Required Step" onChange={(e) => {
                                        checkBoxData(e)
                                    }} />
                                    <p className="text-secondary text-sm">Requires at least 1 item selection from the customer</p>
                                </Form.Group>
                            </Col>
                            <Col >
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check className="text-sm" data-parent='meta_settings' name='show_box_content_summary' type="checkbox" label="Show Box Contents/Summary" onChange={(e) => {
                                        checkBoxData(e)
                                    }} />
                                    <p className="text-secondary text-sm">This will show the currently selected products below the step title.</p>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Label className="text-sm ">Products per row</Form.Label>
                                <Form.Select data-parent='meta_settings' name="products_per_row" onChange={(e) => { FormsData(e) }} aria-label="Default select example">
                                    <option selected value="3">3</option>
                                    <option value="4">4</option>
                                </Form.Select>
                            </Col>
                        </Row>
                        <Col >
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check className="text-sm" data-parent='meta_settings' name='hide_from_step_progress' type="checkbox" label="Hide from Step Progress" onChange={(e) => {
                                    checkBoxData(e)
                                }} />
                                <p className="text-secondary text-sm">Hide this step from the list of steps in the progress bar.</p>
                            </Form.Group>
                        </Col>
                        <Row>
                            <Col>
                                <Form.Check
                                    label="Show each variant separately "
                                    name="group1"
                                    type='radio'
                                    onChange={(e) => { checkBoxData(e) }}
                                />
                                <p className="text-secondary text-sm">Each variant will have it's own item available for selection. </p>
                            </Col>
                            <Col>
                                <Form.Check
                                    label="Show a variant select box beneath product"
                                    name="group1"
                                    type='radio'
                                    onChange={(e) => { checkBoxData(e) }}
                                />
                                <p className="text-secondary text-sm">One item per product with a dropdown menu for the variant </p>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col className="ml-4">
                                <Button className="mr-2" style={{ backgroundColor: "#f0f2f4", color: "black", border: 'none', fontSize: "12px" }} >Choose Selectable products for this Step</Button>
                                <Button style={{ backgroundColor: "#f0f2f4", color: "black", border: 'none', fontSize: "12px" }} >Add more steps</Button>
                            </Col>
                        </Row>
                        <InformationCard heading='Link a collection to products you wish to show' description='Products with no collections will not show. If you have products like this, simply create a collection and attach all products before completing this step.' />
                        <hr />
                        <Tab.Container id="left-tabs-example" defaultActiveKey="useCollection">
                            <Row>
                                <Col >
                                    <Nav variant="pills" >
                                        <Nav.Item>
                                            <Nav.Link className="cursor-pointer" eventKey="useCollection"> Use Collection</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link className="cursor-pointer" eventKey="useSelectedCollections"> Use Selected Collections</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                            </Row>
                            <Col>
                                <Tab.Content>
                                    <Tab.Pane eventKey="useCollection" >
                                        <div className="mt-4">
                                            <Button style={{ backgroundColor: "#f0f2f4", color: "black", border: 'none', fontSize: "12px" }} >Pick Collection</Button>
                                            <hr />
                                            <Row>
                                                <Col >
                                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                        <Form.Check className="text-sm" name='show_sort_by_dropdown_menu' type="checkbox" label="Show sort by drop down menu" onChange={(e) => {
                                                            checkBoxData(e)
                                                        }} />
                                                        <p className="text-secondary text-sm">Allows customers to sort by product title, collections and price</p>
                                                    </Form.Group>
                                                </Col>
                                                <Col >
                                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                        <Form.Check className="text-sm" name='show_title_filter' type="checkbox" label="Show title filter" onChange={(e) => {
                                                            checkBoxData(e)
                                                        }} />
                                                        <p className="text-secondary text-sm">Allows customers to filter by product title for this step</p>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col >
                                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                        <Form.Check className="text-sm" name='show_collection_filter' type="checkbox" label="Show collection filter" onChange={(e) => {
                                                            checkBoxData(e)
                                                        }} />
                                                        <p className="text-secondary text-sm">Allows customers to filter by collection for this step </p>
                                                    </Form.Group>
                                                </Col>
                                                <Col >
                                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                        <label>0 collection(s) selected</label>
                                                        <Button variant="secondary" name='set_collection_filter' className="button text-sm">Set Collections for Collections Filter</Button>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col >
                                                    <Form.Group className="mb-3" >
                                                        <Form.Check className="text-sm" name='show_tags_filter' type="checkbox" label="Show tags filter" onChange={(e) => {
                                                            checkBoxData(e)
                                                        }} />
                                                        <p className="text-secondary text-sm">Allows customers to sort by product tags </p>
                                                    </Form.Group>
                                                </Col>
                                                <Col >
                                                    <Form.Group className="mb-3">
                                                        <TextField change={FormsData} placeholder='e.g Bags, Shoes, Necklaces' label='Limit to these tags only (optional)' name='tags' type='text' description='A comma-separated list of tags to show. If used, all other tags will be hidden. Please make sure to capitalize tags where necessary.' />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="useSelectedCollections" >
                                        <div className="mt-4">
                                            <Row>
                                                <Col >
                                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                        <Form.Check className="text-sm" name='show_sort_by_dropdown_menu' type="checkbox" label="Show sort by drop down menu" onChange={(e) => {
                                                            checkBoxData(e)
                                                        }} />
                                                        <p className="text-secondary text-sm">Allows customers to sort by product title, collections and price</p>
                                                    </Form.Group>
                                                </Col>
                                                <Col >
                                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                        <Form.Check className="text-sm" name='show_title_filter' type="checkbox" label="Show title filter" onChange={(e) => {
                                                            checkBoxData(e)
                                                        }} />
                                                        <p className="text-secondary text-sm">Allows customers to filter by product title for this step</p>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col >
                                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                        <Form.Check className="text-sm" name='show_collection_filter' type="checkbox" label="Show collection filter" onChange={(e) => {
                                                            checkBoxData(e)
                                                        }} />
                                                        <p className="text-secondary text-sm">Allows customers to filter by collection for this step </p>
                                                    </Form.Group>
                                                </Col>
                                                <Col >
                                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                        <label>0 collection(s) selected</label>
                                                        <Button variant="secondary" name='set_collection_filter' className="button text-sm">Set Collections for Collections Filter</Button>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col >
                                                    <Form.Group className="mb-3" >
                                                        <Form.Check className="text-sm" name='show_tags_filter' type="checkbox" label="Show tags filter" onChange={(e) => {
                                                            checkBoxData(e)
                                                        }} />
                                                        <p className="text-secondary text-sm">Allows customers to sort by product tags </p>
                                                    </Form.Group>
                                                </Col>
                                                <Col >
                                                    <Form.Group className="mb-3">
                                                        <TextField change={FormsData} placeholder='e.g Bags, Shoes, Necklaces' label='Limit to these tags only (optional)' name='tags' type='text' description='A comma-separated list of tags to show. If used, all other tags will be hidden. Please make sure to capitalize tags where necessary.' />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Tab.Container>
                        <button type="submit" onClick={(e) => {
                            e.preventDefault()
                            SubmitForm()
                        }}>Submit</button>
                    </Form>
                )
            }
        </Formik>

    )
}

export default AddProductSelectionStep
