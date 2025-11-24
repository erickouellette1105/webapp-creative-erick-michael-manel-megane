<script setup>
import AppHeaderGame from '@/components/AppHeaderGame.vue'
import AppHeaderLobby from '@/components/AppHeaderLobby.vue'
import StartButton from '@/components/StartButton.vue';
import SaveButton from '@/components/SaveButton.vue';
import AppCredit from '@/components/AppCredit.vue';
import MoveCur from '@/assets/cur/NormalSelect.cur'
</script>

<template>
  <div class="container">
    <header class="header-area">
      
      <AppHeaderLobby />
      <AppCredit />
      
    </header>
    <div class="home">
      <h1 class="title"> Aventure de Stickman</h1>
      <StartButton />
    </div>
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


.home {
  background-color: #6b0f1a;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 100px;
  font-family: "Cinzel Decorative", serif;
  color: white;
  margin-top: 300px;
}

@media (max-width: 1000px) {
  .title {
  font-size: 50px;
margin-top: 300px;
}

}


</style>

