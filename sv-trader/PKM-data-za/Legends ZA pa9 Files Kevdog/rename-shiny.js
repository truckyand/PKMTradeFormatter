const fs = require('fs');
const path = require('path');

// Get all files matching pattern: "NNNN - Name - HASH" (with optional .pa9)
const files = fs
  .readdirSync('.')
  .filter(file => /^\d+\s+-\s+.+\s+-\s+[A-F0-9]+(?:\.pa9)?$/i.test(file));

console.log(`Found ${files.length} .pa9 files to rename\n`);

let successCount = 0;
let errorCount = 0;

files.forEach(filename => {
  // Parse the filename to extract the Pokemon name
  // Accepts: "0001 - Bulbasaur - 69E5B3D7AAA6" or with ".pa9"
  const match = filename.match(/^\d+\s+-\s+(.+?)\s+-\s+[A-F0-9]+(?:\.pa9)?$/i);

  if (match) {
    const pokemonName = match[1];
    const newFilename = `${pokemonName}.pa9`;

    try {
      fs.renameSync(filename, newFilename);
      console.log(`✓ Renamed: ${filename} -> ${newFilename}`);
      successCount++;
    } catch (error) {
      console.error(`✗ Error renaming ${filename}: ${error.message}`);
      errorCount++;
    }
  } else {
    console.log(`? Skipped (doesn't match pattern): ${filename}`);
  }
});

console.log(`\n--- Summary ---`);
console.log(`Successfully renamed: ${successCount}`);
console.log(`Errors: ${errorCount}`);
console.log(`Total processed: ${files.length}`);
