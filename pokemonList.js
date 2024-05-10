const getPokemon = "https://pokeapi.co/api/v2/pokemon?limit=151";
const dropDown = document.getElementById('pokelist');
let addEle = document.createElement('option');
function createDropdown () {
    fetch (getPokemon)
    .then ( response =>
        response.json()
    )
    .then (function (allpokemon){
        pokeName = ""
        allpokemon.results.forEach(
            function fetchPokemonData(pokemon) {
                let url = pokemon.url
               // let pokeName = pokemon.name
                fetch(url)
                .then(response => response.json())
                .then (function (pokeData){
                    pokeName = pokeData.name
                   // names = [pokeName]
                    //names.push(pokeName)
                    addEle.value = null
                    addEle.text = pokeName
                    console.log(addEle)
                  //  for (i in names) {
                        
                  //  }
                })
                
            }
            )
    }
    );
};
createDropdown();
