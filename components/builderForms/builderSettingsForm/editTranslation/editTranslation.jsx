import { useState } from "react"
import { Form, Button, Row, Col, Dropdown, Accordion, Modal } from "react-bootstrap"
import EditTranslationModal from '../../../modals/editTransitions/editTransitionModal'

const EditTranslation = ({ FormsData,checkBoxData }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
    }

    return (
        <>
            <Button className="mx-4" onClick={()=>setShow(true)} variant="secondary">Edit Translation</Button>
            <EditTranslationModal FormsData={FormsData} checkBoxData={checkBoxData} modalState={show} handleClose={handleClose} />
        </>
    )
}

export default EditTranslation