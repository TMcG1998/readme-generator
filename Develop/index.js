// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give your project a description:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide some usage information:'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license do you have for this application?',
        choice: ['Drivers', 'Boating', 'Home improvement']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data), () => {

    })
    console.log(data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile('NewReadMe.txt', answers);
    })
    .catch((error) => {
        if(error.isTtyError) {
            console.log("Prompt can't be rendered in current environment");
        } else {
            console.log("Something else went wrong.");
        }
    })
}

// Function call to initialize app
init();
