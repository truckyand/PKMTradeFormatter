const fs = require('fs');

const srcFile = '../swsh.json';
const metasetFile = '../pkmgg_sorted_swsh_pokemon_array.json';
const FILE_PREFIX = 'swsh-diff';
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


// metaset array will be loaded below

//
//
// Compare `swsh.json` vs `pkmgg_sorted_swsh_pokemon_array.json`
// - Write `./dex-swsh/missing.txt` containing `id,species` for swsh entries
//   that are missing from the metaset array
// - Print count of missing pokemons
// - Write `./dex-swsh/metaset-only.txt` listing metaset entries not present
//   in `swsh.json` (meta id,species,species_id)
//

// Load metaset array
const pkmgg_sorted_pkm = require(metasetFile);
console.log(`${metasetFile}: ${pkmgg_sorted_pkm.length}`);

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
	fs.mkdirSync(outputDir, { recursive: true });
}

// Helper: capitalize first letter
function capitalize(str) {
	return str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : '';
}

// Build metaset lookups for fast search
const metasetById = new Map();
const metasetByName = new Map();
pkmgg_sorted_pkm.forEach(m => {
	if (m && typeof m.species_id !== 'undefined') metasetById.set(Number(m.species_id), m);
	if (m && m.species) metasetByName.set(m.species.toLowerCase(), m);
});

// Find metaset entries not in swsh.json
const swshIdSet = new Set(pokemons.map(x => Number(x.id)));
const metasetOnly = pkmgg_sorted_pkm.filter(m => !swshIdSet.has(Number(m.species_id)));

// Write missing.txt using the metaset entries' `meta_set` field
const missingFile = `${outputDir}/missing.txt`;
// random date helper (YYYYMMDD) between 2022-2024
function randomDate() {
	const year = 2022 + Math.floor(Math.random() * 3); // 2022-2024
	const month = String(1 + Math.floor(Math.random() * 12)).padStart(2, '0');
	const day = String(1 + Math.floor(Math.random() * 28)).padStart(2, '0');
	return `${year}${month}${day}`;
}

const missingBlocks = metasetOnly.map(m => {
	const metaSet = (m.meta_set || '').trim();
	const metaLines = metaSet ? metaSet.split('\n') : [];

	// Determine parenthetical tag from metaset first line, e.g. "(M)"
	let paren = '';
	if (metaLines.length > 0) {
		const first = metaLines[0].trim();
		const p = first.match(/\(.+\)$/);
		if (p) paren = ' ' + p[0];
	}

	// Normalize species: replace spaces with hyphens, keep existing hyphens
	let speciesNorm = (m.species || '').replace(/\s+/g, '-');
	speciesNorm = speciesNorm + (paren || '');

	// Prepend legendary marker if applicable
	const isLegendaryLine = m.is_legendary ? '# is_legendary\n' : '';

	const metDate = randomDate();
	const blockLines = [
		speciesNorm,
		'Shiny: Yes',
		'OT: trucky',
		'OTGender: Female',
		'TID: 331778',
		'SID: 2401',
		'Ball: Luxury Ball',
		'Language: English',
		'IVs: 31 HP / 31 Spe / 31 Def / 31 SpD / 31 Atk / 31 SpA',
		`.MetDate=${metDate}`,
		'.Ribbons=$suggestAll'
	];

	// Remove the first line of meta_set to avoid duplicate species line
	const metaBodyLines = metaLines.slice(1);

	// Assemble: optional legendary line, block lines, then remaining meta_set body
	const parts = [];
	if (isLegendaryLine) parts.push(isLegendaryLine.trim());
	parts.push(blockLines.join('\n'));
	if (metaBodyLines.length) parts.push(metaBodyLines.join('\n'));

	// Use single newline between block and meta body; entries are separated later
	return parts.join('\n');
});

fs.writeFileSync(missingFile, missingBlocks.join('\n\n') + (missingBlocks.length ? '\n' : ''));
console.log(`Wrote ${missingFile}`);
console.log(`Number of missing pokemons: ${metasetOnly.length}`);

// Also write a simple metaset-only summary file (id,species,species_id)
const metasetOnlyFile = `${outputDir}/metaset-only.txt`;
const metasetOnlyLines = metasetOnly.map(m => `${m.id || ''},${m.species || ''},${m.species_id || ''}`);
fs.writeFileSync(metasetOnlyFile, metasetOnlyLines.join('\n') + (metasetOnlyLines.length ? '\n' : ''));
console.log(`Wrote ${metasetOnlyFile}`);
console.log(`Number of metaset-only pokemons: ${metasetOnly.length}`);