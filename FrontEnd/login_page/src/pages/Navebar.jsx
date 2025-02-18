import React from "react";
import { Link } from "react-router-dom";

function Navebar() {
  return (
    <nav className="p-4 shadow-lg">
      <ul className="flex justify-between px-10">
        <li className="text-lg font-semibold">
          <Link
            to="/"
            className="px-6 py-2 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105 duration-300"
          >
            Home
          </Link>
        </li>
        <li className="text-lg font-semibold">
          <Link
            to="/login"
            className="px-6 py-2 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105 duration-300"
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navebar;