<script setup>

import AppHeaderGame from '@/components/AppHeaderGame.vue'

</script>



<template>
<div class="title">
    <div class="game-manager">
        <app-header-game></app-header-game>
    </div>
    <div class="chapter-header">
            <h2>{{ currentChapter.title }}</h2>
        
        </div>
</div>

    <div class="chapter">
        <div class="chapter-content">
            <p>{{ currentChapter.text }}</p>
        </div>
        

        <div class="choices">
            <h3>Que fais-tu ?</h3>
            <div class="choices-content">
                <button v-for="choice in currentChapter.choices" :key="choice.id"
                    @click="makeChoice(choice)" class="choice-button">
                    {{ choice.text }}
                </button>
            </div>
        </div>

        <button @click="goBack" class="back-button">
            ← Retour à l'accueil
        </button>
    </div>

    <div class="stickman">
            <img src="../assets/img/stickman.png"></img>
        </div>

</template>

<script>


import { mapStores } from 'pinia'
import { useStoryStore } from '../stores/story'
import { usePlayerStore } from '../stores/player'

export default {
    name: 'ChapterView',

    data() {
        return {
            chapterId: null,

          
           
        };
    },

    computed: {
        ...mapStores(useStoryStore),
        ...mapStores(usePlayerStore),

        currentChapter() {
            // Retourne le chapitre actuel ou un chapitre par défaut
            return this.storyStore.storyData[this.chapterId] || {
                title: 'Chapitre introuvable',
                text: 'Ce chapitre n\'existe pas encore.',
                choices: []
            };
        }
    },

    created() {
        // TODO: Récupérer le paramètre dynamique ID du chapitre depuis l'URL
        // Note de cours: https://tim-montmorency.com/compendium/582-511-web5/vue/router-and-views.html#41-routes-avec-parametres-dynamiques
        this.chapterId = this.$route.params.id;
    },

    methods: {
        makeChoice(choice) {
       
            // Ici envoyer au store Pinia player l'historique du choix et l'item d'inventaire du choix (si applicable)
           
           //  Naviguer vers le prochain chapitre
        if (choice.nextChapter === '1') {
            this.storyStore.resetChapters()
        } else {
            this.storyStore.choose(choice)
        }
            this.$router.push({ 
                name: 'chapter', 
                params: { id: String(choice.nextChapter) } });


            // TODO: Mettre à jour l'ID local du chapitre
            this.chapterId = String(choice.nextChapter)


        },

        goBack() {
            this.$router.push({ name: 'accueil' });
        }
    }
};
</script>

<style>
body {
    background-color: #960002;
}
</style>

<style scoped>

.title {
    background-image: url('../assets/img/chapterTitles.svg');
    width: 100%;
    height: 50vh;
    background-size: cover;
    background-position: center;
    overflow-x: hidden;
    overflow-y: hidden;
}

.stickman {
    position: absolute;
    right: 0;
    width: auto;
    bottom: 0;
}

.chapter {
    max-width: 1000px;
    margin: 0.1rem auto;
    padding: 2rem;
}

.chapter-header {
    text-align: center;
    margin-top: 8rem;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    rotate: 8deg;
    font-size: 60px;
}

.chapter-header h2 {
    color: black;
    margin-bottom: 0.5rem;
}

.chapter-number {
    color: bal;
    font-style: italic;
}

.chapter-content {
    background-color: white;
    padding: 1.5rem;
    border-radius: 8px;
    margin-bottom: 2rem;
    line-height: 1.6;
    font-size: 1.4rem;
    color: black;
    box-shadow: 0 0 20px rgb(255, 255, 255);
}

.choices {
    margin-bottom: 2rem;
}

.choices h3 {
    color: white;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    margin-top: 4rem;
}

.choice-button {
    display: block;
    width: 100%;
    background: #960002;
    color: white;
    padding: 1rem;
    margin-bottom: 0.75rem;
    border: none;
    border-radius: 8px;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s;
    text-align: left;
}

.choice-button:hover {
    background: white;
    border: 3px solid #960002;
    color: black;
    transform: scale(1.05);
    cursor: url('/src/assets/cur/PrecisionSelect.cur'), auto;
}

.choices-content {
    background: white;
    padding: 3%;
    border-radius: 8px;
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
</style>