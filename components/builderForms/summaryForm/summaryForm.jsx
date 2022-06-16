import { Button } from "react-bootstrap"

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
                    <Col className="mr-3 border-t-4 p-3" style={{borderTop: '3px solid #26c5de' ,backgroundColor: '#eef9f9'}}>
                        <div>
                            <h6 className="d-inline-block">A product was created for this builder</h6>
                            <div className="text-secondary" style={{fontSize:'13px'}}>
                                <p>We have created a product with the same name as this builder. You can link customers to this product to load the builder.</p>
                                <p className="mt-2"><b>Please note</b> that editing or deleting this product will stop the builder from working.</p>
                                <p className="mt-2">You can only edit this product to add a product image and description.</p>
                            </div>
                            <Button variant="outline-secondary" size="m"  >View Product</Button>

                        </div>
                    </Col>

                    <Col className="ml-3 p-3 border-t-4" style={{borderTop:' 3px solid green',backgroundColor: '#eff7ed'}}>
                        <div>
                            <h6 className="d-inline-block ">You can now view your builder on your store.</h6>
                            <div className="text-secondary" style={{fontSize:'13px'}}>
                                <p >In order to get your customers loading the builder, you will need to direct them to this same link.</p>
                                <p>You can copy this link by using the button below.</p>
                                <p>e.g. in Online Store  Navigation, you can use this link for a menu item.</p>
                            </div>
                            <Button variant="outline-secondary" size="m"  >View Builder</Button> &nbsp; &nbsp;&nbsp; <a href="#" style={{color:'black'}}> Copy URL</a>

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