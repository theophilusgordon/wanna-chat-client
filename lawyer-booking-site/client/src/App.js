import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import LawyerRegistration from "./pages/LawyerRegistration";
import ClientRegistration from "./pages/ClientRegistration";
import ClientLogin from "./pages/ClientLogin";
import LawyerLogin from "./pages/LawyerLogin";
import AdminLogin from "./pages/AdminLogin";
import About from "./pages/About";
import { AnimatePresence } from "framer-motion";

function App() {

  return (
    <div className="App">
      <Router>
        <AnimatePresence >
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/register-lawyer" element={<LawyerRegistration />} />
            <Route path="/register-client" element={<ClientRegistration />} />
            <Route path="/login-client" element={<ClientLogin />} />
            <Route path="/login-lawyer" element={<LawyerLogin />} />
            <Route path="/login-admin" element={<AdminLogin />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </AnimatePresence>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
