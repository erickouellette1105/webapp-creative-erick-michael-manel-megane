<template>
    <header>
        <!-- Bouton toggle de l'inventaire-->
        <button @click="toggleInventory" class="btn-toggle">
            <img src="../assets/img/coffre.png" alt="coffre" class="coffre-img">
        </button>

        <!-- Modale de l'inventaire-->
        <div v-if="isOpen" class="inventory-modal">

            <img class="audio audio-in-modal" src="../assets/img/audio_icon.png" alt="audio"></img>

            <div class="inventory-content">

                <div class="image-container-title">
                    <img src="../assets/img/title-banner-inventory.png" alt="titre-banniere" class="titre-banner">
                    <p class="text-titre">Inventaire</p>
                </div>
                <ul>
                    <li v-for="item in items" :key="item.id" @click="selectItem(item)" class="items">
    <img 
      v-if="item.image" 
      :src="item.image" 
      :alt="item.name" 
      class="inventory-item-img"
    />
    {{ item.name }}
  </li>
                </ul>

                <div class="image-container-text">
                    <img src="../assets/img/text-banner-inventory.png" alt="texte-banniere" class="texte-banner">
                    <p class="text" v-if="selectedItem"> {{ selectedItem.description }} </p>
                    <p class="text" v-else> Cliquez sur un objet pour voir sa description.</p>
                </div>

                <img src="../assets/img/stickman.png" alt="stickman" class="stickman">

            </div>
        </div>
        
    </header>
</template>

<script>    

import { mapStores } from 'pinia'
import { useStoryStore } from '../stores/story'
import { usePlayerStore } from '../stores/player'

export default {
    data() {
        return {
            isOpen: false,
            selectedItem: null,
        }
    },
    computed: {
        ...mapStores(useStoryStore),
        ...mapStores(usePlayerStore),

          items() {
        return this.playerStore.inventory
        }
    },
    methods: {
        /* Méthode pour ouvrir l'inventaire */
        toggleInventory() {
            this.isOpen = !this.isOpen;
        },

        /* selection de l'item dans l'inventaire */
        selectItem(item) {
            this.selectedItem = item;
        },
    }
}
</script>

<style scoped>

.inventory-item-img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    margin-left: 20px;
    border-radius: 4px;
}



.audio {
    position: absolute;
    top: 50px;
    left: 30px;
    transition: transform 0.2s;
    width: clamp(30px, 10vw, 80px);
}


.audio:hover {
    transform: scale(1.1);
    cursor: url('/src/assets/cur/PrecisionSelect.cur'), auto;
}

.btn-toggle {
    position: fixed;
    right: 50px;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    z-index: 2000;
    top: 50px;
    overflow-x: hidden;
    overflow-y: hidden;
}

.coffre-img {
    
    width: 60px;
    transition: transform 0.2s;
    width: clamp(30px, 10vw, 80px);
}

.coffre-img:hover {
    transform: scale(1.1);
    cursor: url('/src/assets/cur/PrecisionSelect.cur'), auto;
}


.inventory-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #6b0f1a;
    z-index: 999;
    overflow-x: hidden;
    overflow-y: hidden;
}

.inventory-content {
    color: black;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: clamp(32px, 9vw, 100px);
}

.image-container {
    position: relative;
    display: inline-block;
    
}

.titre-banner {
    width: 50vw;
    min-width: 400px;
    
}

.texte-banner {
    width: 50vw;
    min-width: 500px;
    
}

.text {
    position: absolute;
    top: 20px;
    left: 30px;
    font-size: clamp(12px, 3vw, 20px);
}


.image-container-title {
    position: fixed;
    top: 150px;
    left: -7px;
}

.image-container-text {
    position: fixed;
    bottom: -13px;
}

.text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    text-align: center;
    color: white;
    font-weight: bold;
}

.text-titre {
    position: absolute;
    top: 50%;
    left: 70%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: clamp(24px, 6vw, 50px);
}

ul {
    list-style-type: none;
    margin: -25px;
}

.items {
  margin: 1.5vw -2.5vw;
  background-color: #333138;
  border: 5px solid #EB5E28;
  color: white;
  width: 50vw;
  height: 6vh;
  border-radius: 0px 15px 15px 0px ;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  font-size: 18px;
}

.stickman {
    position: absolute;
    width: 15vw;
    right: 20vw;
    bottom: 0;
}

</style>