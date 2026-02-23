import React from "react";
import { FaUser } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";

function Header() {
  return (
    <header className="bg-blue-900 border-b border-blue-800">
      <div className="px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <img src="https://cdn-icons-png.flaticon.com/512/4981/4981207.png" alt="Employee" className="w-8 h-8 sm:w-10 sm:h-10"/>
          <h1 className="text-sm sm:text-xl font-semibold text-white">Employee Management System</h1>
        </div>
        <div className="flex items-center gap-3 sm:gap-5 text-white text-2xl sm:text-3xl">
          <IoNotifications />
          <FaUser />
        </div>
      </div>
    </header>
  );
}

export default Header;