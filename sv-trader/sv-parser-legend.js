const fs = require('fs');

const pkmgg_sorted_pkm_json = require('../pkmgg_sorted_pokemon.json');
const pkmgg_sorted_pkm = Object.entries(pkmgg_sorted_pkm_json).map(([id, pkm]) => ({
	id,
	...pkm
}));
pkmgg_sorted_pkm.sort((a, b) => a.species_id - b.species_id);
console.log(`pkmgg_sorted_pkm: ${pkmgg_sorted_pkm.length}`);

/*
pkmgg_sorted_gen8 = pkmgg_sorted_pkm.filter(pokemon => 
	(pokemon.generation == 1)
);
console.log(`Gen 8 founds: ${pkmgg_sorted_gen8.length}`);
console.log(`Gen8: ${pkmgg_sorted_gen8[0].species}`);
*/

// List of Legendary & Mythical Pokémon
const { LegendaryMythicalList } = require('./legend.js');
console.log(`Legendary List: ${LegendaryMythicalList.size}`);

// Filter only Legendary & Mythical
const legendary_pkm = pkmgg_sorted_pkm
	.filter(pkm => LegendaryMythicalList.has(pkm.species))
legendary_pkm.sort((a, b) => a.species_id - b.species_id);
console.log(legendary_pkm.map(x => `${x.id} ${x.species}`));
console.log(`Legendary: ${legendary_pkm.length}`);

// Define chunk size
const chunkSize = 6;
const outputDir = './legendary';

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
data = legendary_pkm;//.slice(0, 1);
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
		const name = capitalize(item.species);
		const metDate = randomDate();

		content += `${name}\n`;
		content += `Shiny: No\n`;
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
		var pkmgg_pkm = pkmgg_sorted_pkm.find(x => x.id === idStr);
		if (pkmgg_pkm && pkmgg_pkm.meta_set) {
			var meta_set = pkmgg_pkm.meta_set;
			meta_set = meta_set.split('\n'); 
			meta_set.splice(0, 1); // remove Name   

			// remove Shiny
			var idx = meta_set.findIndex(x => x.startsWith("Shiny"));
			if (idx != -1) {
				meta_set.splice(meta_set.findIndex(x => x.startsWith("Shiny")), 1); 
			}

			// remove Level
			idx = meta_set.findIndex(x => x.startsWith("Level"));
			if (idx != -1) {
				meta_set.splice(meta_set.findIndex(x => x.startsWith("Level")), 1); 
			}
			meta_set = meta_set.join('\n')
		}
		else {
			console.log(`Cannot find meta_set for ${idStr} ${name}`);
		}
		content += `${meta_set}\n`;
		content += `\n`;
	});

	fs.writeFileSync(filename, content.trim() + '\n');
}