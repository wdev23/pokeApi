<template>
  <div class="home_container">
    <header class="header">
      <h1>Pokemon List</h1>
    </header>

    <main class="main_content">
      <ListPokemon />
    </main>

    <footer class="footer">
      <p>Footer</p>
    </footer>
  </div><!-- home_container -->
</template>

<script lang="ts" setup>
import ListPokemon from '@/components/pokemons/ListPokemon.vue'
</script>

<style scoped>
.home_container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto; /* Three rows: header, main, footer */
  grid-template-areas: 
    "header"
    "main"
    "footer";
  height: 100vh; /* Full viewport height */
}

.header {
  grid-area: header;
  height: 20vh;
  background-color: lightgreen;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header h1 {
  color: #ffffff;
  font-weight: 700;
  font-size: 3rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}

.main_content {
  grid-area: main;
  padding: 2rem;
}

.footer {
  grid-area: footer;
  height: 16vh;
  background-color: rgb(167, 238, 167);
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer p {
  font-size: 1.8rem;
  font-weight: 500;
}
</style>
