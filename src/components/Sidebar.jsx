import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { RiTodoLine } from "react-icons/ri";
import { HiOutlineUsers } from "react-icons/hi2";
import { LiaMoneyCheckSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden fixed top-10 left-4 z-50 p-2 bg-[#DDAED3] rounded-md text-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      <aside
        className={`
          fixed top-[119px] left-0 h-[calc(100vh-100px)] w-64 bg-[#DDAED3] text-black
          transform ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          transition-transform duration-300 ease-in-out
          md:translate-x-0
          z-40
        `}
      >
        <nav className="px-4 py-6 space-y-4">
          <Link to="/" className="block">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-bold text-lg hover:bg-[#c99fbe] transition">
              <IoHomeOutline /> Dashboard
            </button>
          </Link>

          <Link to="/employees" className="block">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-bold text-lg hover:bg-[#c99fbe] transition">
              <HiOutlineUsers /> Employees
            </button>
          </Link>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-bold text-lg hover:bg-[#c99fbe] transition">
            <RiTodoLine /> Attendance
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-bold text-lg hover:bg-[#c99fbe] transition">
            <LiaMoneyCheckSolid /> Payroll
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-bold text-lg hover:bg-[#c99fbe] transition">
            <IoSettingsOutline /> Settings
          </button>
        </nav>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Sidebar;