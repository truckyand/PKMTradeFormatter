const fs = require('fs');

// Read the m1_top10.md file
const content = fs.readFileSync('champions/m1_top10.md', 'utf8');

// Split into sections by Pokémon entries
const sections = content.split(/\n(?=# #\d+)/).filter(section => section.trim());

let result = `# Pokémon Champions — Singles Top 20 Usage Stats

Source: https://game8.co/games/Pokemon-Champions/archives/595375 (Usage Stats & Battle Data, Top 20)
Season M-1 · Singles · last updated 2026-04-22.

> Methodology — for each Pokémon, taken straight from the usage data:
> - **EV spread:** the single most-used spread (with its usage %).
> - **Nature:** the most-used nature.
> - **Moves:** the top 4 moves by usage %.
> - **Held item:** the most-used held item.
>
> Conventions (same as m1.md):
> - **Game → TID/SID:** generated in the earliest game the species is native to — Sword/Shield (\`TID 331778 / SID 2401\`) first, Scarlet/Violet (\`TID 391666 / SID 2164\`) fallback. Game noted per entry.
> - **Held item:** most-used item goes on the species line. For the 6 Mega-evolving picks the most-used item IS the Mega Stone, which can't be equipped in SwSh/SV, so it's noted in the \`#\` comment and the slot is left empty (equip it in Champions).
> - **Species:** base forms; Mega Evolution is a Champions battle state.
> - **Ball: Poke Ball.** EVs use Champions' 32-point stat system. No Ability/Tera lines (Champions; only moves/nature/item requested).

`;

// Process each section
sections.forEach((section, index) => {
    // Extract the Pokémon info
    const lines = section.trim().split('\n');

    if (lines.length < 1) return;

    // Get the header line to extract Pokémon name and game info
    const headerLine = lines[0];
    const match = headerLine.match(/# #(\d+)\s+(.+?)\s*— Game:\s*(.+?)(?:\s+\|\s+Champions mega stone:\s+(.+))?/);

    if (!match) {
        console.log(`Could not parse header line: ${headerLine}`);
        return;
    }

    const rank = match[1];
    let pokemonName = match[2].trim();
    const game = match[3].trim();
    const megaStone = match[4];

    // Determine TID/SID based on game
    let tidSid = "TID 331778 / SID 2401";
    if (game.includes("Scarlet/Violet")) {
        tidSid = "TID 391666 / SID 2164";
    }

    // Extract the Pokémon details
    let itemLine = "";
    let ivsLine = "";
    let evsLine = "";
    let natureLine = "";
    let movesLines = [];

    // Find the item line (starts with @)
    const itemMatch = lines.find(line => line.includes('@'));
    if (itemMatch) {
        itemLine = itemMatch.trim();
    }

    // Find the IVs line
    const ivsMatch = lines.find(line => line.startsWith("IVs:"));
    if (ivsMatch) {
        ivsLine = ivsMatch.trim();
    }

    // Find the EVs line
    const evsMatch = lines.find(line => line.startsWith("EVs:"));
    if (evsMatch) {
        evsLine = evsMatch.trim();
    }

    // Find the nature line
    const natureMatch = lines.find(line => line.endsWith("Nature"));
    if (natureMatch) {
        natureLine = natureMatch.trim();
    }

    // Extract moves (lines that start with -)
    movesLines = lines.filter(line => line.startsWith('-')).slice(0, 4);

    // Create the output for this Pokémon
    result += `\n# ${pokemonName} — Game: ${game}`;

    if (megaStone) {
        result += ` | equip in Champions: ${megaStone}`;
    }

    result += `\n.bt ${pokemonName}${itemLine ? ` @ ${itemLine.split('@')[1].trim()}` : ''}`;
    result += `\nShiny: Yes`;
    result += `\nOT: trucky`;
    result += `\nOTGender: Female`;

    if (game.includes("Scarlet/Violet")) {
        result += `\nTID: 391666`;
        result += `\nSID: 2164`;
    } else {
        result += `\nTID: 331778`;
        result += `\nSID: 2401`;
    }

    result += `\nBall: Poke Ball`;
    result += `\nLanguage: English`;
    result += `\n${ivsLine}`;
    result += `\n.MetDate=${getMetDate(rank)}`;
    result += `\n${evsLine}`;
    result += `\n${natureLine}`;

    movesLines.forEach(move => {
        result += `\n${move}`;
    });

    result += `\n`;
});

// Function to generate met dates (we'll use a simple pattern)
function getMetDate(rank) {
    const baseYear = 2026;
    const baseMonth = 1; // January
    const baseDay = 1;

    const rankNum = parseInt(rank);
    const dayOffset = rankNum * 3; // Simple spacing

    const date = new Date(baseYear, baseMonth - 1, baseDay + dayOffset);
    return `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}`;
}

console.log(result);

// Write the result to a file
fs.writeFileSync('champions/m1_top10_processed.md', result);
console.log("Processed file saved as champions/m1_top10_processed.md");