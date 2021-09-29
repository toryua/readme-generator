// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
 
 function renderLicenseBadge(license) {
  if (!license) { 
    return "";
  } else {
    return `![License](https://img.shields.io/static/v1?label=${license}&message=${license}&color=blue)`
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  } else if (license === 'Apache') {
    return `https://www.apache.org/licenses/LICENSE-2.0`
  } else if (license === 'MIT') {
    return `https://opensource.org/licenses/MIT`
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

   ## Table of Contents
  * [Description](#description) 
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [License](#license)
  * [License Link](#licenseLink)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Description

   ${data.description}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributions

  ${data.contributions}

  ## License

  ${data.license}

  ## LicenseLink

  ${renderLicenseLink(data.license)}

  ## Tests 
  
  ${data.testInstructions}

  ## Questions

  Visit https://github.com/${data.github} to see a list of my repositories.
  Email me at ${data.email}


`;
}


module.exports = generateMarkdown;
