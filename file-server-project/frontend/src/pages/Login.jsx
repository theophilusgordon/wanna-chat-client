import {useState, useEffect } from 'react';
import {FaSignInAlt} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
// import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { login, reset} from '../features/auth/authSlice'
import Illustration from '../images/filing-system.svg';

function Login() {
  //  const { register, handleSubmit } = useForm();
  // const [userData, setUserData] = useState("");
   const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userData;
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isError, isSuccess, message} = useSelector((state) => state.auth)

  useEffect(() => {
    if(isError){
      toast.error(message)
    }

    if(isSuccess || user){
      navigate('/dashboard')
    }

    dispatch(reset())

  }, [user, isError, isSuccess, message, navigate, dispatch])

    const handleChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      }));
    };

  const handleSubmit = (e) => {
    e.preventDefault()
    const userData = {
      email,
      password,
    };
    dispatch(login(userData))
  }

  return (
    <div className='main'>
  <div className="illustration">
       <img src={Illustration} alt="Filing system illustration" />
      </div>
           <form onSubmit={handleSubmit}>
        <div className="form-header">
          <h3><FaSignInAlt /> Log In</h3>
          <p>Please enter your your information to Log You In</p>
        </div>
        <div className="form-body">

      <input
        type="email"
        id="email"
        name="email"
        value={email}
        placeholder="Enter your email"
        onChange={handleChange}
      />

      <input
        type="password"
        className="form-control"
        id="password"
        name="password"
        value={password}
        placeholder="Enter your password"
        onChange={handleChange}
      />

          <div class="form-btns">
            <button type="submit">Log In</button>
            <button><Link to="/signup">Sign Up</Link></button>
          </div>
        </div>
        <div class="form-footer">
          <p>Forgot your password? <Link to='/reset' >Reset now</Link></p>
        </div>
      </form>
  </div>
  )
}

export default Login