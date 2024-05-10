const getPokemon = "https://pokeapi.co/api/v2/pokemon?limit=151";
const dropDown = document.getElementById('pokelist');
const addEle = document.createElement('option');
function createDropdown () {
    fetch (getPokemon)
    .then ( response =>
        response.json()
    )
    .then (function (allpokemon){
        allpokemon.results.forEach(
            function fetchPokemonData(pokemon) {
                name: pokemon.name
                }
            )
    for (i = 0; i < allpokemon.results.length; i++) {
    addEle.text = allpokemon.results[i].name
    addEle.value = +i
    dropDown.add(addEle)
    console.log(addEle)
    console.log(allpokemon.results.length)
    }
    }
    );
};
createDropdown();