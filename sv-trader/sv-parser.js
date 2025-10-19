const fs = require('fs');

const pokemons = require('../sv.json');
console.log(`pokemons sv.json: ${pokemons.length}`);

const pkmgg_sorted_pkm_json = require('../pkmgg_sorted_pokemon.json');
const pkmgg_sorted_pkm = Object.entries(pkmgg_sorted_pkm_json).map(([id, pkm]) => ({
  id,
  ...pkm
}));
console.log(`pkmgg_sorted_pkm: ${pkmgg_sorted_pkm.length}`);

/*
pkmgg_sorted_gen8 = pkmgg_sorted_pkm.filter(pokemon => 
	(pokemon.generation == 1)
);
console.log(`Gen 8 founds: ${pkmgg_sorted_gen8.length}`);
console.log(`Gen8: ${pkmgg_sorted_gen8[0].species}`);
*/

// Sort Pokémon by their National Pokédex id
pokemons.sort((a, b) => a.id - b.id);
//console.log(pokemons[0]);

// List of Legendary & Mythical Pokémon
const { LegendaryMythicalList } = require('./legend.js');
// Filter only Legendary & Mythical
const legendary = pkmgg_sorted_pkm
    .filter(pkm => LegendaryMythicalList.has(pkm.species.toLowerCase()))
    //.map(([name, games]) => ({ name, games }));
legendary.sort((a, b) => a.id - b.id);
//console.log(legendary.map(x=>`${x.id} ${x.species}`));
console.log(`${legendary[0].id} ${legendary[0].species}`)

// p6
const p6 = pokemons.slice(0, 6);
console.log(p6.length);

// Define chunk size
const chunkSize = 6;
const outputDir = './output';

// Helper: capitalize first letter
function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Helper: random date in YYYYMMDD
function randomDate() {
	const year = 2023 + Math.floor(Math.random() * 3); // 2023–2025
	const month = String(1 + Math.floor(Math.random() * 12)).padStart(2, '0');
	const day = String(1 + Math.floor(Math.random() * 28)).padStart(2, '0');
	return `${year}${month}${day}`;
}

// Process in chunks
data = pokemons;
for (let i = 0; i < data.length; i += chunkSize) {
	//const chunk = data.slice(i, i + chunkSize);
	//const start = i + 1;
	//const end = Math.min(i + chunkSize, data.length);
	//const filename = `${outputDir}/${start}-${end}.tsv`;

	// Filename based on the first and last id in the chunk
	const chunk = data.slice(i, i + chunkSize);
	const startId = chunk[0].id;
	const endId = chunk[chunk.length - 1].id;
	const filename = `${outputDir}/${startId}-${endId}.tsv`;

	let content = '.bt ';
	chunk.forEach(item => {
		const name = capitalize(item.name);
		const metDate = randomDate();

		content += `${name}\n`;
		content += `Shiny: Yes\n`;
		content += `OT: trucky\n`;
		content += `OTGender: Female\n`;
		content += `TID: 391666\n`;
		content += `SID: 2164\n`;
		content += `Ball: Poke Ball\n`;
		content += `Language: English\n`;
		content += `IVs: 31 HP / 31 Spe / 31 Def / 31 SpD / 31 Atk / 31 SpA\n`;
		content += `.MetDate=${metDate}\n`;

		// meta_set
		idStr = item.id.toString().padStart(4, '0');
		var pkmgg_pkm = pkmgg_sorted_pkm.find(x => x.id===idStr);
		if (pkmgg_pkm && pkmgg_pkm.meta_set) {
			var meta_set = pkmgg_pkm.meta_set;
			meta_set = meta_set.split('\n');
			meta_set.splice(0, 1); // remove Name    
			meta_set.splice(meta_set.findIndex(x => x.startsWith("Shiny")), 1); // remove Shiny
			meta_set.splice(meta_set.findIndex(x => x.startsWith("Level")), 1); // remove Level
			meta_set = meta_set.join('\n')
		}
		else {
			console.log(`Cannot find meta_set for ${idStr} ${name}`);
		}
		//content += `${meta_set}\n`;
		content += `\n`;
	});

	fs.writeFileSync(filename, content.trim() + '\n');
	//console.log(`✅ Wrote ${filename}`);
}