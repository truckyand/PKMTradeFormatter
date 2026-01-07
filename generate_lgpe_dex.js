const fs = require('fs');

const data = JSON.parse(fs.readFileSync('lgpe.json', 'utf8'));

function capitalizeName(name) {
  if (name === 'mr-mime') return 'Mr. Mime';
  return name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function randomDate(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const randomTime = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
  const date = new Date(randomTime);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
}

const startDate = '2024-01-01';
const endDate = '2026-01-07';

let content = '';

data.forEach(pokemon => {
  const name = capitalizeName(pokemon.name);
  const metDate = randomDate(startDate, endDate);
  content += `${name}\n`;
  content += `Shiny: Yes\n`;
  content += `OT: trucky\n`;
  content += `OTGender: Female\n`;
  content += `TID: 727928\n`;
  content += `SID: 2120\n`;
  content += `IVs: 31 HP / 31 Spe / 31 Def / 31 SpD / 31 Atk / 31 SpA\n`;
  content += `EVs: 252 Atk / 252 Spe / 4 Def\n`;
  content += `.Moves=$suggestAll\n`;
  content += `.Ribbons=$suggestAll\n`;
  content += `.MetDate=${metDate}\n`;
  content += '\n'; // blank line between entries
});

fs.writeFileSync('lgpe-dex.tsv', content, 'utf8');

console.log('lgpe-dex.tsv generated successfully.');