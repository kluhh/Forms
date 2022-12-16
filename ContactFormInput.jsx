import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import debug from "sabio-debug";
import { Field, Formik, ErrorMessage, Form } from "formik";
import { useState } from "react";
import Swal from "sweetalert2";
import { contactUsService } from "services/contactUsService";
import { contactUsYupSchema } from "schemas/yupValidation";

const _logger = debug.extend("ContactFormInput");

function ContactFormInput() {
  _logger(contactUsYupSchema);

  const [contactFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const onSendMessageClick = (value, { resetForm }) => {
    contactUsService
      .sendMessage(value)
      .then(onSendMessageClickSuccess)
      .catch(onSendMessageClickError);

    function onSendMessageClickSuccess() {
      Swal.fire({
        title: "Message sent!",
        text: "Please check your email.",
        icon: "success",
      });
      resetForm({ value: "" });
    }
    function onSendMessageClickError() {
      Swal.fire({
        title: "Failed!",
        text: "Your message was not sent.",
        icon: "error",
      });
    }
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={contactFormData}
      onSubmit={onSendMessageClick}
      validationSchema={contactUsYupSchema}
    >
      <Form>
        <Row>
          <Col>
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <Field
              size="sm"
              type="text"
              placeholder="First Name"
              className="form-control form-control-sm"
              id="firstName"
              name="firstName"
            />
            <ErrorMessage
              name="firstName"
              component="div"
              className="text-danger"
            ></ErrorMessage>
          </Col>
          <Col>
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <Field
              size="sm"
              type="text"
              placeholder="Last Name"
              className="form-control form-control-sm"
              id="lastName"
              name="lastName"
            />{" "}
            <ErrorMessage
              name="lastName"
              component="div"
              className="text-danger"
            ></ErrorMessage>
          </Col>
        </Row>

        <Row>
          <Col>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <Field
              size="sm"
              type="email"
              s
              placeholder="Email"
              className="form-control form-control-sm"
              id="email"
              name="email"
            />{" "}
            <ErrorMessage
              name="email"
              component="div"
              className="text-danger"
            ></ErrorMessage>
          </Col>
        </Row>

        <Row className="mt-2">
          <Col>
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <Field
              as="textarea"
              rows={4}
              className="form-control form-control-sm"
              id="message"
              name="message"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="text-danger"
            ></ErrorMessage>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col className="col-12 text-end">
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Col>{" "}
        </Row>
      </Form>
    </Formik>
  );
}

export default ContactFormInput;
