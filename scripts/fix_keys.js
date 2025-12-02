const fs = require('fs');
const readline = require('readline');
const path = require('path');

const filePath = process.argv[2] || path.join(__dirname, '..', 'sv-trader', 'dex-pla', '@data.2.json');
const tmpPath = filePath + '.tmp';

const inp = fs.createReadStream(filePath, { encoding: 'utf8' });
const out = fs.createWriteStream(tmpPath, { encoding: 'utf8' });
const rl = readline.createInterface({ input: inp, crlfDelay: Infinity });

const keyRegex = /^(\s*)(?!["'])([A-Za-z0-9@_\-]+)\s*:/;
rl.on('line', (line) => {
  const m = line.match(keyRegex);
  if (m) {
    line = line.replace(keyRegex, `${m[1]}\"${m[2]}\":`);
  }
  out.write(line + '\n');
});

rl.on('close', () => {
  out.end(() => {
    try {
      fs.renameSync(tmpPath, filePath);
      console.log('Done');
    } catch (err) {
      console.error('Error replacing file:', err);
      process.exit(1);
    }
  });
});
