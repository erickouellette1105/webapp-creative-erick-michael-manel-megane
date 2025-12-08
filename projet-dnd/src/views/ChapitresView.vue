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
                <button v-for="choice in currentChapter.choices" :key="choice.id" @click="makeChoice(choice)"
                    class="choice-button">
                    {{ choice.text }}
                </button>
            </div>
        </div>

        <!-- AJOUT DE L'IMAGE DU CHAPITRE -->
        <div class="chapter-image" v-if="currentChapter.image">
            <img :src="currentChapter.image" alt="image du chapitre" loading="lazy">
        </div>

        <div class="back-stats">
            <button @click="goBack" class="back-button">
                ← Retour à l'accueil
            </button>

            <button v-if="['12', '13', '14', '15', '16', '17', '18', '19', '20'].includes(chapterId)" @click="stats"
                class="stats-button">
                Statistiques →
            </button>
        </div>
    </div>


    <div class="stickman">
        <img src="../assets/img/stickman.png" alt="stickman"></img>
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
            const chapitre = this.storyStore.storyData[this.chapterId]

            if (!chapitre) {
                return {
                    title: 'Chapitre introuvable',
                    text: 'Ce chapitre n’existe pas encore.',
                    choices: []
                }
            }

            // list des items
            const inventory = this.playerStore.inventory.map(i => i.name)

            // seul montre le choix qui a le requis
            const filteredChoices = chapitre.choices.filter(choice => {
                if (!choice.requires) return true
                return inventory.includes(choice.requires)
            })

            /*
            return this.storyStore.storyData[this.chapterId] || {
                title: 'Chapitre introuvable',
                text: 'Ce chapitre n\'existe pas encore.',
                choices: []
            */

            return {
                ...chapitre,
                choices: filteredChoices
            }
        }
    },

    created() {
        // TODO: Récupérer le paramètre dynamique ID du chapitre depuis l'URL
        // Note de cours: https://tim-montmorency.com/compendium/582-511-web5/vue/router-and-views.html#41-routes-avec-parametres-dynamiques
        this.chapterId = this.$route.params.id;
    },

    methods: {
        makeChoice(choice) {

            // 1️⃣ Record the choice in the history
            this.playerStore.recordChoice(
                this.chapterId,   // id du chapitre courant
                choice.text,      // texte du choix
                choice.inventory
            )

            // 2️⃣ Add the item to inventory if the choice grants one
            if (choice.inventory) {
                this.playerStore.addItem({
                    id: Date.now(), // unique id for this item
                    name: choice.inventory,
                    description: choice.description,
                    image: choice.image
                });
            }

            // 3️⃣ Navigate to the next chapter
            if (choice.nextChapter === '1') {
                this.storyStore.resetChapters()
            } else {
                this.storyStore.choose(choice)
            }

            this.$router.push({
                name: 'chapter',
                params: { id: String(choice.nextChapter) }
            });

            // Update local chapterId
            this.chapterId = String(choice.nextChapter)
        },
        goBack() {
            this.$router.push({ name: 'accueil' });
        },
        stats() {
            this.$router.push({ name: 'statistiques' });
        }
    }
};
</script>

<style scoped>
body {
    background-color: #960002;
    cursor: url('/src/assets/cur/NormalSelect.cur'), auto;

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

.stickman img {
    position: absolute;
    right: 0;
    width: 300px;
    bottom: 0;
    transition: width 0.4s ease;
    /*pour que l'image se rétressit fluidement*/
    z-index: 0;
}

.chapter {
    max-width: 1000px;
    margin: 0.1rem auto;
    padding: 2rem;
    z-index: 0;
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
    transition: font-size 0.4s ease;
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
    z-index: 1;
    position: relative;
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

.stats-button {
    background-color: #960002;
    font-size: 1.5rem;
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s;
}

.stats-button:hover {
    background: white;
    border: 3px solid #960002;
    color: black;
    transition: all 0.3s;
    transform: scale(1.05);
    cursor: url('/src/assets/cur/PrecisionSelect.cur'), auto;
}

.back-stats {
    display: grid;
    grid-template-columns: auto auto;
    gap: 150px;
}

/* Keep your image visible on large screens */
.chapter-image {
    position: absolute;
    left: clamp(20px, 1%, 180px);
    top: 70%;
    transform: translateY(-50%);
    z-index: 10;
    pointer-events: none;
}

.chapter-image img {
    width: clamp(200px, 15vw, 500px);
    height: auto;
}

/* Hide the image on medium and small screens */
@media (max-width: 1300px) {
    .chapter-image {
        display: none;
    }
}


/* Version médium */
@media (max-width: 1000px) {
    .chapter-header h2 {
        font-size: 50px;
    }

    .stickman img {
        width: 150px;
    }
}

/*Version mobile*/
@media (max-width: 768px) {
    .stickman img {
        width: 150px;
        top: 83%;
    }

    .chapter-header h2 {
        font-size: 40px;
    }


    .chapter-content {
        font-size: 1rem;
        margin-bottom: 50%;
    }

    .back-button {
        font-size: 1.1rem;
        width: 30vw;
    }

    .stats-button {
        font-size: 1.1rem;
        z-index: 2;
    }

    .back-stats {
        gap: 100px;
    }

}

@media screen and (max-width: 1920px) {}

@media screen and (max-width: 768px) {}


@media screen and (max-width: 375px) {}
</style>