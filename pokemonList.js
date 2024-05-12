const getPokemon = "https://pokeapi.co/api/v2/pokemon?limit=151";
const dropDown = document.querySelector('#pokelist');
const addEle = document.createElement('option');
const selector = document.getElementById('pokemon');
function createDropdown () {

    fetch (getPokemon)
    .then ( response =>
        response.json()
    )
    .then(function(allpokemon){
        allpokemon.results.forEach(function(pokemon){
            addEle.text = pokemon.name
            addEle.value = 'pokemon'
            dropDown.append(addEle)
            console.log(addEle);
        })
    })
};
createDropdown()