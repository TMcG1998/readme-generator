module.exports = templateData => {
    console.log(templateData);

    const {title, description, installation, usage, 
    contribution, tests, license, github, email} = templateData;

return `
# ${title}
![badmath](https://img.shields.io/badge/license-${(license)}-blue)

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

This project is licensed under the ${license} license.
    
## How to Contribute
    
${contribution}
    
## Tests
    
${tests}

## Questions

Please reach out to me on [GitHub](https://github.com/${github})
or email me at: ${email}
`;
}