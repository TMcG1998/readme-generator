// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadME = require('./src/readme-template.js')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title? (Required)',
        validate: titleInput => {
            if(titleInput) {
                return true;
            } else {
                console.log('Please enter your project title');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give your project a description (Required)',
        validate: descInput => {
            if(descInput) {
                return true;
            } else {
                console.log('Please enter your project\'s description');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions (Required)',
        validate: installInput => {
            if(installInput) {
                return true;
            } else {
                console.log('Please enter installation instructions');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide some usage information (Required)',
        validate: usageInput => {
            if(usageInput) {
                return true;
            } else {
                console.log('Please enter some usage information');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines (Required)',
        validate: contributionInput => {
            if(contributionInput) {
                return true;
            } else {
                console.log('Please enter some contribution guidelines');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions (Required)',
        validate: testsInput => {
            if(testsInput) {
                return true;
            } else {
                console.log('Please enter some test instructions');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license do you have for this application? (Required)',
        choices: ['Drivers', 'Boating', 'Home improvement']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username? (Required)',
        validate: githubInput => {
            if(githubInput) {
                return true;
            } else {
                console.log('Please enter some test instructions');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email? (Required)',
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log('Please enter some test instructions');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, (data), () => {

    })
    console.log(data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const readME = generateReadME(answers);
        writeToFile('README.md', readME);
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
