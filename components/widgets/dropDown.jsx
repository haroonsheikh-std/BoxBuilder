import { useState } from "react"
import { useField } from 'formik'
import { Form, Button, Row, Col, Dropdown } from "react-bootstrap"

const DropDown = ({ dataArray, change, placeholder, description, label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <Col>
            <Form.Label className="text-sm ">When complete, send customers to the:</Form.Label>
            <Form.Select
                {...props}
                {...field}
                onChange={(e) => { change(e) }}
                aria-label="Default select example"
            >
                <option selected name="cart" value={3} >3</option>
                <option name="checkout" value={4} >4</option>
            </Form.Select>
        </Col>
    )
}

export default DropDown;