export interface PokemonApiResponse {
  results: PokemonReference[]
}

export interface PokemonReference {
  name: string
  url: string
}

export interface Pokemon {
  id: number
  name: string
  stats: [
    {
      base_stat: number,
      effort: number,
      stat: {
        name: string,
        url: string
      }
    }
  ]
}
