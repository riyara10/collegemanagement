import React from 'react';
import { Link } from 'react-router-dom';

function Pnf() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white-100 p-4">
      <img
        src="https://img.freepik.com/premium-vector/bold-teal-404-numbers-vector_656853-3519.jpg?semt=ais_user_personalization&w=740&q=80"
        alt="Page Not Found"
        className="w-80 h-80 mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-6 text-gray-700 text-center">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Go Back Home
        </button>
      </Link>
    </div>
  );
}

export default Pnf;