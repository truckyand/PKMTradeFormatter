const fs = require('fs');

const srcFile = '../swsh.json';
const metasetFile = '../pkmgg_sorted_swsh_pokemon.json';
const FILE_PREFIX = '';
const LEGENDARY_ONLY = false;

// Define chunk size and output directory
const chunkSize = 6;
const outputDir = './dex-swsh';

//
//
//
const pokemons = require(srcFile);
pokemons.sort((a, b) => a.id - b.id); // Sort Pokémon by their National Pokédex id
console.log(`pokemons ${srcFile}: ${pokemons.length}`);

const pkmgg_sorted_pkm_json = require(metasetFile);
const pkmgg_sorted_pkm = Object.entries(pkmgg_sorted_pkm_json).map(([id, pkm]) => ({
	id,
	...pkm
}));
console.log(`${metasetFile}: ${pkmgg_sorted_pkm.length}`);
console.log(pkmgg_sorted_pkm[0]);

// List of Legendary & Mythical Pokémon
const { LegendaryMythicalList } = require('./legend.js');
console.log(`Legendary List: ${LegendaryMythicalList.size}`);

// Filter only Legendary & Mythical
const legendary_pkm = pkmgg_sorted_pkm
	.filter(pkm => LegendaryMythicalList.has(pkm.species));
legendary_pkm.sort((a, b) => a.species_id - b.species_id);
console.log(`Legendary: ${legendary_pkm.length}`);

const legendary_pkm_v2 = pkmgg_sorted_pkm
	.filter(pkm => pkm.is_legendary == true);
legendary_pkm_v2.sort((a, b) => a.species_id - b.species_id);
console.log(`Legendary V2: ${legendary_pkm_v2.length}`);


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
//const p6 = pokemons.slice(0, 6);
//

// Process in chunks
data = pokemons;
if (LEGENDARY_ONLY) {
	data = pokemons
		.filter(pkm => pkmgg_sorted_pkm.find(x => (x.species.toLowerCase() === pkm.name.toLowerCase()) && (x.is_legendary == true)));
}
for (let i = 0; i < data.length; i += chunkSize) {

	// Filename based on the first and last id in the chunk
	const chunk = data.slice(i, i + chunkSize);
	const startId = chunk[0].id;
	const endId = chunk[chunk.length - 1].id;
	const filename = `${outputDir}/${FILE_PREFIX}${startId.toString().padStart(4, '0')}-${endId.toString().padStart(4, '0')}.tsv`;

	let content = '.bt ';
	chunk.forEach(item => {
		/*if (LegendaryMythicalList.has(item.name)) {
			console.log(`>>> ${item.name} is legendary, ignore.`);
		}*/


		// meta_set
		idStr = item.id.toString().padStart(4, '0');
		const name = capitalize(item.name);
		try {

			// Find meta_set from pkmgg_sorted_pkm
			// Use species name instead of id to find the Pokémon
			// 0046 Mimikyu
			var pkmgg_pkm = pkmgg_sorted_pkm.find(x => x.id === idStr);
			if (!pkmgg_pkm) {
				// Fallback to species name search
				pkmgg_pkm = pkmgg_sorted_pkm.find(x => x.species.toLowerCase() === name.toLowerCase());
			}
			if (!pkmgg_pkm) {
				console.log(`Cannot find meta_set for ${idStr} ${name}`);
			}

			if (pkmgg_pkm && pkmgg_pkm.meta_set) {
				var meta_set = pkmgg_pkm.meta_set;
				meta_set = meta_set.split('\n');
				meta_set.splice(0, 1); // remove Name    
				meta_set.splice(meta_set.findIndex(x => x.startsWith("Shiny")), 1); // remove Shiny
				meta_set.splice(meta_set.findIndex(x => x.startsWith("Level")), 1); // remove Level
				meta_set = meta_set.join('\n');

				//console.log(`item: ${pkmgg_pkm.species}, is_legendary: ${pkmgg_pkm.is_legendary}`);
				if (!LEGENDARY_ONLY && (pkmgg_pkm.is_legendary == true)) {
					console.log(`>>> ${pkmgg_pkm.species} is legendary, ignore.`);
				}
			}

			// Finalize data
			const metDate = randomDate();
			const holdItem = '@ Big Nugget';
			const pokeBall_Wanted = "Luxury Ball";
			const pokeBall = pkmgg_pkm && pkmgg_pkm.legal_pokeballs.includes(pokeBall_Wanted) ? pokeBall_Wanted : pkmgg_pkm.legal_pokeballs[0];
			const is_shiny = pkmgg_pkm && (pkmgg_pkm.shiny_locked === true) ? 'No' : 'Yes';
			const is_legendary = pkmgg_pkm && (pkmgg_pkm.is_legendary == true) ? "# is_legendary" : "";

			content += `${is_legendary}\n`;
			content += `${name} ${holdItem}\n`;
			content += `Shiny: ${is_shiny}\n`;
			content += `OT: trucky\n`;
			content += `OTGender: Female\n`;
			content += `TID: 331778\n`;
			content += `SID: 2401\n`;
			content += `Ball: ${pokeBall}\n`;
			content += `Language: English\n`;
			content += `IVs: 31 HP / 31 Spe / 31 Def / 31 SpD / 31 Atk / 31 SpA\n`;
			content += `.MetDate=${metDate}\n`;
			content += `.Ribbons=$suggestAll\n`;

			content += `${meta_set}\n`;
			content += `\n`;

		} catch (error) {
			console.log(`Error processing ${idStr} ${name}: ${error}`);
		}
	});

	fs.writeFileSync(filename, content.trim() + '\n');
	// console.log(`✅ Wrote ${filename}`);
}