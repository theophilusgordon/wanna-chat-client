import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import AdminDashboard from '../components/AdminDashboard'
import UserDashboard from '../components/UserDashboard'

function Dashboard() {
  const navigate = useNavigate()
  const {user} = useSelector((state) => state.auth)
  
  useEffect(() => {
    if(!user) {
      navigate('/')
    }
  }, [user, navigate])
  return (
    <>
      (user.email === theophilus.gordon@amalitech.org) ? 
      (<AdminDashboard />) : (<UserDashboard />)
    </>
  )
}

export default Dashboard