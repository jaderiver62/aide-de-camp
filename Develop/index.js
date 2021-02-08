const inquirer = require("inquirer");
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));


//TODO: Include packages needed
//for this application


//const fs = require('fs');
//const { writeFile, copyFile } = require('./src/generateMarkdown');
//const generateREADME = require('./src/markdown-template');
//Develop / index.js
//TODO: Create an array of questions
//for user input
const questions = [{
        type: 'input',
        name: 'name',
        message: 'Who is the creator of this project? (Required) ',
        validate: nameInput => {
            if (nameInput) {
                return true;
            }
            console.log('Please enter a name! ');
            return false;
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the project\'s title? (Required) ',
        validate: nameInput => {
            if (nameInput) {
                return true;
            }
            console.log('Please enter a title! ');
            return false;
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter this project\'s GitHub Username (Required) ',
        validate: githubInput => {
            if (githubInput) {
                return true;
            }
            console.log('Please enter a GitHub username! ');
            return false;
        }
    },
    {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to the project: (Required) ',
        validate: linkInput => {
            if (linkInput) {
                return true;
            }
            console.log('You need to enter a project GitHub link! ');
            return false;
        }
    },
    {
        type: 'editor',
        name: 'description',
        message: 'Please provide some information about this project for the README: ',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            }
            console.log('Please enter some description of the project! ');
            return false;
        }
    },
    {
        type: 'confirm',
        name: 'tableOfContents',
        message: 'Would you like to include a Table of Contents? ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for this project\s use? ',

    },
    {
        type: 'input',
        name: 'imageUrl',
        message: 'Add an image or screenshot to help with usage: '
    },
    {
        type: 'loop',
        name: 'installItems',
        message: 'Add an installation step? ',
        questions: [{
                type: "input",
                name: "step",
                message: "Enter an installation step title: ",
            },
            {
                type: "input",
                name: "stepDescription",
                message: "Enter the description of this installation step: ",
            },
        ],
    },
];

inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
});

// // THEN a high-quality, professional README.md is generated with the title of my project and sections
// // entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// // // TODO: Create a function to write README file
// // function writeToFile(fileName, data) {}

// // // TODO: Create a function to initialize app
// // function init() {}

// // // Function call to initialize app
// // init();

//inquirer.prompt({
//    type: "loop",
//    name: "items",
//    message: "Add another item?",
//    questions: [{
//            type: "input",
//            name: "key",
//            message: "Enter item key",
//        },
//        {
//            type: "input",
//            name: "value",
//            message: "Enter item value",
//        },
//    ],
//});