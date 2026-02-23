import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Card } from "flowbite-react";
import employeeData from "../data/employeeData";

function Dashboard() {
  const activeCount = employeeData.filter(emp => emp.status === "Active").length;
  const onLeaveCount = employeeData.filter(emp => emp.status === "On Leave").length;

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="bg-[#B88ABF] text-white py-2 px-4 mb-6">
        <marquee behavior="scroll" direction="left" className="font-semibold text-sm sm:text-base md:text-lg">
          Welcome to the College HRMS Dashboard – Manage Employees, Attendance, and Payroll Efficiently
        </marquee>
      </div>

      <div className="flex">
        <Sidebar />

        <main className="flex-1 md:ml-64 p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            
            <Card className="max-w-sm w-full mx-auto">
              <h5 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Total Employees: {employeeData.length}
              </h5>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZs8Jb9-UgGgBH1fqAY7OTiVuHIq55FIHv2A&s"
                alt="Total Employees"
                className="w-full h-40 sm:h-48 object-cover rounded"
              />
            </Card>

            <Card className="max-w-sm w-full mx-auto">
              <h5 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Present Today: {activeCount}
              </h5>
              <img
                src="https://cdn-icons-png.flaticon.com/512/8999/8999099.png"
                alt="Present Today"
                className="w-full h-40 sm:h-48 object-contain rounded"
              />
            </Card>

            <Card className="max-w-sm w-full mx-auto">
              <h5 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                On Leave: {onLeaveCount}
              </h5>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRougAlgHoz6JaGlDiSenMn9EPa6V7qWCj7LA&s"
                alt="On Leave"
                className="w-full h-40 sm:h-48 object-cover rounded"
              />
            </Card>

          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;