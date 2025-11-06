const fs = require('fs');

const pokemons = require('../sv.json');
pokemons.sort((a, b) => a.id - b.id); // Sort Pokémon by their National Pokédex id
console.log(`pokemons sv.json: ${pokemons.length}`);

const pkmgg_sorted_pkm_json = require('../pkmgg_sorted_pokemon.json');
const pkmgg_sorted_pkm = Object.entries(pkmgg_sorted_pkm_json).map(([id, pkm]) => ({
  id,
  ...pkm
}));
console.log(`pkmgg_sorted_pkm: ${pkmgg_sorted_pkm.length}`);

// List of Legendary & Mythical Pokémon
const { LegendaryMythicalList } = require('./legend.js');
console.log(`Legendary List: ${LegendaryMythicalList.size}`);

// Filter only Legendary & Mythical
const legendary_pkm = pkmgg_sorted_pkm
	.filter(pkm => LegendaryMythicalList.has(pkm.species))
legendary_pkm.sort((a, b) => a.species_id - b.species_id);
console.log(`Legendary: ${legendary_pkm.length}`);

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

// p6 testing
const p6 = pokemons.slice(0, 6);
console.log(p6.length);

// Process in chunks
data = pokemons;
for (let i = 0; i < data.length; i += chunkSize) {

	// Filename based on the first and last id in the chunk
	const chunk = data.slice(i, i + chunkSize);
	const startId = chunk[0].id;
	const endId = chunk[chunk.length - 1].id;
	const filename = `${outputDir}/${startId}-${endId}.tsv`;

	let content = '.bt ';
	chunk.forEach(item => {
		if(LegendaryMythicalList.has(item.name)) {
			console.log(`${item.name} is legend, ignore.`);
		}

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
		content += `${meta_set}\n`;
		content += `\n`;
	});

	fs.writeFileSync(filename, content.trim() + '\n');
	//console.log(`✅ Wrote ${filename}`);
}