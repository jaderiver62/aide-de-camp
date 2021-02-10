function renderLicenseBadge(license) {

    return `![license badge](https://img.shields.io/badge/license-${license}-blueviolet?style=plastic)`
}

function renderLicenseLink(license) {
    if (license) {
        if (license === "GNU AGPLv3") {
            return `https://www.gnu.org/licenses/agpl-3.0.html`;
        } else if (license === "GNU GPLv3") {
            return `https://www.gnu.org/licenses/gpl-3.0.html`;
        } else if (license === "GNU LGPLv3") {
            return `https://www.gnu.org/licenses/lgpl-3.0.html`;
        } else if (license === "Mozilla Public License 2.0") {
            return `https://www.mozilla.org/en-US/MPL/2.0/`;
        } else if (license === "Apache License 2.0") {
            return `http://www.apache.org/licenses/LICENSE-2.0`;
        } else if (license === "MIT License") {
            return `https://opensource.org/licenses/MIT`;
        } else if (license === "Boost Software License 1.0") {
            return `https://www.boost.org/LICENSE_1_0.txt`;
        } else if (license === "The Unlicense") {
            return `https://unlicense.orghttps://unlicense.org`;
        }

    }
    return ``;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

    if (license) {
        var badgeImageLink = renderLicenseBadge(license);
        var badgeLink = renderLicenseLink(license);
        return `[![${license}](${badgeImageLink}"${license}")][${badgeLink}]`;
    }
    return ``;
}


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

This project is licensed under the ${renderLicenseSection(projectData.license)}.

&copy; 2021 ${projectData.name}

---------------------------------------

    `;
}

module.exports = generateMarkdown;