// estas funciones son de ejemplo

export const filterData = (array, typePokemon) => {
    const filterType = array.filter(pokemon => {
      return pokemon.type.includes(typePokemon);
    });
    console.log(filterType)
    return filterType;
};

export const sortDataAZ = (array) => {
    const filterOrderAZ = array.sort((a, b) => {
      return a.name > b.name ? 1 : -1 ;
    });
     return filterOrderAZ;
};

export const sortDataZA = (array) => {
  const filterOrderZA = array.sort((a, b) => {
    return a.name < b.name ? 1 : -1 ;
  });
   return filterOrderZA;
};

export const search = (array, text)  => {
  const filterCharacter = array.filter((character) => {
    return character.name.includes(text);
  });
  return filterCharacter;
};
        

 //let filterOrderZ = array.sort((a, b) => {
     //      return a.name < b.name ? 1 : -1 ;
     // });

// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };
