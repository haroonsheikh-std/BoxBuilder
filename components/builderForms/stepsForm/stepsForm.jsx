import { useState } from "react"
import { Button, Alert, Table, Col, InputGroup, Form, Row } from "react-bootstrap"
import AddProductSelectionStep from './AddProductSelectionStep/AddProductSelectionStep'
import AddContentHmtlStep from './AddContentHmtlStep/AddContentHmtlStep'
import AddFormStep from './AddFormStep/AddFormStep'
import AddSubscriptionStep from './AddSubscriptionStep/AddSubscriptionStep'
import AddPreProductSelectionStep from './AddPreProductSelectionStep/AddPreProductSelectionStep'
import InformationCard from '../../widgets/infoCard'

const StepsForm = ({ moveToNext, stepNo, moveToPrevious }) => {
    const [openAddProductSelectionStep, setAddProductSelectionStep] = useState(false)
    const [openAddContentHmtlStep, setAddContentHmtlStep] = useState(false)
    const [openAddFormStep, setAddFormStep] = useState(false)
    const [openAddSubscriptionStep, setAddSubscriptionStep] = useState(false)
    const [openAddPreProductSelectionStep, setAddPreProductSelectionStep] = useState(false)

    const handleResetCallback = () => {
        setAddProductSelectionStep(false)
        setAddContentHmtlStep(false)
        setAddFormStep(false)
        setAddSubscriptionStep(false)
        setAddPreProductSelectionStep(false)
    }
    return (
        <>
            {!openAddProductSelectionStep && !openAddContentHmtlStep && !openAddFormStep && !openAddSubscriptionStep && !openAddPreProductSelectionStep ?
                <div className="wrapper">
                    <div>
                        <h5 className="d-inline-block text-md">Builder Steps </h5>
                        <p className="text-sm">Add the steps in the order you wish for them to appear to the customer.</p>
                    </div>
                    <InformationCard
                        heading='Form Steps'
                        description='A form step will allow you to collect custom information from the customer. This could be an engraving, a personalised note or anything you like. This information you collect will appear on the order.'
                    />
                    <hr />
                    <div className="table_wrapper">
                        <Table striped bordered hover variant="light">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>step</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>
                                        <Button variant="light">Edit</Button>
                                    </td>
                                    <td>
                                        <Button size="sm" variant="danger">Delete</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>
                                        <Button variant="light">Edit</Button>
                                    </td>
                                    <td>
                                        <Button size="sm" variant="danger">Delete</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Larry the Bird</td>
                                    <td>
                                        <Button variant="light">Edit</Button>
                                    </td>
                                    <td>
                                        <Button size="sm" variant="danger">Delete</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <div className="p-2">
                        <Col >
                            <hr />
                            <label><b>Add a Product Step</b></label>
                            <Col className="mt-2">
                                <button className="cus-secondary-button mx-2" name="AddProductSelectionStep" onClick={() => setAddProductSelectionStep(true)}>Add a Product Selection Step</button>
                                <button className="cus-secondary-button" name="AddPreProductSelectionStep" onClick={() => setAddPreProductSelectionStep(true)}>Add a Pre-Selected Product Step</button>
                            </Col>
                            <hr />
                            <Col>
                                <label><b>Add a Product Step</b></label>
                                <Col className="mt-2">
                                    <button className="cus-secondary-button mx-2" onClick={() => setAddFormStep(true)}>Add a Form Step</button>
                                    <button className="cus-secondary-button" onClick={() => setAddSubscriptionStep(true)}>Add a Subscription Step</button>
                                    <button className="cus-secondary-button m-2" onClick={() => setAddContentHmtlStep(true)}>Add a Content/HTML Step</button>
                                </Col>
                            </Col>
                        </Col>
                    </div>
                    <div className="float-right mt-5">
                        <Button variant="outline-danger" size="sm" onClick={() => { moveToPrevious(stepNo) }} >Previous</Button>
                        <Button variant="outline-primary ml-2" size="sm" onClick={() => { moveToNext(stepNo) }} >Next</Button>
                    </div>
                </div>
                : null
            }

            <div className="form_wrapper">
                {openAddProductSelectionStep ? <AddProductSelectionStep handleResetCallback={handleResetCallback} /> : null}
                {openAddContentHmtlStep ? <AddContentHmtlStep handleResetCallback={handleResetCallback} /> : null}
                {openAddFormStep ? <AddFormStep handleResetCallback={handleResetCallback} /> : null}
                {openAddSubscriptionStep ? <AddSubscriptionStep handleResetCallback={handleResetCallback} /> : null}
                {openAddPreProductSelectionStep ? <AddPreProductSelectionStep handleResetCallback={handleResetCallback} /> : null}
            </div>
        </>
    )
}
export default StepsForm