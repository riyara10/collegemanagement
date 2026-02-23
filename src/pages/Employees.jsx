import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Pagination } from "flowbite-react";
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import employeeData from '../data/employeeData';

function Employees() {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const onPageChange = (page) => setCurrentPage(page);

  const indexOfLast = currentPage * rowsPerPage;
  const indexOfFirst = indexOfLast - rowsPerPage;
  const currentEmployees = employeeData.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(employeeData.length / rowsPerPage);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <div className="bg-[#B88ABF] text-white py-2 px-4">
        <marquee behavior="scroll" direction="left" className="font-semibold text-sm sm:text-base md:text-lg">
          Welcome to the College HRMS Dashboard – Manage Employees, Attendance, and Payroll Efficiently
        </marquee>
      </div>

      <div className="flex flex-col md:flex-row">
        <Sidebar />

        <main className="flex-1 w-full p-4 sm:p-6 md:ml-64">
          <div className="overflow-x-auto">
            <Table className="text-black min-w-[600px]">
              <TableHead>
                <TableRow>
                  <TableHeadCell>Employee ID</TableHeadCell>
                  <TableHeadCell>Name</TableHeadCell>
                  <TableHeadCell>Department</TableHeadCell>
                  <TableHeadCell>Designation</TableHeadCell>
                  <TableHeadCell>Status</TableHeadCell>
                </TableRow>
              </TableHead>
              <TableBody className="divide-y">
                {currentEmployees.length > 0 ? (
                  currentEmployees.map((emp) => (
                    <TableRow key={emp.id}>
                      <TableCell>{emp.id}</TableCell>
                      <TableCell>{emp.name}</TableCell>
                      <TableCell>{emp.dept}</TableCell>
                      <TableCell>{emp.desg}</TableCell>
                      <TableCell>{emp.status}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center">
                      No records found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          <div className="flex justify-center mt-4 text-black">
            <Pagination
              layout="navigation"
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
              showIcons
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Employees;