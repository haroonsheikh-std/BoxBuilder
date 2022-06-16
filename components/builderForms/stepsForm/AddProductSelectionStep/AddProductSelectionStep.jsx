import { Button, Alert, Table, Col, InputGroup, Form, Row } from "react-bootstrap"
import { Formik } from 'formik';
import * as Yup from 'yup';
import initialValues from './initialValues'
import validate from './validate'

const AddProductSelectionStep = ({ handleResetCallback }) => {

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validate}
            onSubmit={(val => console.log(val))}
        >{({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
        }) => (
            <Form noValidate onSubmit={handleSubmit}>
                <Col>
                    <Form.Group controlId="text">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            required={true}
                            type="text"
                            placeholder="title"
                            aria-describedby="inputGroupPrepend"
                            name="title"
                            value={values.title}
                            onChange={(e) => { console.log(e.target.value) }}
                            isInvalid={!!errors.title}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.title}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="text">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            required={true}
                            type="text"
                            placeholder="description"
                            aria-describedby="inputGroupPrepend"
                            name="description"
                            value={values.description}
                            onChange={handleChange}
                            isInvalid={!!errors.description}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.description}
                        </Form.Control.Feedback>
                        <p className="text-secondary text-sm">If you're using the step progress bar, you can add a shorter title for this step to show there.</p>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="text">
                        <Form.Label>short title</Form.Label>
                        <Form.Control
                            required={true}
                            type="text"
                            placeholder="short_title"
                            aria-describedby="inputGroupPrepend"
                            name="short_title"
                            value={values.short_title}
                            onChange={handleChange}
                            isInvalid={!!errors.short_title}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.short_title}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Row>
                    <Col >
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Label className="text-sm ">When complete, send customers to the:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="title"
                                aria-describedby="inputGroupPrepend"
                                name="title"
                                value={values.title}
                                onChange={(e) => { console.log(e.target.value) }}
                                // isInvalid={!!errors.title}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.title}
                            </Form.Control.Feedback>
                            <p className="text-secondary text-sm">You can uncheck if you wish to deactivate the builder.   </p>
                        </Form.Group>
                    </Col>
                    <Col >
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Label className="text-sm ">When complete, send customers to the:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="title"
                                aria-describedby="inputGroupPrepend"
                                name="title"
                                value={values.title}
                                onChange={(e) => { console.log(e.target.value) }}
                                // isInvalid={!!errors.title}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.title}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col >
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Label className="text-sm ">When complete, send customers to the:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="title"
                                aria-describedby="inputGroupPrepend"
                                name="title"
                                value={values.title}
                                onChange={(e) => { console.log(e.target.value) }}
                                // isInvalid={!!errors.title}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.title}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <button className="mr-3" onClick={(e) => {
                    handleResetCallback()
                    e.preventDefault()
                }}>Back</button>
                <Button type="submit">Submit form</Button>
            </Form>
        )}
        </Formik>
    )
}

export default AddProductSelectionStep