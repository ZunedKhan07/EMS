 import React, { useContext, useEffect, useState } from 'react'
 import Login from './components/auth/Login'
 import EmployeeDashboard from './components/auth/dashboard/EmployeeDashboard'
import AdminDashboard from './components/auth/dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

 const App = () => {

  // useEffect( () => {
  //   //  setLocalStorage()
  //   getLocalStorage()
  // }

     const [user, setUser] = useState(null)

     const handleLogin = (email, password) => {
   if (email == 'user@me.com' && password =='123'){
       setUser('employee')
    // console.log(User)
     } else if(email == 'admin@me.com' && password == '123'){
      setUser('admin')
      // console.log(User)
     }
     else {
      alert("invelid credentials")
     }
    }

    const data = useContext(AuthContext);
    console.log(data);

   return (
     <>
       {!user ? <Login handleLogin={handleLogin} /> : ''}
       {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
       {/* <EmployeeDashboard />  */}
       {/* <AdminDashboard />  */}
     </>
   )
 }

export default App
