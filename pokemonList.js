const getPokemon = "https://pokeapi.co/api/v2/pokemon?limit=151";

//to help keep things together
document.addEventListener("DOMContentLoaded", () =>{
//consistent lets / backend utils
const dropDown = document.querySelector('#pokelist');
const addEle = document.createElement('option');
// unnecessary for now //const selector = document.getElementById('pokemon');
let allPokemonContainer = document.querySelector('#poke-container')
let generateBtn = document.querySelector('#generate-pokemon')
dropDown.addEventListener('select', selectOption)

//attempt to trigger single pokemon generation on select.
//button may be better solution
function selectOption () {
    chosenOption = getSelection()
    if (chosenOption != 'Select') {
        renderSinglePokemon()
    } else {
    }


}

//button event
generateBtn.addEventListener('click', renderSinglePokemon)


//sends all pokemon to index page, does not have photos
function renderEverything(){
    let allPokemonContainer = document.querySelector('#poke-container')
    allPokemonContainer.innerText = "";
    fetchPokemon();
}

//attempt at rendering everything
function renderSinglePokemon() {
    let allPokemonContainer = document.querySelector('#poke-container')
    allPokemonContainer.innerText = ""
    fetchLonePokemon()
    console.log(allPokemonContainer.innerText)
}

//initial fetch for all pokemon
function fetchPokemon(){
    fetch(getPokemon)
    .then(response => response.json())
    .then(function(allpokemon){
        allpokemon.results.forEach(function(pokemon){
            addEle.text = pokemon.name
            addEle.value = 'pokemon'
            dropDown.append(addEle)
            console.log(addEle)
            fetchPokemonData(pokemon);
        })
    })
}
//attempt to fetch single pokemon. may switch methods?
function fetchLonePokemon(){
    fetch(getPokemon)
    .then (response => response.json())
    .then (function(singlepokemon){
        singlepokemon.results.forEach(function(pokemon){
        let findPokemon = getSelection()
        let foundPokemon = singlepokemon.results.filter((singlepokemon) =>
            singlepokemon.name = findPokemon)
        console.log(foundPokemon)
        fetchPokemonData(pokemon)   
    })

    fetchPokemonData(foundPokemon)
}
)}

//fetching all pokemon data
function fetchPokemonData(pokemon){
    let url = pokemon.url 
    fetch(url)
    .then(response => response.json())
    .then(function(pokeData){
        renderPokemon(pokeData)
    })
}

//renders ALL pokemon (currently). usefull as it creates divs
//on webpage
function renderPokemon(pokeData){
    let allPokemonContainer = document.getElementById('poke-container');
    let pokeContainer = document.createElement("div") //div will be used to hold the data/details for indiviual pokemon.{}
    let pokeName = document.createElement('h4')
    pokeName.innerText = pokeData.name
    let pokeNumber = document.createElement('p')
    pokeNumber.innerText = `#${pokeData.id}`
    let pokeTypes = document.createElement('ul') 
    //ul list will hold the pokemon types
    createTypes(pokeData.types, pokeTypes) 
    // helper function to go through the types array and create li tags for each one
    pokeContainer.append(pokeName, pokeNumber, pokeTypes);   
    //appending all details to the pokeContainer div
    allPokemonContainer.appendChild(pokeContainer);       
    //appending that pokeContainer div to the main div which will                                                             hold all the pokemon cards
}

//createes sepperate type 'sheet'
function createTypes(types, ul){
    types.forEach(function(type){
        let typeLi = document.createElement('li');
        typeLi.innerText = type['type']['name'];
        ul.append(typeLi)
    })
}


function createDropdown () {
    fetch(getPokemon)
    .then(response => response.json())
    .then(function(allpokemon){
        allpokemon.results.forEach(function(pokemon){
            addEle.text = pokemon.name
            addEle.value = 'pokemon'
            dropDown.append(addEle)
            //console.log(addEle)
        })
    })
}
createDropdown()
})