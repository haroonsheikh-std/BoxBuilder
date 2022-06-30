import { useState } from "react"
import { useField } from 'formik'
import { Form, Button, Row, Col, Dropdown } from "react-bootstrap"

export const CheckBoxField = ({ change, placeholder, description, label, ...props }) => {
    const [field, meta] = useField(props);
    const [val, setVal] = useState(false)
    return (
        <Col>
            <div className="mb-2">
                <Form.Check
                    className="text-sm"
                    {...props}
                    {...field}
                    value={val}
                    type="checkbox"
                    label={label}
                    onChange={(e) =>{ change(e)}}
                />
                <p className="text-secondary text-sm">Would you like to charge tax when adding the boxes to the cart? </p>
            </div>
        </Col>
    )
}
