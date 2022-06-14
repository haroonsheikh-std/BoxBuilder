import { useState } from "react"
import { Form, Button, Row, Col, Dropdown } from "react-bootstrap"

const DisplaySettings = ({ FormsData,checkBoxData }) => {
    const [buttonText,setButtonText] = useState()
    return (
        <>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <h5>Display Settings</h5>
                </Form.Group>
                <Row>
                    <Col >
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check className="text-sm" name="enable_image_lightbox" data-parent="display_settings" onChange={(e)=>{ checkBoxData(e) }} type="checkbox" label="Enable Image Lightbox" />
                            <p className="text-secondary text-sm">Allow customers to click product images to enlarge them. </p>
                        </Form.Group>
                    </Col>
                    <Col >

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check className="text-sm" name="show_price_button" data-parent="display_settings" onChange={(e)=>{ checkBoxData(e) }} type="checkbox" label="Show Prices in the Button" />
                            <p className="text-secondary text-sm">The only toggles the price's visibility within the button. </p>
                        </Form.Group>
                    </Col>

                    <Col >
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check className="text-sm" type="checkbox" data-parent="display_settings" name="show_formated_description" onChange={(e)=>{ checkBoxData(e) }} label="Show Formatted Descriptions" />
                            <p className="text-secondary text-sm">This will copy the format of the descriptions you saved for each product and display it on the lightbox. </p>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check className="text-sm" type="checkbox" data-parent="display_settings" name="hide_soldout_products" onChange={(e)=>{ checkBoxData(e) }} label=" Hide Sold Out Products" />
                            <p className="text-secondary text-sm">Sold out products will not show to the customer.</p>
                        </Form.Group>
                    </Col>
                    <Col >

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check className="text-sm" type="checkbox" data-parent="display_settings" name="show_message_when_adding_to_cart" onChange={(e)=>{ checkBoxData(e) }} label="Show a message when adding to cart" />
                            <p className="text-secondary text-sm">A small popup will display when the customer waits for the builder to be added to the cart. </p>
                        </Form.Group>
                    </Col>

                    <Col >
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Label className="text-sm "> Add Button Text</Form.Label>
                            <Form.Control className="text-sm" value={buttonText} data-parent="display_settings" name="add_button_text" onChange={(e)=>{ FormsData(e) }} type="text" placeholder="e.g. Add:" label="Default value" />
                            <p className="text-secondary text-sm">The price will appear next to this text. Note that long text may not be ideal on mobile devices. </p>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check className="text-sm" type="checkbox" data-parent="display_settings" name="remember_selections" onChange={(e)=>{ checkBoxData(e) }} label=" Remember Selections" />
                            <p className="text-secondary text-sm">If the customer leaves the page, the builder can remember what they had selected before they left and auto-select these upon their return.</p>
                        </Form.Group>
                    </Col>
                    <Col >

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check className="text-sm" type="checkbox" data-parent="display_settings" name="show_image_carousels" onChange={(e)=>{ checkBoxData(e) }} label="Show Image Carousels" />
                            <p className="text-secondary text-sm">Show/hide image carousels when there are multiple images for the product. </p>
                        </Form.Group>
                    </Col>

                    <Col >
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check className="text-sm" type="checkbox" data-parent="display_settings" name="show_step_progress" onChange={(e)=>{ checkBoxData(e) }} label="Show Step Progress" />
                            <p className="text-secondary text-sm">Show/hide the step numbers above each step.</p>
                        </Form.Group>
                    </Col>
                </Row>
                
            </Form>
        </>
    )
}

export default DisplaySettings