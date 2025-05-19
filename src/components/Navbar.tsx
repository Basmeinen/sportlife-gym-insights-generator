
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <span className="text-xl font-bold text-duxblue">SportLife Gym</span>
            <span className="text-sm text-duxgray">Data Analyse</span>
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-primary hover:text-duxblue transition-colors duration-200">Home</Link>
            <Link to="/dashboard" className="text-primary hover:text-duxblue transition-colors duration-200">Dashboard</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
