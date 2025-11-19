<script setup>
import SaveButton from '@/components/SaveButton.vue';
</script>

<template>
    <div class="home">
        <div class="title">
            <div class="save-header">
                <h2>Sauvegardes</h2>
            </div>
        </div>
        <div class="buttons">
        <SaveButton />
        <SaveButton />
        <SaveButton />
    </div>
    
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style scoped>


.home {
    background-color: #6b0f1a;
    height: 100vh;

}

.title {
    background-image: url('../assets/img/chapterTitles.svg');
    width: 100vw;
    height: 50vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    overflow-x: hidden;
}


.save-header {
    text-align: center;
    margin-top: 10rem;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    rotate: 9deg;
    font-size: 100px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%); 
    color: black;
}


@media (max-width: 768px) {
    .save-header {
        font-size: 70px;
        margin-top: 10rem;
    }
}


@media (max-width: 480px) {
    .save-header {
        font-size: 30px;
        margin-top: 10rem;
    }
}



.buttons {
    margin: 50px 50px;
    display: grid;
    justify-content: center;
    gap: 30px;
 
  
}




</style>