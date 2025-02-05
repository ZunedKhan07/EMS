import React, { useState, useSyncExternalStore } from 'react'

const Login = (e) => {
 
  const submitHandler = (e) => {
    
   const [emai, setEmail] = useState('')
   const [passwoed, setPassword] = useState('')
    e.preventDefault()
    console.log("hello, my name is juned khan i am a engeeniar for softwear i need some help for understanding. ");
    
  } 
  
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form
        onSubmit={ (e) => {
          submitHandler(e)
        } }
        className='flex flex-col items-center justify-center ' action="">
          <input className='outline-none border-2 border-emerald-600 rounded-full py-3 px-5 bg-transparent text-slate-50 mt-3' required placeholder='Enter Your Email' type="email" />
          <input className='outline-none border-2 border-emerald-600 rounded-full py-3 px-5 bg-transparent text-slate-50 mt-3' required placeholder='Enter Your Password' type="password" />
          <button className='outline-none border-none bg-emerald-600 rounded-full py-3 px-5 text-slate-50 mt-5'>Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login
