import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="p-2">
        <nav>
          <h1 className="text-[50px]">MENU</h1>
          <ul>
            <li className="p-1">
              <Link to="/">
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-10 border border-blue-500 hover:border-transparent rounded">
                  Home
                </button>
              </Link>
            </li>
            <li className="p-1">
              <Link to="/about">
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-10 border border-blue-500 hover:border-transparent rounded">
                  About
                </button>
              </Link>
            </li>
            <li className="p-1">
              <Link to="/users">
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-10 border border-blue-500 hover:border-transparent rounded">
                  Users
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
