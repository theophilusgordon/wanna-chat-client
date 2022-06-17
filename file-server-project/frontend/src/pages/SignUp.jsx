import {useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {FaUser} from 'react-icons/fa';
import Illustration from '../images/filing-system.svg';
import { Link } from 'react-router-dom';
// import { useForm } from "react-hook-form";
import { signup, reset} from '../features/auth/authSlice'


function SignUp() {
  // const { register, handleSubmit, handleChange } = useForm();
  // const [userData, setUserData] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = userData;
  
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
    // e.preventDefault()

    if(userData.password !== userData.confirmPassword){
      toast.error('Passwords do not match')
    } else {
      setUserData(JSON.stringify(userData))
      dispatch(signup(userData))
    }
  }

  return (
    <div className='main'>
  <div className="illustration">
       <img src={Illustration} alt="Filing system illustration" />
      </div>
    <form onSubmit={handleSubmit}>
        <div className="form-header">
          <h3><FaUser />Create Account</h3>
          <p>Please enter your your information to Sign You Up</p>
        </div>
        <div className="form-body">
      
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={handleChange}
          />

          <input
            type="email"
            className="form-control"
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

          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm your password"
            onChange={handleChange}
          />

          <div class="form-btns">
            <button type="submit">Create Account</button>
            <button><Link to="/">Log In</Link></button>
          </div>
        </div>
        <div class="form-footer">
          <p>Already have an account? <Link to='/' >Log In</Link></p>
        </div>
      </form>
  </div>
  )
}

export default SignUp