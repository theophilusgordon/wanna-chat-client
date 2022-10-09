import React from "react";
import Header from "../components/Header";
import { Container, Row, Col } from "react-bootstrap";
import { FaBuilding, FaBalanceScale, FaFileContract } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import {motion} from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: "100%" }}
      exit={{ X: window.innerWidth, transition: { duration: 1 } }}
    >
      <Header />
      <div className="hero page">
        <Container className="hero-content text-light">
          <p>PROFESSIONAL LAWYERS TEAM</p>
          <h1>
            <Typewriter
              options={{
                strings: [
                  "Work with the leader in high-caliber and diverse legal talent",
                  "We Help When You Need Us",
                ],
                autoStart: true,
                loop: true,
                pauseFor: 5000,
                deleteSpeed: 20,
                delay: 50,
              }}
            />
          </h1>
          <p className="hero-text">
            Providing timely, creative, cost-effective legal solutions. You can
            get an answer to most of your law questions immediately
          </p>

          <Row className="services text-start text-light gap-5 mt-5">
            <Col className="service">
              <Row>
                <Col className="col-2">
                  <FaBuilding className="fs-1" />
                </Col>
                <Col>
                  <h3>We Have The Best Attorneys Team</h3>
                  <p>
                    With our legal principles being our first and foremost
                    value, we always try to diversify the range of cases.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col className="service">
              <Row>
                <Col className="col-2">
                  <FaBalanceScale className="fs-1" />
                </Col>
                <Col>
                  <h3>Tax & Business Law</h3>
                  <p>
                    On par with our passion for justice and excellence, the
                    third work ethic which we stand by is the fair pricing.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col className="service">
              <Row>
                <Col className="col-2">
                  <FaFileContract className="fs-1" />
                </Col>
                <Col>
                  <h3>We Have The Best Attorneys Team</h3>
                  <p>
                    With our legal principles being our first and foremost
                    value, we always try to diversify the range of cases.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="overlay"></div>
    </motion.div>
  );
};

export default Home;
