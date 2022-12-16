import React from "react";
import Container from "react-bootstrap/Container";
import ContactItem from "./ContactItem";
import ContactHeading from "./ContactHeading";
import ContactFormInput from "./ContactFormInput";

function ContactUsForm() {
  return (
    <React.Fragment>
      <div className="py-5 py-lg-12">
        <Container fluid="sm">
          <ContactHeading />
          <ContactItem />
          <ContactFormInput />
        </Container>
      </div>
    </React.Fragment>
  );
}

export default ContactUsForm;
