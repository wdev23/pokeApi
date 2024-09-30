<template>
  <div class="pokemon_card">
    <div class="pokemon_image">
      <img :src="pokemonImage" :alt="pokemon.name + ' image'" />
    </div>
    <h4 class="pokemon_name">{{ pokemon.name }}</h4>
  </div>
</template>

<script lang="ts" setup>

// Define props that the component accepts
const props = defineProps<{
  pokemon: { name: string }
  pokemonImage: string;
}>()
</script>

<style scoped>
.pokemon_card {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  max-width: 300px;
  text-align: center;
  padding: 1rem;
  overflow: hidden;
}

.pokemon_card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.pokemon_image img {
  height: 150px;
  object-fit: cover;
  margin-bottom: 1rem;
}

.pokemon_name {
  font-size: 1.25rem;
  text-transform: capitalize;
  color: #333;
  font-weight: 600;
}

@media screen and (max-width: 768px) {
  .pokemon_image img {
    height: 120px;
  }

  .pokemon_card {
    padding: 0.8rem;
  }
}

@media screen and (max-width: 480px) {
  .pokemon_image img {
    height: 100px;
  }

  .pokemon_name {
    font-size: 1rem;
  }
}
</style>
