export interface PokemonApiResponse {
    count: number
    next: string | null
    previous: string | null
    results: PokemonReference[]
}

export interface PokemonReference {
    name: string
    url: string
}

export interface Pokemon {
    name: string
    id: number
}