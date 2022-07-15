import { useState } from "react"
import { Form, Button, Row, Col, Dropdown, Accordion, Modal } from "react-bootstrap"
import { shopifyItems } from '../../../constants/constants'

function PickCollectionsModal({ modalState, handleClose, Callback }) {
    const [set, seSet] = useState({ checked: {} })
    const [selectedItem, setSelectedItem] = useState([])
    const [query, setQuery] = useState('')

    const onSelectedChange = (index, data) => {
        setSelectedItem(data)
        seSet(prev => ({
            checked: {
                ...prev.checked,
                [index]: !prev.checked[index]
            }
        }));

    };
    console.log('selectedItem', selectedItem)
    const { checked } = set;
    const checkedCount = Object.keys(checked).filter(key => checked[key]).length;
    const disabled = checkedCount > 0;

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
                    <Modal.Title>Select collection</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-sm ">
                    <div className="p-2">
                        <Col >
                            <Form.Group className="mb-3" controlId="title">
                                <Form.Control placeholder=' seacrh collections' onChange={(e) => {handleSearch(e) }} name='title' className="text-sm" type="text" label="seacrh" />
                                <p className="text-secondary text-sm">  </p>
                            </Form.Group>
                        </Col>
                    </div>
                    <div className="px-1 py-1 cus-Overflow">
                        <hr />
                        {
                            shopifyItems?.Collections?.filter((d) => d.name.toLowerCase().includes(query) || d.name.includes(query)).map((data, index) => {
                                return (
                                    <div>
                                        <Form.Check
                                            checked={checked[index] || false}
                                            disabled={!checked[index] && disabled}
                                            className="d-inline-block text-sm" onChange={() => { onSelectedChange(index, data) }} type="checkbox" />

                                        <img className="d-inline-block mx-2 rounded w-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU" alt="Dog" />
                                        <span className=" text-secondary text-sm"> {data.name} </span>
                                        <hr />
                                    </div>
                                )
                            })
                        }
                    </div>
                </Modal.Body>
                <Modal.Footer className="justify-content-between text-sm">
                    {checkedCount}/1 collections selected
                    <div>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button className="mx-1" variant="primary" onClick={() => {
                            Callback(selectedItem)
                            handleClose()
                        }} disabled={disabled ? null : true} >Select</Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PickCollectionsModal