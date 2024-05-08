const getPokemon = "https://pokeapi.co/api/v2/pokemon?limit=151";
//allPokeContainer = ogPokemon;
dropDown = document.getElementById('pokelist')
//const dropName = document.createElement("option");
function ogPokemon() {
    fetch (getPokemon)
        .then ( response =>
            response.json()
        )
        .then (function (allpokemon){
            //const pokeName = allpokemon.name
            allpokemon.results.forEach(
                function fetchPokemonData(pokemon) {
                    let url = pokemon.url
                    fetch(url)
                    .then(response => response.json())
                    .then (function (pokeData){
                        
                    })
            }
        )
        }
        );
};
//function createDropdown () {
 //   
  //  .createElement('option')
  //  .add(allPokeContainer.name, null)
//}
//createDropdown();
ogPokemon();