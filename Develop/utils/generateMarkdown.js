// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

const generateTableOfContents = tableOfContents => {
    if (!tableOfContents) {
        return ``;
    }
    return `
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Credits](#credits)
`
}
const generateContributors = credits => {
    var result = ``;
    if (!credits) {
        return result;
    }
    for (var i = 0; i < credits.length; i++) {
        result += `
        ![${credits[i].contributor}](${credits[i].contributorLink})
        `;
    }
    return result;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(projectData) {
    console.log(projectData);
    var output =
        `
# ${projectData.title}
## Description
${projectData.description}



** [${projectData.github}](${projectData.link})`;

    output += `${generateTableOfContents(projectData.tableOfContents)}`;

    output += `## Installation
    ${projectData.installation}

    ## Usage 
    ${projectData.usage}
    ![Project Usage Image](${projectData.imageUrl})
    `;

    output += `
    ${generateContributors(projectData.credits)}
    `;
    return output;
}

module.exports = generateMarkdown;
//module.exports = templateData => {



//{
//    name: 'Nina Cummings',
//    title: 'aide-de-camp',
//    github: 'jaderiver64',
//    link: 'https://github.com/jaderiver62/aide-de-camp',
//    description: 'This is an app in Node.js that creates a quality README.md file
//    for projects!This is still a work in progess so please forgive my tests.Watc
//    h this space!',
//    tableOfContents: true,
//    installation: 'installationsteps to be provided soon!',
//    license: 'MIT License',
//    languages: ['JavaScript', 'ES6', 'Node'],
//    usage: 'Examples and Intructions coming soon!',
//    imageUrl: 'Develop/utils/tests/images/nuggles.jpg',
//    contactName: 'jaderiver62',
//    email: 'jaderiver64@gmail.com',
//    test: 'Testing still in progress!  Tune in soon!',
//    credits: [{
//            contributor: 'Nuggles the Cat',
//            contributorLink: 'https://github.com/jaderiver62/'
//        },
//        {
//            contributor: 'Jadoo the Cat',
//            contributorLink: 'https://github.com/jaderiver62/'
//        }
//    ]
//}