// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Boost1.0") {
    return `[${license}](https://opensource.org/licenses/BSL-1.0)`
  } else if (license === "GPL3.0") {
    return `[${license}](https://opensource.org/licenses/gpl-3.0.html)`
  } else if (license === "BSD2") {
    return `[${license}](https://opensource.org/licenses/BSD-2-CLause)`
  } else if (license === "BSD3") {
    return `[${license}](https://opensource.org/licenses/BSD-3-Clause)`
  } else if (license !== "None") {
    return `[${license}](https://opensource.org/licenses/${license})`
  } else {
    return ''
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== "None") {
      return `
      Copyright (c) ${license}. All rights reserved.`;
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
  This website is created with Visual Studio Code using ${data.languages}. Project repo created here in Github.

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribute}

  ## Questions
  To reach me for additional questions:\n
  Github username: ${data.username} \n
  Github link: [https://github.com/${data.username}](https://github.com/${data.username}) \n
  Email me at [${data.email}](mailto:${data.email})

  ## License
  ${renderLicenseSection(data.license)} \n

  Licensed under the ${renderLicenseLink(data.license)} license.

`;
}

module.exports = generateMarkdown;
