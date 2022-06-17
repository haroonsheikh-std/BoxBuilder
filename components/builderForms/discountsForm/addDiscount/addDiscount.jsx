import { useState } from "react"
import { Form, Button, Row, Col, Dropdown, Table } from "react-bootstrap"

const AddDiscounts = () => {
    // const [fixedPrice, setFixedPrice] = useState(false)
    return (
        <Table striped bordered hover responsive>
        <thead>
            <tr>
            <td>Discount</td>
            <td>Edit</td>
            <td>Delete</td>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td colSpan={3} className="text-secondary text-center">0 discounts added</td>
            </tr>
        </tbody>
        </Table>
    )
}

export default AddDiscounts