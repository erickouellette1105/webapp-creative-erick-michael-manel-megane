<template>

    <button @click="startBtn" class="saveButton">Commencer</button>

</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        startBtn() {
            this.$router.push({
                name: 'sauvegardes',
                
            })
        }
    }
}
</script>

<style scoped>
    .saveButton {
        width: 10vw;
        height: 7vh;
        font-size: 30px;
        color: white;
        background-color: #960002;
        border: 5px solid #FF4649;
        border-radius: 20px;
        margin-bottom: 50vw;
    }

    .saveButton:hover{
        transform: scale(1.1);
    }
</style>