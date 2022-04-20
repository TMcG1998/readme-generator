const formatLicenseBadge = license => {
    if(license == 'MIT License') {
        return 'MIT';
    } else {
        return 'GNU';
    }
}

const formatLicenseAbout = license => {
    if(license == 'MIT License') {
        return '[A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.](https://choosealicense.com/licenses/mit/)';
    } else {
        return '[Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.](https://choosealicense.com/licenses/gpl-3.0/)';
    }
}

module.exports = templateData => {
    console.log(templateData);

    const {title, description, installation, usage, 
    contribution, tests, license, github, email} = templateData;

return `
# ${title}
![badmath](https://img.shields.io/badge/license-${formatLicenseBadge(license)}-blue)

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

${formatLicenseAbout(license)}
    
## How to Contribute
    
${contribution}
    
## Tests
    
${tests}

## Questions

Please reach out to me on [GitHub](https://github.com/${github})
or email me at: ${email}
`;
}