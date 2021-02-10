function renderLicenseBadge(license) {
    if (license) {
        return `![license badge](https://img.shields.io/badge/License-${license}-blueviolet?style=plastic)`
    }
    return `![license badge](https://img.shields.io/badge/License-None}-lightgrey?style=plastic)`;
}

function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

const generateLanguages = (languageArray) => {
    var result =
        ``;

    for (var i = 0; i < languageArray.length; i++) {
        const language = languageArray[i];
        result += `
* ${language}
`;
    }
    return result;
};

const generateContributors = credits => {
    var result =
        ``;

    for (var i = 0; i < credits.length; i++) {
        const contributor = credits[i].contributor;
        const link = credits[i].contributorLink;
        result += `
* [${contributor}](${link})
`;
    }
    return result;
};
const generateTableOfContents = tableOfContents => {
    if (!tableOfContents) {
        return ``;
    }
    return `
## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Testing](#testing)
* [Contributions](#contributions)

---------------------------------------

`
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(projectData) {
    console.log(projectData);
    return `
# ${projectData.title}

${renderLicenseBadge(projectData.license)}

---------------------------------------

## Description

${projectData.description}

---------------------------------------

Project Link: 
[${projectData.linkName}](${projectData.link})

---------------------------------------

${generateTableOfContents(projectData.tableOfContents)}

Written using:
${generateLanguages(projectData.languages)}

---------------------------------------

## Installation

${projectData.installation}

---------------------------------------

## Usage

${projectData.usage}

![Project Usage Image](${projectData.imageUrl})

---------------------------------------



## Testing

${projectData.test}

---------------------------------------

## Contributions

${generateContributors(projectData.credits)} 

---------------------------------------

## Licence

This project is licensed under the ${projectData.license}.

&copy; 2021 ${projectData.name}

---------------------------------------

    `;
}

module.exports = generateMarkdown;