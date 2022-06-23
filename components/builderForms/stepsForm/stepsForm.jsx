import { useEffect, useState } from "react"
import { Button, Alert, Table, Col, InputGroup, Form, Row, Spinner } from "react-bootstrap"
import AddProductSelectionStep from './AddProductSelectionStep/AddProductSelectionStep'
import AddContentHmtlStep from './AddContentHmtlStep/AddContentHmtlStep'
import AddFormStep from './AddFormStep/AddFormStep'
import AddSubscriptionStep from './AddSubscriptionStep/AddSubscriptionStep'
import AddPreProductSelectionStep from './AddPreProductSelectionStep/AddPreProductSelectionStep'
import InformationCard from '../../widgets/infoCard'
import api from "../../../api/index";

const StepsForm = ({ moveToNext, stepNo, moveToPrevious }) => {
    const [loading, SetLoading] = useState(false)
    const [selectedItem, setSetlectedItem] = useState()
    const [openAddProductSelectionStep, setAddProductSelectionStep] = useState(false)
    const [openAddContentHmtlStep, setAddContentHmtlStep] = useState(false)
    const [openAddFormStep, setAddFormStep] = useState(false)
    const [openAddSubscriptionStep, setAddSubscriptionStep] = useState(false)
    const [openAddPreProductSelectionStep, setAddPreProductSelectionStep] = useState(false)
    const [storeStepsList, setStoreStepsList] = useState()
    const [currentEditObject, setCurrentEditObject] = useState()

    const handleResetCallback = () => {
        setAddProductSelectionStep(false)
        setAddContentHmtlStep(false)
        setAddFormStep(false)
        setAddSubscriptionStep(false)
        setAddPreProductSelectionStep(false)
    }

    const getSteps = async () => {
        await api.StepsForm.getBuilderSteps().then((response) => {
            setStoreStepsList(response.data)
        }).catch((err) => err ? SetLoading(false) : null)
    }

    const deleteSteps = async (id) => {
        SetLoading(true)
        await api.StepsForm.deleteBuilderSteps(id).then(() => {
            getSteps().then(() => SetLoading(false))
        })
    }

    useEffect(() => {
        getSteps()
    }, [])

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
                            <tbody align="center">
                                {storeStepsList ?
                                    storeStepsList?.map((data, index) => {
                                        return (
                                            <>
                                                <tr>
                                                    <td>{index}</td>
                                                    <td>{data.title}</td>
                                                    <td>
                                                        <Button variant="light" onClick={() => {
                                                            setCurrentEditObject(data)
                                                            setAddProductSelectionStep(true)
                                                        }}>Edit</Button>
                                                    </td>
                                                    <td>
                                                        <Button size="sm" variant="danger" onClick={() => {
                                                            setSetlectedItem(index)
                                                            deleteSteps(data.id)
                                                        }
                                                        }>
                                                            {loading && selectedItem == index ? <>
                                                                <Spinner
                                                                    as="span"
                                                                    animation="grow"
                                                                    size="sm"
                                                                    role="status"
                                                                    aria-hidden="true"
                                                                />Loading...</>
                                                                : 'Delete'}
                                                        </Button>
                                                    </td>
                                                </tr>
                                            </>
                                        )
                                    })
                                    :
                                    <>
                                        <td colSpan={4}>
                                            <div className="text-dark">
                                                <Spinner variant="dark" animation="grow" size="sm" />
                                                <Spinner animation="grow" size="sm" />
                                                <Spinner animation="grow" size="sm" />
                                            </div>
                                        </td>
                                        {/* <Spinner animation="grow" size="sm" />
                                        <Spinner animation="grow" size="sm" />
                                        <Spinner animation="grow" size="sm" /> */}
                                    </>
                                }
                            </tbody>
                        </Table>
                    </div>

                    <div className="p-2">
                        <Col >
                            <hr />
                            <label><b>Add a Product Step</b></label>
                            <Col className="mt-2">
                                <button className="cus-secondary-button mx-2" name="AddProductSelectionStep" onClick={() => {
                                    setAddProductSelectionStep(true)
                                    setCurrentEditObject('')
                                }}>Add a Product Selection Step</button>
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
                {openAddProductSelectionStep ? <AddProductSelectionStep currentEditObject={currentEditObject} getSteps={getSteps} handleResetCallback={handleResetCallback} /> : null}
                {openAddContentHmtlStep ? <AddContentHmtlStep handleResetCallback={handleResetCallback} /> : null}
                {openAddFormStep ? <AddFormStep handleResetCallback={handleResetCallback} /> : null}
                {openAddSubscriptionStep ? <AddSubscriptionStep handleResetCallback={handleResetCallback} /> : null}
                {openAddPreProductSelectionStep ? <AddPreProductSelectionStep handleResetCallback={handleResetCallback} /> : null}
            </div>
        </>
    )
}
export default StepsForm