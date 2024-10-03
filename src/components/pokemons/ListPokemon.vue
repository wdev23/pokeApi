<template>
    <div class="search_pokemon">
        <input type="search" id="searchPokemon" placeholder="Search pokemon..." v-model="searchPokemon"
            class="search_input">
    </div>
    <div class="lp_container">
        <ul class="pokemon_list">
            <li v-for="(pokemon, index) in pokemonsFiltered" :key="pokemon.name" class="pokemon_item">
                <PokemonCard :pokemon="pokemon" :pokemonImage="`${pokemonImage}${getOriginalIndex(pokemon)}.svg`" />
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { type Pokemons } from '@/types/pokemon'
import { fetchPokemon } from '@/services/pokemonService'
import { onMounted, ref, computed } from 'vue'
import PokemonCard from './PokemonCard.vue'

const pokemonImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';

const pokemons = ref<Pokemons>({
    count: 0,
    next: 'next',
    previous: 'previous',
    results: [],
})

const searchPokemon = ref('');

onMounted(async () => {
    const pokemonsList = await fetchPokemon();
    pokemons.value = pokemonsList;
})

const pokemonsFiltered = computed(() => {
    if (pokemons.value && searchPokemon.value) {
        return pokemons.value.results.filter(pokemon =>
            pokemon.name.toLowerCase().includes(searchPokemon.value.toLowerCase())
        )
    }
    return pokemons.value.results;
})

// Helper method to find the original index of a filtered Pokémon
const getOriginalIndex = (pokemon) => {
    return pokemons.value.results.findIndex(originalPokemon => originalPokemon.name === pokemon.name) + 1;
}
</script>

<style scoped>
.search_pokemon {
    display: flex;
    justify-content: center;
    margin: 2rem auto;
}

.search_input {
    padding: 0.75rem 1rem;
    width: 100%;
    max-width: 400px;
    border: 2px solid #e5e7eb;
    /* Light gray border */
    border-radius: 8px;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    font-size: 1rem;
    outline: none;
}

.search_input:focus {
    border-color: #3b82f6;
    /* Light blue border on focus */
    box-shadow: 0 0 8px rgba(59, 130, 246, 0.4);
    /* Light blue shadow on focus */
}

.search_input::placeholder {
    color: #9ca3af;
    /* Light gray color for the placeholder text */
    font-style: italic;
}

.lp_container {
    padding: 2rem;
    display: flex;
    justify-content: center;
}

.pokemon_list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    width: 100%;
    max-width: 1200px;
}

.pokemon_item {
    display: flex;
    justify-content: center;
}

@media screen and (max-width: 768px) {
    .pokemon_list {
        grid-template-columns: repeat(2, minmax(200px, 1fr));
    }
}

@media screen and (max-width: 580px) {
    .pokemon_list {
        grid-template-columns: repeat(1, minmax(200px, 1fr));
    }
}
</style>
