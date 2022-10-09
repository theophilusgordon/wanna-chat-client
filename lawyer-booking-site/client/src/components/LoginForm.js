import {useState} from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const LoginForm = ({navigatePage, postRoute}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const {
    email,
    password,
  } = formData;
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
    <div className="page">
      <Container>
        <Form noValidate className="mt-5 login-form">
          <Row className="row-cols-1">
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
                <label for="password">Enter Password</label>
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

export default LoginForm