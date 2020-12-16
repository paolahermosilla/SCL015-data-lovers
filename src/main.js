//import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';

let array = data.pokemon;

for(let i = 0; i < array.length; i++){
     console.log(array[i])
}

document.getElementById("pizarra").innerHTML = data.pokemon[0];

//console.log(data.pokemon);
// import data from './data/rickandmorty/rickandmorty.js';



document.getElementById("enter_button").addEventListener("click", function(){
     document.getElementById("page_one").style.display = "none";
     document.getElementById("page_two").style.display = "block";
});

document.getElementById("return_button").addEventListener("click", function(){
     document.getElementById("page_two").style.display = "none";
     document.getElementById("page_one").style.display = "block";
});
