<script setup>



</script>

<template>
  <main>
     
    <Inventory></Inventory>

    <router-link to="/"></router-link>    
    <router-link to="/chapitres/:id"></router-link>
    <router-link to="/statistiques"></router-link>
    <router-view />
  </main>
</template>

<style scoped>


@media (min-width: 1024px) {

}
</style>
