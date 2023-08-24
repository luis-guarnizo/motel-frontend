import { useAuth } from './context/AuthContext';
import {Navigate, Outlet} from 'react-router-dom'

function ProtectetRoute() {
    const {user, isAuthenticated} = useAuth();
    console.log(user, isAuthenticated);

    if(!isAuthenticated) return <Navigate to='/login' replace/>

  return (
    <Outlet/>
  )
}

export default ProtectetRoute;