import React from "react";
import Header from "../components/Header";
import RegistrationForm from "../components/RegistrationForm";
import {motion} from 'framer-motion'

const LawyerRegistration = () => {
  return (
    <motion.div
      className="form-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: "100%" }}
      exit={{ X: window.innerWidth, transition: { duration: 1 } }}
    >
      <Header />
      <RegistrationForm navigatePage={"lawyer-dashboard"} postRoute="" />
    </motion.div>
  );
};

export default LawyerRegistration;
