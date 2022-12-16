import React, { useState } from "react";
import debug from "sabio-debug";
import { Col, Container } from "react-bootstrap";
import USCISCenterLocationItemMapped from "./USCISLocationItemMapped";
import USCISCentersGoogleMap from "./USCISCentersGoogleMap";
import { listOfUSCISCenterLocations } from "./uscisCentersData";

const _logger = debug.extend("USCISCenterLocationItems");

function USCISCenterLocationItems() {
  const [markersFromEditButtonSync, setMarkersFromEditButtonSync] = useState({
    zoomLevel: 4,
    markerId: 1,
  });

  _logger("Logger is enabled");

  const mapALocationItem = (locationItem, index) => {
    _logger(locationItem, index);

    return (
      <USCISCenterLocationItemMapped
        key={index}
        anItem={locationItem}
        setMarkersFromEditButtonSync={setMarkersFromEditButtonSync}
      />
    );
  };

  return (
    <React.Fragment>
      <Container>
        <Col sm={5} className="position-absolute end-0">
          <USCISCentersGoogleMap
            markersFromEditButtonSync={markersFromEditButtonSync}
          />
        </Col>
        <Col sm={5}>{listOfUSCISCenterLocations.map(mapALocationItem)}</Col>
      </Container>
    </React.Fragment>
  );
}

export default USCISCenterLocationItems;
