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

                <p>Chapitre : {{ choice.chapterId }} </p>
                <p>Choix : {{ choice.text }} </p>
                <p v-if="choice.inventory">Inventaire : {{ choice.inventory }} </p>

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
    padding-top: 10px;
    font-size: clamp(32px, 9vw, 100px);
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
    margin: 1.5rem 1.5rem;
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
    list-style-type: none;
    display: grid;
    justify-content: center;
    grid-template-columns: auto auto auto auto auto auto auto;
    gap: 1vw;


}

li {
    color: white;
    border-radius: 10px;
    width: 10vw;
    height: auto;
    background-color: #960002;
    border: 5px solid #FF4649;
    padding-top: 10px;
    font-size: 25px;
}

@media screen and (max-width: 1920px) {
    .historique {
        background-color: #6b0f1a;
        height: auto;
        text-align: center;
    }

    ul {
        list-style-type: none;
        display: grid;
        justify-content: center;
        grid-template-columns: auto auto auto auto;
        gap: 2vw;


    }

    li {
        color: white;
        border-radius: 10px;
        width: 17vw;
        height: auto;
        background-color: #960002;
        border: 5px solid #FF4649;
        padding: 10px;
    }
}

@media screen and (max-width: 768px) {

    .historique {
        background-color: #6b0f1a;
        height: 120vh;
        text-align: center;
    }

    ul {
        list-style-type: none;
        display: grid;
        justify-content: center;
        grid-template-columns: auto auto auto;
    }

    li {
        color: white;
        border-radius: 10px;
        width: 27vw;
        height: auto;
        background-color: #960002;
        border: 5px solid #FF4649;
    }
}


@media screen and (max-width: 375px) {

    .historique {
        background-color: #6b0f1a;
        height: 150vh;
        text-align: center;
    }

    h2 {
    text-align: center;
    color: white;
    font-size: 3rem;
    padding-top: 10px;
    
}

    ul {
        list-style-type: none;
        display: grid;
        grid-template-columns: auto;
        gap: 3vw;
        justify-content: center;
        align-content: center;
        padding: 0;
        margin: 0 auto;
    }

    li {
        color: white;
        border-radius: 10px;
        width: 80vw;
        height: auto;
        background-color: #960002;
        border: 5px solid #FF4649;
        align-items: center;
        text-align: center;
        padding: 10px;
    }

}
</style>