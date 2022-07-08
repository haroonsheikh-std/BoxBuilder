import { useState } from "react"
import { Button, Alert, Table, Col, InputGroup, Form, Row } from "react-bootstrap"
import InfoIcon from '../../assets/svgIcons/infoIcon'
const InformationCard = ({ heading, description, bullets, btnText, handleShow }) => {
    const [desc, setDesc] = useState(description.split('.'))
    return (
        <>
            <div className="alert">
                <Alert show={true} variant="success" style={{ border: "2px solid #80ccd4", backgroundColor: '#e9faf2' }}>

                    <Row>
                        <Col md={1} sm={1} lg={1}><InfoIcon /></Col>
                        <Col>
                            <Alert.Heading className="text-dark" style={{ fontSize: "1em" }}>{heading}</Alert.Heading>
                            {
                                bullets ?
                                    <ul className="text-sm text-secondary " style={{listStyleType:'square'}} >
                                        {

                                            desc.map((d) => {
                                                return (
                                                    <>
                                                        {
                                                            d != " " && d.split('').length ? <li>{d}</li> : null
                                                        }
                                                    </>
                                                )
                                            })
                                        }
                                    </ul>
                                    :
                                    <p className="text-sm text-secondary ">
                                        {description}
                                    </p>
                            }

                            {
                                btnText ?  <button className="btn btn-outline-success" onClick={handleShow}>{btnText}</button> : ''
                            }
                                  

                        </Col>
                    </Row>
                </Alert>
            </div>
        </>
    )
}
export default InformationCard
