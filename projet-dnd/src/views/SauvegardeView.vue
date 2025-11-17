<script setup>
import SaveButton from '@/components/SaveButton.vue';
</script>

<template>
    <div class="home">
        <div class="title"></div>
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


.buttons {
    margin-top: 15px;
    display: grid;
    justify-content: center;
    gap: 15px;
    
}

</style>