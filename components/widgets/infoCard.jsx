import { Button, Alert, Table, Col, InputGroup, Form, Row } from "react-bootstrap"
const InformationCard = ({heading,description}) => {
    return (
        <>
            <div className="alert">
                <Alert show={true} variant="success" style={{ backgroundColor: '#e9faf2' }}>
                    <Alert.Heading className="text-dark">{heading}</Alert.Heading>
                    <p className="text-sm text-secondary ">
                       {description}
                    </p>
                </Alert>
            </div>
        </>
    )
}
export default InformationCard
