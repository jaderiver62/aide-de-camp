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


// TODO: Create a function to generate markdown for README
function generateMarkdown(projectData) {
    console.log(projectData);
    var output =
        `
# ${projectData.title}
## Description
${projectData.description}



[${projectData.github}](${projectData.link})`;

    output += `${generateTableOfContents(projectData.tableOfContents)}`;

    output += `## Installation
${projectData.installation}

## Usage 
${projectData.usage}
![Project Usage Image](${projectData.imageUrl})
    `;

    var result = ``;
    for (var i = 0; i < projectData.credits.length; i++) {
        result += `
![${projectData.credits[i].contributor}](${projectData.credits[i].contributorLink})
        `;
    }
    output += result;
    return output;
}

module.exports = generateMarkdown;
//module.exports = templateData => {