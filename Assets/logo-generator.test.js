const { execSync } = require('child_process');
const fs = require('fs');

test('Logo generation', () => {
  // Mock the user input for testing
  
  const userInput = 'AB\nred\ncircle\nblue\n';
  
  // Execute the index.js script with mocked user input
  const result = execSync('node index.js', {
    input: userInput,
  }).toString();

  // Check if the logo.svg file was generated
  const filePath = `${__dirname}/logo.svg`;
  expect(fs.existsSync(filePath)).toBe(true);
 
  
  // Check if the output message is correct
  expect(result.trim()).toBe('logo.svg');
});
 