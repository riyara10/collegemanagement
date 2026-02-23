# College HRMS Dashboard

A simple College HRMS Dashboard built with React and Tailwind CSS. The app allows viewing employee statistics, displaying employee data in a table with pagination, and includes a responsive sidebar, header, and preloader.

## Setup Steps

1. Create the Project
npm create vite@latest employeesystem -- --template react
cd employeesystem
code .
npm run dev
2. Remove unnecessary code from the project.
3. Install Dependencies

Tailwind CSS (for styling)

React Icons (for icons)

React Router DOM (for page navigation)

Google Fonts (included in index.html)

Flowbite React (for tables and pagination)

4. Inside src, create the following folders:
.components

Header.jsx – A top header that is displayed across pages.

Sidebar.jsx – A responsive sidebar with navigation links to Dashboard and Employees pages.

Loader.jsx - A preloader component displayed while page is loading.

.pages

Dashboard.jsx – Displays employee statistics in three cards: Total Employees, Employees Present, Employees on Leave. Uses employeeData.js and array methods (length, filter) to calculate counts.

Employees.jsx – Displays employee data in a table with pagination. Uses employeeData.js and .map() method to render table rows dynamically.

.data

employeeData.js – Contains hardcoded JSON data for employees.

5. Routing

In App.jsx define routes for pages using React Router DOM. In main.jsx, wrap the App component with BrowserRouter for enabling routing throughout the app.
