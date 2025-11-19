<template>

    <button @click="saveBtn" class="saveBtn">Nouvelle partie</button>

</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        /* Méthode pour aller au chapitre 1 */
        saveBtn() {
            this.$router.push({
                name: 'chapter',
                params: { id: 1 }
            })
        }
    }
}
</script>

<style scoped>
    .saveBtn {
        width: 25vw;
        height: 7vh;
        font-size: 2vw;
        color: white;
        background-color: #960002;
        border: 5px solid #FF4649;
        border-radius: 20px;
    }

    .saveBtn:hover{
        transform: scale(1.1);
    }
    @media (max-width: 300px) {
        .saveBtn {
        width: 25vw;
        height: 7vh;
        font-size: 2vw;
        color: white;
        background-color: #960002;
        border: 5px solid #FF4649;
        border-radius: 20px;
    }
}





</style>
