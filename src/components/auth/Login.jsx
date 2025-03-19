import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import AdminDashboard from '../AdminDashboard'
// import EmployeeDashboard from '../EmployeeDashboard'

const Login = () => {
  const navigate = useNavigate();
  
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const submitHandler = (e) => {
    e.preventDefault();
    // handleLogin(email, password);
    console.log("email is", email);
     console.log("password is", password);
     const loggedUser = JSON.parse(localStorage.getItem("user"));
     if (email === "admin@example.com" && password === "admin") {
      localStorage.setItem("loggedin", true);
      navigate("/AdminDashboard");
     } else if (email === loggedUser.email && password === loggedUser.password) {
      localStorage.setItem("loggedin", true);
      navigate("/EmployeeDashboard");
     } else {
      alert("Invalid Credentials");
     }
    setEmail("")
    setPassword("")
   }    
  
  
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <p className='text-5xl flex justify-center text-white p-2 w-80 mb-4 rounded font-extrabold' >Login</p>
        <p className='text-slate-50 text-center'>Please enter your email and password</p>
        <form
        onSubmit={ (e) => {
          submitHandler(e)
        } }
        className='flex flex-col w-auto items-center justify-center ' action="">
          <input 
          value={email}
          onChange={(e)=>{
          setEmail(e.target.value)
          }}
          required 
          className='outline-none border-2 w-full border-emerald-600 placeholder:text-yellow-50 rounded-full py-3 px-5 bg-transparent text-slate-50 mt-3'
          placeholder='Enter Your Email'
          type="email" />
          <input

          value={password}
          onChange={(e)=>{
          setPassword(e.target.value)
          }}
          
          required
          className='outline-none border-2 w-full border-emerald-600 placeholder:text-yellow-50 rounded-full py-3 px-5 bg-transparent text-slate-50 mt-3'
          placeholder='Enter Your Password'
          type="password" />
          <button className='outline-none border-none w-full placeholder:text-yellow-50 bg-emerald-600 rounded-full py-3 px-5 text-slate-50 mt-5'>Log In</button>
           <p className='mt-5 text-slate-50'>
             Don't have an account?
            <Link to='/' className='text-emerald-600'> 'Register Now'</Link>
           </p>
           <p className="mt-6 bg-slate-100 text-xl text-stone-950 p-1 w-full font-bold" >
            <div className="text-2xl">Admin Credentials:</div>
            <div>--------------------</div>
            <div>email : admin@example.com;</div>
            <div>password : admin;</div>
            </p>
        </form>
      </div>
    </div>
  )
}

export default Login
