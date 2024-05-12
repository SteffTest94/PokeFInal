const getPokemon = "https://pokeapi.co/api/v2/pokemon?limit=151";
const dropDown = document.getElementById('pokelist');
const addEle = document.createElement('option');
const selector = document.getElementById('pokemon');
function createDropdown () {
    let selector = document.getElementById('pokemon');
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
        addEle.value = 'pokemon'
        dropDown.add(addEle)
        console.log(addEle)
        console.log(allpokemon.results.length)
    }
    }
    );
};

function pokeGrab() {
    fetch (getPokemon)
        .then ( response =>
            response.json()
        )
        .then (function (allpokemon) {
            pokeName = ""
            allpokemon.results.forEach(
                function fetchPokemonData(pokemon) {
                    let url = pokemon.url
                    let pokeName = pokemon.name
                    fetch(url)
                    .then(response => response.json())
                    .then (function (pokeData){
                        console.log(pokeData)
                        //addEle.text = pokeName;
                        //dropDown.add(addEle);
                    })
                    
                }
                ) 
        }
        );
};
createDropdown();
selector.onselect(pokeGrab());