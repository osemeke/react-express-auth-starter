import { useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router-dom"
import jwt_decode from "jwt-decode"
import axios from "axios";

const PrivateLayout = () => {

  // return <Outlet/>
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isChecking, setIsChecking] = useState(true)
  const token = JSON.parse(window.localStorage.getItem("token")) || ''
  // const decodedToken = jwt_decode(token)
  // const uuid = decodedToken.uuid

  const [email, setEmail] = useState('admin@oc.com');
  const [password, setPassword] = useState('admin12');

  const isAuth = async () => {

    console.log('token -- ',token);

    axios.get('http://localhost:3001/protected', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((res) => {
      console.log(res)
      if (res.status === 200) setIsLoggedIn(true)
      setIsChecking(false);
      return;
    })
    .catch(error => {
       console.log(error.data)
       setIsChecking(false);
    })
  }

  useEffect(() => {
    isAuth()
  }, [isLoggedIn])

  if (isChecking) return <p>Checking....</p>

  return isLoggedIn ? <Outlet /> : <Navigate to={'/sign-in'} />
}

export default PrivateLayout;