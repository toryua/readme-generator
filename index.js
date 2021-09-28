// TODO: Include packages needed for this application
const inquirer = require('inquirer');
let fs = require('fs');
let path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [];

const prompts = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your project name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a project name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the installation instructions?',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please enter installation instructions.');
                    return false;
                }
            }
        }    
    ])
}


// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    
    fs.writeFile(fileName, data, function (err) {
        if (err) return console.log(err);
        console.log('No errors');
    });
}


// TODO: Create a function to initialize app
function init() {
    prompts()
        .then(userInput => {
            return writeToFile("README.md", generateMarkdown(JSON.stringify(userInput))) 
        })
}

// Function call to initialize app
init();

