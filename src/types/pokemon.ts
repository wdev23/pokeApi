interface PokemonsResults {
    name: string,
    url: string
}

interface Pokemons {
    count: number,
    next: string,
    previous: string,
    results: PokemonsResults[]
}

export type { PokemonsResults, Pokemons }