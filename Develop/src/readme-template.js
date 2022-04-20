module.exports = templateData => {
    console.log(templateData);

    const {title, description, installation, usage, 
    contribution, tests, license, github, email} = templateData;

return `
# ${title}

## Description

${description}

## Table of Contents

Table of contents:
    
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)
    
## Installation

${installation}

## Usage

${usage}

## License

${license}

## Badges
    
![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
    
Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
    
## How to Contribute
    
${contribution}
    
## Tests
    
${tests}

## Questions

Please reach out to me on [GitHub](https://github.com/${github})
or email me at: ${email}
`;
}