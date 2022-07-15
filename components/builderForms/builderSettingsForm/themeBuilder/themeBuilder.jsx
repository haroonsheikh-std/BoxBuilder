import { useState } from "react";
import {
  Form,
  Button,
  Row,
  Col,
  Dropdown,
  Accordion,
  Image,
} from "react-bootstrap";
const ThemeBuilders = ({ FormsData, checkBoxData, radioButtonData }) => {
  return (
    <>
      {/* <Form>  */}
      <Form.Group className="mb-3" controlId="builderTheme">
        <h5>Select which theme the builder will use</h5>
      </Form.Group>
      <Row>
        <Col>
          <Form.Check
            type="radio"
            label="Full width with fixed bottom pricing bar"
            id="fullWidth"
            name="builder_theme_variant"
            value={'full_width_with_fixed_bottom'}
            data-parent='theme'
            onChange={(e) => {
              radioButtonData(e);
            }}
          />
          <Form.Text id="passwordHelpBlock" muted>
            Show only product images and price
            <Image
              className="img-fluid"
              src="https://builder.boxup.io/assets/image/full.png"
            ></Image>
          </Form.Text>
        </Col>
        <Col>
          <Form.Check
            type="radio"
            label="Fixed right side total with vertical scroll"
            id="fixedRight"
            name="builder_theme_variant"
            value={'fixed_right_side_with_scroll'}
            data-parent='theme'
            onChange={(e) => {
              radioButtonData(e);
            }}
          />
          <Form.Text id="passwordHelpBlock" muted>
            Also includes product descriptions
            <Image
              className="img-fluid"
              src="https://builder.boxup.io/assets/image/right.png"
            ></Image>
          </Form.Text>
        </Col>
      </Row>
      {/* </Form> */}
    </>
  );
};
export default ThemeBuilders;
