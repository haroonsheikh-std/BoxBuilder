import { useState } from "react"
import { Form, Button, Row, Col, Dropdown } from "react-bootstrap"
import InfoModal from '../../../modals/infoModal/infoModal'

const OrderProduct = ({ FormsData,checkBoxData }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
    }

    return (
        <>
            {/* <Form> */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <h5>Order Product/SKU Settings</h5>
                </Form.Group>
                <Row>
                    <Col >
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check className="text-sm" name='product_orders'  onChange={(e) => { checkBoxData(e) }} type="checkbox" label="Use Your Products on new Orders" />
                            <p className="text-secondary text-sm"> <span> <button onClick={(event)=>{setShow(true)}} className="text-sm underline text-blue-500">More Info</button></span>  </p>
                        </Form.Group>
                    </Col>
                    <Col >
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check className="text-sm" name='keep_builder'  onChange={(e) => { checkBoxData(e) }} type="checkbox" label="Keep the builder on the order?" />
                            <p className="text-secondary text-sm">If the price of the builder won't be determined by the selected products, (e.g. you are using the Fixed Price option), this option is recommended.<span> <button onClick={()=>setShow(true)} className="text-sm underline text-blue-500">More Info</button></span> </p>
                        </Form.Group>
                    </Col>
                </Row>
            {/* </Form> */}
            <InfoModal modalState={show} handleClose={handleClose} />
        </>
    )
}
export default OrderProduct