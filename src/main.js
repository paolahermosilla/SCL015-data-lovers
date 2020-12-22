//import { example } from './data.js';
//import data from './data.js';//
import data from './data/pokemon/pokemon.js';

document.getElementById("enter_button").addEventListener("click", function(){
     document.getElementById("page_one").style.display = "none";
     document.getElementById("page_two").style.display = "block";
});

document.getElementById("return_button").addEventListener("click", function(){
     document.getElementById("page_two").style.display = "none";
     document.getElementById("page_one").style.display = "block";
});


function pokemonList(array){
     let list = "";
     for(let i = 0; i < array.length; i++){//agregamos el id para poder identificarlo luego
               list += `<div class= "cards" id="${array[i].num}"> 
               <img src="${array[i].img}">
               <p><span>${array[i].num}</span>: ${array[i].name}</p>
               <p>Type: ${array[i].type}</p>
               <p><span>Size: ${array[i].size.height}</span>, ${array[i].size.weight}</p>
               </div>`
          
          //console.log(array[i].name);
          //console.log(array[i].type);
          //console.log(array[i].size);
     }

     return list;
}

document.getElementById("pokemon_list").innerHTML = pokemonList(data.pokemon);

console.log(data.pokemon);


// //document.getElementById("orderAZ").addEventListener("click", function(){
//      document.getElementById("pokemon_list").innerHTML = "";
// });

// document.getElementById("orderZA").addEventListener("click", function(){
//      document.getElementById("pokemon_list").innerHTML = "";
// });


function searchType(){
     let array = data.pokemon;
     let x = document.getElementById("type_select").value;
     console.log(x);
     console.log("hola");

     let filterType = array.filter(pokemon => pokemon.type.includes(x));
     console.log(filterType);

     document.getElementById("orderAZ").addEventListener("click", function alphabeticalOrderA(){
          let array = filterType;
          let filterOrderA = array.sort((a, b) => {
               return a.name > b.name ? 1 : -1 ;
          });
          console.log(filterOrderA);
          document.getElementById("pokemon_list").innerHTML = pokemonList(filterOrderA);
     });

     document.getElementById("orderZA").addEventListener("click", function alphabeticalOrderA(){
          let array = filterType;
          let filterOrderZ = array.sort((a, b) => {
               return a.name < b.name ? 1 : -1 ;
          });
          console.log(filterOrderZ);
          document.getElementById("pokemon_list").innerHTML = pokemonList(filterOrderZ);
     });

     document.getElementById("pokemon_list").innerHTML = pokemonList(filterType);
};

document.getElementById("type_select").addEventListener("change", searchType);


document.getElementById("orderAZ").addEventListener("click", function alphabeticalOrderA(){
     let array = data.pokemon;
     let filterOrderA = array.sort((a, b) => {
          return a.name > b.name ? 1 : -1 ;
     });
     console.log(filterOrderA);
     document.getElementById("pokemon_list").innerHTML = pokemonList(filterOrderA);
             //document.getElementById("pokemon_list").innerHTML = "";
          //    (pokemon => pokemon.name);
});

document.getElementById("orderZA").addEventListener("click", function alphabeticalOrderZ(){
     let array = data.pokemon;
     let filterOrderZ = array.sort((a, b) => {
          return a.name < b.name ? 1 : -1 ;
     });
     console.log(filterOrderZ);
     document.getElementById("pokemon_list").innerHTML = pokemonList(filterOrderZ);
             //document.getElementById("pokemon_list").innerHTML = "";
          //    (pokemon => pokemon.name);
});

// document.getElementById("type_select").addEventListener("change", searchType);


// const dataPokemon = data.pokemon;
// const printData = (dataPokemonParameter) => {
//      listPokemon.innerHTML = "";
//      for(let i = 0; i < dataPokemonParameter.length; i++){  
//           let card = htmltoElements (
//                `<div class = "all-card">
//                     <img src='${dataPokemonParameter[i].img}'/>
//                     <p>${dataPokemonParameter[i].name}</p>
//                     <button class="button-card">Ver Perfil</button>
//                </div>`);
//           listPokemon.appendChild(card);
//           card.addEventListener("click", function(){
//                printModal(dataPokemonParameter[i])
//                containerModal.style.display = "block";
//           }) 
//      }
//  