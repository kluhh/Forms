import React, { useState } from "react";
import PropTypes from "prop-types";
import debug from "sabio-debug";
import ListGroup from "react-bootstrap/ListGroup";
import { Container, Button } from "react-bootstrap";

const _logger = debug.extend("USCISCenterLocationItemMapped");

function USCISCenterLocationItemMapped({
  anItem,

  setMarkersFromEditButtonSync,
}) {
  _logger(anItem);

  const [btnState, setBtnState] = useState(false);

  const onSelectClick = (e) => {
    e.preventDefault();

    setBtnState(!btnState);

    setMarkersFromEditButtonSync((prevState) => {
      const markersSync = { ...prevState };

      markersSync.zoomLevel = !btnState ? 10 : 4;
      markersSync.markerId = !btnState ? anItem.id : 1;

      return markersSync;
    });
  };

  const toggleClass = btnState ? " bg-light" : null;

  return (
    <Container>
      <ListGroup as="ul">
        <ListGroup.Item as="li" className={toggleClass}>
          <h5>{anItem.name}</h5>
          {anItem.streetNumber}
          <br />
          {anItem.city} {anItem.state} {anItem.zipCode}
          <br />
          <span className="text-primary">
            <strong>{anItem.phoneNumber}</strong>
          </span>
          <div></div>
          <Button onClick={onSelectClick} variant="primary" size="sm">
            Select
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
}

USCISCenterLocationItemMapped.propTypes = {
  anItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    streetNumber: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zipCode: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
  }),
  setMarkersFromEditButtonSync: PropTypes.func.isRequired,
};

export default USCISCenterLocationItemMapped;
