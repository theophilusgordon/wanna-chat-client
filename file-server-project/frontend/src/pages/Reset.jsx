import {useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {FaUser} from 'react-icons/fa';
import Illustration from '../images/filing-system.svg';
import { Link } from 'react-router-dom';
// import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { changePassword, reset} from '../features/auth/authSlice'

// Generate random letters and digits
const generateOTP = () => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for(let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * 
 characters.length));
   }
   return result;
}

function Reset() {
// const { register, handleSubmit } = useForm();
// const [userData, setUserData] = useState("");
const [userData, setUserData] = useState({
    email: "",
    otp: "",
    password: "",
    confirmPassword: "",
  });
  
  const { email, otp, password, confirmPassword } = userData;

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
      } else if(userData.otp !== generateOTP){
        toast.error('OTP is incorrect')
      } else {
        setUserData(JSON.stringify(userData))
        dispatch(changePassword(userData))
      }
    }

  return (
    <div className='main'>
      <div className="illustration">
       <img src={Illustration} alt="Filing system illustration" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-header">
          <h3><FaUser />Reset Password</h3>
          <p>Please enter your your information to Reset Your Password</p>
        </div>

    <div className="form-body">
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
        type="text"
        className="form-control"
        id="otp"
        name="otp"
        value={otp}
        placeholder="Enter the OTP from your mail"
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
            <button type="submit">Reset Password</button>
            <button><Link to="/login">Log In</Link></button>
          </div>
        </div>
        <div class="form-footer">
          <p>Didn't receive the OTP in your mail? <Link to='/reset' >Send OTP again</Link></p>
        </div>
      </form>
  </div>
  )
}

export default Reset