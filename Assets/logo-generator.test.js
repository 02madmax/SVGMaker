const fs = require('fs');
const path = require('path');

describe('SVG Logo Generation', () => {
  it('should generate the logo.svg file', () => {
    // Check if the logo.svg file exists
    const filePath = path.join(__dirname, 'logo.svg');
    const fileExists = fs.existsSync(filePath);

    // Assert that the file exists
    expect(fileExists).toBe(true);
  });
});
