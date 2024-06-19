const pokemons = [
  { name: "Pikachu", type: "Elétrico", level: 25 },
  { name: "Charizard", type: "Fogo", level: 50 },
  { name: "Bulbasaur", type: "Planta", level: 10 },
  { name: "Gyarados", type: "Água", level: 40 },
  { name: "Alakazam", type: "Psíquico", level: 35 },
  { name: "Snorlax", type: "Normal", level: 50 },
  { name: "Mewtwo", type: "Psíquico", level: 70 },
  { name: "Dragonite", type: "Dragão", level: 55 },
  { name: "Mew", type: "Psíquico", level: 30 },
  { name: "Articuno", type: "Gelo", level: 60 },
  { name: "Zapdos", type: "Elétrico", level: 60 },
  { name: "Moltres", type: "Fogo", level: 60 },
  { name: "Gengar", type: "Fantasma", level: 45 },
  { name: "Machamp", type: "Lutador", level: 50 },
  { name: "Lapras", type: "Água", level: 35 },
  { name: "Venusaur", type: "Planta", level: 45 },
  { name: "Blastoise", type: "Água", level: 55 },
  { name: "Golem", type: "Pedra", level: 40 },
  { name: "Arcanine", type: "Fogo", level: 55 },
  { name: "Jolteon", type: "Elétrico", level: 40 },
];

// 1. using the filter and object destructuring method, create a filterStrongPokemons function that returns a new array containing only Pokémon with a level greater than 30
const filterStrongPokemons = (pokemonArray) =>
  pokemonArray.filter(({ level }) => level > 30);

// 2. using the filter and map methods chained together, create a getStrongPokemonNames function that returns a new array containing only the names of Pokémon with a level greater than 50
const getStrongPokemonNames = (pokemonArray) =>
  pokemonArray.filter(({ level }) => level > 50).map(({ name }) => name);

// 3. use the sort method to sort the array of Pokémon in ascending order based on each Pokémon's level
pokemons.sort((a, b) => a.level - b.level);

// 4. using the sort and default destructuring method, create a function called sortPokemons that returns the array of Pokémon sorted by level in descending order; if two Pokémon have the same level, they must be sorted by name in ascending alphabetical order
const sortPokemons = (pokemonArray) =>
  pokemonArray.sort((a, b) => {
    if (a.level === b.level) return a.name.localeCompare(b.name);
    return b.level - a.level;
  });
