import { useField, ErrorMessage } from 'formik'
import { useState } from 'react';
import { Button, Alert, Table, Col, InputGroup, Form, Row } from "react-bootstrap"

export const TextField = ({ dataParent, change, placeholder, description, label, ...props }) => {
    const [field, meta] = useField(props);
    
    return (
        <Col>
            <div className='mb-2'>
                <div className="mb-2">
                    <label htmlFor={field.name}>{label}</label>
                    {
                        dataParent != "" ?
                            <input
                                className={`form-control shadow-none ${meta.touched && meta.error && `is-invalid`}`}
                                placeholder={placeholder}
                                data-parent={dataParent}
                                {...props}
                                {...field}
                                autoComplete='off'
                                onChange={(e) => { change(e) }}
                            />
                            : <input
                                className={`form-control shadow-none ${meta.touched && meta.error && `is-invalid`}`}
                                placeholder={placeholder}
                                {...props}
                                {...field}
                                autoComplete='off'
                                onChange={(e) => { change(e) }}
                            />
                    }
                    <ErrorMessage component='div' name={field.name} className='text-danger' />
                    <p className='text-sm text-secondary'>{description != "" ? description : null}</p>
                </div>
            </div >
        </Col>
    )
}