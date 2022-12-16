import React from "react";
import Container from "react-bootstrap/Container";
import USCISCentersHeading from "./USCISCentersHeading";
import USCISCenterLocationItems from "./USCISLocationItems";

function USCISCentersMain() {
  return (
    <React.Fragment>
      <div className="py-5 py-lg-12">
        <Container fluid="sm">
          <USCISCentersHeading />
          <USCISCenterLocationItems />
        </Container>
      </div>
    </React.Fragment>
  );
}

export default USCISCentersMain;
