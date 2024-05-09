const getPokemon = "https://pokeapi.co/api/v2/pokemon?limit=151";
function ogPokemon() {
    fetch (getPokemon)
        .then ( response =>
            response.json()
        )
        .then (function (allpokemon){
            pokeName = ""
            allpokemon.results.forEach(
                function fetchPokemonData(pokemon) {
                    let url = pokemon.url
                    let pokeName = pokemon.name
                    fetch(url)
                    .then(response => response.json())
                    .then (function (pokeData){
                        console.log(pokeData)
                        addEle.text = pokeName;
                        dropDown.add(addEle);
                    })
                    
                }
                ) 
        }
        );
};
ogPokemon();