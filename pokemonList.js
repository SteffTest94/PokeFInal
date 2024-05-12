const getPokemon = "https://pokeapi.co/api/v2/pokemon?limit=151";
const dropDown = document.querySelector('#pokelist');
const addEle = document.createElement('option');
const selector = document.getElementById('pokemon');



document.addEventListener("DOMContentLoaded", () =>{
let allPokemonContainer = document.querySelector('#poke-container')
let generateBtn = document.querySelector('#generate-pokemon')
dropDown.addEventListener('select', selectOption)

function selectOption () {
    chosenOption = getSelection()
    if (chosenOption != 'Select') {
        renderSinglePokemon()
    } else {
    }


}
    generateBtn.addEventListener('click', renderEverything)


function renderEverything(){
    let allPokemonContainer = document.querySelector('#poke-container')
    allPokemonContainer.innerText = "";
    fetchPokemon();
}
function renderSinglePokemon() {
    let allPokemonContainer = document.querySelector('#poke-container')
    allPokemonContainer.innerText = ""
    fetchPokemon()
    console.log(allPokemonContainer.innerText)
}

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
    .then(function(singlepokemon){
        let findPokemon = getSelection()
        let foundPokemon = singlepokemon.results.filter((results) =>
            singlepokemon.name = findPokemon
        )
        fetchPokemonData(foundPokemon)
    })
    })
}

function fetchPokemonData(pokemon){
    let url = pokemon.url 
    fetch(url)
    .then(response => response.json())
    .then(function(pokeData){
        renderPokemon(pokeData)
    })
}

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