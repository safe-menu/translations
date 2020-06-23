const fs = require('fs');
const path = require('path');

const folders = [
  './dashboard.safemenu.org',
  './menu.safemenu.org',
  './safemenu.org',
];

(async () => {
  folders.forEach(folder => {
    fs.readdirSync(folder).forEach(file => {
      const filePath = './' +
        path.join(folder, file)
          .replace('\\', '/') // Windows fix

      // Test if the JSON format is ok.
      JSON.parse(
        fs.readFileSync(filePath, 'utf-8')
      );
    });
  });

  console.log('OK');
})();
