import { useState } from "react"
import { Form, Button, Alert, Row, Col, Dropdown, Accordion } from "react-bootstrap"
const CustomizeUrlSetting = ({ FormsData,checkBoxData }) => {
    return (
        <>
            <Accordion alwaysOpen>
                <Accordion.Item className="cus-border-none" eventKey="0">
                    <Accordion.Header>Customize URL Path</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <Col>
                                <>
                                    <Alert variant="success">
                                        <Alert.Heading>Generate a unique URL for this builder.</Alert.Heading>
                                        <p>
                                            The text you enter below will be used in the URL, so no spaces or non-alphabetic characters are allowed except for hyphens (dashes). Some examples might be 'build-a-box' or 'gift-box'.
                                        </p>
                                    </Alert>
                                    <br />
                                    <Form.Label htmlFor="inputPassword5">Custom URL - https://leo-di-cat-meow.myshopify.com/apps/builder/</Form.Label>
                                    <Form.Control
                                        type="url"
                                        id="inputPassword5"
                                        aria-describedby="passwordHelpBlock"
                                        name='custom_url_path'
                                        onChange={(e)=>{ FormsData(e) }}
                                    />
                                    <Form.Text id="passwordHelpBlock" muted>
                                        Start typing to view the URL.
                                    </Form.Text>
                                </>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </>
    )
}
export default CustomizeUrlSetting