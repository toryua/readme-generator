// TODO: Include packages needed for this application
const inquirer = require('inquirer');
let fs = require('fs');
let path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [

//const prompts = () => {
    //return inquirer.prompt([
    {
            type: 'input',
            name: 'title',
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
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please enter installation instructions.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions for use.',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter instructions for use.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'How could future contributors make this project even better?',
            validate: creditsInput => {
                if (creditsInput) {
                    return true;
                } else {
                    console.log('Please enter guidelines for future contributions.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'testInstructions',
            message: 'Please enter testing instructions if applicable:',
        }, 
        {
            type:'list',
            message: 'What is the license?',
            name: 'license',
            choices: ['Apache', 'MIT', ' '],
        },
        {
            type:'input',
            message: 'What is your GitHub user name? (required)',
            name: 'github',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter a Github user name.')
                    return false;
                }
            }
        },
        {
            type:'input',
            message: 'What is your email address?',
            name: 'email',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email address to reach you.')
                    return false;
                }
            }
        }
                 
 ];  



// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    
    fs.writeFile(fileName, data, function (err) {
        if (err) return console.log(err);
        console.log('No errors');
    });
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(data => {
            console.log(data);
            return writeToFile("README.md", generateMarkdown({...data})); 
        })
}

// Function call to initialize app
init();

