 import React, { useEffect, useInsertionEffect } from 'react'
 import Login from './components/auth/Login'
 import EmployeeDashboard from './components/auth/dashboard/EmployeeDashboard'
import AdminDashboard from './components/auth/dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'

 const App = () => {

  useEffect( () => {
    //  setLocalStorage()
    getLocalStorage()
  }
  )

   return (
     <div>
        <Login />
       <EmployeeDashboard /> 
       {/* <AdminDashboard /> */}
     </div>
   )
 }

export default App
