import React from "react";
import debug from "sabio-debug";
import * as Icon from "react-bootstrap-icons";
import ContactMappedItem from "./ContactMappedItem";
import { Row, Col } from "react-bootstrap";

const _logger = debug.extend("ContactItem");

function ContactItem() {
  _logger("Logger is working");
  const companyInfoForContact = [
    {
      id: 1,
      icon: <Icon.GeoAltFill size={33} />,
      title: "Address",
      description: "1234 Migrately Ave, Los Angeles CA 90012",
    },

    {
      id: 2,
      icon: <Icon.EnvelopeFill size={33} />,
      title: "Email",
      description: "support@migrately.com",
    },
    {
      id: 3,
      icon: <Icon.PhoneFill size={33} />,
      title: "Phone",
      description: "+1(424)535-3523",
    },
    {
      id: 4,
      icon: <Icon.PersonSquare size={33} />,
      title: "Contact",
      description: "Jane Doe",
    },
  ];

  const mapAnItem = (item, index) => {
    _logger(item, index);
    return (
      <Col lg={3} md={6} sm={12}>
        <ContactMappedItem key={index} anItem={item}></ContactMappedItem>
      </Col>
    );
  };

  return (
    <React.Fragment>
      <Row>{companyInfoForContact.map(mapAnItem)}</Row>
    </React.Fragment>
  );
}

export default ContactItem;
