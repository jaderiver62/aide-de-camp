const inquirer = require("inquirer");
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
var validator = require("email-validator");
const fs = require('fs');
const { writeFile, copyFile } = require('./src/generateMarkdown');
const generateREADME = require('./src/markdown-template');

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
        type: 'editor',
        name: 'installation',
        message: 'Please provide any installation information you wish to include: '
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license for this project: ',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']

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
        type: 'editor',
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


function init() {
    inquirer.prompt(questions).then((answers) => {
            var data = JSON.stringify(answers, null, '  ');
            console.log(data);
            return data;
        }).then(projectData => {
            return generateMarkdown(projectData);
        }).then(thisMarkdown => {
            return writeToFile('./README.md', thisMarkdown);
        }).then(writeFileResponse => {
            console.log(writeFileResponse);
            return copyFile();
        })
        .catch(err => {
            console.log(err);

        });
}

init();