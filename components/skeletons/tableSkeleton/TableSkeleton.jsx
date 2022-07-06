import { Card, Placeholder, Row, Col } from "react-bootstrap";

const TableSkeleton = () => {
  return (
    <div className="d-flex justify-content-between mb-10">
      <Card style={{ width: "100vw", height: "15rem" }}>
        <Card.Body>

        <Row className="d-flex justify-content-between">
    <Col md={4}> <Placeholder animation="glow">
            <Placeholder xs={6} size='lg'/>
          </Placeholder></Col>

    <Col md={{ span: 4, offset: 4 }}>
    <Placeholder animation="glow">
            <Placeholder xs={12} size='lg'/>
          </Placeholder>
    </Col>
  </Row>

  <Row className="d-flex justify-end">
    <Col md={{ span: 4, offset: 4 }}>
    <Placeholder animation="glow">
            <Placeholder xs={12} size='lg'/>
          </Placeholder>
    </Col>
  </Row>


  <Row className="d-flex justify-content-between">
     <Placeholder animation="glow">
            <Placeholder xs={12} size='lg'/>
          </Placeholder>
  </Row>

  <Row className="d-flex justify-content-between">
     <Placeholder animation="glow">
            <Placeholder xs={12} size='lg'/>
          </Placeholder>
  </Row>

  <Row className="d-flex justify-content-between">
     <Placeholder animation="glow">
            <Placeholder xs={12} size='lg'/>
          </Placeholder>
  </Row>
  <Row className="d-flex justify-content-between">
     <Placeholder animation="glow">
            <Placeholder xs={12} size='lg'/>
          </Placeholder>
  </Row>


  <Row className="d-flex justify-end">
    <Col md={{ span: 4, offset: 4 }}>
    <Placeholder animation="glow">
            <Placeholder xs={12} size='lg'/>
          </Placeholder>
    </Col>
  </Row>



          {/* <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default TableSkeleton;