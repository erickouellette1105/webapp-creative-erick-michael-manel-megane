<template>
    <header>
        <img class="audio" src="../assets/img/audio_icon.png" alt="audio"></img>
        <div class="inventory-wrapper">
        <button @click="isOpen = true" class="btn-open">
            <img src="../assets/coffre.png" alt="">
        </button>

        <!-- Inventaire -->
         <div v-if="isOpen" class="inventory-modal">
            <div class="inventory-content">
                <h2>Inventaire</h2>

                <ul>
                    <li v-for="item in items" :key="item.id">
                        {{ item.name }} - {{ item.img }}
                    </li>
                </ul>

                <button @click="isOpen = false" class="btn-close">
                    <img src="../assets/coffre.png" alt="">
                </button>
            </div>
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
                    { id: 1, name: "placeholder", img: ""},
                ]
            }
        },
        methods: {
    
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

    .btn-open {
        position: absolute;
        right: 50px;
    }
 
    .btn-close {
        position: absolute;
        right: 50px;
    }
 
    .inventory-modal {
        width: 100%;
        height: 100%;
        background-color: white;
    }
 
    </style>