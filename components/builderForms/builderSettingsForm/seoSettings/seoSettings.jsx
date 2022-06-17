import { useState } from "react"
import { Form, Button, Row, Col, Dropdown, Accordion } from "react-bootstrap"
const SeoSettings = ({ FormsData,checkBoxData }) => {
    return (
        <>
            <Accordion alwaysOpen>
                <Accordion.Item className="cus-border-none" eventKey="0">
                    <Accordion.Header>Show SEO Settings</Accordion.Header>
                    <Accordion.Body>
                        <Row>
                            <Col>
                                <>
                                    <Form.Label htmlFor="inputPassword5">SEO Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="inputPassword5"
                                        placeholder="e.g. Cusstom Gift Box by My Company"
                                        aria-describedby="passwordHelpBlock"
                                        name="title" 
                                        data-parent="seo_settings"
                                        onChange={(e)=>{ FormsData(e) }}
                                    />
                                    <Form.Text id="passwordHelpBlock" muted>
                                        Override the default SEO title.
                                    </Form.Text>
                                </>
                            </Col>
                            <Col>
                                <>
                                    <Form.Label htmlFor="inputPassword5">SEO Keywords
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="inputPassword5"
                                        aria-describedby="passwordHelpBlock"
                                        name="keywords" 
                                        data-parent="seo_settings"
                                        onChange={(e)=>{ FormsData(e) }}
                                    />
                                    <Form.Text id="passwordHelpBlock" muted>
                                        Comma-separated list of keywords.
                                    </Form.Text>
                                </>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <>
                                    <Form.Label htmlFor="inputPassword5">SEO Description
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="inputPassword5"
                                        aria-describedby="passwordHelpBlock"
                                        name="description" 
                                        data-parent="seo_settings"
                                        onChange={(e)=>{ FormsData(e) }}
                                    />
                                    <Form.Text id="passwordHelpBlock" muted>
                                        SEO Description
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
export default SeoSettings