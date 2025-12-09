<script setup>
import AppHeaderGame from '@/components/AppHeaderGame.vue'
import AppHeaderLobby from '@/components/AppHeaderLobby.vue'
import StartButton from '@/components/StartButton.vue';
import SaveButton from '@/components/SaveButton.vue';
import AppCredit from '@/components/AppCredit.vue';
/*
import ClickCursor from '@/assets/cur/Click.cur'
*/
</script>

<template>

  <div class="home">

    <h1 class="title" alt="titre"> L'Aventure de Stickman</h1>
    <SaveButton class="savebutton" alt="savebutton"/>

  </div>
  <div class="container">
    <header class="header-area">

      <AppHeaderLobby />
      <AppCredit />

    </header>



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
.title {
  font-size: 8vw;
  color: white;
  margin-top: 200px;
  text-align: center;

}


button {
  position: absolute;
  color: white;
  width: 270px;
  height: 70px;
  font-size: 2rem;
  border-radius: 5px;
  top: 30vh;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  transition: .3s;
}

button:hover {
  cursor: pointer;
  transition: .3s;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);

}

button:focus {
  outline: 2px solid #4A90E2;
  outline-offset: 2px;
}


@media screen and (max-width: 1920px) {
  .title {
  font-size: 10vw;
  color: white;
  margin-top: 200px;
  text-align: center;
}

button {
  position: absolute;
  color: white;
  width: 270px;
  height: 70px;
  font-size: 2rem;
  border-radius: 5px;
  top: 60vh;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  transition: .3s;
}
}


@media screen and (max-width: 768px) {
  .title {
  font-size: 10vw;
  color: white;
  margin-top: 200px;
  text-align: center;
}
}


@media screen and (max-width: 375px) {
  button {
  position: absolute;
  color: white;
  width: 270px;
  height: 70px;
  font-size: 2rem;
  border-radius: 5px;
  top: 40vh;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  transition: .3s;
}
}
</style>