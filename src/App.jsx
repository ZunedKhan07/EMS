import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import AdminDashboard from './components/auth/dashboard/AdminDashboard'
import EmployeeDashboard from './components/auth/dashboard/EmployeeDashboard'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          if (email === "admin@example.com" && password === "admin") {
        <Route path='/AdminDashboard' element={<AdminDashboard />}/>
      } else {
        <Route path='/EmployeeDashboard' element={<EmployeeDashboard />}/>
      }
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
