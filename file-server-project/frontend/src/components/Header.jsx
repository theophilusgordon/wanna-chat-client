import { FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/dashboard')
  }

  return (
    <header className='header'>
      <div className="logo">
        <Link className='temp' to='/'>FileServer</Link>
      </div>
      <ul>
      { user ? (
        <>
          <div className="info">
            <h1>Welcome {user && user.name}</h1>
            <h2>Files Dashboard</h2>
          </div>
          <button className="btn" onClick={onLogout}>
            <FaSignOutAlt/> LOG OUT
          </button>
        </>
        ) : (
          <> 
          <li>
          <Link className='link' to="/">
            <FaSignInAlt/> LOG IN
          </Link>
        </li>
        <li>
          <Link className='link' to="/signup">
            <FaUser/> SIGN UP
          </Link>
        </li>
        </>
        )}
       
      </ul>
    </header>
  )
}

export default Header