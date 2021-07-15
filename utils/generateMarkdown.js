// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Whatev](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `[License](#license)`;
  } else {
    return ''
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== "None") {
      return `
      Copyright (c) ${license}. All rights reserved.

      Licensed under the ${license} license.`;
    } else {
      return ''
    }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  
  ## Table of Contents:
  - [Description](#description)
  - [Technologies](#technologies)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)

  ## Description
  ${data.description}
  
  ## Technologies
  ${data.languages}

  ## Installation
  ${data.install}
  ${data.image}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribute}

  ## Tests
  ${data.test}

  ## Questions
  To reach me for additional questions:
    Github username: ${data.username}
    Github link: https://github.com/${data.username}/
    Email me at ${data.email}

  ## License
  ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
