import { useState } from "react"
import { Form, Button, Row, Col, Dropdown, Table } from "react-bootstrap"

const AddSteps = () => {
    // const [fixedPrice, setFixedPrice] = useState(false)
    return (
        <Table striped bordered hover responsive>
        <thead>
            <tr>
            <td>Step</td>
            <td>Step #</td>
            <td>Edit</td>
            <td>Delete</td>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td colSpan={4} className="text-secondary text-center">0 steps added</td>
            </tr>
        </tbody>
        </Table>
    )
}

export default AddSteps