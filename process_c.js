import fs from 'fs';

(async () => {
    const { It: pokemonData } = await import('./sv-trader/dex-bdsp/0000-c.js');

    let output = '';

    for (const pokemon of pokemonData) {
        output += `${pokemon.name}\n`;
    }

    fs.writeFileSync('bdsp.tsv', output);
    console.log('bdsp.tsv created with Pokemon names.');
})();