import React, { useState, useSyncExternalStore } from 'react'

const Login = (e) => {
 
  
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
  
   const submitHandler = (e) => {
    e.preventDefault()
    console.log("email is", email);
    console.log("password is", password);
    setEmail("")
    setPassword("")
   }    
  
  
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form
        onSubmit={ (e) => {
          submitHandler(e)
        } }
        className='flex flex-col items-center justify-center ' action="">
          <input 
          value={email}
          onChange={(e)=>{
          setEmail(e.target.value)
          }}
          required 
          className='outline-none border-2 border-emerald-600 placeholder:text-yellow-50 rounded-full py-3 px-5 bg-transparent text-slate-50 mt-3' placeholder='Enter Your Email' type="email" />
          <input

          value={password}
          onChange={(e)=>{
          setPassword(e.target.value)
          }}
          
          required
          className='outline-none border-2 border-emerald-600 placeholder:text-yellow-50 rounded-full py-3 px-5 bg-transparent text-slate-50 mt-3' placeholder='Enter Your Password' type="password" />
          <button className='outline-none border-none placeholder:text-yellow-50 bg-emerald-600 rounded-full py-3 px-5 text-slate-50 mt-5'>Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login
