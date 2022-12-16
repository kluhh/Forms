import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function USCISCentersHeading() {
  return (
    <Row>
      <Col lg={12}>
        <div className="text-center">
          <h2>
            Find a <span className="text-primary">USCIS</span> Center
          </h2>
          <p className="text-muted mt-2">
            Check the list below for centers near your location.
          </p>
        </div>
      </Col>
    </Row>
  );
}

export default USCISCentersHeading;
