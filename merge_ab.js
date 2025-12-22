import { wt } from './sv-trader/dex-bdsp/0000-a.js';
import { At } from './sv-trader/dex-bdsp/0000-b.js';
import fs from 'fs';

const mergedData = { ...wt, ...At };

const content = `export const data = ${JSON.stringify(mergedData, null, 4)};`;

fs.writeFileSync('./sv-trader/dex-bdsp/0000-data.js', content);
console.log('0000-data.js created by merging 0000-a.js and 0000-b.js.');