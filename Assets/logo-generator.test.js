const { execSync } = require('child_process');
const fs = require('fs');

test('Logo generation', () => {
  // Mock the user input for testing
  const userInput = 'AB\nred\ncircle\nblue\n';
  
  // Execute the logo-generator.js script with mocked user input
  const result = execSync(`echo -e "${userInput}" | node logo-generator.js`).toString();

  // Check if the logo.svg file was generated
  expect(fs.existsSync('logo.svg')).toBe(true);
  
  // Check if the output message is correct
  expect(result.trim()).toBe('logo.svg');
});
