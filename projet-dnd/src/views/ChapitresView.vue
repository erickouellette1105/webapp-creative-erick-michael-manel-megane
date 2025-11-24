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
                    @click="makeChoice(choice.nextChapter)" class="choice-button">
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

export default {
    name: 'ChapterView',

    data() {
        return {
            chapterId: null,

            // Données temporaires placées ici pour tester pour l'exercice mais ultimement vos données de chapitre seront dans un json
            chapters: {
                '1': {
                    title: 'Chapitre 1',
                    text: 'Dans un charmant village, deux frères forgerons commencent leur journée de travail. Jean-Pierre le premier frère va chercher des minéraux à la mine car il n’y en a plus à la forge. Mais après une heure, Jean-Pierre n’est toujours pas revenu. Et c’est à ce moment qu’un villageois informe le deuxième frère John que son frère s’est fait kidnapper par le maléfique Velkram. John prépare son sac à dos et prend son courage à deux mains pour aller sauver son frère du nécromancien. ',
                    choices: [
                        { id: 1, text: 'Continuer', nextChapter: '2' },

                    ]
                },
                '2': {
                    title: 'Chapitre 2',
                    text: 'John arrive aux portes du manoir de Velkram. Il entre le domaine maléfique et est immédiatement confronté à deux couloirs opposés menaçants. ',
                    choices: [
                        { id: 1, text: 'Couloir droit', nextChapter: '3' },
                        { id: 2, text: 'Couloir gauche', nextChapter: '4' }
                    ]
                },
                '3': {
                    title: 'Chapitre 3a',
                    text: 'Vous arrivez dans un repaire de goblins. Cependant ils ont tous endormis. Que faites-vous? ',
                    choices: [
                        { id: 1, text: ' Battre les goblins avec votre force non subtile ', nextChapter: '5' },
                        { id: 2, text: 'Voler les armes des goblins pour vous enforcer ', nextChapter: '6' },
                        { id: 3, text: 'Passer discrètement les goblins ', nextChapter: '7' }
                    ]
                },
                '4': {
                    title: 'Chapitre 3b',
                    text: 'Vous arrivez à une salle de coffres. Ceci est la chance parfaite d’acquérir de l’équipement de survie mais quelque chose semble ne tourner pas rond. Que faites-vous? ',
                    choices: [
                        { id: 1, text: ' Ouvrir un coffre', nextChapter: '8' },
                        { id: 1, text: 'Éviter les coffres et aller à la salle prochaine', nextChapter: '7' }
                    ]
                },
                '5': {
                    title: 'Chapitre 4a',
                    text: 'Vous attaquez les goblins mais votre tactique est maladroite et pathétique. Un sorcier goblin prend pitié de votre pitoyable incompétence et vous téléporte pour vous sauver. ',
                    choices: [
                        { id: 1, text: 'Téléporter', nextChapter: '9' }
                    ]
                },
                '6': {
                    title: 'Chapitre 4b',
                    text: 'Vous volez l’épée suprême du maître goblin mais ceci le réveille. Tout à coup, une horde de goblins apparait et vous encerclent. Avec votre nouvelle arme, utiliser l’attaque spéciale : Tornade maléfique. ',
                    choices: [
                        { id: 1, text: 'Continuer', nextChapter: '10' }
                    ]
                },
                '7': {
                    title: 'Chapitre 4c',
                    text: 'Vous trouvez une bibliothèque secrète contenant trois grimoires d’attributs légendaires. Vous pouvez choisir un des trois pour recevoir un pouvoir spécial. ',
                    choices: [
                        { id: 1, text: 'Continuer', nextChapter: '11' }
                    ]
                },
                '8': {
                    title: 'Chapitre 4d',
                    text: 'Vous ouvrez le coffre et surprise : le coffre vous mort le bras. Défendez-vous! ',
                    choices: [
                        { id: 1, text: 'Continuer', nextChapter: '11' }
                    ]
                },
                '9': {
                    title: 'Chapitre 5a',

                    text: 'Grâce à la pitié du sorcier goblin, vous êtes transporté à la salle d’armes des chef militaires de Velkram. Choisit une armure et une arme pour vous préparer au combat. ',
                    choices: [
                        { id: 1, text: 'Continuer', nextChapter: '11' }
                    ]
                },
                '10': {
                    title: 'Chapitre 5b',
                    text: 'Puisque vous êtes faible, vous prenez énormément de temps pour battre les goblins. Après avoir fini, vous arrivez dans l’antre de Velkram, mais votre frère n’est plus. Velkram l’utlisait pour ramener un ancien démon à la vie. ',
                    choices: [
                        { id: 1, text: 'Continuer', nextChapter: '11' }
                    ]
                },
                '11': {
                    title: 'Chapitre 5c',
                    text: 'L’heure est venue de vaincre le maléfique Velkram. Utilisez vos armes ou vos sortilèges pour prévenir la résurrection du démon antique. ',
                    choices: [
                        { id: 1, text: 'Choix 1', nextChapter: '14' },
                        { id: 2, text: 'Choix 2', nextChapter: '14' },
                        { id: 3, text: 'Choix 3', nextChapter: '13' }
                    ]
                },
                '12': {
                    title: 'Chapitre 5d',
                    text: 'La mimique était plus fort que vous et vous a mangé.  ',
                    choices: [
                        { id: 1, text: 'Recommencer', nextChapter: '1' }
                    ]
                },
                '13': {
                    title: 'Mauvaise fin',
                    text: 'Malgré vos meilleurs efforts, le plan du nécromancien a marché et vous devez affronter le démon.',
                    choices: [
                        { id: 1, text: 'Recommencer', nextChapter: '1' }
                    ]
                },
                '14': {
                    title: 'Bonne fin',
                    text: 'Vous avez vaincu le sorcier ultime et vous êtes maintenant une légende digne de votre nom. ',
                    choices: [
                        { id: 1, text: 'Recommencer', nextChapter: '1' }
                    ]
                }
            }
        };
    },

    computed: {
        ...mapStores(useStoryStore),

        currentChapter() {
            // Retourne le chapitre actuel ou un chapitre par défaut

            // this.storyStore.storyData[this.chapterId]
            return this.chapters[this.chapterId] || {
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
        makeChoice(nextChapterId) {
            // TODO: Naviguer vers le prochain chapitre
            // Note de cours: https://tim-montmorency.com/compendium/582-511-web5/vue/router-and-views.html#32-navigation-programmatique-dans-les-methodes
            // Navigation par nom
            this.$router.push({
                name: 'chapter',
                params: { id: nextChapterId }
            });


            // TODO: Mettre à jour l'ID local du chapitre
            this.chapterId = nextChapterId;

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
    font-size: 30px;
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
}
</style>