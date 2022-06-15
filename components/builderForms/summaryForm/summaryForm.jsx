import { Button, Row, Col, Card } from "react-bootstrap"

const SummaryForm = ({ moveToNext, stepNo, moveToPrevious }) => {
    return (
        <>
            <div className="wrapper " >
                <Row>
                    <Col className="mr-3  p-3">
                        <h5>View Using a Product</h5>
                    </Col>
                    <Col className="mr-3  p-3">
                        <h5>View Using a Link</h5>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ backgroundColor: '#eef9f9'}} className="mr-3 border-t-4 p-3">
                            <div>
                                <h5 className="d-inline-block">A product was created for this builder</h5>
                                <p>We have created a product with the same name as this builder. You can link customers to this product to load the builder.</p>
                                <br></br>
                                <p><b>Please note</b> that editing or deleting this product will stop the builder from working.</p>
                                <br></br>
                                <p>You can only edit this product to add a product image and description.</p>
                                <br></br>
                                <Button variant="outline-secondary" size="m"  >View Product</Button>

                            </div>
                    </Col>
                    
                    <Col style={{ backgroundColor: '#eff7ed'}} className="ml-3 p-3 border-t-4">
                            <div>
                                <h5 className="d-inline-block">You can now view your builder on your store.</h5>
                                <p>In order to get your customers loading the builder, you will need to direct them to this same link.</p>
                                <br></br>
                                <p>You can copy this link by using the button below.</p>
                                <br></br>
                                <p>e.g. in Online Store  Navigation, you can use this link for a menu item.</p>
                                <Button variant="outline-secondary" size="m"  >View Builder</Button> &nbsp; &nbsp;&nbsp; <a href="#"> Copy URL</a>
                                
                            </div>
                        
                    </Col>
                </Row>
                <div className="float-right mt-5">
                    <Button variant="outline-danger" size="sm" onClick={() => { moveToPrevious(stepNo) }} >Previous</Button>
                    <Button variant="outline-primary ml-2" size="sm" onClick={() => { moveToNext(stepNo) }} >Save</Button>
                </div>
            </div>
            
        </>
    )
}
export default SummaryForm