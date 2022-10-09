import React from "react";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="contact">
        <Container>
          <Row className="d-flex align-content-center">
            <Col>
              <p>
                <FaPhoneAlt /> <nbsp />
                +233 553 936 239
              </p>
            </Col>
            <Col className="col-3">
              <FaEnvelope /> <nbsp />
              pearsonspecterlit@gmail.com
            </Col>
            <Col className="col-3"></Col>
            <Col className="col-3">
              <Row>
                <Col></Col>
                <Col>
                  <FaFacebook className="fs-4" />
                </Col>
                <Col>
                  <FaLinkedin className="fs-4" />
                </Col>
                <Col>
                  <FaTwitter className="fs-4" />
                </Col>
                <Col>
                  <FaInstagram className="fs-4" />
                </Col>
                <Col></Col>
              </Row>
            </Col>
            <Col className="col-1">
              <Link to="/login-admin">
                <button className="btn btn-light btn-sm">ADMIN</button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
        <Container className="container-fluid">
          <Link href="#" className="navbar-brand">
            Logo
          </Link>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
            aria-controls="nav"
            aria-expanded="false"
            aria-label="Toggle Navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="nav">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link" to="/">
                HOME
              </Link>
              <Link className="nav-link" to="/about">
                ABOUT US
              </Link>
              <Link className="nav-link" to="/register-lawyer">
                REGISTER AS LAWYER
              </Link>
              <Link className="nav-link" to="/login-lawyer">
                SIGN IN AS LAWYER
              </Link>
              <Link className="nav-link" to="/register-client">
                REGISTER AS CLIENT
              </Link>
              <Link className="nav-link" to="/login-client">
                SIGN IN AS CLIENT
              </Link>
            </div>
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
