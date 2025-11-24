<script setup>
import AppHeaderGame from '@/components/AppHeaderGame.vue'
import AppHeaderLobby from '@/components/AppHeaderLobby.vue'
import StartButton from '@/components/StartButton.vue';
import SaveButton from '@/components/SaveButton.vue';
import AppCredit from '@/components/AppCredit.vue';
</script>

<template>

  <div class="home">

    <h1 class="title"> L'Aventure de Stickman</h1>
    <StartButton />

  </div>
  <div class="container">
    <header class="header-area">

      <AppHeaderLobby />
      <AppCredit />

    </header>

    <link href="https://fonts.googleapis.com/css?family=Roboto:100" rel="stylesheet">
    <div class='light x1'></div>
    <div class='light x2'></div>
    <div class='light x3'></div>
    <div class='light x4'></div>
    <div class='light x5'></div>
    <div class='light x6'></div>
    <div class='light x7'></div>
    <div class='light x8'></div>
    <div class='light x9'></div>


  </div>



</template>

<script>
export default {
  name: 'HomeView',
  //Navigation vers le premier chapitre (celui avec l'ID 1)
  methods: {
    startAdventure() {
      this.$router.push({
        name: 'chapter',
        params: { id: 1 }
      });
    }
  }
};</script>




<style scoped>



.container {
  background-color: #6b0f1a;
  height: 100vh;
  cursor: url('../assets/cur/NormalSelect.cur'), auto;
}


.title {
  font-size: 100px;
  font-family: "Cinzel Decorative", serif;
  color: white;
  margin-top: 300px;
  text-align: center;
}

@media (max-width: 1000px) {
  .title {
    font-size: 50px;
    margin-top: 300px;
  }
}




</style>

