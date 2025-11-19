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
                <h2>Inventaire</h2>

                <ul>
                    <li v-for="item in items" :key="item.id">
                        {{ item.name }}
                    </li>
                </ul>
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
                { id: 1, name: "placeholder", img: "" },
                { id: 1, name: "placeholder", img: "" },
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
    width: 5vw;
}

.audio:hover {
    width: 7vw;
}

.btn-toggle {
    position: absolute;
    right: 50px;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    z-index: 2000;
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
}

.inventory-content {
    color: black;
    display: grid;
    justify-content: center;
    align-items: center;
 
}

ul {
       list-style-type: none;
}

h2 {
    font-size: 7rem;
}
</style>