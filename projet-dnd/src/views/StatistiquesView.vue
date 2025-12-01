<script setup>
import { usePlayerStore } from '@/stores/player';

const PlayerStore = usePlayerStore();
</script>

<template>
    <div class="historique">
        <h2>Historique de vos choix</h2>

        <!-- Message quand aucun choix-->
        <div v-if="PlayerStore.choiceHistory.length === 0">
            Aucun choix enregistré
        </div>
        <!-- Messages des données -->
        <ul v-else>
            <li v-for="(choice, index) in PlayerStore.choiceHistory" :key="index"> 
                <p>Chapitre : {{ choice.chapterId }} </p><br>
                <p>Choix : {{ choice.text }} </p><br>
                <p>Inventaire : {{ choice.inventory }} </p><br>
            </li>
        </ul>

        <button @click="goBack" class="back-button">
            ← Retour à l'accueil
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
         goBack() {
            this.$router.push({ name: 'accueil' });
        },
    }
}
</script>

<style scoped>


.historique {
    background-color: #6b0f1a;
    height: 100vh;
    text-align: center;

}

h2 {
    text-align: center;
    color: white;
    font-size: 7rem;
    padding-top: 50px;
}



.back-button {
    background-color: #960002;
    font-size: 1.5rem;
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s;
}

.back-button:hover {
    background: white;
    border: 3px solid #960002;
    color: black;
    transition: all 0.3s;
    transform: scale(1.05);
    cursor: url('/src/assets/cur/PrecisionSelect.cur'), auto;
}

ul {
    list-style-type: none
}

@media (max-width: 768px) {
  
}


@media (max-width: 480px) {
 
}







</style>