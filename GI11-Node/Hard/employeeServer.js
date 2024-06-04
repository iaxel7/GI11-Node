// Import the express module, which simplifies building web servers in Node.js
const express = require('express');

// Load the employee data from a JSON file
const employeesData = require('./employees.json');

// Create an Express application
const app = express();

// Define the port number where the server will listen for incoming requests
const PORT = 3000;

// Endpoint to get information for all employees
app.get('/employees', (req, res) => {
    // Send the employee data as a JSON response
    res.json(employeesData);
});

// Endpoint to get information for a specific employee
app.get('/employees/:employeeID', (req, res) => {
    // Extract the employeeID parameter from the request URL
    const employeeID = parseInt(req.params.employeeID);

    // Find the employee with the specified employeeID in the employee data
    const employee = employeesData.find(employee => employee.employeeID === employeeID);

    // If the employee is found, send their information as a JSON response
    if (employee) {
        res.json(employee);
    } else {
        // If the employee is not found, send a 404 error response with a message
        res.status(404).json({ error: "Employee not found" });
    }
});

// Start the server, listening for incoming requests on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
