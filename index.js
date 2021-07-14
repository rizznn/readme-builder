// TODO: Include packages needed for this application
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description for your project"
    },
    {
        type: "editor",
        name: "install",
        message: "Enter installation instructions"
    },
    {
        type: "input",
        name: "image",
        message: "Enter your image url (https://github.com/your-repository/...)"
    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage information"
    },
    {
        type: "input",
        name: "contribute",
        message: "How can others contribute?"
    },
    {
        type: "input",
        name: "test",
        message: "How can this code be tested?",
        default: "npm test"
    },
    {
        type: "list",
        name: "license",
        message: "What license does your project have?",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "GPL3.0", "BSD2" ,"BSD3", "None"]
    },
    {
        type: "input",
        name: "github",
        message: "What's your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What's your email?"
    },
    {
        type: "input",
        name: "dependencies",
        message: "Any dependencies to install?",
        default: "npm i"    
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', fileName, data, err => {
    if (err) throw err;
  
    console.log('README.md complete! Check out README.md to see the output!');
  });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
