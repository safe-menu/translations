const fs = require('fs');
const path = require('path');

const folders = [
  './dashboard.safemenu.org',
  './menu.safemenu.org',
  './safemenu.org',
];

(async () => {
  let data = '';

  folders.forEach(folder => {
    fs.readdirSync(folder)
      .filter(file => file === 'en.json')
      .forEach(file => {
        data += folder + '/' + file + "\n----------------------\n";

        const filePath = './' +
          path.join(folder, file)
            .replace('\\', '/') // Window fix

        const json = JSON.parse(
          fs.readFileSync(filePath, 'utf-8')
        );

        for (var string in json) {
          data += `English: ${string}\nTranslated: \n----------------------\n`
        }

        data += "\n----------------------\n";
      });
  });

  fs.writeFileSync('translations.txt', data, 'utf-8')

  console.log('OK');
})();
