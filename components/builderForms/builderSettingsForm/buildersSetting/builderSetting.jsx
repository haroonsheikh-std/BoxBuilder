import { Form, Button, Row, Col } from "react-bootstrap"

const BuilderSettings = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-sm ">Builder Name</Form.Label>
                <Form.Control type="email" placeholder="e.g. Build Your Custom Laptop" />
            </Form.Group>
            <Row>
                <Col className='col-span-4'>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check className="text-sm" type="checkbox" label="Check me out" />
                        <p className="text-secondary text-sm">You can uncheck if you wish to deactivate the builder.   </p>
                    </Form.Group>
                </Col>
                <Col className='col-span-4'>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check className="text-sm" type="checkbox" label="Charge Tax" />
                        <p className="text-secondary text-sm">Would you like to charge tax when adding the boxes to the cart? </p>
                    </Form.Group>
                </Col>
                <Col className='col-span-4'>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <p className="text-secondary text-sm">When complete, send customers to the: </p>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                </Col>
            </Row>


            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default BuilderSettings