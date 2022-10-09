import {useState} from 'react'
import { Form, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import {toast} from 'react-toastify'


const RegistrationForm = ({navigatePage, postRoute}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    otherNames: "",
    dob: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
  });

  const { firstName, lastName, otherNames, dob, phoneNumber, email, password, confirmPassword } = formData;
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  

    const postData = async () => {
      try {
        const response = await axios.post(`${postRoute}`, formData);
        if (response) {
          navigate(`/${navigatePage}`);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };

    postData();
  };

  return (
    <div>
      <Container className="page">
        <Form noValidate className="mt-5">
          <Row className="row-cols-2">
            <Col>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter first name here"
                  onChange={(e) => handleChange(e)}
                  value={firstName}
                />
                <label for="firstName">First Name</label>
              </div>
            </Col>
            <Col>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter last name here"
                  onChange={(e) => handleChange(e)}
                  value={lastName}
                />
                <label for="lastName">Last Name</label>
              </div>
            </Col>
            <Col>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  name="otherNames"
                  id="otherNames"
                  placeholder="Enter last name here"
                  onChange={(e) => handleChange(e)}
                  value={otherNames}
                />
                <label for="otherNames">Other Names (if any)</label>
              </div>
            </Col>
            <Col>
              <div class="form-floating mb-3">
                <input
                  type="date"
                  class="form-control"
                  name="dob"
                  id="dob"
                  placeholder="Enter date of birth here"
                  onChange={(e) => handleChange(e)}
                  value={dob}
                />
                <label for="dob">Date of Birth</label>
              </div>
            </Col>
            <Col>
              <div class="form-floating mb-3">
                <input
                  type="tel"
                  class="form-control"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Enter phone number here"
                  onChange={(e) => handleChange(e)}
                  value={phoneNumber}
                />
                <label for="phoneNumber">Phone Number</label>
              </div>
            </Col>

            <Col>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="email"
                  placeholder="Enter email here"
                  onChange={(e) => handleChange(e)}
                  value={email}
                />
                <label for="email">Email</label>
              </div>
            </Col>
            <Col>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  name="password"
                  id="password"
                  placeholder="Enter password here"
                  onChange={(e) => handleChange(e)}
                  value={password}
                />
                <label for="password">Create Password</label>
              </div>
            </Col>
            <Col>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm password here"
                  onChange={(e) => handleChange(e)}
                  value={confirmPassword}
                />
                <label for="confirmPassword">Confirm Password</label>
              </div>
            </Col>
          </Row>
          <button className="btn btn-primary" onClick={(e) => handleSubmit(e)}>
            REGISTER
          </button>
        </Form>
      </Container>
    </div>
  );
}

export default RegistrationForm