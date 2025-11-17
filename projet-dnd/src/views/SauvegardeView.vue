<script setup>
import SaveButton from '@/components/SaveButton.vue';
</script>

<template>
    <div class="home">
        <div class="title"></div>

        <SaveButton />
        <SaveButton />
        <SaveButton />
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
html {
    
}

.home {
    background-color: #6b0f1a;

}

.title {
    background-image: url('../assets/img/Group 4.png');
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    overflow-x: hidden;
}
</style>