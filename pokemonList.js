import {results} from "./pokedex.json";
let dropDown = document.getElementById('pokelist');
let addEle = document.createElement('option');
function createDropdown () {
for (let entry in {results}
) {
    addEle.text = entry.name;
    dropDown.add(addEle);
};};
createDropdown();