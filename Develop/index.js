const inquirer = require("inquirer");
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
var validator = require("email-validator");
const fs = require('fs');
const generateREADME = require('./utils/generateMarkdown.js');

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
        name: 'link',
        message: 'Enter a link to the project: (Required) ',
        validate: linkInput => {
            if (linkInput) {
                return true;
            }
            console.log('Please enter a project link!');
            return false;
        }
    },
    {
        type: 'input',
        name: 'linkName',
        message: 'Enter this project\'s site name (Required) ',
        validate: linkInput => {
            if (linkInput) {
                return true;
            }
            console.log('Please enter a name for the link! ');
            return false;
        }
    },
    {
        type: 'input',
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
        name: 'installation',
        message: 'Please provide any installation information you wish to include: '
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for this project: ',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']

    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What languages did you write this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for this project\s use: ',

    },
    {
        type: 'input',
        name: 'imageUrl',
        message: 'Add an image/screenshot URL to help with usage: '
    },
    {
        type: 'input',
        name: 'contactName',
        message: 'Please enter a contact name for questions users have about your project: ',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('You need to enter a contact name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter a valid email for the contact name: ',
        validate: emailInput => {
            if (validator.validate(emailInput)) {
                return true;
            } else {
                console.log('You need to enter a valid contact e-mail!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubLink',
        message: 'Enter a GitHub link for the project\'s contact: ',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a GitHub link!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide any testing information you wish to include: '
    },
    {
        type: 'loop',
        name: 'credits',
        message: 'Add a contributor? ',
        questions: [{
                type: "input",
                name: "contributor",
                message: "Enter the contributor's name: ",
            },
            {
                type: "input",
                name: "contributorLink",
                message: "Enter the contributor's link: ",
            },
        ],
    },
];



function init() {
    inquirer.prompt(questions).then((answers) => {
            const myREADME = generateREADME(answers);
            return writeToFile('./README.md', myREADME);
        }).then(writeFileResponse => {
            console.log(writeFileResponse);
        })
        .catch(err => {
            console.log(err);

        });
}

function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
}



init();



/**/