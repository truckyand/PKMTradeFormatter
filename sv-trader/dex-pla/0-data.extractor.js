const fs = require('fs');

// Define chunk size and output directory
const FILE_PREFIX = '';
const LEGENDARY_ONLY = false;

const chunkSize = 6;
const outputDir = '.';

//
//
const LEGENDARIES_MYTHICAL = [
    "Darkrai",
    "Uxie",
    "Mesprit",
    "Azelf",
    "Heatran",
    "Regigigas",
    "Cresselia",
    "Tornadus",
    "Thundurus",
    "Landorus",
    "Shaymin",
    "Dialga",
    "Dialga",
    "Palkia",
    "Palkia",
    "Giratina",
    "Arceus",
    "Phione",
    "Manaphy",
    "Enamorus"];

const LEGAL_BALLS = [
    "LAPoke Ball",
    "LAGreat Ball",
    "LAUltra Ball",
    "Feather Ball",
    "Wing Ball",
    "Jet Ball",
    "LAHeavy Ball",
    "Leaden Ball",
    "Gigaton Ball"];

//
const { SPECIES_raw } = require('./0-data.1');
const { MOVESET_raw } = require('./0-data.2');
const { LEGAL_raw } = require('./0-data.3');
const e = require('express');

console.log(`SPECIES entries: ${Object.keys(SPECIES_raw).length}`);
console.log(`MOVESET entries: ${Object.keys(MOVESET_raw).length}`);
console.log(`LEGAL entries: ${LEGAL_raw.length}`);

const SPECIES = Object.entries(SPECIES_raw).map(([key, pkm]) => ({
    key,
    id: pkm.id,
    name: pkm.name,
}));

console.log(`******************** ///// ********************`);

//
//
//
// Helper: random date in YYYYMMDD
function randomDate() {
    const year = 2023 + Math.floor(Math.random() * 3); // 2023–2025
    const month = String(1 + Math.floor(Math.random() * 12)).padStart(2, '0');
    const day = String(1 + Math.floor(Math.random() * 28)).padStart(2, '0');
    return `${year}${month}${day}`;
}

//
//
//
for (let i = 0; i < SPECIES.length; i += chunkSize) {

    // Get next 6 entries
    // Filename based on the first and last id in the chunk
    let chunk = SPECIES.slice(i, i + chunkSize);
    let startId = chunk[0].id;
    let endId = chunk[chunk.length - 1].id;
    let filename = `${outputDir}/${FILE_PREFIX}${startId.toString().padStart(3, '0')}-${endId.toString().padStart(3, '0')}.tsv`;

    var content = '.bt ';
    chunk.forEach(item => {

        let name = item.key;
        try {

            let pkmData = MOVESET_raw[name];
            let moveset = pkmData ? pkmData['Legal Moveset']['Good Nature'] : null;


            /*if (LEGENDARIES_MYTHICAL.includes(name)) {
                console.log(`>>> ${name} is legendary, ignore.`);
            }*/

            // Finalize data
            let metDate = randomDate();
            let holdItem = ' @ Master Ball';
            let pokeBall_Wanted = "Gigaton Ball";
            let pokeBall = LEGAL_BALLS.includes(pokeBall_Wanted) ? pokeBall_Wanted : LEGAL_BALLS[0];
            let is_legendary = LEGENDARIES_MYTHICAL.includes(name);
            let legendary = is_legendary ? "# is_legendary" : "";
            let is_alpha = 'Yes';
            let is_shiny = 'Yes'; // LEGENDARIES_MYTHICAL.includes(name) ? 'No' : 'Yes';
            let nature = moveset.nature ? `${moveset.nature} Nature` : null;
            let ability = moveset.ability ? `Ability: ${moveset.ability}` : null;
            let moves = moveset.moves ? moveset.moves.map(m => `- ${m}`).join('\n') : null;
            let ivs = moveset.ivs;
            let ivs_str = ivs ? `${ivs.hp} HP / ${ivs.atk} Atk / ${ivs.def} Def / ${ivs.spa} Spa / ${ivs.spd} SpD / ${ivs.spe} Spe` : "6IV";
            let evs = moveset.evs;
            let evs_str = '252 HP / 252 Atk / 4 Spe';
            if (evs) {
                if (evs.hp === 0 && evs.atk === 0 && evs.def === 0 && evs.spa === 0 && evs.spd === 0 && evs.spe === 0)
                    ;// All EVs are 0, use default;
                else
                    evs_str = evs ? `${evs.hp} HP / ${evs.atk} Atk / ${evs.def} Def / ${evs.spa} Spa / ${evs.spd} SpD / ${evs.spe} Spe` : "252 HP / 252 Atk / 4 Spe";
            }
            if (is_legendary) {
                pokeBall = null;
                is_alpha = null;
                //is_shiny = null;
            }

            content += `${legendary}\n`;
            content += `${name} ${holdItem}\n`;
            if(is_shiny) content += `Shiny: ${is_shiny}\n`;
            if(is_alpha) content += `Alpha: Yes\n`;
            content += `OT: trucky\n`;
            content += `OTGender: Female\n`;
            content += `TID: 093590\n`;
            content += `SID: 2017\n`;
            if (pokeBall) content += `Ball: ${pokeBall}\n`;
            if (ability) content += `${ability}\n`;
            content += `IVs: ${ivs_str}\n`;
            content += `EVs: ${evs_str}\n`;
            if (nature) content += `${nature}\n`;
            content += `.MetDate=${metDate}\n`;
            content += `.Ribbons=$suggestAll\n`;
            content += `${moves}\n`;
            content += `\n`;

            //console.log(content);
        }
        catch (err) {
            console.error(`Error processing ${name}:`, err);
        }
    });

    fs.writeFileSync(filename, content.trim() + '\n');
}
