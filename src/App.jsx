 import React from 'react'
 import Login from './components/auth/Login'
 import EmployeeDashboard from './components/auth/dashboard/EmployeeDashboard'
import AdminDashboard from './components/auth/dashboard/AdminDashboard'

 const App = () => {
   return (
     <div>
       {/* <Login/>  */}
       {/* <EmployeeDashboard /> */}
       <AdminDashboard />
     </div>
   )
 }

 export default App
