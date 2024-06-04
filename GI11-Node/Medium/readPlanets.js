// Import the 'fs' module which provides file system-related functionality
const fs = require('fs');

// Define a function to read planets from a JSON file and print them to the console
function readPlanetsFromJSON(filePath) {
    // Read the contents of the file asynchronously
    // 'utf8' specifies the file encoding to be used
    fs.readFile(filePath, 'utf8', (err, data) => {
        // Check if there's an error while reading the file
        if (err) {
            // Print the error message to the console
            console.error('Error reading file:', err);
            return; // Exit the function early if there's an error
        }

        // Try to parse the file contents as JSON
        try {
            // Parse the JSON data into a JavaScript array
            const planets = JSON.parse(data);
            // Print a message indicating the start of the list of planets
            console.log('Planets in the solar system:');
            // Iterate over each planet in the array
            planets.forEach(planet => console.log(planet)); // Print each planet to the console
        } catch (error) {
            // If there's an error while parsing JSON, print an error message
            console.error('Error parsing JSON:', error);
        }
    });
}

// Define the file path to the JSON file containing the list of planets
const filePath = 'planets.json';

// Call the function with the file path to read planets from the JSON file and print them
readPlanetsFromJSON(filePath);
