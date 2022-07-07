import AddDiscounts from "./addDiscount/addDiscount"
import { useEffect, useState } from "react"
import { Form, Button, Row, Col, Spinner, Dropdown, Table } from "react-bootstrap"
import DataTable from 'react-data-table-component'
import EditIcon from "../../../assets/svgIcons/editIcon"
import DeleteIcon from "../../../assets/svgIcons/deleteIcon"
import DiscountModals from "./discountModal/discountModal"
import { dicountFormData } from '../../../constants/defaultData'
import api from '../../../api/index'

const DiscountsForm = ({ moveToNext, stepNo, moveToPrevious }) => {
    const [editAbleObject, setEditAbleObject] = useState(null)
    const [selectedItem, setSetlectedItem] = useState()
    const [search, setSearch] = useState()
    const [lgShow, setLgShow] = useState(false);
    const [storeDiscountsList, setStoreDiscountsList] = useState()
    const [loading, setLoading] = useState(false);

    const getDiscounts = async () => {
        await api.AddDiscounts.getDiscounts().then((res) => {
            console.log(res?.data);
            setStoreDiscountsList(res?.data)
        })
    }
    const handleModalClose = () => {
        setLgShow(false)
    }

    useEffect(() => {
        getDiscounts()
        api.Shopify.getShopifyList().then((res) => console.log(res?.data))
    }, [])


    const deleteDiscounts = async (id) => {
        setLoading(true)
        await api.AddDiscounts.deleteDiscounts(id).then(() => {
            getDiscounts()
            setLoading(false)
        })
    }

    const columns = [
        {
            name: "Title",
            selector: (row) => row.title,
            sortable: true
        },
        {
            name: "Edit",
            cell: (row) => (
                <Button variant="dark" onClick={() => {
                    console.log(row);
                    setEditAbleObject(row)
                    setLgShow(true)
                    // setCurrentEditObject(row)
                    // setAddProductSelectionStep(true)
                }}><EditIcon /></Button>
            )
        },
        {
            name: "Delete",
            cell: (row) => (
                <Button size="sm" variant="danger" onClick={() => {
                    setSetlectedItem(row.id)
                    deleteDiscounts(row.id)
                }
                }>
                    {loading && selectedItem == row?.id ?
                        <Spinner size="sm" animation="border" variant="light" />
                        : <DeleteIcon />}
                </Button>
            )
        },
    ]

    return (
        <>
            <div className="wrapper">
                <div>
                    <h5 className="d-inline-block">Automatic Builder Discounts </h5>
                </div>
                <br></br>
                <br></br>
                <div className="discount_details">
                    <DataTable
                        title="Discount Form"
                        pagination
                        fixedHeader
                        highlightOnHover
                        subHeader
                        subHeaderComponent={
                            <input type='text' placeholder="Search here" value={search} onChange={(e) => setSearch(e.target.value)} className='w-25 form-control' />
                        }
                        columns={columns}
                        actions={
                            <>
                                <span className="mx-2">Total:&nbsp;{storeDiscountsList?.length ?? "0"}</span>
                            </>
                        }
                        data={storeDiscountsList?.filter((d) => d.title?.toLowerCase().match(search?.toLowerCase()))}
                    />
                </div>
                {/* <AddDiscounts /> */}
                <hr />
                <div>
                    <Button variant="outline-secondary" onClick={() => {
                        setEditAbleObject(null)
                        setLgShow(true)
                    }}>
                        Add a Discount
                    </Button>
                </div>
                <DiscountModals lgShow={lgShow} handleModalClose={handleModalClose} getDiscounts={getDiscounts} editAbleObject={editAbleObject} />
                <div className="float-right mt-5">
                    <Button variant="outline-danger" size="sm" onClick={() => { moveToPrevious(stepNo) }} >Previous</Button>
                    <Button variant="outline-primary ml-2" size="sm" onClick={() => { moveToNext(stepNo) }} >Finish</Button>
                </div>
            </div>
        </>
    )
}
export default DiscountsForm