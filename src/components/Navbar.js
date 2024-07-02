import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <ul className="flex justify-around">
          <li><Link to="/" className="text-white">Home</Link></li>
          <li><Link to="/services" className="text-white">Services</Link></li>
          <li><Link to="/reservation" className="text-white">Reservation</Link></li>
          <li><Link to="/login" className="text-white">Login</Link></li>
          <li><Link to="/signup" className="text-white">Signup</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
