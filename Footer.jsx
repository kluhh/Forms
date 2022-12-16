import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./landing.css";
import * as Icon from "react-bootstrap-icons";
import TermsOfUseModal from "./TermsOfUseModal";

let date = new Date().getFullYear();

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onTermsOfUseClick = (e) => {
    e.preventDefault();

    setIsModalOpen((prevState) => {
      let newState = { ...prevState };

      newState = true;

      return newState;
    });
  };

  return (
    <footer className="bg-dark py-5">
      <Container>
        <Row>
          <Col lg={6}>
            <img src="" alt="" className="logo-dark" height="18" />
            <p className="text-muted mt-4">
              The only digital platform you need for your U.S. travel, visa, or
              immigration journey.
            </p>

            <ul className="social-list list-inline mt-3">
              <li className="list-inline-item text-center">
                <a
                  href="https://www.facebook.com/migrately.io"
                  className="social-list-item border-primary text-info"
                >
                  <Icon.Facebook size={25} />
                </a>
              </li>

              <li className="list-inline-item text-center">
                <a
                  href="https://twitter.com/migratelypage"
                  className="social-list-item border-info text-success"
                >
                  <Icon.Twitter size={25} />
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={2} md={4} className="mt-3 mt-lg-0">
            <h5 className="text-light">Migrately</h5>

            <ul className="list-unstyled ps-0 mb-0 mt-3">
              <li className="mt-2">
                <Link to="#" className="text-muted">
                  About Us
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/products" className="text-muted">
                  Products
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/blogs" className="text-muted">
                  Blog
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/podcast" className="text-muted">
                  Podcast
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg={2} md={4} className="mt-3 mt-lg-0">
            <h5 className="text-light">Support</h5>

            <ul className="list-unstyled ps-0 mb-0 mt-3">
              <li className="mt-2">
                <Link to="/contact" className="text-muted">
                  Contact Us
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/videochat" className="text-muted">
                  Video Chat
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/centers" className="text-muted">
                  USCIS Center Locations
                </Link>
              </li>

              <li className="mt-2">
                <Link to="/faqs" className="text-muted">
                  FAQs
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg={2} md={4} className="mt-3 mt-lg-0">
            <h5 className="text-light">Discover</h5>
            <ul className="list-unstyled ps-0 mb-0 mt-3">
              <li className="mt-2">
                <Link to="/starthere" className="text-muted">
                  Start Here
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/browseresources" className="text-muted">
                  Resources
                </Link>
              </li>
              <li className="mt-2">
                <Link to="/newsletter/signup" className="text-muted">
                  Newsletter
                </Link>
              </li>
              <li className="mt-2">
                <Link to="#" className="text-muted">
                  Privacy
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="mt-5">
              <div className="text-muted mt-4 text-center mb-0">
                Copyright © {date}. All rights reserved.
                <Button variant="link" size="sm" onClick={onTermsOfUseClick}>
                  Terms of Use
                </Button>
              </div>
              <TermsOfUseModal isOpen={isModalOpen} isClose={setIsModalOpen} />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
