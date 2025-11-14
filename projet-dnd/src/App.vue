<script setup>
import AppHeaderGame from './components/AppHeaderGame.vue';
import Inventory from './components/Inventory.vue';
import AppHeaderLobby from './components/AppHeaderLobby.vue';


//import HelloWorld from './components/HelloWorld.vue'
//import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <AppHeaderLobby></AppHeaderLobby>
    <AppHeaderGame></AppHeaderGame>
  </header>

  <main>
    <Inventory></Inventory>
  </main>
</template>

<style scoped>


@media (min-width: 1024px) {

}
</style>
