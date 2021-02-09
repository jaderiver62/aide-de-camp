const generateTest = require('../generateMarkdown');
const sampleAnswers = require('./sample-answers');

console.log(generateTest(sampleAnswers));
/* 
## Usage

${projectData.usage}
![Project Usage Image](${projectData.imageUrl})
    
## Credits
${generateContributors(projectData.credits)} */