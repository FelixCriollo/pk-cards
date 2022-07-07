import { useState, useEffect } from "react"
import { getPokemonData } from "../api/obtenerPokemon"

export const useGetPokemon = () => {
  const [pokemon, setPokemon] = useState({})

  const getPokemon = async (id = 1) => {
    const data = await getPokemonData(id)
    setPokemon(data)
  }

  useEffect(() => {
    getPokemon()
  }, [])

  return [pokemon, getPokemon]
}