import { filterData, sortDataAZ, sortDataZA, search } from '../src/data.js';

describe('filterData', () => {
  const pokemon = [{"name": "charmander", "type": ["fire"]}];
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

   it('returns `charmander when you select type fire`', () => {
     expect(filterData(pokemon, "fire")).toEqual([{"name": "charmander", "type": ["fire"]}]);
   });
});

 describe('sortDataAZ', () => {
   const pokemon = [{"name": "metapod", "type": ["bug"]}, {"name": "ditto", "type": ["normal"]}, {"name": "voltorb", "type": ["electric"]}];
   it('is a function', () => {
     expect(typeof sortDataAZ).toBe('function');
   });

  it('returns `Pokémon in alphabetical order A to Z`', () => {
   expect(sortDataAZ(pokemon)).toEqual([{"name": "ditto", "type": ["normal"]}, {"name": "metapod", "type": ["bug"]}, {"name": "voltorb", "type": ["electric"]}]);
  });
 });

describe('sortDataZA', () => {
  const pokemon = [{"name": "metapod", "type": ["bug"]}, {"name": "ditto", "type": ["normal"]}, {"name": "voltorb", "type": ["electric"]}];
  it('is a function', () => {
    expect(typeof sortDataZA).toBe('function');
  });

  it('returns `Pokémon in alphabetical order Z to A`', () => {
    expect(sortDataZA(pokemon)).toEqual([{"name": "voltorb", "type": ["electric"]}, {"name": "metapod", "type": ["bug"]}, {"name": "ditto", "type": ["normal"]}]);
  });
});

describe('search', () => {
  const pokemon = [{"name": "pikachu"}, {"name": "lapras"}, {"name": "dewgong"}, {"name": "togepi"}]
  it('is a function', () => {
    expect(typeof search).toBe('function');
  });

  it('returns `pikachu and togepi when searching pi`', () => {
    expect(search(pokemon, "pi")).toEqual([{"name": "pikachu"}, {"name": "togepi"}]);
  });
});