import { useEffect, useState } from "react"
import { Form, Button, Row, Col, Dropdown, Table } from "react-bootstrap"
import DataTable from 'react-data-table-component'
import api from "../../../../api"

const AddDiscounts = () => {
    const [selectedItem, setSetlectedItem] = useState(false)
    const [search, setSearch] = useState()
    const [storeDiscountsList, setStoreDiscountsList] = useState()
    // const [setSetlectedItem]

    useEffect(() => {
        api.AddDiscounts.getDiscounts().then((res) => {
            console.log(res?.data);
            setStoreDiscountsList(res?.data)
        })
    }, [])

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
                    deleteSteps(row.id)
                }
                }>
                    {loading && selectedItem == row.id ? <>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />Loading...</>
                        : <DeleteIcon />}
                </Button>
            )
        },
    ]

    return (
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
        // <Table striped bordered hover responsive>
        //     <thead>
        //         <tr>
        //             <td>Discount</td>
        //             <td>Edit</td>
        //             <td>Delete</td>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         <tr>
        //             <td colSpan={3} className="text-secondary text-center">0 discounts added</td>
        //         </tr>
        //     </tbody>
        // </Table>
    )
}

export default AddDiscounts