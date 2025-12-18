const fs = require('fs');

const filePath = 'd:\\code\\PKMTradeFormatter\\sv-trader\\legend-za\\g8-dlc.json';

const data = fs.readFileSync(filePath, 'utf8');
let json = JSON.parse(data);

// Remove items where isMegaEvolution is "/"
json = json.filter(obj => obj.isMegaEvolution !== "/");

// Sort by pokedexNumber
json.sort((a, b) => {
    const aNum = parseFloat(a.pokedexNumber);
    const bNum = parseFloat(b.pokedexNumber);
    return aNum - bNum;
});

fs.writeFileSync(filePath, JSON.stringify(json, null, 4));