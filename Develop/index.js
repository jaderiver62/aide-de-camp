// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// const fs = require('fs');
// const { writeFile, copyFile } = require('./src/generateMarkdown');
// const generateREADME = require('./src/markdown-template');
// Develop/index.js
// TODO: Create an array of questions for user input
const  questions = [
{
    type: 'input',
    name:'name',
    message: 'Who is the creator this project? (Required)',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a name!');
          return false;
        }
      }
},
{
    type: 'input',
    name: 'github',
    message: 'Enter this project\'s GitHub Username (Required)',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('Please enter your GitHub username!');
        return false;
      }
    }
  },
  {
    type: 'confirm',
    name: 'confirmAbout',
    message: 'Would you like to enter some information about yourself for an "About" section?',
    default: true
  },
  {
    type: 'input',
    name: 'about',
    message: 'Provide some information about yourself:',
    when: ({ confirmAbout }) => confirmAbout
  }

];
  inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
  });
// THEN a high-quality, professional README.md is generated with the title of my project and sections
// entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

