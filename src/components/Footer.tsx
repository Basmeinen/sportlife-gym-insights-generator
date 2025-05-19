
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-duxblue-dark text-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">SportLife Gym</h3>
            <p className="text-gray-300 text-sm">
              Data analyse opdracht voor het inzichtelijk maken van KPI's
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Navigatie</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300 text-sm">
              info@sportlifegym.nl<br />
              +31 (0)20 123 4567
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} SportLife Gym. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
