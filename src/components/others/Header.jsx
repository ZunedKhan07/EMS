import React from 'react';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const userName = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("loggedin");
    //  window.location.reload();  (React Router ko use karte waqt, window.location.reload() ka use avoid karna chahiye)
     navigate("/login");
  }

  // Check if userName is null or undefined
  if (!userName) {
    return (
      <div className="flex items-end justify-between">
        <h1 className="text-2xl font-medium">HELLO! <br />
        <span className="text-3xl font-semibold">Guest 👋</span></h1>
        <button
      onClick={logoutHandler}
      type='button'
      className="bg-red-600 text-white text-lg font-medium px-5 py-2 rounded-xl">Logout</button>      </div>
    );
  }

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">HELLO! <br />
        <span className="text-3xl font-semibold">{userName.name} 👋</span></h1>
      <button
      onClick={logoutHandler}
      type='button'
      className="bg-red-600 text-white text-lg font-medium px-5 py-2 rounded-xl">Logout</button>
    </div>
  );
}

export default Header;
