// To import the array with objects with information and characteristics about all 251 Pokémon
import data from './data/pokemon/pokemon.js';

// To import the logic of the four functions from data.js that allows the user to interact with the website
import { filterData } from './data.js';
import { sortDataAZ } from './data.js';
import { sortDataZA } from './data.js';
import { search } from './data.js';

// Event: When clicking on the Pokeball button, you can go from the first page to the second one
document.getElementById("enter_button").addEventListener("click", function(){
     document.getElementById("page_one").style.display = "none";
     document.getElementById("page_two").style.display = "block";
});

// Event: When clicking on the house button, you can go from the second page to the first one
document.getElementById("return_button").addEventListener("click", function(){
     document.getElementById("page_two").style.display = "none";
     document.getElementById("page_one").style.display = "block";
});


// function that displays all 251 Pokémon when you go to the second page
function pokemonList(array){
     let list = "";
     for(let i = 0; i < array.length; i++){//agregamos el id para poder identificarlo luego
          list += `<div class= "cards" id="${array[i].num}"> 
          <img src="${array[i].img}">
          <p><span>${array[i].num}</span>: ${array[i].name.toUpperCase()}</p>
          <p>Type: ${array[i].type}</p>
          <p><span>Size: ${array[i].size.height}</span>, ${array[i].size.weight}</p>
          </div>`
     }
     return list;
}
document.getElementById("pokemon_list").innerHTML = pokemonList(data.pokemon);


// function that orders all 251 Pokémon in alphabetical order (A to Z)
document.getElementById("orderAZ").addEventListener("click", function alphabeticalOrderAZ(){
    let array = data.pokemon;
    document.getElementById("pokemon_list").innerHTML = pokemonList(sortDataAZ(array));
});

// function that orders all 251 Pokémon in reverse alphabetical order (Z to A)
document.getElementById("orderZA").addEventListener("click", function alphabeticalOrderZA(){
    let array = data.pokemon;
    document.getElementById("pokemon_list").innerHTML = pokemonList(sortDataZA(array));
});


// function to select only one specific Pokémon type and that displays that type of Pokémon 
function searchType(){
     let array = data.pokemon;
     let typePokemon = document.getElementById("type_select").value;

     document.getElementById("pokemon_list").innerHTML = pokemonList(filterData(array, typePokemon));

     // Event: When clicking on the red button, Pokémon of the selected type are ordered in alphabetical order (A to Z)
     document.getElementById("orderAZ").addEventListener("click", function alphabeticalOrderAZ(){
          document.getElementById("pokemon_list").innerHTML = pokemonList(sortDataAZ(filterData(array, typePokemon)));
     });

     // Event: When clicking on the blue button, Pokémon of the selected type are ordered in reverse alphabetical order (Z to A)
     document.getElementById("orderZA").addEventListener("click", function alphabeticalOrderZA(){
          document.getElementById("pokemon_list").innerHTML = pokemonList(sortDataZA(filterData(array, typePokemon)));
     });
}
document.getElementById("type_select").addEventListener("change", searchType);


// function to search some specific Pokémon depending on the characters the user writes on the search bar
function filterLetter(){
     let array = data.pokemon;
     let text = document.getElementById("search_box").value.toLowerCase();

     document.getElementById("pokemon_list").innerHTML = pokemonList(search(array, text));

     if(search(array, text) == false){
          document.getElementById("pokemon_list").innerHTML = 
          `<div class= "not_found">
          <p>"Pokémon not found"</p>
          </div>`
     }
}
document.getElementById("search_box").addEventListener("keyup", filterLetter);