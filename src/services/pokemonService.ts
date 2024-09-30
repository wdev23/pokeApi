export const fetchPokemon = async () => {
    try {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=15"
        const response = await fetch(url)
        const json = await response.json()
        console.log(json)
        return json
    } catch (error) {
        console.log(`Error fetching pokemons ${error}`)
    }
}