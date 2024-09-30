<template>
    <div class="lp_container">
        <ul class="pokemon_list">
            <li v-for="(pokemon, index) in pokemons.results" :key="index" class="pokemon_item">
                <PokemonCard :pokemon="pokemon" :pokemonImage="`${pokemonImage}${index + 1}.svg`" />
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { type Pokemons } from '@/types/pokemon'
import { fetchPokemon } from '@/services/pokemonService'
import { onMounted, ref } from 'vue'
import PokemonCard from './PokemonCard.vue'

const pokemonImage = ref<string>(
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'
);

const pokemons = ref<Pokemons>({
    count: 0,
    next: 'next',
    previous: 'previous',
    results: [],
});

onMounted(async () => {
    const pokemonsList = await fetchPokemon();
    pokemons.value = pokemonsList;
});
</script>

<style scoped>
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
    .pokemon_list  {
        grid-template-columns: repeat(2, minmax(200px, 1fr));
    }
}

@media screen and (max-width: 580px) {
    .pokemon_list  {
        grid-template-columns: repeat(1, minmax(200px, 1fr));
    }
}
</style>