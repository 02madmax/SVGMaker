import fs from 'fs';
import inquirer from 'inquirer';

// Prompt for user input
inquirer
.prompt([
    {
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (input) => input.length <= 3,
    },
    {
      name: 'textColor',
      message: 'Enter the text color:',
    },
    {
      name: 'shape',
      type: 'list',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      name: 'shapeColor',
      message: 'Enter the shape color:',
    },
  ])
  .then((answers) => {
    // Generate the SVG code based on user input
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <rect width="300" height="200" fill="${answers.shapeColor}" />
      <text x="50%" y="50%" font-size="72" fill="${answers.textColor}" text-anchor="middle">${answers.text}</text>
    </svg>`;

    // Create the logo.svg file
    fs.writeFileSync('logo.svg', svg);

    console.log('Generated logo.svg');
  })
  .catch((error) => {
    console.error(error);
  });
