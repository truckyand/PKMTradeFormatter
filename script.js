// Function to handle form submission
document.getElementById('filterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const species = document.getElementById('species').value.toLowerCase();
    const game = document.getElementById('game').value.toLowerCase();
    
    const files = {
        'lgpe': 'lgpe.json',
        'swsh': 'swsh.json',
        'bdsp': 'bdsp.json',
        'pla': 'pla.json',
        'sv': 'sv.json'
    };
    
    const selectedFiles = game ? [files[game]] : Object.values(files);
    
    Promise.all(selectedFiles.map(file => fetch(file).then(response => response.json())))
        .then(dataArray => {
            const allPokemon = dataArray.flat();
            const filteredPokemon = allPokemon.filter(pokemon => 
                (!species || pokemon.name.toLowerCase().includes(species))
            );
            displayResults(filteredPokemon);
        })
        .catch(error => console.error('Error fetching Pokémon data:', error));
});

function displayResults(pokemonList) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
    
    if (pokemonList.length === 0) {
        resultsContainer.innerHTML = '<li>No matching Pokémon found.</li>';
        return;
    }
    
    pokemonList.forEach(pokemon => {
        const listItem = document.createElement('li');
        listItem.textContent = `#${pokemon.id} ${pokemon.name}`;
        listItem.addEventListener('click', () => copyToClipboard(pokemon.name));
        resultsContainer.appendChild(listItem);
    });
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const message = document.createElement('span');
        message.textContent = `Copied: ${text}`;
        message.style.color = 'green';
        message.style.marginLeft = '10px';
        document.body.appendChild(message);
        setTimeout(() => message.remove(), 1000);
    }).catch(err => console.error('Error copying text:', err));
}
