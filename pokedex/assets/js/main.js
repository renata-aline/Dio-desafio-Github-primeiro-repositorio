// const offset = 0;
// const limit = 10;
// const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 11
const limit = 5
let offset = 0



function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type" ${type}>${type}</li>`).join('')}
            </ol>
            <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
    </li>
`
}
function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordNexPage = offset + limit

    if (qtdRecordNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)


        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }

})

/*const listItems = [];
 
 for (let i = 0; i < pokemons.length; i++) {
     
     const pokemon = pokemons[i];
     pokemon.img = i + 1;
     pokemon.id = i + 1;
     
     listItems.push(convertPokemonToLi(pokemon.name, pokemon.img, pokemon.id))
 }
 
 pokemonList.innerHTML  = listItems.join('');
})*/