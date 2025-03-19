import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    
    // Save the user data in localStorage
    localStorage.setItem("user", JSON.stringify(input));

    // Redirect to login page
    navigate("/login");

    // Reset input fields
    setInput({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <p className="text-5xl flex justify-center text-white p-2 w-80 mb-4 rounded font-extrabold" >Register</p>
        <p className="text-slate-50 text-center">Please enter your name, email and password</p>
        
        <form onSubmit={submitHandler} className="flex w-auto flex-col items-center justify-center">
          <input
            name="name"
            value={input.name}
            onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
            required
            className="outline-none border-2 w-full border-emerald-600 placeholder:text-yellow-50 rounded-full py-3 px-5 bg-transparent text-slate-50 mt-3"
            placeholder="Enter Your name"
            type="text"
          />
          <input
            name="email"
            value={input.email}
            onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
            required
            className="outline-none border-2 w-full border-emerald-600 placeholder:text-yellow-50 rounded-full py-3 px-5 bg-transparent text-slate-50 mt-3"
            placeholder="Enter Your Email"
            type="email"
          />
          <input
            name="password"
            value={input.password}
            onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
            required
            className="outline-none border-2 w-full border-emerald-600 placeholder:text-yellow-50 rounded-full py-3 px-5 bg-transparent text-slate-50 mt-3"
            placeholder="Enter Your password"
            type="password"
          />
          <button className="outline-none border-none w-full placeholder:text-yellow-50 bg-emerald-600 rounded-full py-3 px-5 text-slate-50 mt-5">
            Register
          </button>
          <Link to="/login" className="mt-5 text-slate-50">
            Already have an account? <span className="text-emerald-600">Login Now</span> </Link>
            <p className="mt-6 bg-gray-800 text-white text-xl text-stone-950 p-1 w-full font-bold" >
            <div className="text-2xl text-white">Admin Credentials:</div>
            <div className="text-white">--------------------</div>
            <div className="text-white">email : admin@example.com;</div>
            <div className="text-white">password : admin;</div>
            </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
