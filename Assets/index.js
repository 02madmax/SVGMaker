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
    let shapeElement;
    switch (answers.shape) {
      case 'circle':
        shapeElement = `<circle cx="150" cy="100" r="50" fill="${answers.shapeColor}" />`;
        break;
      case 'triangle':
        shapeElement = `<polygon points="150,20 280,180 20,180" fill="${answers.shapeColor}" />`;
        break;
      case 'square':
        shapeElement = `<rect width="150" height="150" x="75" y="25" fill="${answers.shapeColor}" />`;
        break;
    }
    
    // Generate the SVG code based on user input
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${shapeElement}
      <text x="50%" y="50%" font-size="72" fill="${answers.textColor}" text-anchor="middle">${answers.text}</text>
    </svg>`;
    
    // Create the logo.svg file
    fs.writeFileSync('logo.svg', svg);

    console.log('Generated logo.svg');
  }) 
  
  .catch((error) => {
    console.error(error);
  });
