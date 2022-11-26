const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonToLi(name, img, id) {
    return (`<li class="pokemon">
        <span class="number">#${id}</span>
        <span class="name">${name}</span>

        <div class="detail">
            <ol class="types">
                <li class="type">grass</li>
                <li class="type">poison</li>

            </ol>
            <img src="https://raw.githubusercontent.com/pokeAPI/sprites/master/sprites/pokemon/other/dream-world/${img}.svg" alt="${name}">
        </div>
    </li>`)
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {

    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
        
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