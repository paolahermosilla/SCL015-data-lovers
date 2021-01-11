import data from './data/pokemon/pokemon.js';
import { filterData } from './data.js';
import { sortDataAZ } from './data.js';
import { sortDataZA } from './data.js';
import { search } from './data.js';

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
          <p><span>${array[i].num}</span>: ${array[i].name.toUpperCase()}</p>
          <p>Type: ${array[i].type}</p>
          <p><span>Size: ${array[i].size.height}</span>, ${array[i].size.weight}</p>
          </div>`
     }
     return list;
}
document.getElementById("pokemon_list").innerHTML = pokemonList(data.pokemon);
console.log(data.pokemon);


document.getElementById("orderAZ").addEventListener("click", function alphabeticalOrderAZ(){
    let array = data.pokemon;
    document.getElementById("pokemon_list").innerHTML = pokemonList(sortDataAZ(array));
});

document.getElementById("orderZA").addEventListener("click", function alphabeticalOrderZA(){
    let array = data.pokemon;
    document.getElementById("pokemon_list").innerHTML = pokemonList(sortDataZA(array));
});


function searchType(){
     let array = data.pokemon;
     let typePokemon = document.getElementById("type_select").value;
     console.log(typePokemon);

     document.getElementById("pokemon_list").innerHTML = pokemonList(filterData(array, typePokemon));

     document.getElementById("orderAZ").addEventListener("click", function alphabeticalOrderAZ(){
          document.getElementById("pokemon_list").innerHTML = pokemonList(sortDataAZ(filterData(array, typePokemon)));
     });
     
     document.getElementById("orderZA").addEventListener("click", function alphabeticalOrderZA(){
          document.getElementById("pokemon_list").innerHTML = pokemonList(sortDataZA(filterData(array, typePokemon)));
     });
}
document.getElementById("type_select").addEventListener("change", searchType);


function filterLetter(){
     let array = data.pokemon;
     let text = document.getElementById("search_box").value.toLowerCase();
     console.log(text);

     document.getElementById("pokemon_list").innerHTML = pokemonList(search(array, text));

     if(search(array, text) == false){
          document.getElementById("pokemon_list").innerHTML = 
          `<div class= "not_found">
          <p>"Pokémon not found"</p>
          </div>`
     }
}
document.getElementById("search_box").addEventListener("keyup", filterLetter);




// const formulario = document.querySelector("#search_box");
// const boton = document.querySelector("#search_button");
// const resultado = document.querySelector("pokemon_list")

// const filtrar = () => {
//      console.log(formulario.value)
//      let array = data.pokemon;
//      const texto = formulario.value.toLowerCase();
//      resultado.innerHTML = "";

//      for(pokemon of array){
//           let nombre = pokemon.name.toLowerCase();
//           if(nombre.indexOf(texto) !== -1){
//                resultado.innerHTML += pokemonList
//           }
//      }
     
//      if(resultado.innerHTML === ""){
//           resultado.innerHTML = "Pokemon not found"
//      }
     
// }

// boton.addEventListener("click", filtrar);


// let array = data.pokemon;
// let text = document.getElementById("search_box").value.toLowerCase();
// console.log(text);

// const searchPokemon = (PokemonArray, txt) => {
//      let resultsArray = [];

//      for(let i = 0; i < PokemonArray.length; i++){
//           if(PokemonArray[i].name.charAt(0) === txt){
//                resultsArray.push(PokemonArray[i]);
//           }
//      }
//      pokemonList(resultsArray);
// }
// console.log(searchPokemon(array, text));


// let array = data.pokemon;
// let pokemonToBeFound = "p";

// const searchPokemon = (arrayOfPokemonObjects, pokemonToFind) => {
//      let resultsArray = [];
//      for (let i = 0; i < arrayOfPokemonObjects.length; i++) {
//             if(arrayOfPokemonObjects[i].name.charAt(0) === pokemonToFind) {
//             resultsArray.push(arrayOfPokemonObjects[i]);
//             }
//      }
//      pokemonList(resultsArray);
// }
// console.log(searchPokemon(array, pokemonToBeFound));


//document.getElementById("orderAZ").addEventListener("click", function alphabeticalOrderA(){


     // (pokemon => pokemon.type.includes(x));
     // console.log(filterType);


//ESTO ES LO QUE IMPRIME EN LA CONSOLA!!!
//   function filterLetter(){
//      let array = data.pokemon;
//      let text = document.getElementById("search_box").value.toLowerCase();
//      console.log(text);
//      let list = [];
//      console.log(list); 
     
//      for (let i = 0; i < array.length; i++){
//           let name = array.name;
//           console.log(name);
//           if (array[i].name.indexOf(text) !== -1){
//               list.push(array[i]);
//           }
//      }
//      return list;
// }
// //document.getElementById("pokemon_list").innerHTML = pokemonList(list);
// document.getElementById("search_box").addEventListener("keyup", filterLetter);
// // document.getElementById("pokemon_list").innerHTML = pokemonList(filterLetter);
// // document.getElementById("search_box").addEventListener("change", searchType);
// // document.getElementById("pokemon_list").innerHTML += pokemonList(filterLetter);

// 
// }
// ;

     //     else (name.indexOf(text) == -1){
     //          alert("Pokemon not found");
     //     }


     // array.filter(pokemon => pokemon.type.includes(x));
     // console.log(filterType);


     // document.getElementById("orderAZ").addEventListener("click", function alphabeticalOrderA(){
     //      let array = filterType;
     //      let filterOrderA = array.sort((a, b) => {
     //           return a.name > b.name ? 1 : -1 ;
     //      });
     //      console.log(filterOrderA);
     //      document.getElementById("pokemon_list").innerHTML = pokemonList(filterOrderA);
     // });


     // //document.getElementById("orderAZ").addEventListener("click", function(){
     //      document.getElementById("pokemon_list").innerHTML = "";
     // });

     // document.getElementById("orderZA").addEventListener("click", function(){
     //      document.getElementById("pokemon_list").innerHTML = "";
     // });


     // document.getElementById("orderZA").addEventListener("click", function alphabeticalOrderA(){
     //      let array = filterType;
     //      let filterOrderZ = array.sort((a, b) => {
     //           return a.name < b.name ? 1 : -1 ;
     //      });
     //      console.log(filterOrderZ);
     //      document.getElementById("pokemon_list").innerHTML = pokemonList(filterOrderZ);
// };


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