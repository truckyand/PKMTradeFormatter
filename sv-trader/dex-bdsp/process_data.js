import { data } from './0000-data.js';
import { It as pokemonList } from './0000-c.js';
import fs from 'fs';

function flattenMoves(moves) {
    const flat = [];
    for (const move of moves) {
        if (Array.isArray(move)) {
            flat.push(...move);
        } else {
            flat.push(move);
        }
    }
    return flat.slice(0, 4);
}

function formatEvs(evs) {
    const statNames = {
        hp: 'HP',
        atk: 'Atk',
        def: 'Def',
        spa: 'SpA',
        spd: 'SpD',
        spe: 'Spe'
    };
    const parts = [];
    for (const [stat, value] of Object.entries(evs)) {
        if (value > 0) {
            parts.push(`${value} ${statNames[stat] || stat.toUpperCase()}`);
        }
    }
    return `EVs: ${parts.join(' / ')}`;
}

// Sort Pokemon names by ID from 0000-c.js
const sortedNames = pokemonList
    .filter(p => data[p.name]) // Only include those in data
    .sort((a, b) => a.id - b.id)
    .map(p => p.name);

let output = '';

for (const key of sortedNames) {
    const pokemon = data[key];
    const tiers = Object.values(pokemon);
    if (tiers.length === 0) continue;
    const sets = Object.values(tiers[0]);
    if (sets.length === 0) continue;
    const set = sets[0];
    
    if (!set.moves || !set.item || !set.nature || !set.evs) continue;
    
    const nature = Array.isArray(set.nature) ? set.nature[0] : set.nature;
    const evs = formatEvs(set.evs);
    const moves = flattenMoves(set.moves);
    
    output += `${key} @ Nugget\n`;
    output += `Shiny: Yes\n`;
    output += `OT: trucky\n`;
    output += `OTGender: Female\n`;
    output += `TID: 957558\n`;
    output += `SID: 0162\n`;
    output += `Ball: Master Ball\n`;
    output += `IVs: 31 HP / 31 Spe / 31 Def / 31 SpD / 31 Atk / 31 SpA\n`;
    output += `${evs}\n`;
    if (set.ability) {
        output += `Ability: ${set.ability}\n`;
    }
    output += `${nature} Nature\n`;
    output += `.Moves=$suggestAll\n`;
    output += `.Ribbons=$suggestAll\n`;
    output += '\n';
}

fs.writeFileSync('bdsp-all.tsv', output);
console.log('bdsp-all.tsv updated and sorted by Pokemon ID from 0000-c.js.');