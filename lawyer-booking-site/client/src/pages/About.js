import React from "react";
import Header from "../components/Header";
import { Container } from "react-bootstrap";
import { FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="form-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: "100%" }}
      exit={{ X: window.innerWidth, transition: { duration: 1 } }}
    >
      <Header />
      <Container className="page">
        <div className="m-auto text-center">
          <FaRocket />
          <p>page under construction</p>
        </div>
      </Container>
    </motion.div>
  );
};

export default About;
