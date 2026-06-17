# PKMTradeFormatter

A personal Pokémon **dex/trade formatting toolkit**. It turns source datasets and
raw save files into **PKHeX "Showdown set" text blocks** (the `.bt` / TSV format
PKHeX's batch editor and Showdown-set importer consume), each stamped with the
owner's per-game trainer identity (OT/TID/SID). End goal: produce legal, ready-to-
import sets for a living dex across the Switch-era games.

Source data comes from **pkmgg / pkmfans.com** (see `README.md`). Raw Pokémon are
PKHeX-format binary files (`.pa8`/`.pk9`/`.pa9`/`.pk8`) exported from saves.

## Trainer identity (OT = `trucky`)

These are the authoritative per-game values injected into every generated set.
Keep them consistent when writing generators; they are the whole point of the repo.

| Game            | OT      | OTGender | TID     | SID  |
|-----------------|---------|----------|---------|------|
| Let's Go (LGPE) | trucky  | Female   | 727928  | 2120 |
| Sword/Shield    | trucky  | Female   | 331778  | 2401 |
| Scarlet/Violet  | trucky  | Female   | 391666  | 2164 |
| Legends: Arceus | trucky  | Female   | 758975  | 4118 |
| Legends: Z-A    | trucky  | Female   | 758975  | 4118 | (shares PLA trainer)
| BDSP            | trucky  | —        | —       | —    | (not yet defined)

> `index.html` still hardcodes `OTGender: Male` for some games; the **generated TSV
> output uses Female**. Treat the TSV output as the source of truth, not `index.html`.

## The canonical output format

Every generator emits blocks like this (PKHeX batch-editor / Showdown-set syntax):

```
.bt Bulbasaur              ← ".bt " opens a batch-import block; species may be "<Name> @ <Item>"
Shiny: Yes
OT: trucky
OTGender: Female
TID: 391666
SID: 2164
Ball: Poke Ball
Language: English
IVs: 31 HP / 31 Spe / 31 Def / 31 SpD / 31 Atk / 31 SpA
.MetDate=20230723
EVs: 252 SpA / 4 SpD / 252 Spe
Ability: Chlorophyll
Tera Type: Poison          ← Gen 9 (SV) only
Timid Nature
- Protect
- Sunny Day
- Growl
- Helping Hand
```

Conventions:
- **`.bt`** prefixes a batch-import block. Multiple blocks per file are separated by blank lines.
- **`$suggestAll`** (e.g. `.Moves=$suggestAll`, `.Ribbons=$suggestAll`) tells PKHeX to auto-fill all legal moves/ribbons.
- **`.MetDate=YYYYMMDD`** is a random date in a plausible range (each generator picks its own).
- The competitive body — **EVs / Ability / Nature / Tera Type / moves** — comes from the pkmgg `meta_set` field; the generator **injects** OT/TID/SID/Ball/IVs/Shiny/MetDate and strips the `Name`/`Shiny`/`Level` lines that `meta_set` would duplicate.

## Repository layout

### Root — source data + web viewer + one-off scripts
- `lgpe.json` / `swsh.json` / `bdsp.json` / `pla.json` / `sv.json` — per-game source dex (id + name).
- `pkmgg_sorted_*_pokemon.json` — pkmgg datasets keyed by national-dex id. Each entry has `species`, `species_id`, `meta_set`, `legal_pokeballs`, `shiny_locked`, `is_legendary`, `generation`, `moves`, `abilities`. **`meta_set` is the showdown set that gets injected.**
- `pokemon_games.json` — game metadata reference.
- `paldea*star.json`, `kitakami*star.json`, `sv-sort.json`, `7star_tera_raid_events_new.csv` — Tera-raid seed/event data.
- `index.html` + `script.js` + `style.css` (+ `swsh.html`) — browser **dex viewer**: filter by species/game/gen/legendary, click a Pokémon to copy its generated set to clipboard.
- `server.js` — tiny Express server serving the viewer (`node server.js` → http://localhost:3000; `/list` serves repo root). NOTE: it reads `scarlet6iv5star.json` which is not present — viewer works fine without that API route.
- One-off scripts (run from repo root): `generate_lgpe_dex.js`, `count_items.js`, `merge_ab.js`, `process_c.js`, `sort_and_filter.js`.
- `scripts/fix_keys.js` — quotes unquoted JSON keys in a file (run with a path arg).

### `sv-trader/` — the main working area
- **`PKM-data-{arceus,sv,za}/`** — raw PKHeX-format files. Filenames encode `<dex#>[★] - <Species> - <EC hex>.<ext>` (★ = shiny; EC = encryption constant). Two naming styles exist (e.g. `006 - Charizard - ….pk9` and `7dd5bceb_0006_-_Charizard_-….pa9`). `.bak` files are backups.
  - `.pa8` = Legends: Arceus, `.pa9` = Legends: Z-A, `.pk8` = Sword/Shield, `.pk9` = Scarlet/Violet.
- **`dex-{lgpe,swsh,swsh-pk8,swsh-mystery-gift,bdsp,pla,sv}/`** — generated Showdown-set TSV output + per-game helper data. TSV files are chunked ~6 Pokémon per file, named by id range (`NNNN-NNNN.tsv`).
- **`legendary/`, `legendary-shiny/`, `legend-za/`** — legendary/mythical-focused sets. `legend-za/` is the current active work (Legends: Z-A DLC).
- **`sv-raids/`, `sv-raid-hydreigon.txt`** — raid seed data.
- **`collector/`** — long-form box-planning notes/markdown.
- **`output-old/`** — superseded TSV chunks (archive).
- Generator/parser scripts (run from **inside `sv-trader/`**, note `../` paths to root data):
  - `sv-parser.js` — generic dex→TSV generator (hardcoded config at top: `srcFile`, `metasetFile`, `outputDir`, `LEGENDARY_ONLY`, `chunkSize`).
  - `sv-parser-legend.js` — legendary-only generator.
  - `legend.js` — exports `LegendaryMythicalList` (a `Set`) used to filter legendaries.
  - `swsh-compare.js` — diffs `swsh.json` vs the pkmgg array, writes `missing.txt` / `metaset-only.txt`.
  - `sv_pokemon.js` — large embedded Pokémon data table.

## How to work in this repo

- **Data is the deliverable; scripts are ad-hoc.** Most generators hardcode the game's TID/SID/Ball/output dir at the top. To target a different game, copy a generator and change those constants + the `srcFile`/`metasetFile` — don't try to generalize them.
- **Mind the working directory.** `sv-trader/*.js` use `../` to reach root data (`../swsh.json`, `../pkmgg_sorted_pla_pokemon.json`); run them from `sv-trader/`. Root scripts use paths relative to the repo root.
- **Runtime:** Node v22 (ESM `import` and CJS `require` are both used — match the file's existing style). Only real dependency is `express` (`package.json`); `node_modules/` is gitignored.
- **Don't edit `meta_set` by hand** — it's source data from pkmgg. Generators strip its `Name`/`Shiny`/`Level` lines and inject identity fields instead; preserve that transform when writing new generators.
- **PKM `.bak` files** are backups — leave them.

## Notes
- `test.md` (untracked) is unrelated scratch content, not part of the project.
- Source site: https://pkmfans.com (pkmgg).
