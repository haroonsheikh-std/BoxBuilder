import { useEffect, useState } from "react"
import { Button, Alert, Table, Col, InputGroup, Form, Row, Spinner } from "react-bootstrap"
import AddProductSelectionStep from './AddProductSelectionStep/AddProductSelectionStep'
import AddContentHmtlStep from './AddContentHmtlStep/AddContentHmtlStep'
import AddFormStep from './AddFormStep/AddFormStep'
import AddSubscriptionStep from './AddSubscriptionStep/AddSubscriptionStep'
import AddPreProductSelectionStep from './AddPreProductSelectionStep/AddPreProductSelectionStep'
import InformationCard from '../../widgets/infoCard'
import api from "../../../api/index";
import DataTable from "react-data-table-component"
import EditIcon from "../../../assets/svgIcons/editIcon"
import DeleteIcon from '../../../assets/svgIcons/deleteIcon'

const StepsForm = ({ moveToNext, stepNo, moveToPrevious }) => {
    const [loading, SetLoading] = useState(false)
    const [search, setSearch] = useState()
    const [filtereData, setFilteredData] = useState([])
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
            setFilteredData(response.data)
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

    const columns = [
        {
            name: "Title",
            selector: (row) => row.title,
            sortable: true
        },
        {
            name: "Edit",
            cell: (row, index) => (
                <Button variant="dark" onClick={() => {
                    setCurrentEditObject(row)
                    setAddProductSelectionStep(true)
                }}><EditIcon /></Button>
            )
        },
        {
            name: "Delete",
            cell: (row) => (
                <Button size="sm" variant="danger" onClick={() => {
                    setSetlectedItem(row.id)
                    deleteSteps(row.id)
                }
                }>
                    {loading && selectedItem === row?.id ?
                        <Spinner size="sm" animation="border" variant="light" />
                        : <DeleteIcon />}
                </Button>
            )
        },
    ]

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
                        <DataTable
                            title="Steps Form"
                            pagination
                            fixedHeader
                            highlightOnHover
                            // fixedHeaderScrollHeight="450px"
                            subHeader
                            subHeaderComponent={
                                <input type='text' placeholder="Search here" value={search} onChange={(e) => setSearch(e.target.value)} className='w-25 form-control' />
                            }
                            columns={columns}
                            actions={
                                <>
                                    <span className="mx-2">Total:&nbsp;{storeStepsList?.length ?? "0"}</span>
                                </>
                            }
                            data={storeStepsList?.filter((d) => d.title?.toLowerCase().match(search?.toLowerCase()))}
                        />
                    </div>

                    <div className="p-2">
                        <Col >
                            <hr />
                            <label><b>Add a Product Step</b></label>
                            <Col className="mt-2">
                                <Button variant="outline-secondary" name="AddProductSelectionStep" onClick={() => {
                                    setAddProductSelectionStep(true)
                                    setCurrentEditObject('')
                                }}>Add a Product Selection Step</Button>{'  '}
                                <Button variant="outline-secondary" name="AddPreProductSelectionStep" onClick={() => setAddPreProductSelectionStep(true)}>Add a Pre-Selected Product Step</Button>
                            </Col>
                            <hr />
                            <Col>
                                <label><b>Add a Product Step</b></label>
                                <Col className="mt-2">
                                    <Button variant="outline-secondary" onClick={() => setAddFormStep(true)}>Add a Form Step</Button>{'  '}
                                    <Button variant="outline-secondary" onClick={() => setAddSubscriptionStep(true)}>Add a Subscription Step</Button>{'  '}
                                    <Button variant="outline-secondary" onClick={() => setAddContentHmtlStep(true)}>Add a Content/HTML Step</Button>
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