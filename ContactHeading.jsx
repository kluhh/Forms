import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import debug from "sabio-debug";

const _logger = debug.extend("ContactHeading");

function ContactHeading() {
  _logger("Logger is working");
  return (
    <Row>
      <Col lg={12}>
        <div className="text-center">
          <h2>
            Have a <span className="text-primary">Question?</span>
          </h2>
          <p className="text-muted mt-2">
            Please fill out the form below and we will get back to you shortly.
          </p>
        </div>
      </Col>
    </Row>
  );
}

export default ContactHeading;
