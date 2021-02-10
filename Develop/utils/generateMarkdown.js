function renderLicenseBadge(license) {
    if (license) {
        var imageLink = "";
        if (license === "GNU AGPLv3") {
            imageLink = "https://img.shields.io/badge/license-GNU%20AGPLv3-green";
        } else
        if (license === "GNU GPLv3") {
            imageLink = "https://img.shields.io/badge/license-GNU%20GPLv3-brightgreen";
        } else if (license === "GNU LGPLv3") {
            imageLink = "https://img.shields.io/badge/license-GNU%20LGPLv3-orange";
        } else if (license === "Mozilla Public License 2.0") {
            imageLink = "https://img.shields.io/badge/license-Mozilla%20Public%20License%202.0-blue";
        } else if (license === "Apache License 2.0") {
            imageLink = "https://img.shields.io/badge/license-Apache%20License%202.0-blueviolet";
        } else if (license === "MIT License") {
            imageLink = "https://img.shields.io/badge/license-MIT-blueviolet";
        } else if (license === "Boost Software License 1.0") {
            imageLink = "https://img.shields.io/badge/license-Boost%20Software%20License%201.0-ff69b4";
        } else if (license === "The Unlicense") {
            imageLink = "https://img.shields.io/badge/license-The%20Unlicense-9cf";
        }
        return "<img src='" + imageLink + "' alt='license badge'>";
    }
    return "";
}

function renderLicenseLink(license) {
    var result = "";
    if (license) {
        var link = "";
        if (license === "GNU AGPLv3") {
            link = "https://www.gnu.org/licenses/agpl-3.0.html";
        } else
        if (license === "GNU GPLv3") {
            link = "https://www.gnu.org/licenses/gpl-3.0.html";
        } else if (license === "GNU LGPLv3") {
            link = "https://www.gnu.org/licenses/lgpl-3.0.html";
        } else if (license === "Mozilla Public License 2.0") {
            link = "https://www.mozilla.org/en-US/MPL/2.0/";
        } else if (license === "Apache License 2.0") {
            link = "http://www.apache.org/licenses/LICENSE-2.0";
        } else if (license === "MIT License") {
            link = "https://opensource.org/licenses/MIT";
        } else if (license === "Boost Software License 1.0") {
            link = "https://www.boost.org/LICENSE_1_0.txt";
        } else if (license === "The Unlicense") {
            link = "https://unlicense.orghttps://unlicense.org";
        }
        result = link;
    }
    return result;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

    if (license) {
        var badgeImageLink = renderLicenseBadge(license);
        var badgeLink = renderLicenseLink(license);
        return "<a href='" + badgeLink + "'>" + badgeImageLink + "</a>";
    }
    return "";
}

const generateLanguages = (languageArray) => {
    var result =
        `
                    `;
    if (languageArray) {
        for (var i = 0; i < languageArray.length; i++) {
            const language = languageArray[i];
            result += `
* ${language}
   `;
        }
    }
    return result;
};

const generateContributors = credits => {
    var result =
        `
                    `;

    for (var i = 0; i < credits.length; i++) {
        const contributor = credits[i].contributor;
        const link = credits[i].contributorLink;
        result += ` 
*[${contributor}](${link})
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
${renderLicenseSection(projectData.license)}

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
This project is licensed under the [${projectData.license}](${renderLicenseLink(projectData.license)}).
&copy; 2021 ${projectData.name}

---------------------------------------
    `;
}

module.exports = generateMarkdown;