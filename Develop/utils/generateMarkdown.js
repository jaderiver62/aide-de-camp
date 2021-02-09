// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(projectData) {
    console.log(projectData);
    return `
    # ${projectData.title}
    ## Description
    ${projectData.description}

    [projectData.github](projectData.link)



`;
}

module.exports = generateMarkdown;
//module.exports = templateData => {



//{
//    "name": "nina",
//    "title": "meow",
//    "github": "meow",
//    "link": "meow",
//    "description": "dope",
//    "tableOfContents": true,
//    "installation": "meows",
//    "license": [
//        "GNU AGPLv3"
//    ],
//    "usage": "meow",
//    "imageUrl": "meow",
//    "contactName": "meow",
//    "email": "jaderiver64@gmail.com",
//    "test": "meow",
//    "credits": [{
//        "contributor": "nuggles",
//        "contributorLink": "https://nugglesworld.com"
//    }]
//}