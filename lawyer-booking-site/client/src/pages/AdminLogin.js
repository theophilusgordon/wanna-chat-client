import React from "react";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import { motion } from "framer-motion";

const AdminLogin = () => {
  return (
    <motion.div
      className="form-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: "100%" }}
      exit={{ X: window.innerWidth, transition: { duration: 1 } }}
    >
      <Header />
      <LoginForm navigatePage={"/admin-dashboard"} postRoute="" />
    </motion.div>
  );
};

export default AdminLogin;
