<script setup>
import AppHeaderGame from './components/AppHeaderGame.vue';
import AppHeaderLobby from './components/AppHeaderLobby.vue';


</script>

<template>
  <main>

  
    
    <Inventory></Inventory>




    <router-link to="/"></router-link>    
    <router-link to="/chapitres/:id"></router-link>
    <router-view />
  </main>
</template>

<style scoped>


@media (min-width: 1024px) {

}
</style>
