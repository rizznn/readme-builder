// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description for your project"
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['HTML', 'CSS', 'JavaScript', 'ES6', 'jQuery', 'Bootstrap', 'Moment', 'Node', 'OOP', 'Express']
    },
    {
        type: "input",
        name: "install",
        message: "Enter installation instructions"
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
        type: "list",
        name: "license",
        message: "What license does your project have?",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "GPL3.0", "BSD2" ,"BSD3", "None"]
    },
    {
        type: "input",
        name: "username",
        message: "What's your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What's your email?"
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName,data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        writeToFile(`./dist/README_${answers.title}.md`, generateMarkdown(answers));
    });
}

// Function call to initialize app
init();
