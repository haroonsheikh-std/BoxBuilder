import { Card, Placeholder, Row, Col } from "react-bootstrap";

const TableSkeleton = () => {
  return (
    <div className="d-flex justify-content-between">
      <Card style={{ width: "100vw", height: "15rem" }}>
        <Card.Body>

        <Row className="d-flex justify-content-between mb-2">
    <Col md={4}> <Placeholder animation="glow">
            <Placeholder xs={6} size='lg'/>
          </Placeholder></Col>

    <Col md={{ span: 4, offset: 4 }}>
    <Placeholder animation="glow">
            <Placeholder xs={12} size='lg'/>
          </Placeholder>
    </Col>
  </Row>

  <Row className="d-flex justify-end mb-2">
    <Col md={{ span: 4}}>
    <Placeholder animation="glow">
            <Placeholder xs={12} size='lg'/>
          </Placeholder>
    </Col>
  </Row>


  <Row className="d-flex justify-content-between mb-2">
     <Placeholder animation="glow">
            <Placeholder xs={12} size='lg'/>
          </Placeholder>
  </Row>

  <Row className="d-flex justify-content-between mb-2">
     <Placeholder animation="glow">
            <Placeholder xs={12} size='lg'/>
          </Placeholder>
  </Row>

  <Row className="d-flex justify-content-between mb-2">
     <Placeholder animation="glow">
            <Placeholder xs={12} size='lg'/>
          </Placeholder>
  </Row>
  <Row className="d-flex justify-content-between mb-2">
     <Placeholder animation="glow">
            <Placeholder xs={12} size='lg'/>
          </Placeholder>
  </Row>


  <Row className="d-flex justify-end mb-2">
    <Col md={{ span: 4, offset: 4 }}>
    <Placeholder animation="glow">
            <Placeholder xs={12} size='lg'/>
          </Placeholder>
    </Col>
  </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TableSkeleton;
