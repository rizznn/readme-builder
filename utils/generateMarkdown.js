// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license) {
      renderLicenseBadge(license);
      renderLicenseLink(license);
    } else {
      return '';
    }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents:
- [Description](#description)
- [Installation](#installation)
- [Features](#features)
- [Technologies](#technologies)
- [Improvements](#improvements)

  ## Description
  ${data.description}
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
