<template>
    <header>
        <img class="audio" src="../assets/img/audio_icon.png" alt="audio"></img>

        <!-- Bouton toggle de l'inventaire-->
        <button @click="toggleInventory" class="btn-toggle">
            <img src="../assets/coffre.png" alt="coffre" class="coffre-img">
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
                    <li v-for="item in items" :key="item.id" class="items">
                        {{ item.name }}
                    </li>
                </ul>

                <div class="image-container-text">
                    <img src="../assets/img/text-banner-inventory.png" alt="texte-banniere" class="texte-banner">
                    <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id luctus odio.
                        Curabitur vitae facilisis augue, ut convallis metus. Mauris convallis eros et lacus viverra
                        facilisis. Nam sit amet turpis ex. Pellentesque habitant morbi tristique senectus et netus et
                        malesuada fames ac turpis egestas. Ut leo urna, dapibus a pharetra sed, tempor id dui. Nullam
                        pharetra velit id mi lacinia, nec congue nisl vestibulum. Suspendisse magna sapien, eleifend in
                        facilisis id, sagittis eget massa. Aliquam erat volutpat. </p>
                </div>

                <img src="../assets/img/stickman.png" alt="stickman" class="stickman">

            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
            items: [
                { id: 1, name: "placeholder", img: "" },
                { id: 2, name: "placeholder", img: "" },
                { id: 3, name: "placeholder", img: "" },
            ]
        }
    },
    methods: {
        /* Méthode pour ouvrir l'inventaire */
        toggleInventory() {
            this.isOpen = !this.isOpen;
        }
    }
}
</script>

<style scoped>
.audio {
    width: 3vw;
    position: absolute;
    top: 30px;
    left: 30px;
    transition: transform 0.2s;
}

.audio:hover {
    transform: scale(1.1);
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
}

.coffre-img:hover {
    transform: scale(1.1);
}


.inventory-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
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
}

.image-container {
    position: relative;
    display: inline-block;
}

.titre-banner {
    width: 50vw;
}

.texte-banner {
    width: 50vw;
}

.text {
    position: absolute;
    top: 20px;
    left: 30px;
}

.image-container-title {
    position: fixed;
    top: 120px;
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
    font-size: 50px;
}

ul {
    list-style-type: none;
    
}

.items {
  margin: 1.5vw -2.5vw;
  background-color: #333138;
  border: 5px solid #EB5E28;
  color: white;
  width: 50vw;
  height: 6vh;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.stickman {
    position: absolute;
    width: 15vw;
    right: 20vw;
    bottom: 0;
}
</style>