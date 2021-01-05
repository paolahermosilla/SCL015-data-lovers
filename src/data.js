// estas funciones son de ejemplo

export const filterData = (array, typePokemon) => {
    const filterType = array.filter(pokemon => {
      return pokemon.type.includes(typePokemon);
    });
    return filterType;
};

export const sortData = () => {
    const filterOrderA = array.sort((a, b) => {
      return a.name > b.name ? 1 : -1 ;
    });

         // let filterOrderZ = array.sort((a, b) => {
     //      return a.name < b.name ? 1 : -1 ;
     // });    
};


// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };
