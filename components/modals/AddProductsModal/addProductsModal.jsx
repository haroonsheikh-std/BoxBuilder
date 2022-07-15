import { useState } from "react"
import { Form, Button, Row, Col, Dropdown, Accordion, Modal } from "react-bootstrap"
import { shopifyItems } from '../../../constants/constants'

function AddProductsModal({ modalState, handleClose, Callback }) {
    const [set, seSet] = useState({ checked: {} })
    const [selectedItem, setSelectedItem] = useState([])
    const [query, setQuery] = useState('')

    const onSelectedChange = (e, index, data) => {
            Callback(data,e)
        seSet(prev => ({
            checked: {
                ...prev.checked,
                [index]: !prev.checked[index]
            }
        }));

    };
    // const { checked } = set;
    // const checkedCount = Object.keys(checked).filter(key => checked[key]).length;
    // const disabled = checkedCount > 0;

    const handleSearch = (event) => {
        setQuery(event.target.value)
    }

    return (
        <>
            <Modal
                size="md"
                show={modalState}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                aria-labelledby="example-modal-sizes-title-md"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Select products</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-sm ">
                    <div className="p-2">
                        <Col >
                            <Form.Group className="mb-3" controlId="title">
                                <Form.Control placeholder=' seacrh Products' onChange={(e) => { handleSearch(e) }} name='title' className="text-sm" type="text" label="seacrh" />
                                <p className="text-secondary text-sm">  </p>
                            </Form.Group>
                        </Col>
                    </div>
                    <div className="px-1 py-1 cus-Overflow">
                        <hr />
                        {
                            shopifyItems?.Products?.filter((d) => d.name.toLowerCase().includes(query) || d.name.includes(query)).map((data, index) => {
                                return (
                                    <div>
                                        <Form.Check
                                            // checked={checked[index] || false}
                                            // disabled={!checked[index] && disabled}
                                            className="d-inline-block text-sm" onChange={(e) => { onSelectedChange(e, index, data) }} type="checkbox" />
                                        <img className="d-inline-block mx-2 rounded w-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU" alt="Dog" />
                                        <span className=" text-secondary text-sm"> {data.name} </span>
                                        <hr />
                                        <div className="px-2">
                                            {
                                                data?.items?.map((j, i) => {
                                                    return (
                                                        <div key={i}>
                                                            <Form.Check
                                                                // checked={checked[index] || false}
                                                                // disabled={!checked[index] && disabled}
                                                                className="d-inline-block text-sm"  type="checkbox" />
                                                            <span className=" text-secondary text-sm"> {j.name} </span>
                                                            <hr />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Modal.Body>
                <Modal.Footer className="justify-content-between text-sm">
                    0 products selected
                    <div>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button className="mx-1" variant="primary" onClick={() => {
                            Callback(selectedItem)
                            handleClose()
                        }} >Select</Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddProductsModal