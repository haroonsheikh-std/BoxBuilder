import { useState } from "react"
import { Form, Button, Row, Col, Dropdown, Accordion, Image } from "react-bootstrap"
const ThemeBuilders = ({ FormsData,checkBoxData }) => {
    return (
        <>
            {/* <Form>  */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <h5>Select which theme the builder will use</h5>
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Check 
                            type="radio"
                            label="Full width with fixed bottom pricing bar"
                            id="fullWidth"
                            name="builderTheme"
                            value="fullWidth"
                            onChange={(e)=>{ FormsData(e) }}
                        />
                        <Form.Label id="passwordHelpBlock" muted>
                            Show only product images and price
                            <Image src="https://builder.boxup.io/assets/image/full.png"></Image>
                        </Form.Label>
                    </Col>
                    <Col>
                        <Form.Check 
                            type="radio"
                            label="Fixed right side total with vertical scroll"
                            id="fixedRight"
                            name="builderTheme"
                            value="fixedRight"
                            onChange={(e)=>{ FormsData(e) }}
                        />
                        <Form.Text id="passwordHelpBlock" muted>
                            Also includes product descriptions
                            <Image src="https://builder.boxup.io/assets/image/right.png"></Image>
                        </Form.Text>
                    </Col>
                </Row>
            {/* </Form> */}

        </>
    )
}
export default ThemeBuilders