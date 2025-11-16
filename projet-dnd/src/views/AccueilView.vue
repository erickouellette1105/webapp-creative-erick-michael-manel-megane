<script setup>
import AppHeaderGame from '@/components/AppHeaderGame.vue'
import AppHeaderLobby from '@/components/AppHeaderLobby.vue'
import BaseButton from '@/components/BaseButton.vue';
</script>

<template>
  <div class="container">
    <header class="header-area">
      <AppHeaderLobby />
      <AppHeaderGame /> <!-- a effacer plus tard -->
    </header>
    <div class="home">
      <h1 class="title"> Aventure de Stickman</h1>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #6b0f1a;
}


.home {
  background-color: #6b0f1a;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 50px;
  margin-bottom: 80px;
  font-family: "Cinzel Decorative", serif;
}
</style>