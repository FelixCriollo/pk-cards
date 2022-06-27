const getPokemonData = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await response.json();
  return {
    name: pokemon.name,
    weight: pokemon.weight,
    height: pokemon.height,
    id: pokemon.id,
    abilities: [pokemon.abilities[0].ability.name, pokemon.abilities[1]?.ability.name],
    image: pokemon.sprites.other["official-artwork"].front_default,
    stats: {
      hp: pokemon.stats[0].base_stat,
      attack: pokemon.stats[1].base_stat,
      defense: pokemon.stats[2].base_stat,
      specialAttack: pokemon.stats[3].base_stat,
      specialDefense: pokemon.stats[4].base_stat,
      speed: pokemon.stats[5].base_stat
    },
    types: [pokemon.types[0].type.name, pokemon?.types[1]?.type.name],
  }
} 

export { getPokemonData }