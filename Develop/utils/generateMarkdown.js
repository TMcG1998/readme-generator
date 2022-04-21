// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'None') {
      return '![badmath](https://img.shields.io/badge/license-' + license + '-blue)';
    } else {
      return ''
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license == 'APACHE 2.0') {
      return 'https://www.apache.org/licenses/LICENSE-2.0';
    } else if (license == 'MIT') {
      return 'https://opensource.org/licenses/MIT'
    } else if (license == 'GPL 3.0') {
      return 'https://www.gnu.org/licenses/gpl-3.0.en.html'
    } else {
      return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== 'None') {
    return `## License

  This project is licensed under the [${license}](${renderLicenseLink(license)}) license.
    `
    } else {
      return '';
    }
}

function renderLicenseSectionLink(license) {
  if(license != 'None') {
    return '- [License](#license)'
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    console.log(data);

    const {title, description, installation, usage, 
    contribution, tests, license, github, email} = data;

  return `# ${title}
  ${renderLicenseBadge(license)}

  ## Description
  
  ${description}
  
  ## Table of Contents
  
  Table of contents:
      
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseSectionLink(license)} 
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)
      
  ## Installation
  
  ${installation}
  
  ## Usage
  
  ${usage}
  
  ${renderLicenseSection(license)}
      
  ## How to Contribute
      
  ${contribution}
      
  ## Tests
      
  ${tests}
  
  ## Questions
  
  Please reach out to me on [GitHub](https://github.com/${github})
  or email me at: ${email}
`;
}

module.exports = generateMarkdown;
