<script setup>
import AppHeaderGame from '@/components/AppHeaderGame.vue'
import AppHeaderLobby from '@/components/AppHeaderLobby.vue'
import StartButton from '@/components/StartButton.vue';
import SaveButton from '@/components/SaveButton.vue';
</script>

<template>
  <div class="container">
    <header class="header-area">
      
      <AppHeaderLobby />
      
      
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
    // TODO: Navigation vers le premier chapitre (celui avec l'ID 1)
      // Notes de cours: https://tim-montmorency.com/compendium/582-511-web5/vue/router-and-views.html#32-navigation-programmatique-dans-les-methodes 
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
}


.home {
  background-color: #6b0f1a;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 100px;
  margin-bottom: 80px;
  font-family: "Cinzel Decorative", serif;
  color: white;
}
</style>