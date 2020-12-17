//import { example } from './data.js';
// import data from './data/lol/lol.js';
// import data from './data/rickandmorty/rickandmorty.js';

import data from './data/pokemon/pokemon.js';

function pokemonList(){
     let array = data.pokemon;
     let list = "";
     for(let i = 0; i < array.length; i++){  
          `<div class = "all-card">
               list += `<img src="${array[i].img}">`+array[i].num+": "+array[i].name+". Type: "+array[i].type+". Size: "
               +array[i].size.height+", "+array[i].size.weight+"."+"<br>";
          </div>`;


          console.log(array[i].name);
          console.log(array[i].type);
          console.log(array[i].size);
     }

     return list;
}

document.getElementById("pokemon_list").innerHTML = pokemonList();

console.log(data.pokemon);

document.getElementById("enter_button").addEventListener("click", function(){
     document.getElementById("page_one").style.display = "none";
     document.getElementById("page_two").style.display = "block";
});

document.getElementById("return_button").addEventListener("click", function(){
     document.getElementById("page_two").style.display = "none";
     document.getElementById("page_one").style.display = "block";
});
